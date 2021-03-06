import Immutable from "immutable";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import ajv from "ajv";
import React, { PureComponent } from "react";
import ajvErrors from "ajv-errors";

import { compose, shouldUpdate, onlyUpdateForKeys } from "recompose";
import { Button } from "antd";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import { ResolveLib } from "fx-schema-form-core";

import schemaFormReact from "fx-schema-form-react";
import { NoneTemp, AntdCardTemp, AntdFormItemTemp, DivTemp } from "./templates";
import { AntdCheckboxWidget, AntdInputWidget, AntdInputNumberWidget } from "./widgets";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { design, div, checkbox, style } from "./schemas";

schemaFormReact.defaultTheme.tempFactory.add("default", NoneTemp as any);
schemaFormReact.defaultTheme.tempFactory.add("card", AntdCardTemp as any);
schemaFormReact.defaultTheme.tempFactory.add("formitem", AntdFormItemTemp as any);
schemaFormReact.defaultTheme.tempFactory.add("div", DivTemp as any);

schemaFormReact.defaultTheme.widgetFactory.add("checkbox", AntdCheckboxWidget as any);
schemaFormReact.defaultTheme.widgetFactory.add("boolean", AntdCheckboxWidget as any);
schemaFormReact.defaultTheme.widgetFactory.add("default", AntdInputWidget as any);
schemaFormReact.defaultTheme.widgetFactory.add("number", AntdInputNumberWidget as any);

@(compose(
    shouldUpdate(() => false),
    schemaFormReact.hocFactory.get("validate")(),
    schemaFormReact.hocFactory.get("array")(),
    schemaFormReact.hocFactory.get("data")({
        rootReducerKey: ["schemaForm"],
        data: true,
        dataLength: true,
        meta: true
    })
) as any)
export class ArrayComponent extends PureComponent<DefaultProps & any> {
    private addItem: any;
    private hideItems: any;

    constructor(props: DefaultProps & any) {
        super(props);

        this.addItem = () => {
            props.addItem(this.props);
        };
        this.hideItems = (collapsing: boolean) => {
            props.updateItemMeta(props, null, {
                collapsing
            });
        };
    }

    public render() {
        const { uiSchema, formItemData, formItemMeta } = this.props;
        const { maxItems } = uiSchema;
        const { collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};
        let canAdd = true;

        if (Number.isInteger(maxItems) && Number.isInteger(formItemData)) {
            canAdd = formItemData < maxItems;
        }

        return (
            <Button.Group key="opt">
                <Button key={"add" + canAdd} type="primary" icon="plus" disabled={!canAdd} onClick={this.addItem} />
                <Button key={"collapsing" + collapsing} type="primary" icon={collapsing ? "arrow-up" : "arrow-down"} onClick={() => {
                    this.hideItems(!collapsing);
                }} />
            </Button.Group>
        );
    }
} @(compose(
    schemaFormReact.hocFactory.get("validate")(),
    schemaFormReact.hocFactory.get("array")()
) as any)
export class ArrayItemComponent extends PureComponent<DefaultProps & any> {
    private removeItem: any;
    private moveTo: any;

    constructor(props: DefaultProps & any) {
        super(props);
    }

    public render() {
        const { addItem } = this.props;

        this.removeItem = () => {
            this.props.removeItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex);
        };
        this.moveTo = () => {
            console.log(this.props.arrayIndex);
            this.props.moveItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex, 0);
        };

        return <Button.Group key="opt">
            <Button key="remove" type="primary" icon="minus" onClick={this.removeItem} />
        </Button.Group>;
    }
}

export const gloabelOptions = Immutable.fromJS({
    field: {
        default: {
            temps: ["formitem"],
            widgetHocs: [schemaFormReact.hocFactory.get("data")({
                data: true
            })]
        },
        array: {
            temps: ["card"],
            // 这里为array字段添加sort排序功能
            formHocs: [(Component: any) => {
                class EEEE extends React.PureComponent<any> {
                    private _onSortEnd: any;

                    constructor(props: any) {
                        super(props);

                        this._onSortEnd = this.onSortEnd.bind(this);
                    }

                    private onSortEnd({ oldIndex, newIndex }: { oldIndex: number; newIndex: number; }) {
                        const { uiSchema, parentKeys } = this.props;

                        if (oldIndex === newIndex) {
                            return;
                        }
                        this.props.moveItem(parentKeys, uiSchema.keys, oldIndex, newIndex);
                    }

                    public render() {
                        return <Component useWindowAsScrollContainer={true}
                            pressDelay={300} onSortEnd={this._onSortEnd}  {...this.props} />;
                    }
                }

                return EEEE;
            }, SortableContainer, schemaFormReact.hocFactory.get("resetKey")({
                excludeKeys: ["formItemData", "formItemMeta"]
            })],
            formItemHocs: [SortableElement, shouldUpdate(() => false)],
            fieldHocs: [schemaFormReact.hocFactory.get("data")({
                data: true,
                dataLength: true
            })]
        },
        normal: {
        },
        object: {
            temps: ["card"]
        },
        boolean: {
            widget: "checkbox"
        }
    },
    temp: {
        card: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                meta: true,
                metaKeys: ["errorText", "isValid", "collapsing"]
            }), immutableRenderDecorator]
        },
        formitem: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                meta: true,
                metaKeys: ["isLoading", "errorText", "isValid", "dirty"]
            }), immutableRenderDecorator],
            options: {
                hasFeedback: true,
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                },
            }
        }
    },
    hoc: {
        data: {
            rootReducerKey: ["schemaForm"]
        },
        array: {
            ArrayComponent: ArrayComponent,
            ArrayItemComponent: ArrayItemComponent
        }
    }
});

export const globalOptionsOfDesign = Immutable.fromJS({
    field: {
        object: {
        },
        design: {
            hocs: ["theme", "field", "validate", "array", "dataToMeta", "extraTemp", "extraWidget"],
            // 这里为array字段添加sort排序功能
            formHocs: [(Component: any) => {
                class EEEE extends React.PureComponent<any> {
                    private _onSortEnd: any;

                    constructor(props: any) {
                        super(props);

                        this._onSortEnd = this.onSortEnd.bind(this);
                    }

                    private onSortEnd({ oldIndex, newIndex }: { oldIndex: number; newIndex: number; }) {
                        const { uiSchema, parentKeys } = this.props;

                        if (oldIndex === newIndex) {
                            return;
                        }
                        this.props.moveItem(parentKeys, uiSchema.keys, oldIndex, newIndex);
                    }

                    public render() {
                        return <Component useWindowAsScrollContainer={true}
                            pressDelay={300} onSortEnd={this._onSortEnd} {...this.props} />;
                    }
                }

                return EEEE;
            }, SortableContainer, schemaFormReact.hocFactory.get("resetKey")({
                excludeKeys: ["formItemData", "formItemMeta"]
            })],
            formItemHocs: [SortableElement, shouldUpdate(() => false)],
            fieldHocs: [schemaFormReact.hocFactory.get("data")({
                data: true,
                dataLength: true
            })]
        }
    },
    temp: {
        div: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                meta: true,
                metaKeys: ["options"]
            }), immutableRenderDecorator],
            options: {
                className: "ba b--dashed"
            }
        }
    },
    hoc: {
        extraForm: {
            globalOptions: gloabelOptions,
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        extraWidget: {
            globalOptions: gloabelOptions,
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        extraTemp: {
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        data: {
            rootReducerKey: ["schemaForm"]
        },
        dataToMeta: {
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        }
    }
});
export const globalOptionsOfDesign1 = Immutable.fromJS({
    field: {
        object: {
        },
        design: {
            hocs: ["theme", "field", "validate", "array", "dataToMeta", "extraForm"],
            // 这里为array字段添加sort排序功能
            formHocs: [(Component: any) => {
                class EEEE extends React.PureComponent<any> {
                    private _onSortEnd: any;

                    constructor(props: any) {
                        super(props);

                        this._onSortEnd = this.onSortEnd.bind(this);
                    }

                    private onSortEnd({ oldIndex, newIndex }: { oldIndex: number; newIndex: number; }) {
                        const { uiSchema, parentKeys } = this.props;

                        if (oldIndex === newIndex) {
                            return;
                        }
                        this.props.moveItem(parentKeys, uiSchema.keys, oldIndex, newIndex);
                    }

                    public render() {
                        return <Component useWindowAsScrollContainer={true}
                            pressDelay={300} onSortEnd={this._onSortEnd} {...this.props} />;
                    }
                }

                return EEEE;
            }, SortableContainer, schemaFormReact.hocFactory.get("resetKey")({
                excludeKeys: ["formItemData", "formItemMeta"]
            })],
            formItemHocs: [SortableElement, shouldUpdate(() => false)],
            fieldHocs: [schemaFormReact.hocFactory.get("data")({
                data: true,
                dataLength: true
            })]
        }
    },
    temp: {
        div: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                meta: true,
                metaKeys: ["options"]
            }), immutableRenderDecorator],
            options: {
                className: "ba b--dashed"
            }
        }
    },
    hoc: {
        extraForm: {
            globalOptions: gloabelOptions,
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        extraWidget: {
            globalOptions: gloabelOptions,
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        extraTemp: {
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        data: {
            rootReducerKey: ["schemaForm"]
        },
        dataToMeta: {
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        }
    }
});

export const curAjv: ajv.Ajv = new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    format: "full",
    $data: true,
    loadSchema: loadSchema as any,
    errorDataPath: "property",
    removeAdditional: true,
});

let designResolve = [
    new ResolveLib(curAjv, design as any),
    new ResolveLib(curAjv, div as any),
    new ResolveLib(curAjv, checkbox as any),
    new ResolveLib(curAjv, style as any)
];

curAjv.addKeyword("idExists", {
    async: true,
    type: "string",
    validate: checkIdExists as any
});

function checkIdExists(schema: any, data: any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data === "nick" || data === "nora") {
                return resolve(true);
            }
            reject(new (ajv.ValidationError as any)([{ message: "idExists不是nick" }] as any));
        }, 2000);
    });
}

function loadSchema(uri: string) {

    return fetch(uri).then((res: Response) => {
        return res.json();
    });

}
