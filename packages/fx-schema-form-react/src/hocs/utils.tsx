

import React, { PureComponent } from "react";
import { BaseFactory, MergeLib, FxJsonSchema, schemaKeysFactory, schemaFieldFactory } from "fx-schema-form-core";
import { compose, shouldUpdate, onlyUpdateForKeys } from "recompose";
import Immutable from "immutable";
import resolvePathname from "resolve-pathname";
import { DefaultProps } from "../components";
import { FxUiSchema, RC } from "../models/index";

// const resolvePathname = require("resolve-pathname");

export interface UtilsHocOutProps {
    getOptions: (props: DefaultProps, category: string, field: string, ...extraSettings: Immutable.Map<string, any>[])
        => { [key: string]: any };
    getTitle(props: DefaultProps, ...extraSettings: Immutable.Map<string, any>[]): () => string;
    getPathKeys: (keys: string[], path: string) => Array<string | number>;
    normalizeDataPath: (schemaId: string, dataPath: string) => Array<string | number>;
    getRequiredKeys: (props: DefaultProps, include: string[], exclude: string[]) => { [key: string]: any };
}

/**
 * 包装utils的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性
 * getOptions    获取参数
 * getTitle      获取当前uiSchema的title
 * getPathKeys   获取相对于当前keys的路径
 */
export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    return (Component: any): RC<DefaultProps, any> => {
        class ComponentHoc extends PureComponent<UtilsHocOutProps, any> {
            public render(): JSX.Element {
                return <Component
                    getTitle={this.getTitle}
                    getPathKeys={this.getPathKeys}
                    getOptions={this.getOptions}
                    normalizeDataPath={this.normalizeDataPath}
                    getRequiredKeys={this.getRequiredKeys}
                    {...this.props} />;
            }

            /**
             * 过滤props中的属性，只传递所需的属性
             * 从设置中，获取一部分的设置
             * @param props        当前component的props
             * @param includeKeys  需要保留的keys
             * @param excludeKeys  需要去掉的keys
             */
            private getRequiredKeys(props: { [key: string]: any }, includeKeys: string[] = [], excludeKeys: string[] = [])
                : { [key: string]: any } {
                let extraProps: { [key: string]: any } = {};


                if (includeKeys && includeKeys.constructor === Array && includeKeys.length) {
                    includeKeys.forEach((key: string) => {
                        if (props.hasOwnProperty(key)) {
                            extraProps[key] = props[key];
                        }
                    });
                } else {
                    extraProps = Object.assign({}, props);
                }

                if (excludeKeys && excludeKeys.constructor === Array && excludeKeys.length) {
                    excludeKeys.forEach((key: string) => {
                        if (extraProps.hasOwnProperty(key)) {
                            delete extraProps[key];
                        }
                    });
                }

                return extraProps;
            }

            /**
             * dataPath中的key格式化；
             * dataPath是一个字符串，需要把里面的数字转化一下
             * dataPath中可能有数组的格式，所以需要把数字转换成数字，而不是字符换
             * 遍历所有的key，发现是数字字符，则查找父级的schema，如果父级的type是array，则把当前key转换成数字
             * @param schemaId schemaId
             * @param dataPath 当前的数据路径字符串
             */
            private normalizeDataPath(schemaId: string, dataPath: string): Array<string | number> {
                let dataKeys: Array<string | number> = dataPath.replace(/^\//g, "").split("/");

                dataKeys = dataKeys.map((key: string | number, index: number) => {
                    if (Number.isInteger(+key)) {
                        let keys: Array<string | number> = dataKeys.slice(0, index);

                        keys.unshift(schemaId);

                        if (schemaKeysFactory.has(keys.join("/"))) {
                            let schema = schemaFieldFactory.get(schemaKeysFactory.get(keys.join("/")));

                            if (schema.type === "array") {
                                return +key;
                            }
                        }
                    }

                    return key;
                });

                return dataKeys;
            }

            /**
             * 获取参数
             * @param props         当前component的props
             * @param category      需要获取的种类，有template，field，hoc等
             * @param field         field的名称
             * @param extraSettings 其余的设置项
             */
            private getOptions(props: DefaultProps, category: string, field: string, ...extraSettings: Immutable.Map<string, any>[])
                : { [key: string]: any } {
                const { uiSchema = {}, globalOptions } = props;
                const { options } = uiSchema as FxUiSchema;
                let optionsArray: Immutable.Map<string, any>[] = [];

                if (globalOptions && globalOptions.hasIn([category, "default"])) {
                    optionsArray.push(globalOptions.getIn([category, "default"]));
                }

                if (globalOptions && globalOptions.hasIn([category, field])) {
                    optionsArray.push(globalOptions.getIn([category, field]));
                }

                if (options && options.hasIn([category, field])) {
                    optionsArray.push(options.getIn([category, field]));
                }

                optionsArray = optionsArray.concat(extraSettings);

                let opts = optionsArray.reverse().reduce((prev: Immutable.Map<string, any>, next: Immutable.Map<string, any>) => {
                    if (next) {
                        if (!Immutable.Map.isMap(next)) {
                            next = Immutable.fromJS(next);
                        }
                        return next.merge(prev);
                    }

                    return prev;
                }, Immutable.fromJS({})).toJS();

                return opts;
            }

            /**
             * 获取标题数据
             * title || key || index
             */
            private getTitle(props: DefaultProps, ...extraSettings: Immutable.Map<string, any>[]): string {
                const { uiSchema } = props;
                let { title, keys } = uiSchema as FxUiSchema;

                if (!title && extraSettings && extraSettings.length) {
                    extraSettings.forEach((sets: Immutable.Map<string, any>) => {
                        if (sets && !title && sets.get("title")) {
                            title = sets.get("title");
                        }
                    });
                }

                if (title !== undefined) {
                    return title;
                }

                if (keys && keys.length) {
                    let keysCopy = [...keys], keyTitle = keysCopy.pop();

                    return keyTitle !== undefined ? keyTitle.toString() : "";
                }

                if (props.arrayIndex) {
                    return props.arrayIndex.toString();
                }

                return "";
            }

            /**
             * 根据相对路径，得到keys
             * @param keys 当前的keys
             * @param path 路径
             */
            private getPathKeys(keys: Array<string>, path: string): Array<string> {
                let keysCopy = [""].concat(keys.concat([""]));
                let keysResolve: string[] = resolvePathname(path, keysCopy.join("/")).split("/");

                keysResolve.shift();

                if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
                    keysResolve.pop();
                }

                return keysResolve;
            }
        }

        return ComponentHoc as any;
    };
};
