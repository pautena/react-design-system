"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[6922],{"./src/tests/datatable-placeholder/datatable-placeholder.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2,_Default$parameters2$;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Placeholders/DatatablePlaceholder",component:__webpack_require__("./src/tests/datatable-placeholder/datatable-placeholder.tsx").r,parameters:{layout:"fullscreen"}};var Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/tests/datatable-placeholder/datatable-placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DatatablePlaceholder});var _mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js"),_mui_x_data_grid_generator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/x-data-grid-generator/hooks/useDemoData.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),DatatablePlaceholder=function DatatablePlaceholder(_ref){var _ref$rowLength=_ref.rowLength,rowLength=void 0===_ref$rowLength?1e3:_ref$rowLength,_ref$maxColumns=_ref.maxColumns,maxColumns=void 0===_ref$maxColumns?10:_ref$maxColumns,_ref$height=_ref.height,height=void 0===_ref$height?400:_ref$height,_ref$dataSet=_ref.dataSet,dataSet=void 0===_ref$dataSet?"Commodity":_ref$dataSet,_useDemoData$data=(0,_mui_x_data_grid_generator__WEBPACK_IMPORTED_MODULE_2__.PT)({dataSet,rowLength,maxColumns}).data,rows=_useDemoData$data.rows,columns=_useDemoData$data.columns;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{sx:{height,width:1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__._,{rows,columns,checkboxSelection:!0,autoPageSize:!0,disableRowSelectionOnClick:!0})})};DatatablePlaceholder.displayName="DatatablePlaceholder";try{DatatablePlaceholder.displayName="DatatablePlaceholder",DatatablePlaceholder.__docgenInfo={description:"",displayName:"DatatablePlaceholder",props:{rowLength:{defaultValue:{value:"1000"},description:"",name:"rowLength",required:!1,type:{name:"number"}},maxColumns:{defaultValue:{value:"10"},description:"",name:"maxColumns",required:!1,type:{name:"number"}},dataSet:{defaultValue:{value:"Commodity"},description:"",name:"dataSet",required:!1,type:{name:"enum",value:[{value:'"Commodity"'},{value:'"Employee"'}]}},height:{defaultValue:{value:"400"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tests/datatable-placeholder/datatable-placeholder.tsx#DatatablePlaceholder"]={docgenInfo:DatatablePlaceholder.__docgenInfo,name:"DatatablePlaceholder",path:"src/tests/datatable-placeholder/datatable-placeholder.tsx#DatatablePlaceholder"})}catch(__react_docgen_typescript_loader_error){}}}]);