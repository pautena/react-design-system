"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[9534],{"./node_modules/@mui/icons-material/ReportProblem.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_default=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"ReportProblem");exports.Z=_default},"./src/model-router/stories/details-screen.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Details:()=>Details,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Loading$parameters,_Loading$parameters2,_Loading$parameters2$,_Details$parameters,_Details$parameters2,_Details$parameters2$,_storybook__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/storybook.tsx"),_templates__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/model-router/stories/templates.tsx"),_screens__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/model-router/screens/index.ts"),_generators_generators_mock__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/generators/generators.mock.ts"),_model_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/model-router/index.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Generators/ModelRouter/DetailsScreen",component:_screens__WEBPACK_IMPORTED_MODULE_2__.It,decorators:[(0,_storybook__WEBPACK_IMPORTED_MODULE_0__.jI)({location:"/".concat(_templates__WEBPACK_IMPORTED_MODULE_1__.RF.id),path:"/:id"}),_storybook__WEBPACK_IMPORTED_MODULE_0__.ps],parameters:{layout:"fullscreen"}};var Loading={args:{modelName:"Items",model:_generators_generators_mock__WEBPACK_IMPORTED_MODULE_3__.$3,itemRequest:_model_router__WEBPACK_IMPORTED_MODULE_4__.MU}},Details={args:{modelName:"Items",model:_generators_generators_mock__WEBPACK_IMPORTED_MODULE_3__.$3,itemRequest:_model_router__WEBPACK_IMPORTED_MODULE_4__.q$,detailsItem:_templates__WEBPACK_IMPORTED_MODULE_1__.RF}};Loading.parameters=_objectSpread(_objectSpread({},Loading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    modelName: "Items",\n    model: mockModel,\n    itemRequest: LoadingRequest\n  }\n}'},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2$=_Loading$parameters2.docs)||void 0===_Loading$parameters2$?void 0:_Loading$parameters2$.source)})}),Details.parameters=_objectSpread(_objectSpread({},Details.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Details$parameters=Details.parameters)||void 0===_Details$parameters?void 0:_Details$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    modelName: "Items",\n    model: mockModel,\n    itemRequest: IdleRequest,\n    detailsItem: item1\n  }\n}'},null===(_Details$parameters2=Details.parameters)||void 0===_Details$parameters2||null===(_Details$parameters2$=_Details$parameters2.docs)||void 0===_Details$parameters2$?void 0:_Details$parameters2$.source)})});var __namedExportsOrder=["Loading","Details"]},"./src/model-router/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q$:()=>IdleRequest,MU:()=>LoadingRequest});__webpack_require__("./src/model-router/model-router.tsx");var IdleRequest={idle:!0},LoadingRequest={loading:!0}},"./src/model-router/model-router.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>ModelRouter});var react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_screens__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/model-router/screens/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ModelRouter=function ModelRouter(props){var _props$updateFeature=props.updateFeature,updateFeature=void 0===_props$updateFeature||_props$updateFeature,_props$addFeature=props.addFeature,addFeature=void 0===_props$addFeature||_props$addFeature,_props$detailsFeature=props.detailsFeature,detailsFeature=void 0===_props$detailsFeature||_props$detailsFeature;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Z5,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.AW,{path:"",element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_0__.Wc,_objectSpread({},props))}),detailsFeature&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.AW,{path:":id",element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_0__.It,_objectSpread({},props))}),addFeature&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.AW,{path:"add",element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_0__.B7,_objectSpread({},props))}),updateFeature&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.AW,{path:":id/update",element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_0__.DB,_objectSpread({},props))})]})};ModelRouter.displayName="ModelRouter";try{ModelRouter.displayName="ModelRouter",ModelRouter.__docgenInfo={description:"",displayName:"ModelRouter",props:{onRequestItem:{defaultValue:null,description:"Callback executed each time we want\nthe details information of an item",name:"onRequestItem",required:!0,type:{name:"(id: string) => void"}},itemRequest:{defaultValue:null,description:"Current status of the request to retrieve\nan item",name:"itemRequest",required:!0,type:{name:"RequestState"}},detailsItem:{defaultValue:null,description:"Item to be displayed",name:"detailsItem",required:!1,type:{name:"BasicModelInstance"}},modelName:{defaultValue:null,description:"UI-friendly string that represents the model",name:"modelName",required:!0,type:{name:"string"}},model:{defaultValue:null,description:"Structure that represents the fields of the model",name:"model",required:!0,type:{name:"Model"}},basePath:{defaultValue:null,description:"Path to attach before each internal ModelRouter path",name:"basePath",required:!1,type:{name:"string"}},deleteFeature:{defaultValue:null,description:"If true delete features are enabled",name:"deleteFeature",required:!1,type:{name:"boolean"}},updateFeature:{defaultValue:null,description:"If true update features are enabled",name:"updateFeature",required:!1,type:{name:"boolean"}},addFeature:{defaultValue:null,description:"If true add features are enabled",name:"addFeature",required:!1,type:{name:"boolean"}},detailsFeature:{defaultValue:null,description:"If true details features are enabled",name:"detailsFeature",required:!1,type:{name:"boolean"}},onRequestList:{defaultValue:null,description:"Callback executed each time the list screen\nrequests for a data update",name:"onRequestList",required:!0,type:{name:"() => void"}},listData:{defaultValue:null,description:"List of items to be displayed in the list screen",name:"listData",required:!0,type:{name:"T[]"}},onClickDeleteItem:{defaultValue:null,description:"Callback executed when the user clicks an option\nto delete an item",name:"onClickDeleteItem",required:!0,type:{name:"(item: T) => void"}},listRequest:{defaultValue:null,description:"Current status of the request to retrieve\nthe list items",name:"listRequest",required:!0,type:{name:"RequestState"}},deleteRequest:{defaultValue:null,description:"Current status of the request to delete\nan item",name:"deleteRequest",required:!0,type:{name:"RequestState"}},onSubmitNewItem:{defaultValue:null,description:"Callback executed when the user wants to\nadd a new item",name:"onSubmitNewItem",required:!0,type:{name:"(obj: T) => void"}},newItemRequest:{defaultValue:null,description:"Current status of the request to retrieve\nadd a new item",name:"newItemRequest",required:!0,type:{name:"RequestState"}},onSubmitUpdateItem:{defaultValue:null,description:"Callback executed when the user wants to update\nan item",name:"onSubmitUpdateItem",required:!0,type:{name:"(obj: T) => void"}},submitUpdateItemRequest:{defaultValue:null,description:"Current status of the request to update an item",name:"submitUpdateItemRequest",required:!0,type:{name:"RequestState"}},updateItemRequest:{defaultValue:null,description:"Current status of the request to retrieve\nthe item to be updated",name:"updateItemRequest",required:!0,type:{name:"RequestState"}},onRequestUpdateItem:{defaultValue:null,description:"Callback executed to retrive the item that\nhas to going tobe updated",name:"onRequestUpdateItem",required:!0,type:{name:"(id: string) => void"}},updateItem:{defaultValue:null,description:"Item that is going to be updated",name:"updateItem",required:!1,type:{name:"BasicModelInstance"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/model-router/model-router.tsx#ModelRouter"]={docgenInfo:ModelRouter.__docgenInfo,name:"ModelRouter",path:"src/model-router/model-router.tsx#ModelRouter"})}catch(__react_docgen_typescript_loader_error){}},"./src/model-router/screens/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B7:()=>AddScreen,It:()=>DetailsScreen,Wc:()=>ListScreen,DB:()=>UpdateScreen});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),model_form=__webpack_require__("./src/model-form/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts"),header_layout=__webpack_require__("./src/header-layout/index.ts"),notification_center=__webpack_require__("./src/notification-center/index.ts"),header=__webpack_require__("./src/header/index.ts"),content=__webpack_require__("./src/content/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UpdateScreen=function UpdateScreen(_ref){var model=_ref.model,modelName=_ref.modelName,_ref$basePath=_ref.basePath,basePath=void 0===_ref$basePath?"":_ref$basePath,submitUpdateItemRequest=_ref.submitUpdateItemRequest,updateItemRequest=_ref.updateItemRequest,updateItem=_ref.updateItem,onSubmitUpdateItem=_ref.onSubmitUpdateItem,onRequestUpdateItem=_ref.onRequestUpdateItem,_useParams$id=(0,dist.UO)().id,id=void 0===_useParams$id?"":_useParams$id,loading=updateItemRequest.loading||submitUpdateItemRequest.loading;return(0,react.useEffect)((function(){onRequestUpdateItem(id)}),[id]),(0,notification_center.nb)({title:"Item updated",message:"The item ".concat(id," has been updated successfully"),severity:"success"},!!submitUpdateItemRequest.success,{from:!1,to:!0}),(0,hooks.X)("".concat(basePath,"/"),!!submitUpdateItemRequest.success,{from:!1,to:!0}),(0,notification_center.nb)({title:"We had an error",message:submitUpdateItemRequest.error||"",severity:"error"},!!submitUpdateItemRequest.error,{from:!1,to:!0}),(0,jsx_runtime.jsxs)(header_layout.T,{loading,children:[(0,jsx_runtime.jsx)(header.h4,{title:"Edit ".concat(id),preset:"default",breadcrumbs:[{id:"list",text:modelName,link:"".concat(basePath,"/")},{id:"update",text:"Edit ".concat(id),link:"".concat(basePath,"/").concat(id,"/update")}]}),(0,jsx_runtime.jsx)(content.V,{children:(0,jsx_runtime.jsx)(model_form.Y,{model,initialValues:updateItem,saveButtonText:"Save",onSubmit:onSubmitUpdateItem})})]})};UpdateScreen.displayName="UpdateScreen";try{UpdateScreen.displayName="UpdateScreen",UpdateScreen.__docgenInfo={description:"",displayName:"UpdateScreen",props:{onSubmitUpdateItem:{defaultValue:null,description:"Callback executed when the user wants to update\nan item",name:"onSubmitUpdateItem",required:!0,type:{name:"(obj: T) => void"}},submitUpdateItemRequest:{defaultValue:null,description:"Current status of the request to update an item",name:"submitUpdateItemRequest",required:!0,type:{name:"RequestState"}},updateItemRequest:{defaultValue:null,description:"Current status of the request to retrieve\nthe item to be updated",name:"updateItemRequest",required:!0,type:{name:"RequestState"}},onRequestUpdateItem:{defaultValue:null,description:"Callback executed to retrive the item that\nhas to going tobe updated",name:"onRequestUpdateItem",required:!0,type:{name:"(id: string) => void"}},updateItem:{defaultValue:null,description:"Item that is going to be updated",name:"updateItem",required:!1,type:{name:"BasicModelInstance"}},modelName:{defaultValue:null,description:"UI-friendly string that represents the model",name:"modelName",required:!0,type:{name:"string"}},model:{defaultValue:null,description:"Structure that represents the fields of the model",name:"model",required:!0,type:{name:"Model"}},basePath:{defaultValue:{value:""},description:"Path to attach before each internal ModelRouter path",name:"basePath",required:!1,type:{name:"string"}},deleteFeature:{defaultValue:null,description:"If true delete features are enabled",name:"deleteFeature",required:!1,type:{name:"boolean"}},updateFeature:{defaultValue:null,description:"If true update features are enabled",name:"updateFeature",required:!1,type:{name:"boolean"}},addFeature:{defaultValue:null,description:"If true add features are enabled",name:"addFeature",required:!1,type:{name:"boolean"}},detailsFeature:{defaultValue:null,description:"If true details features are enabled",name:"detailsFeature",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/model-router/screens/update-screen.tsx#UpdateScreen"]={docgenInfo:UpdateScreen.__docgenInfo,name:"UpdateScreen",path:"src/model-router/screens/update-screen.tsx#UpdateScreen"})}catch(__react_docgen_typescript_loader_error){}var table_list=__webpack_require__("./src/table-list/index.ts"),ListScreen=function ListScreen(_ref){var model=_ref.model,modelName=_ref.modelName,listData=_ref.listData,listRequest=_ref.listRequest,deleteRequest=_ref.deleteRequest,_ref$basePath=_ref.basePath,basePath=void 0===_ref$basePath?"":_ref$basePath,_ref$deleteFeature=_ref.deleteFeature,deleteFeature=void 0===_ref$deleteFeature||_ref$deleteFeature,_ref$updateFeature=_ref.updateFeature,updateFeature=void 0===_ref$updateFeature||_ref$updateFeature,_ref$addFeature=_ref.addFeature,addFeature=void 0===_ref$addFeature||_ref$addFeature,_ref$detailsFeature=_ref.detailsFeature,detailsFeature=void 0===_ref$detailsFeature||_ref$detailsFeature,onRequestList=_ref.onRequestList,onClickDeleteItem=_ref.onClickDeleteItem,navigate=(0,dist.s0)();(0,react.useEffect)((function(){onRequestList()}),[]),(0,notification_center.nb)({title:"Item deleted",message:"The item has been deleted successfully",severity:"success"},!!deleteRequest.success,{from:!1,to:!0}),(0,notification_center.nb)({title:"We had an error",message:deleteRequest.error||"",severity:"error"},!!deleteRequest.error,{from:!1,to:!0});var handleClickListItem=detailsFeature?function(item){navigate("".concat(basePath,"/").concat(item.id))}:void 0,handleClickListOption=function handleClickListOption(optionId,item){"edit"===optionId?navigate("".concat(basePath,"/").concat(item.id,"/update")):onClickDeleteItem(item)},options=[];updateFeature&&options.push({id:"edit",label:"Edit",onClick:function onClick(item){return handleClickListOption("edit",item)}}),deleteFeature&&options.push({id:"remove",label:"Remove",onClick:function onClick(item){return handleClickListOption("remove",item)}});var actions=[];return addFeature&&actions.push({id:"add",text:"Add",href:"".concat(basePath,"/add")}),(0,jsx_runtime.jsxs)(header_layout.T,{loading:listRequest.loading||deleteRequest.loading,children:[(0,jsx_runtime.jsx)(header.h4,{title:modelName,preset:"default",actions:actions.length>0?actions:void 0}),(0,jsx_runtime.jsx)(content.V,{children:(0,jsx_runtime.jsx)(table_list.b,{columns:model.fields.filter((function(_ref2){return _ref2.listable})).map((function(_ref3){return{disablePadding:!1,id:_ref3.id,label:_ref3.name,numeric:"number"===_ref3.type,sort:!1}})),data:listData,defaultSort:model.fields[0].id,onClick:handleClickListItem,options:options.length>0?options:void 0})})]})};ListScreen.displayName="ListScreen";try{ListScreen.displayName="ListScreen",ListScreen.__docgenInfo={description:"",displayName:"ListScreen",props:{onRequestList:{defaultValue:null,description:"Callback executed each time the list screen\nrequests for a data update",name:"onRequestList",required:!0,type:{name:"() => void"}},listData:{defaultValue:null,description:"List of items to be displayed in the list screen",name:"listData",required:!0,type:{name:"T[]"}},onClickDeleteItem:{defaultValue:null,description:"Callback executed when the user clicks an option\nto delete an item",name:"onClickDeleteItem",required:!0,type:{name:"(item: T) => void"}},listRequest:{defaultValue:null,description:"Current status of the request to retrieve\nthe list items",name:"listRequest",required:!0,type:{name:"RequestState"}},deleteRequest:{defaultValue:null,description:"Current status of the request to delete\nan item",name:"deleteRequest",required:!0,type:{name:"RequestState"}},modelName:{defaultValue:null,description:"UI-friendly string that represents the model",name:"modelName",required:!0,type:{name:"string"}},model:{defaultValue:null,description:"Structure that represents the fields of the model",name:"model",required:!0,type:{name:"Model"}},basePath:{defaultValue:{value:""},description:"Path to attach before each internal ModelRouter path",name:"basePath",required:!1,type:{name:"string"}},deleteFeature:{defaultValue:{value:"true"},description:"If true delete features are enabled",name:"deleteFeature",required:!1,type:{name:"boolean"}},updateFeature:{defaultValue:{value:"true"},description:"If true update features are enabled",name:"updateFeature",required:!1,type:{name:"boolean"}},addFeature:{defaultValue:{value:"true"},description:"If true add features are enabled",name:"addFeature",required:!1,type:{name:"boolean"}},detailsFeature:{defaultValue:{value:"true"},description:"If true details features are enabled",name:"detailsFeature",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/model-router/screens/list-screen.tsx#ListScreen"]={docgenInfo:ListScreen.__docgenInfo,name:"ListScreen",path:"src/model-router/screens/list-screen.tsx#ListScreen"})}catch(__react_docgen_typescript_loader_error){}var AddScreen=function AddScreen(_ref){var model=_ref.model,modelName=_ref.modelName,_ref$basePath=_ref.basePath,basePath=void 0===_ref$basePath?"":_ref$basePath,onSubmitNewItem=_ref.onSubmitNewItem,newItemRequest=_ref.newItemRequest;return(0,notification_center.nb)({message:"Item added successfully",severity:"success"},!!newItemRequest.success,{from:!1,to:!0}),(0,hooks.X)("".concat(basePath,"/"),!!newItemRequest.success,{from:!1,to:!0}),(0,notification_center.nb)({title:"We had an error",message:newItemRequest.error||"",severity:"error"},!!newItemRequest.error,{from:!1,to:!0}),(0,jsx_runtime.jsxs)(header_layout.T,{loading:newItemRequest.loading,children:[(0,jsx_runtime.jsx)(header.h4,{title:"Add ".concat(modelName),preset:"default",breadcrumbs:[{id:"list",text:modelName,link:"".concat(basePath,"/")},{id:"add",text:"Add new ".concat(modelName),link:"".concat(basePath,"/add")}]}),(0,jsx_runtime.jsx)(content.V,{children:(0,jsx_runtime.jsx)(model_form.Y,{model,saveButtonText:"Save",onSubmit:onSubmitNewItem})})]})};AddScreen.displayName="AddScreen";try{AddScreen.displayName="AddScreen",AddScreen.__docgenInfo={description:"",displayName:"AddScreen",props:{onSubmitNewItem:{defaultValue:null,description:"Callback executed when the user wants to\nadd a new item",name:"onSubmitNewItem",required:!0,type:{name:"(obj: T) => void"}},newItemRequest:{defaultValue:null,description:"Current status of the request to retrieve\nadd a new item",name:"newItemRequest",required:!0,type:{name:"RequestState"}},modelName:{defaultValue:null,description:"UI-friendly string that represents the model",name:"modelName",required:!0,type:{name:"string"}},model:{defaultValue:null,description:"Structure that represents the fields of the model",name:"model",required:!0,type:{name:"Model"}},basePath:{defaultValue:{value:""},description:"Path to attach before each internal ModelRouter path",name:"basePath",required:!1,type:{name:"string"}},deleteFeature:{defaultValue:null,description:"If true delete features are enabled",name:"deleteFeature",required:!1,type:{name:"boolean"}},updateFeature:{defaultValue:null,description:"If true update features are enabled",name:"updateFeature",required:!1,type:{name:"boolean"}},addFeature:{defaultValue:null,description:"If true add features are enabled",name:"addFeature",required:!1,type:{name:"boolean"}},detailsFeature:{defaultValue:null,description:"If true details features are enabled",name:"detailsFeature",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/model-router/screens/add-screen.tsx#AddScreen"]={docgenInfo:AddScreen.__docgenInfo,name:"AddScreen",path:"src/model-router/screens/add-screen.tsx#AddScreen"})}catch(__react_docgen_typescript_loader_error){}var object_details=__webpack_require__("./src/object-details/index.ts"),DetailsScreen=function DetailsScreen(_ref){var model=_ref.model,modelName=_ref.modelName,_ref$basePath=_ref.basePath,basePath=void 0===_ref$basePath?"":_ref$basePath,onRequestItem=_ref.onRequestItem,itemRequest=_ref.itemRequest,detailsItem=_ref.detailsItem,_useParams$id=(0,dist.UO)().id,id=void 0===_useParams$id?"":_useParams$id;return(0,react.useEffect)((function(){onRequestItem(id)}),[id]),(0,jsx_runtime.jsxs)(header_layout.T,{loading:itemRequest.loading,children:[(0,jsx_runtime.jsx)(header.h4,{title:id,preset:"default",breadcrumbs:[{id:"list",text:modelName,link:"".concat(basePath,"/")},{id:"detail",text:id,link:"".concat(basePath,"/").concat(id)}]}),(0,jsx_runtime.jsx)(content.V,{children:detailsItem&&(0,jsx_runtime.jsx)(object_details.g,{model,instance:detailsItem})})]})};DetailsScreen.displayName="DetailsScreen";try{DetailsScreen.displayName="DetailsScreen",DetailsScreen.__docgenInfo={description:"",displayName:"DetailsScreen",props:{onRequestItem:{defaultValue:null,description:"Callback executed each time we want\nthe details information of an item",name:"onRequestItem",required:!0,type:{name:"(id: string) => void"}},itemRequest:{defaultValue:null,description:"Current status of the request to retrieve\nan item",name:"itemRequest",required:!0,type:{name:"RequestState"}},detailsItem:{defaultValue:null,description:"Item to be displayed",name:"detailsItem",required:!1,type:{name:"BasicModelInstance"}},modelName:{defaultValue:null,description:"UI-friendly string that represents the model",name:"modelName",required:!0,type:{name:"string"}},model:{defaultValue:null,description:"Structure that represents the fields of the model",name:"model",required:!0,type:{name:"Model"}},basePath:{defaultValue:{value:""},description:"Path to attach before each internal ModelRouter path",name:"basePath",required:!1,type:{name:"string"}},deleteFeature:{defaultValue:null,description:"If true delete features are enabled",name:"deleteFeature",required:!1,type:{name:"boolean"}},updateFeature:{defaultValue:null,description:"If true update features are enabled",name:"updateFeature",required:!1,type:{name:"boolean"}},addFeature:{defaultValue:null,description:"If true add features are enabled",name:"addFeature",required:!1,type:{name:"boolean"}},detailsFeature:{defaultValue:null,description:"If true details features are enabled",name:"detailsFeature",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/model-router/screens/details-screen.tsx#DetailsScreen"]={docgenInfo:DetailsScreen.__docgenInfo,name:"DetailsScreen",path:"src/model-router/screens/details-screen.tsx#DetailsScreen"})}catch(__react_docgen_typescript_loader_error){}},"./src/model-router/stories/templates.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gf:()=>REQUEST_TIMEOUT,Kg:()=>onRequestItem,RF:()=>item1,UC:()=>onSubmitUpdateAction,aT:()=>data,kO:()=>onRequestListAction,mm:()=>onSubmitNewItemAction,vk:()=>onRequestDeleteAction,yO:()=>onRequestUpdateItemAction});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/generators/generators.mock.ts"),_model_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/model-router/index.ts"),onRequestListAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Request list data"),onSubmitNewItemAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Submit new item"),onRequestItem=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Details screen mount"),onRequestUpdateItemAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Request update instance"),onSubmitUpdateAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Submit update form"),onRequestDeleteAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("click delete item option"),REQUEST_TIMEOUT=2e3,item1=(0,_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__.Yv)(_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,100),data=[item1,(0,_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__.Yv)(_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,101),(0,_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__.Yv)(_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,102),(0,_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__.Yv)(_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,103),(0,_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__.Yv)(_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,104)];_generators_generators_mock__WEBPACK_IMPORTED_MODULE_1__.$3,_model_router__WEBPACK_IMPORTED_MODULE_2__.q$,_model_router__WEBPACK_IMPORTED_MODULE_2__.q$,_model_router__WEBPACK_IMPORTED_MODULE_2__.q$,_model_router__WEBPACK_IMPORTED_MODULE_2__.q$,_model_router__WEBPACK_IMPORTED_MODULE_2__.q$,_model_router__WEBPACK_IMPORTED_MODULE_2__.q$;try{onRequestListAction.displayName="onRequestListAction",onRequestListAction.__docgenInfo={description:"",displayName:"onRequestListAction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/model-router/stories/templates.tsx#onRequestListAction"]={docgenInfo:onRequestListAction.__docgenInfo,name:"onRequestListAction",path:"src/model-router/stories/templates.tsx#onRequestListAction"})}catch(__react_docgen_typescript_loader_error){}try{onSubmitNewItemAction.displayName="onSubmitNewItemAction",onSubmitNewItemAction.__docgenInfo={description:"",displayName:"onSubmitNewItemAction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/model-router/stories/templates.tsx#onSubmitNewItemAction"]={docgenInfo:onSubmitNewItemAction.__docgenInfo,name:"onSubmitNewItemAction",path:"src/model-router/stories/templates.tsx#onSubmitNewItemAction"})}catch(__react_docgen_typescript_loader_error){}try{onRequestItem.displayName="onRequestItem",onRequestItem.__docgenInfo={description:"",displayName:"onRequestItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/model-router/stories/templates.tsx#onRequestItem"]={docgenInfo:onRequestItem.__docgenInfo,name:"onRequestItem",path:"src/model-router/stories/templates.tsx#onRequestItem"})}catch(__react_docgen_typescript_loader_error){}try{onRequestUpdateItemAction.displayName="onRequestUpdateItemAction",onRequestUpdateItemAction.__docgenInfo={description:"",displayName:"onRequestUpdateItemAction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/model-router/stories/templates.tsx#onRequestUpdateItemAction"]={docgenInfo:onRequestUpdateItemAction.__docgenInfo,name:"onRequestUpdateItemAction",path:"src/model-router/stories/templates.tsx#onRequestUpdateItemAction"})}catch(__react_docgen_typescript_loader_error){}try{onSubmitUpdateAction.displayName="onSubmitUpdateAction",onSubmitUpdateAction.__docgenInfo={description:"",displayName:"onSubmitUpdateAction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/model-router/stories/templates.tsx#onSubmitUpdateAction"]={docgenInfo:onSubmitUpdateAction.__docgenInfo,name:"onSubmitUpdateAction",path:"src/model-router/stories/templates.tsx#onSubmitUpdateAction"})}catch(__react_docgen_typescript_loader_error){}try{onRequestDeleteAction.displayName="onRequestDeleteAction",onRequestDeleteAction.__docgenInfo={description:"",displayName:"onRequestDeleteAction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/model-router/stories/templates.tsx#onRequestDeleteAction"]={docgenInfo:onRequestDeleteAction.__docgenInfo,name:"onRequestDeleteAction",path:"src/model-router/stories/templates.tsx#onRequestDeleteAction"})}catch(__react_docgen_typescript_loader_error){}}}]);