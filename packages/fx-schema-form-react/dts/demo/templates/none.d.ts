/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../../../dts/components";
import { UtilsHocOutProps } from "../../hocs/utils";
export interface DivTempProps extends DefaultProps, UtilsHocOutProps {
    tempKey: string;
}
export declare class NoneTemp extends PureComponent<DivTempProps, any> {
    render(): any;
}