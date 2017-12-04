var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { SchemaForm } from "../index";
import { shouldUpdate } from "recompose";
var ObjectField = (function (_super) {
    __extends(ObjectField, _super);
    function ObjectField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectField.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent, arrayIndex = _a.arrayIndex, ItemButtons = _a.ItemButtons, arrayLevel = _a.arrayLevel, getCurrentState = _a.getCurrentState, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, schemaKey = _a.schemaKey, getFieldOptions = _a.getFieldOptions, reducerKeys = _a.reducerKeys;
        var uiSchema = mergeSchema.uiSchema;
        return (<SchemaForm arrayIndex={arrayIndex} schemaFormOptions={schemaFormOptions} getCurrentState={getCurrentState} schemaKey={schemaKey} arrayLevel={arrayLevel} reducerKeys={reducerKeys} schema={mergeSchema} parentKeys={mergeSchema.originKeys} RootComponent={getFieldOptions("object").root} uiSchema={uiSchema.items || ["*"]} globalOptions={globalOptions}>
            </SchemaForm>);
    };
    ObjectField = __decorate([
        shouldUpdate(function () { return false; })
    ], ObjectField);
    return ObjectField;
}(React.PureComponent));
export { ObjectField };
//# sourceMappingURL=object.jsx.map