"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[5556],{"./src/generators/generators.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$3:()=>mockModel,Yv:()=>createModelInstance});var _faker$definitions$na,_faker$definitions$ve,_faker$definitions$ve2,_faker$definitions$ve3,_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),ramda__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/ramda/es/index.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/arrays.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var mockModel={fields:[{id:"id",type:"string",description:"User identifier",name:"Id",xs:12,sm:6,md:4,listable:!1},{id:"firstName",type:"string",description:"User first name",name:"First name",xs:12,sm:6,md:4,listable:!0},{id:"middleName",type:"string",description:"User middle name",name:"Middle name",xs:12,sm:6,md:4,listable:!0},{id:"lastName",type:"string",description:"User last name",name:"Last name",xs:12,sm:6,md:4,listable:!0},{id:"gender",type:"enum",value:(null===(_faker$definitions$na=_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.definitions.name)||void 0===_faker$definitions$na?void 0:_faker$definitions$na.gender)||[],description:"User gender",name:"Gender",xs:12,sm:6,md:3},{id:"age",type:"number",description:"User age",name:"Age",xs:12,sm:6,md:3,listable:!1},{id:"birthDate",type:"date",format:"dd/MM/yyyy",default:new Date(2014,8,18),description:"When he was born",name:"Birth Date",xs:12,sm:6,md:6,listable:!1},{id:"car",type:"group",description:"Information about the user car",name:"User car",xs:12,value:[{id:"model",type:"enum",value:(null===(_faker$definitions$ve=_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.definitions.vehicle)||void 0===_faker$definitions$ve?void 0:_faker$definitions$ve.model)||[],description:"Lorem ipsum",name:"Model",xs:12,sm:5},{id:"manufacturer",type:"enum",value:(null===(_faker$definitions$ve2=_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.definitions.vehicle)||void 0===_faker$definitions$ve2?void 0:_faker$definitions$ve2.manufacturer)||[],description:"Lorem ipsum",name:"Manufacturer",xs:12,sm:5},{id:"color",type:"string",description:"Lorem ipsum",name:"Color",xs:12,sm:2},{id:"type",type:"multienum",value:(null===(_faker$definitions$ve3=_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.definitions.vehicle)||void 0===_faker$definitions$ve3?void 0:_faker$definitions$ve3.type)||[],description:"Lorem ipsum",name:"Type",xs:12,sm:3},{id:"vin",type:"string",description:"Lorem ipsum",name:"VIN",xs:12,sm:5},{id:"vrm",type:"string",description:"Lorem ipsum",name:"VRM",xs:12,sm:4},{id:"returnTime",type:"time",format:"HH:mm",default:new Date(2022,8,21,9,0),description:"Lorem ipsum",name:"Return time",xs:12,sm:4}]},{id:"quantity",type:"number",description:"Lorem ipsum",name:"Q",xs:12,sm:2,md:1},{id:"available",type:"boolean",description:"Lorem ipsum",name:"Available",xs:12,sm:2},{id:"currency",type:"string",description:"Lorem ipsum",name:"Unit Price Currency",xs:12,sm:3},{id:"tradeDate",type:"datetime",format:"dd/MM/yyyy HH:mm",default:new Date(2022,8,12,9,0),description:"Lorem ipsum",name:"Trade date",xs:12,sm:5},{id:"codes",type:"string[]",description:"Lorem ipsum",name:"Codes",xs:12,sm:5},{id:"identifiers",type:"number[]",description:"Lorem ipsum",name:"Identifiers",xs:12,sm:4}]},mockFieldValue={id:function id(){return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.datatype.number({min:1e3,max:1e5}).toString()},firstName:_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.name.firstName,middleName:_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.name.middleName,lastName:_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.name.lastName,gender:_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.name.gender,age:function age(){return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.datatype.number({min:20,max:60})},birthDate:function birthDate(){return new Date(2019,3,2)},returnTime:function returnTime(){return new Date(2022,10,2,11,0)},model:_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.vehicle.model,manufacturer:_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.vehicle.manufacturer,color:_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.vehicle.color,type:function type(){var result=(0,_utils__WEBPACK_IMPORTED_MODULE_2__.G)(_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.datatype.number({min:2,max:5}),0).map((function(){return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.vehicle.type()}));return ramda__WEBPACK_IMPORTED_MODULE_1__.jj$(result)},vin:_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.vehicle.vin,vrm:_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.vehicle.vrm,quantity:function quantity(){return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.datatype.number({min:1,max:9})},available:_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.datatype.boolean,currency:function currency(){return"MXN"},tradeDate:function tradeDate(){return new Date(2012,2,11,8,25)},codes:function codes(){return[_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.word.noun(),_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.word.noun(),_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.word.noun()]},identifiers:function identifiers(){return[_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.datatype.number(),_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.datatype.number(),_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.datatype.number()]}},createModelInstance=function createModelInstance(model){var seed=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.seed(seed),model.fields.reduce((function(acc,field){if("group"===field.type)return _objectSpread(_objectSpread({},acc),{},_defineProperty({},field.id,field.value.reduce((function(acc,groupField){return _objectSpread(_objectSpread({},acc),{},_defineProperty({},groupField.id,getModelFieldValue(groupField)))}),{})));if("group[]"===field.type){var numElements=_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.datatype.number({min:2,max:5});return _objectSpread(_objectSpread({},acc),{},_defineProperty({},field.id,new Array(numElements).fill(0).map((function(){return field.value.reduce((function(acc,arrayField){return _objectSpread(_objectSpread({},acc),{},_defineProperty({},arrayField.id,getModelFieldValue(arrayField)))}),{})}))))}return _objectSpread(_objectSpread({},acc),{},_defineProperty({},field.id,getModelFieldValue(field)))}),{})},getModelFieldValue=function getModelFieldValue(_ref){var id=_ref.id,fieldGenerator=mockFieldValue[id];return fieldGenerator?fieldGenerator():_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.We.datatype.string()}},"./src/generators/object-details/object-details.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>ObjectDetails});__webpack_require__("./node_modules/react/index.js");var Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),components=__webpack_require__("./src/components/index.ts"),newBreakpointsCounter=function newBreakpointsCounter(){var breakpoint=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,calculateBreakpointIncrement=function calculateBreakpointIncrement(breakpointsCounter,key,value){var initialValue=breakpointsCounter[key];return breakpointsCounter[key]+=value,breakpointsCounter[key]>breakpoint?(breakpointsCounter[key]=value,!1):(breakpointsCounter[key]==breakpoint&&(breakpointsCounter[key]=0),initialValue>0)};return{xs:0,sm:0,md:0,lg:0,xl:0,increment:function increment(_ref){var _ref$xs=_ref.xs,xs=void 0===_ref$xs?0:_ref$xs,_ref$sm=_ref.sm,sm=void 0===_ref$sm?0:_ref$sm,_ref$md=_ref.md,md=void 0===_ref$md?0:_ref$md,_ref$lg=_ref.lg,lg=void 0===_ref$lg?0:_ref$lg,_ref$xl=_ref.xl,smInc=sm||xs,mdInc=md||smInc,lgInc=lg||mdInc,xlInc=(void 0===_ref$xl?0:_ref$xl)||lgInc;return{xs:calculateBreakpointIncrement(this,"xs",xs),sm:calculateBreakpointIncrement(this,"sm",smInc),md:calculateBreakpointIncrement(this,"md",mdInc),lg:calculateBreakpointIncrement(this,"lg",lgInc),xl:calculateBreakpointIncrement(this,"xl",xlInc)}}}},DataGrid=__webpack_require__("./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var singleDetailValueFactory=function singleDetailValueFactory(field,instance){var dense=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).dense,id=field.id,name=field.name,type=field.type,value=instance[id];return"boolean"===type?(0,jsx_runtime.jsx)(components.hC,{dense,label:name,value}):"date"===type||"time"===type||"datetime"===type?(0,jsx_runtime.jsx)(components.Bc,{dense,label:name,value,format:field.format}):"object"!==_typeof(value)||Array.isArray(value)?(0,jsx_runtime.jsx)(components.qR,{dense,label:name,value:null==value?void 0:value.toString()}):(0,jsx_runtime.jsx)(components.qR,{dense,label:name,value:JSON.stringify(value)})};singleDetailValueFactory.displayName="singleDetailValueFactory";var ObjectArrayGroup=function ObjectArrayGroup(_ref2){var _ref2$field=_ref2.field,name=_ref2$field.name,description=_ref2$field.description,value=_ref2$field.value,instance=_ref2.instance,dense=_ref2.dense,columns=[{field:"id",headerName:"ID",width:70}];value.forEach((function(column){columns.push({field:column.id,headerName:column.name})}));var rows=instance.map((function(f,id){return function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({id},f)}));return(0,jsx_runtime.jsx)(components.aH,{title:name,subtitle:description,dense,children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,children:(0,jsx_runtime.jsx)(DataGrid._,{rows,columns,density:dense?"compact":"standard",disableRowSelectionOnClick:!0,pageSizeOptions:[5],initialState:{pagination:{paginationModel:{pageSize:5}}},sx:{height:400}})})})};ObjectArrayGroup.displayName="ObjectArrayGroup";var ObjectDetailGroup=function ObjectDetailGroup(_ref3){var _ref3$field=_ref3.field,name=_ref3$field.name,description=_ref3$field.description,value=_ref3$field.value,instance=_ref3.instance,dense=_ref3.dense,breakpointsCounter=newBreakpointsCounter();return(0,jsx_runtime.jsx)(components.aH,{title:name,subtitle:description,dense,children:value.map((function(field){var id=field.id,xs=field.xs,sm=field.sm,md=field.md,lg=field.lg,xl=field.xl,bordered=breakpointsCounter.increment(field);return(0,jsx_runtime.jsx)(components.qT,{xs,sm,md,lg,xl,bordered,children:singleDetailValueFactory(field,instance,{dense})},id)}))})};ObjectDetailGroup.displayName="ObjectDetailGroup";var ObjectDetails=function ObjectDetails(_ref4){var model=_ref4.model,instance=_ref4.instance,dense=_ref4.dense,breakpointsCounter=newBreakpointsCounter();return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,spacing:dense?1:2,children:model.fields.map((function(field){var id=field.id,type=field.type,_field$xs=field.xs,xs=void 0===_field$xs?3:_field$xs,_field$sm=field.sm,sm=void 0===_field$sm?0:_field$sm,_field$md=field.md,md=void 0===_field$md?0:_field$md,_field$lg=field.lg,lg=void 0===_field$lg?0:_field$lg,_field$xl=field.xl,xl=void 0===_field$xl?0:_field$xl;if("group"===type)return breakpointsCounter.increment({xs:12}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,children:(0,jsx_runtime.jsx)(ObjectDetailGroup,{field,instance:instance[id],dense})},id);if("group[]"===type)return breakpointsCounter.increment({xs:12}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,children:(0,jsx_runtime.jsx)(ObjectArrayGroup,{field,instance:instance[id],dense})},id);var bordered=breakpointsCounter.increment(field);return(0,jsx_runtime.jsx)(components.qT,{xs,sm,md,lg,xl,bordered,children:singleDetailValueFactory(field,instance,{dense})},id)}))})};ObjectDetails.displayName="ObjectDetails";try{ObjectDetails.displayName="ObjectDetails",ObjectDetails.__docgenInfo={description:"",displayName:"ObjectDetails",props:{model:{defaultValue:null,description:"",name:"model",required:!0,type:{name:"Model"}},dense:{defaultValue:null,description:"",name:"dense",required:!1,type:{name:"boolean"}},instance:{defaultValue:null,description:"",name:"instance",required:!0,type:{name:"BasicModelInstance"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/generators/object-details/object-details.tsx#ObjectDetails"]={docgenInfo:ObjectDetails.__docgenInfo,name:"ObjectDetails",path:"src/generators/object-details/object-details.tsx#ObjectDetails"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Rd:()=>withFullHeight,bw:()=>withLocalizationProvider,ey:()=>withMemoryRouter,jI:()=>withActionRouter,lJ:()=>StoryDialogManager,li:()=>withContainer,ps:()=>withNotificationCenter,w3:()=>withPadding});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router/dist/index.js"),_providers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/index.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_mui_x_date_pickers___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js"),_mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/x-date-pickers/AdapterDateFns/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var replaceAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("navigator/replace"),goAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("navigator/go"),pushAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("navigator/push"),closeDialogAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("dialog/close"),withActionRouter=function withActionRouter(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$location=_ref.location,location=void 0===_ref$location?"/":_ref$location,_ref$path=_ref.path,path=void 0===_ref$path?"/":_ref$path;return function(Story){var navigator={replace:function replace(args){return replaceAction(args)},go:function go(args){return goAction(args)},push:function push(args){return pushAction(args)},createHref:function createHref(){return""}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.F0,{location,navigator,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Z5,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.AW,{path,element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})})})}},withMemoryRouter=function withMemoryRouter(){var initialEntries=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["/"];return function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.VA,{initialEntries,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})}},withNotificationCenter=function withNotificationCenter(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_providers__WEBPACK_IMPORTED_MODULE_1__.Dg,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})};withNotificationCenter.displayName="withNotificationCenter";var withFullHeight=function withFullHeight(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{height:"100vh",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})};withFullHeight.displayName="withFullHeight";var withContainer=function withContainer(_ref2){var width=_ref2.width,height=_ref2.height,bordered=_ref2.bordered,backgroundColor=_ref2.backgroundColor,padding=_ref2.padding;return function(Story){var sx={backgroundColor,padding};return bordered&&(sx=_objectSpread(_objectSpread({},sx),{},{border:"solid 1px black"})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{width,height,sx,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})}},withPadding=function withPadding(){var padding=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{padding,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})}},withLocalizationProvider=function withLocalizationProvider(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_x_date_pickers___WEBPACK_IMPORTED_MODULE_6__._,{dateAdapter:_mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_7__.H,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})};withLocalizationProvider.displayName="withLocalizationProvider";var StoryDialogManager=function StoryDialogManager(_ref3){var C=_ref3.component,args=_ref3.args,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1],handleClose=function handleClose(key){setOpen(!1),closeDialogAction(key)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,{variant:"contained",onClick:function onClick(){return setOpen(!0)},children:"Open"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(C,_objectSpread(_objectSpread({},args),{},{open,onClose:function onClose(){return handleClose("close")},onCancel:function onCancel(){return handleClose("cancel")},onAccept:function onAccept(){return handleClose("accept")},onConfirm:function onConfirm(){return handleClose("confirm")},onSubmit:function onSubmit(){return handleClose("submit")}}))]})};StoryDialogManager.displayName="StoryDialogManager";try{withActionRouter.displayName="withActionRouter",withActionRouter.__docgenInfo={description:"",displayName:"withActionRouter",props:{location:{defaultValue:{value:"/"},description:"",name:"location",required:!1,type:{name:"string"}},path:{defaultValue:{value:"/"},description:"",name:"path",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withActionRouter"]={docgenInfo:withActionRouter.__docgenInfo,name:"withActionRouter",path:"src/storybook.tsx#withActionRouter"})}catch(__react_docgen_typescript_loader_error){}try{withMemoryRouter.displayName="withMemoryRouter",withMemoryRouter.__docgenInfo={description:"",displayName:"withMemoryRouter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withMemoryRouter"]={docgenInfo:withMemoryRouter.__docgenInfo,name:"withMemoryRouter",path:"src/storybook.tsx#withMemoryRouter"})}catch(__react_docgen_typescript_loader_error){}try{withNotificationCenter.displayName="withNotificationCenter",withNotificationCenter.__docgenInfo={description:"",displayName:"withNotificationCenter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withNotificationCenter"]={docgenInfo:withNotificationCenter.__docgenInfo,name:"withNotificationCenter",path:"src/storybook.tsx#withNotificationCenter"})}catch(__react_docgen_typescript_loader_error){}try{withFullHeight.displayName="withFullHeight",withFullHeight.__docgenInfo={description:"",displayName:"withFullHeight",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withFullHeight"]={docgenInfo:withFullHeight.__docgenInfo,name:"withFullHeight",path:"src/storybook.tsx#withFullHeight"})}catch(__react_docgen_typescript_loader_error){}try{withContainer.displayName="withContainer",withContainer.__docgenInfo={description:"",displayName:"withContainer",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withContainer"]={docgenInfo:withContainer.__docgenInfo,name:"withContainer",path:"src/storybook.tsx#withContainer"})}catch(__react_docgen_typescript_loader_error){}try{withPadding.displayName="withPadding",withPadding.__docgenInfo={description:"",displayName:"withPadding",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withPadding"]={docgenInfo:withPadding.__docgenInfo,name:"withPadding",path:"src/storybook.tsx#withPadding"})}catch(__react_docgen_typescript_loader_error){}try{withLocalizationProvider.displayName="withLocalizationProvider",withLocalizationProvider.__docgenInfo={description:"",displayName:"withLocalizationProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withLocalizationProvider"]={docgenInfo:withLocalizationProvider.__docgenInfo,name:"withLocalizationProvider",path:"src/storybook.tsx#withLocalizationProvider"})}catch(__react_docgen_typescript_loader_error){}try{StoryDialogManager.displayName="StoryDialogManager",StoryDialogManager.__docgenInfo={description:"",displayName:"StoryDialogManager",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"FunctionComponent<any>"}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#StoryDialogManager"]={docgenInfo:StoryDialogManager.__docgenInfo,name:"StoryDialogManager",path:"src/storybook.tsx#StoryDialogManager"})}catch(__react_docgen_typescript_loader_error){}},"./src/generators/object-details/object-details.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Dense:()=>Dense,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _object_details__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/generators/object-details/object-details.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/storybook.tsx"),_generators_mock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/generators/generators.mock.ts"),instance=(0,_generators_mock__WEBPACK_IMPORTED_MODULE_2__.Yv)(_generators_mock__WEBPACK_IMPORTED_MODULE_2__.$3);const __WEBPACK_DEFAULT_EXPORT__={title:"Generators/ObjectDetails",component:_object_details__WEBPACK_IMPORTED_MODULE_0__.g,decorators:[(0,_storybook__WEBPACK_IMPORTED_MODULE_1__.w3)()],parameters:{layout:"fullscreen"}};var Default={args:{model:_generators_mock__WEBPACK_IMPORTED_MODULE_2__.$3,instance}},Dense={args:{model:_generators_mock__WEBPACK_IMPORTED_MODULE_2__.$3,instance,dense:!0}},__namedExportsOrder=["Default","Dense"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    model: mockModel,\n    instance: instance\n  }\n}",...Default.parameters?.docs?.source}}},Dense.parameters={...Dense.parameters,docs:{...Dense.parameters?.docs,source:{originalSource:"{\n  args: {\n    model: mockModel,\n    instance: instance,\n    dense: true\n  }\n}",...Dense.parameters?.docs?.source}}}}}]);