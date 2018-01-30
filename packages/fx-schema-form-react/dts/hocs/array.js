var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from "react";
import { branch, compose, withHandlers } from "recompose";
import { schemaFormReducer } from "../reducer";
export default (hocFactory, settings = {}) => {
    const hoc = compose(withHandlers({
        addItem: (propsCur) => {
            return (props, data) => __awaiter(this, void 0, void 0, function* () {
                let itemSchema = {}, defaultValue = {}, itemUiSchema = props.uiSchema.items;
                try {
                    yield props.ajv.validate({
                        type: "object",
                        properties: {
                            defaultData: itemUiSchema
                        }
                    }, defaultValue);
                }
                catch (e) {
                    console.log(e);
                }
                finally {
                    schemaFormReducer.actions.addItem({
                        parentKeys: props.parentKeys,
                        keys: props.uiSchema.keys,
                        data: defaultValue.defaultData
                    });
                }
            });
        },
        removeItem: (propsCur) => {
            return (parentKeys, keys, index) => {
                schemaFormReducer.actions.removeItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    index: index
                });
            };
        },
        switchItem: (propsCur) => {
            return (parentKeys, keys, curIndex, toIndex) => {
                schemaFormReducer.actions.switchItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    curIndex: curIndex,
                    toIndex: toIndex
                });
            };
        },
        moveItem: (propsCur) => {
            return (parentKeys, keys, curIndex, toIndex) => {
                schemaFormReducer.actions.moveToItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    curIndex: curIndex,
                    toIndex: toIndex
                });
            };
        },
        initArrayComponent: (propsCur) => {
            return (props, index) => {
                const { ArrayComponent, ArrayItemComponent } = props, extraProps = __rest(props, ["ArrayComponent", "ArrayItemComponent"]), uiSchema = props.uiSchema;
                if (uiSchema.type === "array") {
                    return ArrayComponent ? React.createElement(ArrayComponent, Object.assign({}, extraProps)) : null;
                }
                return ArrayItemComponent ? React.createElement(ArrayItemComponent, Object.assign({}, extraProps)) : null;
            };
        }
    }));
    let arrayHoc = (Component) => {
        let ArrayComponentHoc = class ArrayComponentHoc extends React.PureComponent {
            constructor(props, context) {
                super(props, context);
                this.initArrayComponents();
            }
            initArrayComponents() {
                const { getOptions } = this.props;
                const hocOptions = getOptions(this.props, "hoc", "array");
                if (hocOptions.ArrayComponent) {
                    this.ArrayComponent = hocOptions.ArrayComponent;
                }
                if (hocOptions.ArrayItemComponent) {
                    this.ArrayItemComponent = hocOptions.ArrayItemComponent;
                }
            }
            render() {
                let props = {};
                if (this.ArrayComponent) {
                    props.ArrayComponent = this.ArrayComponent;
                }
                if (this.ArrayItemComponent) {
                    props.ArrayItemComponent = this.ArrayItemComponent;
                }
                return React.createElement(Component, Object.assign({}, this.props, props));
            }
        };
        ArrayComponentHoc = __decorate([
            hoc,
            __metadata("design:paramtypes", [Object, Object])
        ], ArrayComponentHoc);
        return ArrayComponentHoc;
    };
    let pureHoc = (Component) => {
        let ArrayPureComponentHoc = class ArrayPureComponentHoc extends React.PureComponent {
            render() {
                return React.createElement(Component, Object.assign({}, this.props));
            }
        };
        ArrayPureComponentHoc = __decorate([
            hoc
        ], ArrayPureComponentHoc);
        return ArrayPureComponentHoc;
    };
    return branch((props) => {
        const { uiSchema } = props;
        return uiSchema.type === "array";
    }, arrayHoc, pureHoc);
};
//# sourceMappingURL=array.js.map