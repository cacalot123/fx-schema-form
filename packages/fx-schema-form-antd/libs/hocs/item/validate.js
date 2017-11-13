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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { connect } from "react-redux";
import { compose, shouldUpdate } from "recompose";
import { mapActionsStateToProps } from "../select";
var mapDispatchToProps = function (dispatch, ownProps) {
    var mergeSchema = ownProps.mergeSchema, actions = ownProps.actions, schemaFormOptions = ownProps.schemaFormOptions, schemaKey = ownProps.schemaKey, formData = ownProps.formData;
    var keys = mergeSchema.keys;
    var validate = schemaFormOptions.ajv.compile(Object.assign({}, mergeSchema, { $async: true, id: null }));
    for (var key in actions) {
        if (actions.hasOwnProperty(key)) {
            var element = actions[key];
            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }
    return {
        updateItemData: function (data) {
            actions.updateItem({ keys: keys, data: data, meta: {} });
        },
        validate: function (data) {
            var result = {
                dirty: true,
                isValid: false,
                isLoading: false,
                errorText: ""
            };
            var timeId = setTimeout(function () {
                actions.updateItemMeta({ keys: keys, meta: { isLoading: true, isValid: false, errorText: false } });
            }, 50);
            validate(data).then(function () {
                clearTimeout(timeId);
                result.isValid = true;
                actions.updateItemMeta({ keys: keys, meta: result });
            }).catch(function (err) {
                clearTimeout(timeId);
                result.errorText = err.errors ?
                    schemaFormOptions.ajv.errorsText(err.errors, { dataVar: "/" + keys.join("/") })
                    : err.message;
                actions.updateItemMeta({ keys: keys, meta: result });
            });
        }
    };
};
export var ValidateHoc = function (hocFactory, Component) {
    var ValidateComponentHoc = (function (_super) {
        __extends(ValidateComponentHoc, _super);
        function ValidateComponentHoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateComponentHoc.prototype.render = function () {
            return React.createElement(Component, __assign({}, this.props));
        };
        ValidateComponentHoc = __decorate([
            compose(connect(mapActionsStateToProps), connect(null, mapDispatchToProps), shouldUpdate(function () { return false; }))
        ], ValidateComponentHoc);
        return ValidateComponentHoc;
    }(React.PureComponent));
    return ValidateComponentHoc;
};
//# sourceMappingURL=validate.js.map