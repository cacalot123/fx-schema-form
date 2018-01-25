import { createAction, createReducer, EmptyActionCreator, SimpleActionCreator, ComplexActionCreator } from "redux-act";
import { Reducer } from "redux";
import Immutable from "immutable";

import { FxReducer } from "./reducer";

export interface SchemaFormActions {
    createForm: SimpleActionCreator<{ key: string, data: any }>;
    updateItemData: SimpleActionCreator<{ keys: string[], data: any }>;
}

export class SchemaFormReducer<T> implements FxReducer {
    /**
     * 单个元素的值变化时候调用
     */
    private createForm: SimpleActionCreator<{ key: string, data: any }> = createAction("创建一个表单数据");
    private updateItemData: SimpleActionCreator<{ keys: string[], data: any }> = createAction("更新一个表单数据");

    /**
     * 构造
     * @param initialState 初始化状态
     */
    constructor(private initialState: any) { }
    /**
     * 获取当前的actions
     */
    public get actions(): SchemaFormActions {
        return {
            createForm: this.createForm,
            updateItemData: this.updateItemData
        };
    }
    /**
     * 返回当前的reducer
     */
    public get reducer(): Reducer<any> {
        return createReducer<any>({
            [this.createForm as any]: this.createFormHandle.bind(this),
            [this.updateItemData as any]: this.updateItemDataHandle.bind(this),
        }, this.initialState);
    }
    /**
     * 创建一份表单数据
     * @param state   当前的state
     * @param param1  参数值，key 和 data
     */
    private createFormHandle(state: Immutable.Map<string, any>, { key, data }: any): Immutable.Map<string, any> {
        if (state.has(key)) {
            return state;
        }
        return state.set(key, Immutable.fromJS(data));
    }
    /**
     * 修改一个数据
     * @param state  当前的state
     * @param param1 参数值，keys 和 data
     */
    private updateItemDataHandle(state: Immutable.Map<string, any>, { keys, data }: any): Immutable.Map<string, any> {
        return state.setIn(keys, Immutable.fromJS(data));
    }
}