!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"),require("recompose"),require("immutable"),require("fx-schema-form-core"),require("react-redux"),require("resolve-pathname"),require("redux-act"),require("reselect"),require("redux"),require("ajv"));else if("function"==typeof define&&define.amd)define(["React","recompose","immutable","fx-schema-form-core","react-redux","resolve-pathname","redux-act","reselect","redux","ajv"],t);else{var r="object"==typeof exports?t(require("React"),require("recompose"),require("immutable"),require("fx-schema-form-core"),require("react-redux"),require("resolve-pathname"),require("redux-act"),require("reselect"),require("redux"),require("ajv")):t(e.React,e.recompose,e.Immutable,e["fx-schema-form-core"],e["react-redux"],e["resolve-pathname"],e["redux-act"],e.reselect,e.Redux,e.Ajv);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}("undefined"!=typeof self?self:this,function(e,t,r,n,a,o,i,c,s,u){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,r){"use strict";function n(e,t){function r(){this.constructor=e}b(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]]);return r}function o(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}function i(e,t){return function(r,n){t(r,n,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,r,n){return new(r||(r=Promise))(function(a,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function c(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(i,c)}s((n=n.apply(e,t||[])).next())})}function u(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,o&&(i=o[2&r[0]?"return":r[0]?"throw":"next"])&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[0,i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,o=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],o=0}finally{a=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var a,o,i,c,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return c={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c}function l(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}function p(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}function d(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i}function f(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}function h(e){return this instanceof h?(this.v=e,this):new h(e)}function m(e,t,r){function n(e){l[e]&&(u[e]=function(t){return new Promise(function(r,n){p.push([e,t,r,n])>1||a(e,t)})})}function a(e,t){try{o(l[e](t))}catch(e){s(p[0][3],e)}}function o(e){e.value instanceof h?Promise.resolve(e.value.v).then(i,c):s(p[0][2],e)}function i(e){a("next",e)}function c(e){a("throw",e)}function s(e,t){e(t),p.shift(),p.length&&a(p[0][0],p[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u,l=r.apply(e,t||[]),p=[];return u={},n("next"),n("throw"),n("return"),u[Symbol.asyncIterator]=function(){return this},u}function y(e){function t(t,a){e[t]&&(r[t]=function(r){return(n=!n)?{value:h(e[t](r)),done:"return"===t}:a?a(r):r})}var r,n;return r={},t("next"),t("throw",function(e){throw e}),t("return"),r[Symbol.iterator]=function(){return this},r}function v(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator];return t?t.call(e):"function"==typeof p?p(e):e[Symbol.iterator]()}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function g(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function I(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.__extends=n,r.d(t,"__assign",function(){return F}),t.__rest=a,t.__decorate=o,t.__param=i,t.__metadata=c,t.__awaiter=s,t.__generator=u,t.__exportStar=l,t.__values=p,t.__read=d,t.__spread=f,t.__await=h,t.__asyncGenerator=m,t.__asyncDelegator=y,t.__asyncValues=v,t.__makeTemplateObject=_,t.__importStar=g,t.__importDefault=I;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},F=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),a=r(11),o=r(6);t.reducerFactory=new n.BaseFactory,t.hocFactory=new n.BaseFactory,t.themeFactory=new n.BaseFactory,t.hocFactory.add("utils",a.utils.bind(a.utils,t.hocFactory)),t.hocFactory.add("merge",a.merge.bind(a.merge,t.hocFactory)),t.hocFactory.add("field",a.field.bind(a.field,t.hocFactory)),t.hocFactory.add("theme",a.theme.bind(a.theme,t.hocFactory)),t.hocFactory.add("array",a.array.bind(a.array,t.hocFactory)),t.hocFactory.add("validate",a.validate.bind(a.validate,t.hocFactory)),t.hocFactory.add("make",a.make.bind(a.make,t.hocFactory)),t.hocFactory.add("temp",a.temp.bind(a.temp,t.hocFactory)),t.hocFactory.add("data",a.data.bind(a.data,t.hocFactory)),t.reducerFactory.add("schemaForm",o.schemaFormReducer)},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),a=r(18);t.schemaFormReducer=new a.SchemaFormReducer(n.fromJS({}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(26);t.SchemaForm=n.SchemaForm},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,r){this.key=e,this.value=t,this.parent=r,this.children=[]}return e.prototype.addChild=function(t,r){var n,a=this.getCurrentKeys(),o=this;if(t=t.splice(a.length),!t.length)return this;for(;t.length;){var i=t.shift(),c=i.constructor===Number;n=o.contains(i),n||(c?(n=new e("-",null,o),o.children[i]=n):(n=new e(i.toString(),null,o),o.children.push(n))),o=n}return n.value=r,n},e.prototype.getKey=function(){return this.key&&"-"!==this.key?this.key:this.getIndexInParent().toString()},e.prototype.getCurrentKeys=function(){var e=[];return this.parent&&(e=e.concat(this.parent.getCurrentKeys())),e.concat([this.key])},e.prototype.getIndexInParent=function(){var e=this.parent.children;if(this.parent)for(var t=0,r=e.length;t<r;t++){var n=e[t];if(n&&n===this)return t}return-1},e.prototype.contains=function(e){if(e.constructor===Number)return this.children.length>e?this.children[e]:null;if(this.getKey()===e)return this;if(!this.children||0===this.children.length)return null;for(var t=0;t<this.children.length;t++){var r=this.children[t];if(r&&r.contains(e))return r}return null},e.prototype.containPath=function(e){var t=this;return e.forEach(function(e){return t?(t=t.contains(e),t?void 0:null):null}),t},e.prototype.removeFromParent=function(){var e=this.getIndexInParent();this.parent.children.splice(e,1)},e.prototype.switchOneToOneFromParent=function(e){var t=this.getIndexInParent();if(this.parent&&this.parent.children&&!(t<0)&&!(this.parent.children.length<(t>e?t:e))){r=[this.parent.children[e],this.parent.children[t]],this.parent.children[t]=r[0],this.parent.children[e]=r[1];var r}},e.prototype.insertToFromParent=function(e){var t=this.getIndexInParent();!this.parent||!this.parent.children||t<0||(this.parent.children.length<=e&&this.parent.addChild(this.parent.getCurrentKeys().concat([e])),this.removeFromParent(),this.parent.children=this.parent.children.concat([]).splice(0,e-0).concat(this).concat(this.parent.children.splice(e-0)))},e.prototype.forEach=function(e,t){if(void 0===t&&(t=!1),t&&(this.value=e(this)),this.children)for(var r=0,n=this.children.length;r<n;r++)this.children[r]&&(this.children[r].value=e(this.children[r]),this.children[r].forEach(e))},e}();t.TreeMap=n},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),a=r(3);t.reducerFactory=a.reducerFactory,t.hocFactory=a.hocFactory;var o=r(25);t.SchemaForm=o.SchemaForm;var i=r(33),c=r(34),s=r(8);t.TreeMap=s.TreeMap;var u=r(38);t.schemaFormDec=u.default;var l=(o.props,i.models,{tempFactory:new n.BaseFactory,fieldFactory:new n.BaseFactory,widgetFactory:new n.BaseFactory});t.defaultTheme=l,l.fieldFactory.add("default",c.NormalField),l.fieldFactory.add("object",c.ObjectField),l.fieldFactory.add("array",c.ArrayField),a.themeFactory.add("default",l)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(12);t.merge=n.default;var a=r(13);t.utils=a.default;var o=r(15);t.theme=o.default;var i=r(16);t.field=i.default;var c=r(17);t.array=c.default;var s=r(20);t.validate=s.default;var u=r(21);t.make=u.default;var l=r(22);t.temp=l.default;var p=r(23);t.data=p.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(5);t.default=function(e,t){return void 0===t&&(t={}),function(e){return function(t){function r(e){var r=t.call(this,e)||this,n=e.uiSchema?Object.assign({},e.uiSchema):null;n&&(n.keys=n.originKeys);var a=new o.MergeLib(e.ajv,e.schemaId,n,e.uiSchemas);return r._mergeUiSchemaList=a.mergeUiSchemaList.map(function(e){return r.mergeKeys(e)}),r}return n.__extends(r,t),r.prototype.mergeKeys=function(e){var t=this.props.arrayLevel,r=void 0===t?[]:t,n=r.concat([]);return e=Object.assign({},e),e.originKeys=[].concat(e.keys),e.keys=e.keys.reverse().map(function(e){return"-"===e?n.pop():e}),e.keys.reverse(),e},r.prototype.render=function(){var t=this.props,r=(t.uiSchemas,t.uiSchema,n.__rest(t,["uiSchemas","uiSchema"]));return a.default.createElement(e,n.__assign({mergeSchemaList:this._mergeUiSchemaList},r))},r}(a.PureComponent)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(14),i=r(4);t.default=function(e,t){return void 0===t&&(t={}),function(e){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(r,t),r.prototype.render=function(){return a.default.createElement(e,n.__assign({getTitle:this.getTitle,getPathKeys:this.getPathKeys,getOptions:this.getOptions},this.props))},r.prototype.getOptions=function(e,t,r){var n=e.uiSchema,a=e.globalOptions,o=n.options,c=[];return a&&a.hasIn([t,"default"])&&c.push(a.getIn([t,"default"])),a&&a.hasIn([t,r])&&c.push(a.getIn([t,r])),o&&o.hasIn([t,r])&&c.push(o.getIn([t,r])),c.reverse().reduce(function(e,t){return t?t.merge(e):e},i.default.fromJS({})).toJS()},r.prototype.getTitle=function(e){var t=e.uiSchema,r=t,n=r.title,a=r.keys;return void 0!==n?n:[].concat(a).pop().toString()},r.prototype.getPathKeys=function(e,t){var r=[""].concat(e.concat([""])),n=o.default(t,r.join("/")).split("/");return n.shift(),n.length&&!n[n.length-1]&&n.pop(),n},r}(a.PureComponent)}}},function(e,t){e.exports=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(3);t.default=function(e,t){return void 0===t&&(t={}),function(e){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(r,t),r.prototype.render=function(){var t,r=this.props.uiSchema,i=r.theme;r.field;if(!o.themeFactory.has(i||"default"))throw new Error("没有找到"+(i||"default")+"的样式！");return t=o.themeFactory.get(i||"default"),a.default.createElement(e,n.__assign({currentTheme:t},this.props))},r}(a.PureComponent)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1);t.default=function(e,t){return void 0===t&&(t={}),function(e){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(r,t),r.prototype.render=function(){var t,r,o=this.props,i=o.currentTheme,c=o.getOptions,s=o.uiSchema,u=s,l=u.field,p=u.widget,d=u.type,f=(c(this.props,"hoc","field"),l||d);if(i.fieldFactory.has(f))t=i.fieldFactory.get(f);else{if(!i.fieldFactory.has("default"))return console.error("找不到field："+(l||d)),null;t=i.fieldFactory.get("default")}return i.widgetFactory.has(p||d)?r=i.widgetFactory.get(p||d):i.widgetFactory.has("default")?r=i.widgetFactory.get("default"):console.warn("找不到widget："+(p||d),s),a.default.createElement(e,n.__assign({},this.props,{FieldComponent:t,WidgetComponent:r}))},r}(a.PureComponent)}}},function(e,t,r){"use strict";var n=this;Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=r(1),i=r(2),c=r(6);t.default=function(e,t){void 0===t&&(t={});var r=i.compose(i.withHandlers({addItem:function(e){return function(e,t){return a.__awaiter(n,void 0,void 0,function(){var t,r,n,o;return a.__generator(this,function(a){switch(a.label){case 0:t={},r={},n=e.uiSchema.items,a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,e.ajv.validate({type:"object",properties:{defaultData:n}},r)];case 2:return a.sent(),[3,5];case 3:return o=a.sent(),console.log(o),[3,5];case 4:return c.schemaFormReducer.actions.addItem({parentKeys:e.parentKeys,keys:e.uiSchema.keys,data:r.defaultData}),[7];case 5:return[2]}})})}},removeItem:function(e){return function(e,t,r){c.schemaFormReducer.actions.removeItem({parentKeys:e,keys:t,index:r})}},switchItem:function(e){return function(e,t,r,n){c.schemaFormReducer.actions.switchItem({parentKeys:e,keys:t,curIndex:r,toIndex:n})}},moveItem:function(e){return function(e,t,r,n){c.schemaFormReducer.actions.moveToItem({parentKeys:e,keys:t,curIndex:r,toIndex:n})}},initArrayComponent:function(e){return function(e,t){var r=e.ArrayComponent,n=e.ArrayItemComponent,i=a.__rest(e,["ArrayComponent","ArrayItemComponent"]);return"array"===e.uiSchema.type?r?o.default.createElement(r,a.__assign({},i)):null:n?o.default.createElement(n,a.__assign({},i)):null}}})),s=function(e){return function(t){function n(e,r){var n=t.call(this,e,r)||this;return n.initArrayComponents(),n}return a.__extends(n,t),n.prototype.initArrayComponents=function(){var e=this.props.getOptions,t=e(this.props,"hoc","array");t.ArrayComponent&&(this.ArrayComponent=t.ArrayComponent),t.ArrayItemComponent&&(this.ArrayItemComponent=t.ArrayItemComponent)},n.prototype.render=function(){var t={};return this.ArrayComponent&&(t.ArrayComponent=this.ArrayComponent),this.ArrayItemComponent&&(t.ArrayItemComponent=this.ArrayItemComponent),o.default.createElement(e,a.__assign({},this.props,t))},n=a.__decorate([r,a.__metadata("design:paramtypes",[Object,Object])],n)}(o.PureComponent)},u=function(e){return function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(n,t),n.prototype.render=function(){return o.default.createElement(e,a.__assign({},this.props))},n=a.__decorate([r],n)}(o.default.PureComponent)};return i.branch(function(e){return"array"===e.uiSchema.type},s,u)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(19),a=r(4),o=r(8),i=function(){function e(e){this.initialState=e,this.createForm=n.createAction("创建一个表单数据"),this.updateItemData=n.createAction("更新一个表单数据"),this.updateItemMeta=n.createAction("更新一个表单元数据"),this.addItem=n.createAction("添加一个数据"),this.removeItem=n.createAction("删除一个数据"),this.switchItem=n.createAction("元素22交换位置"),this.moveToItem=n.createAction("元素移位"),this.validateAll=n.createAction("验证全部字段")}return Object.defineProperty(e.prototype,"actions",{get:function(){return{createForm:this.createForm,updateItemData:this.updateItemData,updateItemMeta:this.updateItemMeta,addItem:this.addItem,removeItem:this.removeItem,moveToItem:this.moveToItem,switchItem:this.switchItem}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reducer",{get:function(){return n.createReducer((e={},e[this.createForm]=this.createFormHandle.bind(this),e[this.updateItemData]=this.updateItemDataHandle.bind(this),e[this.updateItemMeta]=this.updateItemMetaHandle.bind(this),e[this.addItem]=this.addItemDataHandle.bind(this),e[this.removeItem]=this.removeItemDataHandle.bind(this),e[this.switchItem]=this.switchItemHandle.bind(this),e[this.moveToItem]=this.moveItemHandle.bind(this),e),this.initialState);var e},enumerable:!0,configurable:!0}),e.prototype.resolveKeys=function(e,t){if(e.hasIn(t))return e;for(var r=0,n=t.length;r<n;r++){var o=[].concat(t).splice(0,r+1);if(e.hasIn(o)){if(r<n){var i=e.getIn(o);a.Map.isMap(i)||a.List.isList(i)||(e=t[r+1].constructor===Number?e.setIn(o,a.List()):e.setIn(o,a.Map()))}}else o.pop(),e.hasIn(o)||(e=t[r].constructor===Number?e.setIn(o,a.List()):e.setIn(o,a.Map()))}return e},e.prototype.createFormHandle=function(e,t){var r=t.key,n=t.data;e.has(r)&&(e=e.remove(r));var i=new o.TreeMap(r,a.fromJS({})),c=a.Map({meta:i,data:a.fromJS(n)});return e.set(r,c)},e.prototype.updateItemDataHandle=function(e,t){var r=t.parentKeys,n=t.keys,o=t.data,i=t.meta,c=r.concat(["data"].concat(n));return e=this.resolveKeys(e,c),e=e.setIn(c,a.fromJS(o)),i&&(e=this.updateItemMetaHandle(e,{parentKeys:r,keys:n,meta:i})),e},e.prototype.addItemDataHandle=function(e,t){var r,n=t.parentKeys,o=t.keys,i=t.data,c=n.concat(["data"].concat(o)),s=n.concat(["meta"]),u=e.getIn(s),l=u.containPath(n.concat(o));return e=this.resolveKeys(e,c),r=e.getIn(c)||a.List(),r=r.push(a.fromJS(i)),l&&l.value&&(l.value=l.value.merge({collapsing:!1})),e.setIn(c,r)},e.prototype.removeItemDataHandle=function(e,t){var r,n=t.parentKeys,o=t.keys,i=t.index,c=n.concat(["data"].concat(o)),s=n.concat(["meta"]),u=e.getIn(s),l=u.addChild(n.concat(o).concat([i]));return e=this.resolveKeys(e,c),(r=e.getIn(c))&&a.List.isList(r)?(l&&l.removeFromParent(),e.setIn(c,r.remove(i))):e},e.prototype.switchItemHandle=function(e,t){var r,n,a=t.parentKeys,o=t.keys,i=t.curIndex,c=t.toIndex,s=a.concat(["data"].concat(o)),u=a.concat(["meta"]),l=e.getIn(u);if(e=this.resolveKeys(e,s),!(r=e.getIn(s))||r.size<=c||c<0)return e;var p=r.get(i);return r=r.set(i,r.get(c)),r=r.set(c,p),n=l.containPath(a.concat(o).concat([i])),n?n.switchOneToOneFromParent(c):(n=l.containPath(a.concat(o).concat([c])))&&n.switchOneToOneFromParent(i),e.setIn(s,r)},e.prototype.moveItemHandle=function(e,t){var r,n=t.parentKeys,a=t.keys,o=t.curIndex,i=t.toIndex,c=n.concat(["data"].concat(a)),s=n.concat(["meta"]),u=e.getIn(s),l=u.addChild(n.concat(a).concat([o]));if(e=this.resolveKeys(e,c),!(r=e.getIn(c))||r.size<=i||i<0)return e;var p=r.get(o);return r=r.remove(o),r=r.insert(i-0,p),l.insertToFromParent(i),e.setIn(c,r)},e.prototype.updateItemMetaHandle=function(e,t){var r=t.parentKeys,n=t.keys,i=t.data,c=r.concat(["meta"]),s=e.getIn(c),u=s.addChild(r.concat(n));u.value;u.value?u.value=u.value.merge(i):u.value=a.fromJS(i);var l=Object.assign({},s,o.TreeMap.prototype);return e.setIn(c,l)},e}();t.SchemaFormReducer=i},function(e,t){e.exports=i},function(e,t,r){"use strict";var n=this;Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=r(1),i=r(2),c=r(6);t.default=function(e,t){return void 0===t&&(t={}),function(e){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(r,t),r.prototype.render=function(){return o.default.createElement(e,a.__assign({},this.props))},r=a.__decorate([i.compose(i.withHandlers({validate:function(e){return function(e,t){return a.__awaiter(n,void 0,void 0,function(){var r,n,o,i,s;return a.__generator(this,function(a){switch(a.label){case 0:r={dirty:!0,isValid:!1,isLoading:!1},n=setTimeout(function(){c.schemaFormReducer.actions.updateItemMeta({parentKeys:e.parentKeys,keys:e.uiSchema.keys,data:{isLoading:!0,isValid:!1,errorText:!1}})},200),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,e.ajv.validate(e.uiSchema,t)];case 2:if(o=a.sent(),r.isValid=o,!o)throw i=new Error,i.errors=e.ajv.errors,i;return[3,5];case 3:return s=a.sent(),r.errorText=s.errors?e.ajv.errorsText(s.errors,{dataVar:e.getTitle(e).toString()}):s.message,[3,5];case 4:return clearTimeout(n),[7];case 5:return[2,r]}})})}}}),i.withHandlers({updateItemData:function(e){return function(e,t,r){c.schemaFormReducer.actions.updateItemData({parentKeys:e.parentKeys,keys:e.uiSchema.keys,data:t,meta:r})}},updateItemMeta:function(e){return function(t,r,o){return a.__awaiter(n,void 0,void 0,function(){var n,i,s,u;return a.__generator(this,function(a){switch(a.label){case 0:return i=(n=c.schemaFormReducer.actions).updateItemMeta,s={parentKeys:t.parentKeys,keys:t.uiSchema.keys},u=o,u?[3,2]:[4,e.validate(t,r)];case 1:u=a.sent(),a.label=2;case 2:return i.apply(n,[(s.data=u,s)]),[2]}})})}}}))],r)}(o.PureComponent)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(2);t.default=function(e,t){return void 0===t&&(t={}),function(r){return function(i){function c(){var e=null!==i&&i.apply(this,arguments)||this;return e.fieldKey="hocs",e}return n.__extends(c,i),c.prototype.render=function(){var i=this.props,c=i.uiSchema,s=i.getOptions,u=c.type,l=(s(this.props,"field",u),t.hocs||c[this.fieldKey]||["theme","field","validate","array","temp"]);l.unshift("utils");var p=o.compose.apply(void 0,[].concat(l).map(function(t){return"string"!=typeof t?t:e.get(t)()}))(r);return a.default.createElement(p,n.__assign({},this.props))},c=n.__decorate([o.shouldUpdate(function(){return!1})],c)}(a.PureComponent)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(2);t.default=function(e,t){return void 0===t&&(t={tempField:"temps",templates:[]}),function(e){return function(r){function i(){return null!==r&&r.apply(this,arguments)||this}return n.__extends(i,r),i.prototype.render=function(){var t=this,r=this.props,i=r.uiSchema,c=r.getOptions,s=i,u=(s.options,s.keys);return this.getTemplates().reduce(function(e,r){var n=r.key,i=r.Temp,s=c(t.props,"temp",n),l=o.compose.apply(void 0,s.tempHocs||[])(i);return a.default.createElement(l,{key:u.join(".")+n,tempKey:n,ajv:t.props.ajv,uiSchema:t.props.uiSchema,schemaId:t.props.schemaId,arrayLevel:t.props.arrayLevel,arrayIndex:t.props.arrayIndex,globalOptions:t.props.globalOptions,ArrayComponent:t.props.ArrayComponent,ArrayItemComponent:t.props.ArrayItemComponent,initArrayComponent:t.props.initArrayComponent,parentKeys:t.props.parentKeys,getTitle:t.props.getTitle,getOptions:t.props.getOptions,getPathKeys:t.props.getPathKeys,children:e})},a.default.createElement(e,n.__assign({key:u.join(".")},this.props)))},i.prototype.getTemplates=function(){var e,r=this.props,n=r.uiSchema,a=r.currentTheme,o=r.getOptions,i=n,c=(i.keys,i.type),s=o(this.props,"field",c),u=[];e=t.templates&&t.templates.length>0?t.templates:s[t.tempField]||"default";var l=function(t){switch(t.constructor){case String:a.tempFactory.has(t)?u.push({key:t,Temp:a.tempFactory.get(t)}):console.error("不存在"+t+"的temp！");break;case Object:u.push({key:t.name,Temp:t});break;case Array:[].concat(e).reverse().forEach(function(e,t){l(e)})}};return l(e),u},i}(a.PureComponent)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(2),i=r(9),c=r(24),s=r(4),u=c.createSelectorCreator(c.defaultMemoize,s.is);t.default=function(e,t){void 0===t&&(t={data:!0,rootReducerKey:["schemaForm"]});var r=function(e,r){return u([function(n){var a=t.rootReducerKey.concat(e.concat(["data"],r));if(t.data&&n.hasIn(a)){var o=n.getIn(a);if(void 0!==o)return t.dataLength?o.size:o}},function(n){var a=t.rootReducerKey.concat(e.concat(["meta"]));if(t.meta&&n.hasIn(a)){var o=n.getIn(a),i=o.containPath(e.concat(r));if(i&&i.value)return i.value}}],function(e,t){var r={};return e&&(r.formItemData=e),t&&(r.formItemMeta=t),r})};return function(e){return function(t){function c(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(c,t),c.prototype.render=function(){var t=this.props.uiSchema.keys,o=i.connect(r(this.props.parentKeys,t)),c=o(e);return a.default.createElement(c,n.__assign({},this.props))},c=n.__decorate([o.shouldUpdate(function(){return!1})],c)}(a.PureComponent)}}},function(e,t){e.exports=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7);t.SchemaForm=n.SchemaForm;var a=r(32);t.props=a.props},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(27),i=r(28),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.schemaId,r=e.mergeSchemaList,o=e.arrayLevel,c=e.RootComponent,s=e.children,u=n.__rest(e,["schemaId","mergeSchemaList","arrayLevel","RootComponent","children"]),l=r.map(function(e,r){var c=o?o.concat([]):[];return a.default.createElement(i.SchemaFormItem,n.__assign({key:r},u,{schemaId:t,uiSchema:e,arrayLevel:c}))});return c?a.default.createElement(c,null,l,s):a.default.createElement("div",null,l,s)},t=n.__decorate([o.hoc],t)}(a.PureComponent);t.SchemaForm=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=r(3);t.hoc=n.compose(n.shouldUpdate(function(){return!1}),a.hocFactory.get("utils")(),a.hocFactory.get("merge")())},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(29);t.SchemaFormItem=n.SchemaFormItem},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(30),i=r(31),c=function(e){function t(t,r){return e.call(this,t,r)||this}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.FieldComponent,r=e.uiSchema,i=n.__rest(e,["FieldComponent","uiSchema"]),c=i.getOptions(this.props,"field",r.field||r.type),s=t;return t?(c.fieldHocs&&c.fieldHocs.length&&(s=o.compose.apply(void 0,c.fieldHocs||[])(t)),a.default.createElement(s,n.__assign({key:r.keys.join("formItem"),uiSchema:r},i))):(console.log(r,"没有找到匹配的field"),null)},t=n.__decorate([i.hoc,n.__metadata("design:paramtypes",[Object,Object])],t)}(a.PureComponent);t.SchemaFormItem=c},function(e,t){e.exports=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=r(3);t.hoc=n.compose(a.hocFactory.get("utils")(),a.hocFactory.get("make")())},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.props=1},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.models=1},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(35);t.NormalField=n.NormalField;var a=r(36);t.ObjectField=a.ObjectField;var o=r(37);t.ArrayField=o.ArrayField},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(2),i=function(e){function t(t,r){return e.call(this,t,r)||this}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.WidgetComponent,r=(e.FieldComponent,e.formItemMeta,e.formItemData,n.__rest(e,["WidgetComponent","FieldComponent","formItemMeta","formItemData"])),i=r.getOptions(this.props,"field","normal"),c=r.uiSchema.keys,s=t;return t?(i.widgetHocs&&i.widgetHocs.length&&(s=o.compose.apply(void 0,i.widgetHocs)(t)),a.default.createElement(s,n.__assign({key:c.join(".")},r))):null},t}(a.PureComponent);t.NormalField=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(7),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){var e=this.props.uiSchema,t=this.props,r=t.arrayIndex,n=t.arrayLevel,i=t.parentKeys,c=t.globalOptions,s=t.ajv;t.schemaId;return null===e.children?null:a.default.createElement(o.SchemaForm,{arrayIndex:r,arrayLevel:n,schemaId:e.schemaPath,uiSchemas:e.children||["*"],uiSchema:e,parentKeys:i,globalOptions:c,ajv:s})},t}(a.PureComponent);t.ObjectField=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(7),i={width:"100%",height:"100%"},c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.renderItem=function(e){var t=this.props,r=t.parentKeys,n=t.globalOptions,i=t.arrayLevel,c=void 0===i?[]:i,s=t.ajv,u=t.ArrayItemComponent,l=this.props.uiSchema;return null===l.children?null:a.default.createElement(o.SchemaForm,{key:e,arrayIndex:e,uiSchema:l,ArrayItemComponent:u,arrayLevel:c.concat([e]),schemaId:l.schemaPath,uiSchemas:l.children||["-"],parentKeys:r,globalOptions:n,ajv:s})},t.prototype.render=function(){for(var e=this.props,t=(e.uiSchema,e.formItemData),r=[],n=0;n<+t;n++)r.push(this.renderItem(n));return a.default.createElement("div",{style:i},r||null)},t}(a.PureComponent);t.ArrayField=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(1),o=r(9),i=r(4),c=r(39),s=r(5),u=r(3),l=u.reducerFactory.get("schemaForm").actions;t.default=function(e){return void 0===e&&(e={}),function(t){return function(r){function u(e){var t=r.call(this,e)||this;return t._validateAll=t.validateAll.bind(t),t}return n.__extends(u,r),u.prototype.validateAll=function(){return n.__awaiter(this,void 0,void 0,function(){var t,r,a,o,s,u,p=this;return n.__generator(this,function(n){switch(n.label){case 0:if(t=this.props.root,r=this.props.ajv.getSchema(this.props.schemaId),a=i.default.fromJS({dirty:!0,isValid:!0,isLoading:!0}),o=i.default.fromJS({isLoading:!1,dirty:!0}),s=this.normalizeDataPath,!r)throw new Error("没有找到对应的"+this.props.schemaId+";");n.label=1;case 1:return n.trys.push([1,3,4,5]),t.forEach(function(e){return e.value?e.value.merge(a):a},!0),l.updateItemMeta({parentKeys:e.parentKeys,keys:[],data:t.value}),[4,r(this.props.data.toJS())];case 2:return n.sent(),t.value=t.value.merge({isValid:!0}),l.updateItemMeta({parentKeys:e.parentKeys,keys:[],data:t.value}),[3,5];case 3:return(u=n.sent())instanceof c.ValidationError?(u.errors.forEach(function(e){var r=t.getCurrentKeys().concat(s(p.props.schemaId,e.dataPath)),n=t.addChild(r,i.default.fromJS({}));n.value=n.value.merge(o).merge({isValid:!1,errorText:e.message})}),t.value=t.value.merge({isValid:!1,errors:u.errors}),[3,5]):[2,console.error(u)];case 4:return t.forEach(function(e){return e.value?e.value.merge(o):e.value},!0),console.log(t.value),l.updateItemMeta({parentKeys:e.parentKeys,keys:[],data:t.value}),[7];case 5:return[2]}})})},u.prototype.normalizeDataPath=function(e,t){var r=t.substring(1).split("/");return r=r.map(function(t,n){if(Number.isInteger(+t)){var a=r.slice(0,n);if(a.unshift(e),s.schemaKeysFactory.has(a.join("/"))){if("array"===s.schemaFieldFactory.get(s.schemaKeysFactory.get(a.join("/"))).type)return+t}}return t})},u.prototype.render=function(){var e=this.props,r=e.errors,o=e.isValid,i=void 0!==o&&o,c=e.isValidating,s=void 0!==c&&c;return a.default.createElement("div",null,a.default.createElement(t,n.__assign({validateAll:this._validateAll},this.props)),i.toString()+s.toString(),i?null:r?r.map(function(e){return a.default.createElement("div",{key:e.get("dataPath")},e.get("message"))}):null)},u=n.__decorate([o.connect(function(t){var r=e.rootReducerKey.concat(e.parentKeys).concat(["data"]),n=e.rootReducerKey.concat(e.parentKeys).concat(["meta"]),a=t.getIn(n);return{data:t.getIn(r),root:a,isValid:a.value.get("isValid"),errors:a.value.get("errors"),isValidating:a.value.get("isLoading")}}),n.__metadata("design:paramtypes",[Object])],u)}(a.PureComponent)}}},function(e,t){e.exports=u}])});
//# sourceMappingURL=index.js.map