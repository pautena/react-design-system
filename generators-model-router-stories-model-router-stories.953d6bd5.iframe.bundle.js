"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[358],{"./src/generators/model-router/model-router.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>ModelRouter});__webpack_require__("./node_modules/react/index.js");var react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router/dist/index.js"),_screens__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/generators/model-router/screens/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ModelRouter=function ModelRouter(props){var _props$updateFeature=props.updateFeature,updateFeature=void 0===_props$updateFeature||_props$updateFeature,_props$addFeature=props.addFeature,addFeature=void 0===_props$addFeature||_props$addFeature,_props$detailsFeature=props.detailsFeature,detailsFeature=void 0===_props$detailsFeature||_props$detailsFeature;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Z5,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.AW,{path:"",element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_1__.Wc,_objectSpread({},props))}),detailsFeature&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.AW,{path:":id",element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_1__.It,_objectSpread({},props))}),addFeature&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.AW,{path:"add",element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_1__.B7,_objectSpread({},props))}),updateFeature&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.AW,{path:":id/update",element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_1__.DB,_objectSpread({},props))})]})};ModelRouter.displayName="ModelRouter";try{ModelRouter.displayName="ModelRouter",ModelRouter.__docgenInfo={description:"",displayName:"ModelRouter",props:{onRequestItem:{defaultValue:null,description:"Callback executed each time we want\nthe details information of an item",name:"onRequestItem",required:!0,type:{name:"(id: string) => void"}},itemRequest:{defaultValue:null,description:"Current status of the request to retrieve\nan item",name:"itemRequest",required:!0,type:{name:"RequestState"}},detailsItem:{defaultValue:null,description:"Item to be displayed",name:"detailsItem",required:!1,type:{name:"BasicModelInstance"}},modelName:{defaultValue:null,description:"UI-friendly string that represents the model",name:"modelName",required:!0,type:{name:"string"}},model:{defaultValue:null,description:"Structure that represents the fields of the model",name:"model",required:!0,type:{name:"Model"}},basePath:{defaultValue:null,description:"Path to attach before each internal ModelRouter path",name:"basePath",required:!1,type:{name:"string"}},deleteFeature:{defaultValue:null,description:"If true delete features are enabled",name:"deleteFeature",required:!1,type:{name:"boolean"}},updateFeature:{defaultValue:null,description:"If true update features are enabled",name:"updateFeature",required:!1,type:{name:"boolean"}},addFeature:{defaultValue:null,description:"If true add features are enabled",name:"addFeature",required:!1,type:{name:"boolean"}},detailsFeature:{defaultValue:null,description:"If true details features are enabled",name:"detailsFeature",required:!1,type:{name:"boolean"}},onRequestList:{defaultValue:null,description:"Callback executed each time the list screen\nrequests for a data update",name:"onRequestList",required:!0,type:{name:"() => void"}},listData:{defaultValue:null,description:"List of items to be displayed in the list screen",name:"listData",required:!0,type:{name:"T[]"}},onClickDeleteItem:{defaultValue:null,description:"Callback executed when the user clicks an option\nto delete an item",name:"onClickDeleteItem",required:!0,type:{name:"(item: T) => void"}},listRequest:{defaultValue:null,description:"Current status of the request to retrieve\nthe list items",name:"listRequest",required:!0,type:{name:"RequestState"}},deleteRequest:{defaultValue:null,description:"Current status of the request to delete\nan item",name:"deleteRequest",required:!0,type:{name:"RequestState"}},onSubmitNewItem:{defaultValue:null,description:"Callback executed when the user wants to\nadd a new item",name:"onSubmitNewItem",required:!0,type:{name:"(obj: T) => void"}},newItemRequest:{defaultValue:null,description:"Current status of the request to retrieve\nadd a new item",name:"newItemRequest",required:!0,type:{name:"RequestState"}},onSubmitUpdateItem:{defaultValue:null,description:"Callback executed when the user wants to update\nan item",name:"onSubmitUpdateItem",required:!0,type:{name:"(obj: T) => void"}},submitUpdateItemRequest:{defaultValue:null,description:"Current status of the request to update an item",name:"submitUpdateItemRequest",required:!0,type:{name:"RequestState"}},updateItemRequest:{defaultValue:null,description:"Current status of the request to retrieve\nthe item to be updated",name:"updateItemRequest",required:!0,type:{name:"RequestState"}},onRequestUpdateItem:{defaultValue:null,description:"Callback executed to retrive the item that\nhas to going tobe updated",name:"onRequestUpdateItem",required:!0,type:{name:"(id: string) => void"}},updateItem:{defaultValue:null,description:"Item that is going to be updated",name:"updateItem",required:!1,type:{name:"BasicModelInstance"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/generators/model-router/model-router.tsx#ModelRouter"]={docgenInfo:ModelRouter.__docgenInfo,name:"ModelRouter",path:"src/generators/model-router/model-router.tsx#ModelRouter"})}catch(__react_docgen_typescript_loader_error){}},"./src/generators/model-router/stories/templates.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gf:()=>REQUEST_TIMEOUT,Kg:()=>onRequestItem,RF:()=>item1,UC:()=>onSubmitUpdateAction,aT:()=>data,kO:()=>onRequestListAction,mm:()=>onSubmitNewItemAction,vk:()=>onRequestDeleteAction,yO:()=>onRequestUpdateItemAction});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_generators_mock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/generators/generators.mock.ts"),_model_router_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/generators/model-router/model-router.types.ts"),onRequestListAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Request list data"),onSubmitNewItemAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Submit new item"),onRequestItem=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Details screen mount"),onRequestUpdateItemAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Request update instance"),onSubmitUpdateAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Submit update form"),onRequestDeleteAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("click delete item option"),REQUEST_TIMEOUT=2e3,item1=(0,_generators_mock__WEBPACK_IMPORTED_MODULE_1__.Yv)(_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,100),data=[item1,(0,_generators_mock__WEBPACK_IMPORTED_MODULE_1__.Yv)(_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,101),(0,_generators_mock__WEBPACK_IMPORTED_MODULE_1__.Yv)(_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,102),(0,_generators_mock__WEBPACK_IMPORTED_MODULE_1__.Yv)(_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,103),(0,_generators_mock__WEBPACK_IMPORTED_MODULE_1__.Yv)(_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,104)];_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,_model_router_types__WEBPACK_IMPORTED_MODULE_2__.q$,_model_router_types__WEBPACK_IMPORTED_MODULE_2__.q$,_model_router_types__WEBPACK_IMPORTED_MODULE_2__.q$,_model_router_types__WEBPACK_IMPORTED_MODULE_2__.q$,_model_router_types__WEBPACK_IMPORTED_MODULE_2__.q$,_model_router_types__WEBPACK_IMPORTED_MODULE_2__.q$;try{onRequestListAction.displayName="onRequestListAction",onRequestListAction.__docgenInfo={description:"",displayName:"onRequestListAction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/generators/model-router/stories/templates.tsx#onRequestListAction"]={docgenInfo:onRequestListAction.__docgenInfo,name:"onRequestListAction",path:"src/generators/model-router/stories/templates.tsx#onRequestListAction"})}catch(__react_docgen_typescript_loader_error){}try{onSubmitNewItemAction.displayName="onSubmitNewItemAction",onSubmitNewItemAction.__docgenInfo={description:"",displayName:"onSubmitNewItemAction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/generators/model-router/stories/templates.tsx#onSubmitNewItemAction"]={docgenInfo:onSubmitNewItemAction.__docgenInfo,name:"onSubmitNewItemAction",path:"src/generators/model-router/stories/templates.tsx#onSubmitNewItemAction"})}catch(__react_docgen_typescript_loader_error){}try{onRequestItem.displayName="onRequestItem",onRequestItem.__docgenInfo={description:"",displayName:"onRequestItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/generators/model-router/stories/templates.tsx#onRequestItem"]={docgenInfo:onRequestItem.__docgenInfo,name:"onRequestItem",path:"src/generators/model-router/stories/templates.tsx#onRequestItem"})}catch(__react_docgen_typescript_loader_error){}try{onRequestUpdateItemAction.displayName="onRequestUpdateItemAction",onRequestUpdateItemAction.__docgenInfo={description:"",displayName:"onRequestUpdateItemAction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/generators/model-router/stories/templates.tsx#onRequestUpdateItemAction"]={docgenInfo:onRequestUpdateItemAction.__docgenInfo,name:"onRequestUpdateItemAction",path:"src/generators/model-router/stories/templates.tsx#onRequestUpdateItemAction"})}catch(__react_docgen_typescript_loader_error){}try{onSubmitUpdateAction.displayName="onSubmitUpdateAction",onSubmitUpdateAction.__docgenInfo={description:"",displayName:"onSubmitUpdateAction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/generators/model-router/stories/templates.tsx#onSubmitUpdateAction"]={docgenInfo:onSubmitUpdateAction.__docgenInfo,name:"onSubmitUpdateAction",path:"src/generators/model-router/stories/templates.tsx#onSubmitUpdateAction"})}catch(__react_docgen_typescript_loader_error){}try{onRequestDeleteAction.displayName="onRequestDeleteAction",onRequestDeleteAction.__docgenInfo={description:"",displayName:"onRequestDeleteAction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/generators/model-router/stories/templates.tsx#onRequestDeleteAction"]={docgenInfo:onRequestDeleteAction.__docgenInfo,name:"onRequestDeleteAction",path:"src/generators/model-router/stories/templates.tsx#onRequestDeleteAction"})}catch(__react_docgen_typescript_loader_error){}},"./src/generators/model-router/stories/model-router.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DemoModelRouter:()=>DemoModelRouter,DummyModelRouter:()=>DummyModelRouter,InternalModelRouter:()=>InternalModelRouter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/storybook.tsx"),_model_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/generators/model-router/model-router.tsx"),_model_router_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/generators/model-router/model-router.types.ts"),_generators_mock__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/generators/generators.mock.ts"),_templates__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/generators/model-router/stories/templates.tsx"),react_router_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-router/dist/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var DummyModelRouter=function DummyModelRouter(args){var requestTimeout=args.requestTimeout,initialData=args.initialData,_args$basePath=args.basePath,basePath=void 0===_args$basePath?"":_args$basePath,_args$deleteFeature=args.deleteFeature,deleteFeature=void 0===_args$deleteFeature||_args$deleteFeature,_args$updateFeature=args.updateFeature,updateFeature=void 0===_args$updateFeature||_args$updateFeature,_args$addFeature=args.addFeature,addFeature=void 0===_args$addFeature||_args$addFeature,_args$detailsFeature=args.detailsFeature,detailsFeature=void 0===_args$detailsFeature||_args$detailsFeature,onRequestListAction=args.onRequestListAction,onSubmitNewItemAction=args.onSubmitNewItemAction,onRequestItem=args.onRequestItem,onRequestUpdateItemAction=args.onRequestUpdateItemAction,onSubmitUpdateAction=args.onSubmitUpdateAction,onRequestDeleteAction=args.onRequestDeleteAction,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),2),data=_useState2[0],setData=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),2),updateItem=_useState4[0],setUpdateItem=_useState4[1],_useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$),2),listRequestState=_useState6[0],setListRequestState=_useState6[1],_useState8=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$),2),newItemRequestState=_useState8[0],setNewItemRequestState=_useState8[1],_useState10=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$),2),submitUpdateItemRequestState=_useState10[0],setSubmitUpdateItemRequestState=_useState10[1],_useState12=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$),2),removeRequestState=_useState12[0],setRemoveRequestState=_useState12[1],_useState14=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$),2),detailRequestState=_useState14[0],setDetailRequestState=_useState14[1],_useState16=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$),2),updateItemRequestState=_useState16[0],setUpdateItemRequestState=_useState16[1],_useState18=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),2),detailInstance=_useState18[0],setDetailInstance=_useState18[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_model_router__WEBPACK_IMPORTED_MODULE_2__.F,_objectSpread(_objectSpread({},args),{},{modelName:"Items",model:_generators_mock__WEBPACK_IMPORTED_MODULE_4__.$3,basePath,deleteFeature,updateFeature,addFeature,detailsFeature,onRequestList:function handleRequestList(){onRequestListAction(),setListRequestState({idle:!1,loading:!0}),setTimeout((function(){setData(initialData),setListRequestState({idle:!0,loading:!1,success:!0})}),requestTimeout)},listData:data,listRequest:listRequestState,deleteRequest:removeRequestState,onClickDeleteItem:function handleClickDeleteItem(item){setRemoveRequestState({idle:!1,loading:!0}),onRequestDeleteAction(item),setTimeout((function(){setData((function(d){return _toConsumableArray(d.filter((function(d){return d!==item})))})),setRemoveRequestState({idle:!0,loading:!1,success:!0})}),requestTimeout)},itemRequest:detailRequestState,detailsItem:detailInstance,onRequestItem:function handleRequestItem(id){setDetailInstance(void 0),setDetailRequestState({idle:!1,loading:!0}),onRequestItem(id),setTimeout((function(){setDetailInstance(null==data?void 0:data.find((function(d){return d.id===id}))),setDetailRequestState({idle:!0,loading:!1,success:!0})}),requestTimeout)},newItemRequest:newItemRequestState,onSubmitNewItem:function handleSubmitNewItem(obj){setNewItemRequestState({idle:!1,loading:!0}),onSubmitNewItemAction(obj),setTimeout((function(){setData((function(d){return[].concat(_toConsumableArray(d),[obj])})),setNewItemRequestState({idle:!0,loading:!1,success:!0})}),requestTimeout)},submitUpdateItemRequest:submitUpdateItemRequestState,updateItemRequest:updateItemRequestState,updateItem,onRequestUpdateItem:function handleRequestUpdateItem(id){setUpdateItemRequestState({idle:!1,loading:!0}),onRequestUpdateItemAction(id),setTimeout((function(){setUpdateItem(null==data?void 0:data.find((function(d){return d.id===id}))),setUpdateItemRequestState({idle:!0,loading:!1,success:!0})}),requestTimeout)},onSubmitUpdateItem:function handleSubmitUpdateItem(obj){setSubmitUpdateItemRequestState({idle:!1,loading:!0}),onSubmitUpdateAction(obj),setTimeout((function(){setData((function(d){return _toConsumableArray((d||[]).map((function(item){return item===obj?obj:item})))})),setSubmitUpdateItemRequestState({idle:!0,loading:!1,success:!0})}),requestTimeout)}}))};DummyModelRouter.displayName="DummyModelRouter";var InternalModelRouter=function InternalModelRouter(){var navigate=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.s0)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Z5,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.AW,{path:"/",element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Z,{children:"Internal model route"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Z,{variant:"contained",onClick:function onClick(){return navigate("/internal")},children:"Go to Internal"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.AW,{path:"/internal/*",element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_model_router__WEBPACK_IMPORTED_MODULE_2__.F,{modelName:"Items",model:_generators_mock__WEBPACK_IMPORTED_MODULE_4__.$3,basePath:"/internal",onRequestItem:function onRequestItem(){return null},itemRequest:_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$,onRequestList:function onRequestList(){return null},listData:_templates__WEBPACK_IMPORTED_MODULE_5__.aT,onClickDeleteItem:function onClickDeleteItem(){return null},listRequest:_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$,deleteRequest:_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$,onSubmitNewItem:function onSubmitNewItem(){return null},newItemRequest:_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$,onSubmitUpdateItem:function onSubmitUpdateItem(){return null},submitUpdateItemRequest:_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$,updateItemRequest:_model_router_types__WEBPACK_IMPORTED_MODULE_3__.q$,onRequestUpdateItem:function onRequestUpdateItem(){return null}})})]})};InternalModelRouter.displayName="InternalModelRouter";const __WEBPACK_DEFAULT_EXPORT__={title:"Generators/ModelRouter/DummyModelRouter",component:DummyModelRouter,decorators:[(0,_storybook__WEBPACK_IMPORTED_MODULE_1__.ey)(),_storybook__WEBPACK_IMPORTED_MODULE_1__.ps,_storybook__WEBPACK_IMPORTED_MODULE_1__.bw],parameters:{layout:"fullscreen"}};var DemoModelRouter={args:{requestTimeout:_templates__WEBPACK_IMPORTED_MODULE_5__.Gf,initialData:_templates__WEBPACK_IMPORTED_MODULE_5__.aT,onRequestListAction:_templates__WEBPACK_IMPORTED_MODULE_5__.kO,onSubmitNewItemAction:_templates__WEBPACK_IMPORTED_MODULE_5__.mm,onRequestItem:_templates__WEBPACK_IMPORTED_MODULE_5__.Kg,onRequestUpdateItemAction:_templates__WEBPACK_IMPORTED_MODULE_5__.yO,onSubmitUpdateAction:_templates__WEBPACK_IMPORTED_MODULE_5__.UC,onRequestDeleteAction:_templates__WEBPACK_IMPORTED_MODULE_5__.vk}},__namedExportsOrder=["DummyModelRouter","InternalModelRouter","DemoModelRouter"];DummyModelRouter.parameters={...DummyModelRouter.parameters,docs:{...DummyModelRouter.parameters?.docs,source:{originalSource:'function DummyModelRouter(args) {\n  var requestTimeout = args.requestTimeout,\n    initialData = args.initialData,\n    _args$basePath = args.basePath,\n    basePath = _args$basePath === void 0 ? "" : _args$basePath,\n    _args$deleteFeature = args.deleteFeature,\n    deleteFeature = _args$deleteFeature === void 0 ? true : _args$deleteFeature,\n    _args$updateFeature = args.updateFeature,\n    updateFeature = _args$updateFeature === void 0 ? true : _args$updateFeature,\n    _args$addFeature = args.addFeature,\n    addFeature = _args$addFeature === void 0 ? true : _args$addFeature,\n    _args$detailsFeature = args.detailsFeature,\n    detailsFeature = _args$detailsFeature === void 0 ? true : _args$detailsFeature,\n    onRequestListAction = args.onRequestListAction,\n    onSubmitNewItemAction = args.onSubmitNewItemAction,\n    onRequestItem = args.onRequestItem,\n    onRequestUpdateItemAction = args.onRequestUpdateItemAction,\n    onSubmitUpdateAction = args.onSubmitUpdateAction,\n    onRequestDeleteAction = args.onRequestDeleteAction;\n  var _useState = useState([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    data = _useState2[0],\n    setData = _useState2[1];\n  var _useState3 = useState(undefined),\n    _useState4 = _slicedToArray(_useState3, 2),\n    updateItem = _useState4[0],\n    setUpdateItem = _useState4[1];\n  var _useState5 = useState(IdleRequest),\n    _useState6 = _slicedToArray(_useState5, 2),\n    listRequestState = _useState6[0],\n    setListRequestState = _useState6[1];\n  var _useState7 = useState(IdleRequest),\n    _useState8 = _slicedToArray(_useState7, 2),\n    newItemRequestState = _useState8[0],\n    setNewItemRequestState = _useState8[1];\n  var _useState9 = useState(IdleRequest),\n    _useState10 = _slicedToArray(_useState9, 2),\n    submitUpdateItemRequestState = _useState10[0],\n    setSubmitUpdateItemRequestState = _useState10[1];\n  var _useState11 = useState(IdleRequest),\n    _useState12 = _slicedToArray(_useState11, 2),\n    removeRequestState = _useState12[0],\n    setRemoveRequestState = _useState12[1];\n  var _useState13 = useState(IdleRequest),\n    _useState14 = _slicedToArray(_useState13, 2),\n    detailRequestState = _useState14[0],\n    setDetailRequestState = _useState14[1];\n  var _useState15 = useState(IdleRequest),\n    _useState16 = _slicedToArray(_useState15, 2),\n    updateItemRequestState = _useState16[0],\n    setUpdateItemRequestState = _useState16[1];\n  var _useState17 = useState(undefined),\n    _useState18 = _slicedToArray(_useState17, 2),\n    detailInstance = _useState18[0],\n    setDetailInstance = _useState18[1];\n  var handleRequestList = function handleRequestList() {\n    onRequestListAction();\n    setListRequestState({\n      idle: false,\n      loading: true\n    });\n    setTimeout(function () {\n      setData(initialData);\n      setListRequestState({\n        idle: true,\n        loading: false,\n        success: true\n      });\n    }, requestTimeout);\n  };\n  var handleClickDeleteItem = function handleClickDeleteItem(item) {\n    setRemoveRequestState({\n      idle: false,\n      loading: true\n    });\n    onRequestDeleteAction(item);\n    setTimeout(function () {\n      setData(function (d) {\n        return _toConsumableArray(d.filter(function (d) {\n          return d !== item;\n        }));\n      });\n      setRemoveRequestState({\n        idle: true,\n        loading: false,\n        success: true\n      });\n    }, requestTimeout);\n  };\n  var handleSubmitNewItem = function handleSubmitNewItem(obj) {\n    setNewItemRequestState({\n      idle: false,\n      loading: true\n    });\n    onSubmitNewItemAction(obj);\n    setTimeout(function () {\n      setData(function (d) {\n        return [].concat(_toConsumableArray(d), [obj]);\n      });\n      setNewItemRequestState({\n        idle: true,\n        loading: false,\n        success: true\n      });\n    }, requestTimeout);\n  };\n  var handleRequestItem = function handleRequestItem(id) {\n    setDetailInstance(undefined);\n    setDetailRequestState({\n      idle: false,\n      loading: true\n    });\n    onRequestItem(id);\n    setTimeout(function () {\n      setDetailInstance(data === null || data === void 0 ? void 0 : data.find(function (d) {\n        return d.id === id;\n      }));\n      setDetailRequestState({\n        idle: true,\n        loading: false,\n        success: true\n      });\n    }, requestTimeout);\n  };\n  var handleRequestUpdateItem = function handleRequestUpdateItem(id) {\n    setUpdateItemRequestState({\n      idle: false,\n      loading: true\n    });\n    onRequestUpdateItemAction(id);\n    setTimeout(function () {\n      setUpdateItem(data === null || data === void 0 ? void 0 : data.find(function (d) {\n        return d.id === id;\n      }));\n      setUpdateItemRequestState({\n        idle: true,\n        loading: false,\n        success: true\n      });\n    }, requestTimeout);\n  };\n  var handleSubmitUpdateItem = function handleSubmitUpdateItem(obj) {\n    setSubmitUpdateItemRequestState({\n      idle: false,\n      loading: true\n    });\n    onSubmitUpdateAction(obj);\n    setTimeout(function () {\n      setData(function (d) {\n        return _toConsumableArray((d || []).map(function (item) {\n          if (item === obj) {\n            return obj;\n          }\n          return item;\n        }));\n      });\n      setSubmitUpdateItemRequestState({\n        idle: true,\n        loading: false,\n        success: true\n      });\n    }, requestTimeout);\n  };\n  return /*#__PURE__*/_jsx(ModelRouter, _objectSpread(_objectSpread({}, args), {}, {\n    modelName: "Items",\n    model: mockModel,\n    basePath: basePath,\n    deleteFeature: deleteFeature,\n    updateFeature: updateFeature,\n    addFeature: addFeature,\n    detailsFeature: detailsFeature,\n    onRequestList: handleRequestList,\n    listData: data,\n    listRequest: listRequestState,\n    deleteRequest: removeRequestState,\n    onClickDeleteItem: handleClickDeleteItem,\n    itemRequest: detailRequestState,\n    detailsItem: detailInstance,\n    onRequestItem: handleRequestItem,\n    newItemRequest: newItemRequestState,\n    onSubmitNewItem: handleSubmitNewItem,\n    submitUpdateItemRequest: submitUpdateItemRequestState,\n    updateItemRequest: updateItemRequestState,\n    updateItem: updateItem,\n    onRequestUpdateItem: handleRequestUpdateItem,\n    onSubmitUpdateItem: handleSubmitUpdateItem\n  }));\n}',...DummyModelRouter.parameters?.docs?.source}}},InternalModelRouter.parameters={...InternalModelRouter.parameters,docs:{...InternalModelRouter.parameters?.docs,source:{originalSource:'function InternalModelRouter() {\n  var navigate = useNavigate();\n  return /*#__PURE__*/_jsxs(Routes, {\n    children: [/*#__PURE__*/_jsx(Route, {\n      path: "/",\n      element: /*#__PURE__*/_jsxs(Box, {\n        children: [/*#__PURE__*/_jsx(Typography, {\n          children: "Internal model route"\n        }), /*#__PURE__*/_jsx(Button, {\n          variant: "contained",\n          onClick: function onClick() {\n            return navigate("/internal");\n          },\n          children: "Go to Internal"\n        })]\n      })\n    }), /*#__PURE__*/_jsx(Route, {\n      path: "/internal/*",\n      element: /*#__PURE__*/_jsx(ModelRouter, {\n        modelName: "Items",\n        model: mockModel,\n        basePath: "/internal",\n        onRequestItem: function onRequestItem() {\n          return null;\n        },\n        itemRequest: IdleRequest,\n        onRequestList: function onRequestList() {\n          return null;\n        },\n        listData: data,\n        onClickDeleteItem: function onClickDeleteItem() {\n          return null;\n        },\n        listRequest: IdleRequest,\n        deleteRequest: IdleRequest,\n        onSubmitNewItem: function onSubmitNewItem() {\n          return null;\n        },\n        newItemRequest: IdleRequest,\n        onSubmitUpdateItem: function onSubmitUpdateItem() {\n          return null;\n        },\n        submitUpdateItemRequest: IdleRequest,\n        updateItemRequest: IdleRequest,\n        onRequestUpdateItem: function onRequestUpdateItem() {\n          return null;\n        }\n      })\n    })]\n  });\n}',...InternalModelRouter.parameters?.docs?.source}}},DemoModelRouter.parameters={...DemoModelRouter.parameters,docs:{...DemoModelRouter.parameters?.docs,source:{originalSource:"{\n  args: {\n    requestTimeout: REQUEST_TIMEOUT,\n    initialData: data,\n    onRequestListAction: onRequestListAction,\n    onSubmitNewItemAction: onSubmitNewItemAction,\n    onRequestItem: onRequestItem,\n    onRequestUpdateItemAction: onRequestUpdateItemAction,\n    onSubmitUpdateAction: onSubmitUpdateAction,\n    onRequestDeleteAction: onRequestDeleteAction\n  }\n}",...DemoModelRouter.parameters?.docs?.source}}};try{DummyModelRouter.displayName="DummyModelRouter",DummyModelRouter.__docgenInfo={description:"",displayName:"DummyModelRouter",props:{requestTimeout:{defaultValue:null,description:"",name:"requestTimeout",required:!0,type:{name:"number"}},initialData:{defaultValue:null,description:"",name:"initialData",required:!0,type:{name:"MockInstance[]"}},basePath:{defaultValue:null,description:"",name:"basePath",required:!1,type:{name:"string"}},deleteFeature:{defaultValue:null,description:"",name:"deleteFeature",required:!1,type:{name:"boolean"}},updateFeature:{defaultValue:null,description:"",name:"updateFeature",required:!1,type:{name:"boolean"}},addFeature:{defaultValue:null,description:"",name:"addFeature",required:!1,type:{name:"boolean"}},detailsFeature:{defaultValue:null,description:"",name:"detailsFeature",required:!1,type:{name:"boolean"}},onRequestListAction:{defaultValue:null,description:"",name:"onRequestListAction",required:!0,type:{name:"HandlerFunction"}},onSubmitNewItemAction:{defaultValue:null,description:"",name:"onSubmitNewItemAction",required:!0,type:{name:"HandlerFunction"}},onRequestItem:{defaultValue:null,description:"",name:"onRequestItem",required:!0,type:{name:"HandlerFunction"}},onRequestUpdateItemAction:{defaultValue:null,description:"",name:"onRequestUpdateItemAction",required:!0,type:{name:"HandlerFunction"}},onSubmitUpdateAction:{defaultValue:null,description:"",name:"onSubmitUpdateAction",required:!0,type:{name:"HandlerFunction"}},onRequestDeleteAction:{defaultValue:null,description:"",name:"onRequestDeleteAction",required:!0,type:{name:"HandlerFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/generators/model-router/stories/model-router.stories.tsx#DummyModelRouter"]={docgenInfo:DummyModelRouter.__docgenInfo,name:"DummyModelRouter",path:"src/generators/model-router/stories/model-router.stories.tsx#DummyModelRouter"})}catch(__react_docgen_typescript_loader_error){}}}]);