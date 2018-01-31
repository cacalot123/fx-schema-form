import React, { PureComponent } from "react";
import { DefaultProps } from "../../../dist/dts/components";
import { FxUiSchema } from "../../../dist/dts/models";

import { UtilsHocOutProps } from "../../hocs/utils";

export interface DivTempProps extends DefaultProps, UtilsHocOutProps {
    tempKey: string;
}

export class NoneTemp extends PureComponent<DivTempProps, any> {
    public render(): any {
        const { children, tempKey, getOptions } = this.props;
        const { className, ...tempOptions } = getOptions(this.props as any, "temp", tempKey);

        return <div>
            {children}
        </div>;
    }
}