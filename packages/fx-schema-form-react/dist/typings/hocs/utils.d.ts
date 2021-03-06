import { BaseFactory } from "fx-schema-form-core";
import Immutable from "immutable";
import { DefaultProps } from "../components";
import { RC } from "../models/index";
export interface UtilsHocOutProps {
    getOptions: (props: DefaultProps, category: string, field: string, ...extraSettings: Immutable.Map<string, any>[]) => {
        [key: string]: any;
    };
    getTitle(props: DefaultProps, ...extraSettings: Immutable.Map<string, any>[]): () => any;
    getPathKeys: (keys: string[], path: string) => Array<string | number>;
    normalizeDataPath: (schemaId: string, dataPath: string) => Array<string | number>;
    getRequiredKeys: (props: DefaultProps, include: string[], exclude: string[]) => {
        [key: string]: any;
    };
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<DefaultProps, any>;
export default _default;
