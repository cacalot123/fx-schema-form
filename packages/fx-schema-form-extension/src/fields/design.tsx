import React from "react";
import { compose, shouldUpdate } from "recompose";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";

export interface DesignFieldProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {

}

let arrayFieldStyle = {
    width: "100%",
    height: "100%"
};

class DesignFieldComponent extends React.PureComponent {
    public render() {
        return <div style={arrayFieldStyle}>{this.props.children}</div>;
    }
}

/**
 * Design字段的生成规则
 * 用于自定义数据类型：无限极树形结构
 * {
 *  children:[{
 *      children:[{
 *          children:[{}]
 *      }]
 * }]
 * }
 * 依赖的hoc
 *  1. data
 */
export class DesignField extends React.PureComponent<DesignFieldProps, any> {
    /**
     * 包装之后的字段组件
     */
    private SchemaFormWithHoc: new () => React.PureComponent = DesignFieldComponent;
    /**
     * 包装之后的子元素组件
     */
    private SchemaFormItemWithHoc: new () => React.PureComponent = schemaFormReact.SchemaForm;

    /**
     * 构造函数
     * @param props   属性
     * @param context context
     */
    constructor(props: DesignFieldProps, context: any) {
        super(props, context);
        this.initComponent();
    }

    /**
     * 初始化Component
     * 包装配置参数formHocs中的hoc
     * 包装配置参数formItemHocs中的hoc
     */
    private initComponent() {
        const { uiSchema, formItemData, getOptions } = this.props,
            options = getOptions(this.props, "field", "design");

        if (options.formHocs && options.formHocs.constructor === Array) {
            this.SchemaFormWithHoc = compose(...options.formHocs)(DesignFieldComponent);
        }

        if (options.formItemHocs && options.formItemHocs.constructor === Array) {
            this.SchemaFormItemWithHoc = compose(...options.formItemHocs)(schemaFormReact.SchemaForm as any);
        }
    }
    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    private renderItem(idx: number): JSX.Element | null {
        const { parentKeys, globalOptions, getOptions, arrayLevel = [], getRequiredKeys, ajv, ArrayItemComponent } = this.props,
            uiSchema = this.props.uiSchema as any;
        let SchemaFormWithHoc: any = this.SchemaFormItemWithHoc;

        return (
            <SchemaFormWithHoc
                key={idx}
                index={idx}
                arrayIndex={idx}
                uiSchema={uiSchema}
                ArrayItemComponent={ArrayItemComponent}
                arrayLevel={arrayLevel.concat([idx])}
                schemaId={uiSchema.schemaPath}
                uiSchemas={[{
                    key: "-/children",
                    field: "design"
                }]}
                parentKeys={parentKeys}
                globalOptions={globalOptions}
                ajv={ajv} />
        );
    }

    /**
     * 渲染页面
     */
    public render(): any {
        const { uiSchema, formItemData, getOptions, getRequiredKeys, children } = this.props, child = [],
            options = getOptions(this.props, "field", "design");
        let SchemaFormWithHoc = this.SchemaFormWithHoc;
        const extraProps = getRequiredKeys(this.props, options.fieldIncludeKeys, options.fieldExcludeKeys);

        for (let i = 0; i < +formItemData; i++) {
            child.push(this.renderItem(i));
        }

        // console.log(uiSchema.keys);

        return <SchemaFormWithHoc children={[...child, children]} {...extraProps} />;
    }
}
