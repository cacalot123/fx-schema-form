
import React from "react";
import { compose, shouldUpdate, ComponentEnhancer, onlyUpdateForKeys } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";

import { BaseFactory } from "fx-schema-form-core";
import { createSelectorCreator, defaultMemoize, Selector, createSelector, OutputSelector } from "reselect";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models/index";

const fxSelectorCreator = createSelectorCreator(defaultMemoize, is);

/**
 * 下层组件添加一个condition属性
 * @param condition { Immutable.Map<string,any> } 解析出来的数据
 */
export interface ConditionHocOutProps {
    condition?: Immutable.Map<string, any>;
}
/**
 * condition的配置类
 */
export interface ConditionPath {
    /**
     * 数据的路径，可是是相对路径，也可以是绝对路径
     */
    path: string;
    /**
     * 数据的简单处理，（暂时没用到）
     */
    jsonata?: string;
}

export interface ConditionHocSettings {
    /**
     * 路径数组
     */
    paths?: ConditionPath[];
    /**
     * 需要用到condition的hoc
     * 包装在condition的后面
     */
    hoc?: ComponentEnhancer<any, any>;
}

export interface ConditionHocProps extends DefaultProps, UtilsHocOutProps {

}

/**
 * condition
 * 筛选出需要使用的字段，包装到condition这个prop中，传递到下层组件
 * 配置：
 *  paths：字段的路径以及数据处理规则，路径使用相对或者决定路径
 *  hoc：   下层的包装组件
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export default (hocFactory: BaseFactory<any>, settings: ConditionHocSettings = { paths: [] }) => {
    /**
    * 获取FormItemData的数据
    * @param state 当前的state树
    */
    const getFormItemData = (rootReducerKey: string[], parentKeys: string[], keys: string[]):
        (state: Immutable.Map<string, any>) => Selector<any, any> => {
        return (state: Immutable.Map<string, any>): any => {
            let dataKeys = [...rootReducerKey, ...parentKeys, "data", ...keys];
            let formItemData = state.getIn(dataKeys);

            if (formItemData !== undefined) {
                return Immutable.fromJS({
                    [[...keys].join("/")]: formItemData
                });
            }

            return "";
        };
    };

    return (Component: any): RC<ConditionHocOutProps, any> => {
        class ComponentHoc extends React.PureComponent<ConditionHocProps, any> {
            private ComponentWithHoc: new () => React.PureComponent = Component;
            private $condition: Immutable.Map<string, any> = Immutable.fromJS({});

            constructor(props: ConditionHocProps) {
                super(props);
                this.getConditionHocs();
            }

            /**
             * 获取当前配置的Component
             * 1. 获取当前需要监听的key
             * 2. 生成hoc
             * 3. 获取所有的监听数据做合并
             * 4. 返回
             */
            private getConditionHocs() {
                const { getPathKeys, uiSchema, getOptions, parentKeys } = this.props,
                    options = getOptions(this.props, "hoc", "condition"),
                    dataHocOptions = getOptions(this.props, "hoc", "data"),
                    { keys = [] } = uiSchema || {},
                    funcs: Selector<any, any>[] = [],
                    conditionOptions = Immutable.fromJS(settings || {}).merge(options).toJS(),
                    { paths, hoc } = conditionOptions;

                if (paths && paths.length && hoc) {
                    paths.forEach((path: ConditionPath) => {
                        let pathKeys: Array<string | number> = getPathKeys(keys as string[], path.path);

                        funcs.push(getFormItemData(dataHocOptions.rootReducerKey, parentKeys, pathKeys as string[]));
                    });
                }

                if (funcs.length) {
                    this.ComponentWithHoc = compose(connect(
                        // connect 数据
                        fxSelectorCreator.apply(fxSelectorCreator, [funcs, function () {
                            let formItemData = Array.prototype.splice.call(arguments, 0);

                            if (!formItemData || !formItemData.length) {
                                return {};
                            }
                            return {
                                condition: formItemData.reduce((prev: Immutable.Map<string, any>, next: Immutable.Map<string, any>) => {
                                    if (!next) {
                                        return prev;
                                    }
                                    return prev.merge(next);
                                }, Immutable.fromJS({}))
                            };
                        }])),
                        onlyUpdateForKeys(["condition"]),
                        // 需要接受condition参数的hoc
                        hoc,
                        // 去掉condition后传递到下一个hoc
                        hocFactory.get("resetKey")({
                            excludeKeys: ["condition"]
                        }))(Component);
                }
            }

            public render(): JSX.Element {
                const { getPathKeys, uiSchema } = this.props;
                const { keys = [] } = uiSchema || {};
                const ComponentWithHoc = this.ComponentWithHoc || Component;

                return <ComponentWithHoc {...this.props} />;
            }
        }

        return ComponentHoc as any;
    };
};
