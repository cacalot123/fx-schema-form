import React, { SyntheticEvent } from "react";

import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import { Input } from "antd";
import { hocFactory } from "../factory";
import { schemaFormReducer } from "../reducer";
import { FxUiSchema } from "../components/index";

export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps {
}

export class AntdInputWidget extends React.Component<AntdInputWidgetProps, any> {
    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        } else {
            // props.defaultValue = mergeSchema.default;
            props.value = "";
        }

        return props;
    }

    public render(): JSX.Element {
        const { getOptions, uiSchema, getTitle, parentKeys, schemaId } = this.props;
        const { keys } = uiSchema as FxUiSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <Input
                onBlur={(e: SyntheticEvent<HTMLInputElement>) => {
                    // updateItemData(e.currentTarget.value);
                    // updateItemMeta(formItemData);

                    schemaFormReducer.actions.updateItemData({
                        keys: [schemaId].concat(keys),
                        data: e.currentTarget.value
                    });
                }}
                onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                    schemaFormReducer.actions.updateItemData({
                        keys: parentKeys.concat(keys),
                        data: e.currentTarget.value
                    });
                }}
                disabled={readonly}
                placeholder={getTitle(this.props)}
                {...getOptions(this.props, "widget", "input") }
                {...this.setDefaultProps() }>
            </Input>
        );
    }
}