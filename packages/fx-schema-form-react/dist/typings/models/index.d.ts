/// <reference types="react" />
import React from "react";
import { Map } from "immutable";
import { BaseFactory, UiSchema } from "fx-schema-form-core";
export interface SchemaFormNs<F, T, W> {
    fieldFactory: BaseFactory<F>;
    tempFactory: BaseFactory<T>;
    widgetFactory: BaseFactory<W>;
}
export declare type RC<P, T> = new () => React.PureComponent<P, T>;
export interface FxUiSchema extends UiSchema {
    options?: Map<string, any>;
    children?: Array<UiSchema | string>;
    theme?: string;
    field?: string;
    widget?: string;
    temps?: string[];
    isRequired?: boolean;
    refKeys?: string[];
    originKeys?: string[];
    readonly?: boolean;
    hocs?: any[];
}
export declare type NsFactory = SchemaFormNs<RC<any, any>, RC<any, any>, RC<any, any>>;
export declare const models = 1;
