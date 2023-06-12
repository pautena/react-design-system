"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[3945],{"./src/components/tables/enhanced-remote-table/enhanced-remote-table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>enhanced_remote_table_stories});var _Default$parameters,_Default$parameters2,_Default$parameters2$,enhanced_table_mock=__webpack_require__("./src/components/tables/enhanced-table/enhanced-table.mock.tsx"),TableRow=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js")),TableCell=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),enhanced_remote_table=__webpack_require__("./src/components/tables/enhanced-remote-table/enhanced-remote-table.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function EnhancedRemoteDummyTable(props){return(0,jsx_runtime.jsx)(enhanced_remote_table.i,_objectSpread(_objectSpread({},props),{},{children:function children(d){return(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:d.name}),(0,jsx_runtime.jsx)(TableCell.Z,{children:d.id}),(0,jsx_runtime.jsx)(TableCell.Z,{children:d.startDate})]},d.id)}}))}EnhancedRemoteDummyTable.displayName="EnhancedRemoteDummyTable";try{EnhancedRemoteDummyTable.displayName="EnhancedRemoteDummyTable",EnhancedRemoteDummyTable.__docgenInfo={description:"",displayName:"EnhancedRemoteDummyTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data[]"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},defaultSort:{defaultValue:null,description:"",name:"defaultSort",required:!0,type:{name:"enum",value:[{value:'"name"'},{value:'"id"'},{value:'"startDate"'}]}},defaultOrder:{defaultValue:null,description:"",name:"defaultOrder",required:!1,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"HeadCell<Data>[]"}},onRequestSort:{defaultValue:null,description:"",name:"onRequestSort",required:!0,type:{name:"(col: string, orderBy: Order) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tables/enhanced-remote-table/enhanced-remote-table.mock.tsx#EnhancedRemoteDummyTable"]={docgenInfo:EnhancedRemoteDummyTable.__docgenInfo,name:"EnhancedRemoteDummyTable",path:"src/components/tables/enhanced-remote-table/enhanced-remote-table.mock.tsx#EnhancedRemoteDummyTable"})}catch(__react_docgen_typescript_loader_error){}function enhanced_remote_table_stories_typeof(obj){return enhanced_remote_table_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},enhanced_remote_table_stories_typeof(obj)}function enhanced_remote_table_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function enhanced_remote_table_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?enhanced_remote_table_stories_ownKeys(Object(source),!0).forEach((function(key){enhanced_remote_table_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):enhanced_remote_table_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function enhanced_remote_table_stories_defineProperty(obj,key,value){return(key=function enhanced_remote_table_stories_toPropertyKey(arg){var key=function enhanced_remote_table_stories_toPrimitive(input,hint){if("object"!==enhanced_remote_table_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==enhanced_remote_table_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===enhanced_remote_table_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const enhanced_remote_table_stories={title:"Components/Tables/EnhancedRemoteTable",component:EnhancedRemoteDummyTable,parameters:{layout:"fullscreen"}};var Default={args:{columns:enhanced_table_mock.zF,data:enhanced_table_mock.aT,loading:!1,defaultSort:"startDate",defaultOrder:"asc"}};Default.parameters=enhanced_remote_table_stories_objectSpread(enhanced_remote_table_stories_objectSpread({},Default.parameters),{},{docs:enhanced_remote_table_stories_objectSpread(enhanced_remote_table_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:enhanced_remote_table_stories_objectSpread({originalSource:'{\n  args: {\n    columns,\n    data,\n    loading: false,\n    defaultSort: "startDate",\n    defaultOrder: "asc"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/tables/enhanced-remote-table/enhanced-remote-table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>EnhancedRemoteTable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/TableContainer/TableContainer.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/CircularProgress/CircularProgress.js"),_enhanced_table__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/tables/enhanced-table/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var EnhancedRemoteTable=function EnhancedRemoteTable(_ref){var children=_ref.children,data=_ref.data,loading=_ref.loading,columns=_ref.columns,defaultSort=_ref.defaultSort,defaultOrder=_ref.defaultOrder,onRequestSort=_ref.onRequestSort,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({orderBy:defaultSort,order:defaultOrder||"asc"}),2),order=_useState2[0],setOrder=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_enhanced_table__WEBPACK_IMPORTED_MODULE_1__.j,{order:order.order,orderBy:order.orderBy,headCells:columns,onRequestSort:function handleRequestSort(property){setOrder((function(_ref2){var orderBy=_ref2.orderBy,order=_ref2.order,newOrder=orderBy===property&&"asc"===order?"desc":"asc";return onRequestSort(property,newOrder),{orderBy:property,order:newOrder}}))}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{children:loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{colSpan:columns.length,sx:{textAlign:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,{})})}):data.map((function(d,i){return children(d,i)}))})]})})})};try{EnhancedRemoteTable.displayName="EnhancedRemoteTable",EnhancedRemoteTable.__docgenInfo={description:"",displayName:"EnhancedRemoteTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},defaultSort:{defaultValue:null,description:"",name:"defaultSort",required:!0,type:{name:"string | number | symbol"}},defaultOrder:{defaultValue:null,description:"",name:"defaultOrder",required:!1,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"HeadCell<T>[]"}},onRequestSort:{defaultValue:null,description:"",name:"onRequestSort",required:!0,type:{name:'(col: keyof T, orderBy: "asc" | "desc") => void'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tables/enhanced-remote-table/enhanced-remote-table.tsx#EnhancedRemoteTable"]={docgenInfo:EnhancedRemoteTable.__docgenInfo,name:"EnhancedRemoteTable",path:"src/components/tables/enhanced-remote-table/enhanced-remote-table.tsx#EnhancedRemoteTable"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tables/enhanced-table/enhanced-table.mock.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ST:()=>TestTable,aT:()=>data,zF:()=>columns});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/tables/enhanced-table/index.ts"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),columns=[{id:"name",numeric:!1,disablePadding:!1,label:"Name",sort:!0},{id:"id",numeric:!0,disablePadding:!1,label:"Garmin ID",sort:!0},{id:"startDate",numeric:!1,disablePadding:!1,label:"Date",sort:!0}],data=[{id:2,name:"HIIT",startDate:"11/04/2022"},{id:1,name:"on/off x 1",startDate:"05/04/2022"},{id:3,name:"EMOM 30'",startDate:"07/04/2022"},{id:4,name:"Tabata",startDate:"09/04/2022"},{id:5,name:"AMRAPx2",startDate:"10/04/2022"}],TestTable=function TestTable(_ref){var data=_ref.data,columns=_ref.columns,defaultOrder=_ref.defaultOrder,defaultSort=_ref.defaultSort,loading=_ref.loading;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.N,{search:!0,data,columns,defaultSort,defaultOrder,loading,children:function children(data){return data.map((function(d){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{children:d.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{children:d.id}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{children:d.startDate})]},d.id)}))}})};TestTable.displayName="TestTable";try{TestTable.displayName="TestTable",TestTable.__docgenInfo={description:"",displayName:"TestTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"HeadCell<Data>[]"}},defaultSort:{defaultValue:null,description:"",name:"defaultSort",required:!0,type:{name:"enum",value:[{value:'"name"'},{value:'"id"'},{value:'"startDate"'}]}},defaultOrder:{defaultValue:null,description:"",name:"defaultOrder",required:!0,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tables/enhanced-table/enhanced-table.mock.tsx#TestTable"]={docgenInfo:TestTable.__docgenInfo,name:"TestTable",path:"src/components/tables/enhanced-table/enhanced-table.mock.tsx#TestTable"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tables/enhanced-table/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>EnhancedTable,j:()=>EnhancedTableHead});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),TableContainer=__webpack_require__("./node_modules/@mui/material/TableContainer/TableContainer.js"),Table=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),TableBody=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),TableRow=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),TableCell=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/CircularProgress/CircularProgress.js"),Search=__webpack_require__("./node_modules/@mui/icons-material/Search.js"),TableHead=__webpack_require__("./node_modules/@mui/material/TableHead/TableHead.js"),TableSortLabel=__webpack_require__("./node_modules/@mui/material/TableSortLabel/TableSortLabel.js"),visuallyHidden=__webpack_require__("./node_modules/@mui/utils/esm/visuallyHidden.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),EnhancedTableHead=function EnhancedTableHead(_ref){var order=_ref.order,orderBy=_ref.orderBy,headCells=_ref.headCells,onRequestSort=_ref.onRequestSort,createSortHandler=function createSortHandler(property){return function(){onRequestSort(property)}};return(0,jsx_runtime.jsx)(TableHead.Z,{children:(0,jsx_runtime.jsx)(TableRow.Z,{children:headCells.map((function(headCell){return(0,jsx_runtime.jsx)(TableCell.Z,{variant:"head",padding:headCell.disablePadding?"none":"normal",sortDirection:orderBy===headCell.id&&order,sx:{fontWeight:"bold"},children:headCell.sort?(0,jsx_runtime.jsxs)(TableSortLabel.Z,{active:orderBy===headCell.id,direction:orderBy===headCell.id?order:"asc",onClick:createSortHandler(headCell.id),children:[headCell.label,orderBy===headCell.id?(0,jsx_runtime.jsx)(Box.Z,{component:"span",sx:visuallyHidden.Z,children:"desc"===order?"sorted descending":"sorted ascending"}):null]}):headCell.label},String(headCell.id))}))})})};EnhancedTableHead.displayName="EnhancedTableHead";try{EnhancedTableHead.displayName="EnhancedTableHead",EnhancedTableHead.__docgenInfo={description:"",displayName:"EnhancedTableHead",props:{onRequestSort:{defaultValue:null,description:"",name:"onRequestSort",required:!0,type:{name:"(property: keyof T) => void"}},order:{defaultValue:null,description:"",name:"order",required:!0,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},orderBy:{defaultValue:null,description:"",name:"orderBy",required:!0,type:{name:"string | number | symbol"}},headCells:{defaultValue:null,description:"",name:"headCells",required:!0,type:{name:"HeadCell<T>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tables/enhanced-table/enhanced-table-head.tsx#EnhancedTableHead"]={docgenInfo:EnhancedTableHead.__docgenInfo,name:"EnhancedTableHead",path:"src/components/tables/enhanced-table/enhanced-table-head.tsx#EnhancedTableHead"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function descendingComparator(a,b,orderBy){return b[orderBy]<a[orderBy]?-1:b[orderBy]>a[orderBy]?1:0}var EnhancedTable=function EnhancedTable(_ref){var children=_ref.children,data=_ref.data,search=_ref.search,columns=_ref.columns,defaultSort=_ref.defaultSort,_ref$defaultOrder=_ref.defaultOrder,defaultOrder=void 0===_ref$defaultOrder?"asc":_ref$defaultOrder,_ref$loading=_ref.loading,loading=void 0!==_ref$loading&&_ref$loading,_useState2=_slicedToArray((0,react.useState)(""),2),searchFilter=_useState2[0],setSearchFilter=_useState2[1],_useState4=_slicedToArray((0,react.useState)(defaultOrder),2),order=_useState4[0],setOrder=_useState4[1],_useState6=_slicedToArray((0,react.useState)(defaultSort),2),orderBy=_useState6[0],setOrderBy=_useState6[1],filteredData=data.slice().filter(function getFilter(columns,search){return function(d){return!search||columns.some((function(col){var _value,_value2,value=d[col.id];return null!==(_value=value)&&void 0!==_value&&_value.toLowerCase&&(value=value.toLowerCase()),null===(_value2=value)||void 0===_value2?void 0:_value2.toString().includes(search.toLowerCase())}))}}(columns,searchFilter)).sort(function getComparator(order,orderBy){return"desc"===order?function(a,b){return descendingComparator(a,b,orderBy)}:function(a,b){return-descendingComparator(a,b,orderBy)}}(order,orderBy));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Box.Z,{sx:{paddingX:1,paddingBottom:2},children:[search&&(0,jsx_runtime.jsx)(Box.Z,{paddingY:2,children:(0,jsx_runtime.jsx)(TextField.Z,{fullWidth:!0,placeholder:"Search",InputProps:{role:"search",startAdornment:(0,jsx_runtime.jsx)(InputAdornment.Z,{position:"start",children:(0,jsx_runtime.jsx)(Search.Z,{})})},onChange:function onChange(e){return setSearchFilter(e.target.value)}})}),(0,jsx_runtime.jsx)(TableContainer.Z,{children:(0,jsx_runtime.jsxs)(Table.Z,{children:[(0,jsx_runtime.jsx)(EnhancedTableHead,{order,orderBy,headCells:columns,onRequestSort:function handleRequestSort(property){setOrder(orderBy===property&&"asc"===order?"desc":"asc"),setOrderBy(property)}}),(0,jsx_runtime.jsx)(TableBody.Z,{children:loading?(0,jsx_runtime.jsx)(TableRow.Z,{children:(0,jsx_runtime.jsx)(TableCell.Z,{colSpan:columns.length,sx:{textAlign:"center"},children:(0,jsx_runtime.jsx)(CircularProgress.Z,{})})}):0===filteredData.length?(0,jsx_runtime.jsx)(TableRow.Z,{children:(0,jsx_runtime.jsx)(TableCell.Z,{colSpan:columns.length,sx:{textAlign:"center"},children:"No data"})}):children(filteredData)})]})})]})})};EnhancedTable.defaultProps={defaultOrder:"asc"};try{EnhancedTable.displayName="EnhancedTable",EnhancedTable.__docgenInfo={description:"",displayName:"EnhancedTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},search:{defaultValue:null,description:"",name:"search",required:!1,type:{name:"boolean"}},defaultSort:{defaultValue:null,description:"",name:"defaultSort",required:!0,type:{name:"string | number | symbol"}},defaultOrder:{defaultValue:{value:"asc"},description:"",name:"defaultOrder",required:!1,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"HeadCell<T>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tables/enhanced-table/enhanced-table.tsx#EnhancedTable"]={docgenInfo:EnhancedTable.__docgenInfo,name:"EnhancedTable",path:"src/components/tables/enhanced-table/enhanced-table.tsx#EnhancedTable"})}catch(__react_docgen_typescript_loader_error){}}}]);