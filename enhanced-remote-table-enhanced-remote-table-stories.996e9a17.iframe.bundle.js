"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[6873],{"./src/enhanced-remote-table/enhanced-remote-table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>enhanced_remote_table_stories});var enhanced_table_mock=__webpack_require__("./src/enhanced-table/enhanced-table.mock.tsx"),TableCell=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),TableRow=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),react=__webpack_require__("./node_modules/react/index.js"),TableContainer=__webpack_require__("./node_modules/@mui/material/TableContainer/TableContainer.js"),TableBody=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),Table=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/CircularProgress/CircularProgress.js"),enhanced_table=__webpack_require__("./src/enhanced-table/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var EnhancedRemoteTable=function EnhancedRemoteTable(_ref){var children=_ref.children,data=_ref.data,loading=_ref.loading,columns=_ref.columns,defaultSort=_ref.defaultSort,defaultOrder=_ref.defaultOrder,onRequestSort=_ref.onRequestSort,_useState2=_slicedToArray((0,react.useState)({orderBy:defaultSort,order:defaultOrder||"asc"}),2),order=_useState2[0],setOrder=_useState2[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(TableContainer.Z,{children:(0,jsx_runtime.jsxs)(Table.Z,{children:[(0,jsx_runtime.jsx)(enhanced_table.j,{order:order.order,orderBy:order.orderBy,headCells:columns,onRequestSort:function handleRequestSort(property){setOrder((function(_ref2){var orderBy=_ref2.orderBy,order=_ref2.order,newOrder=orderBy===property&&"asc"===order?"desc":"asc";return onRequestSort(property,newOrder),{orderBy:property,order:newOrder}}))}}),(0,jsx_runtime.jsx)(TableBody.Z,{children:loading?(0,jsx_runtime.jsx)(TableRow.Z,{children:(0,jsx_runtime.jsx)(TableCell.Z,{colSpan:columns.length,sx:{textAlign:"center"},children:(0,jsx_runtime.jsx)(CircularProgress.Z,{})})}):data.map((function(d,i){return children(d,i)}))})]})})})};try{EnhancedRemoteTable.displayName="EnhancedRemoteTable",EnhancedRemoteTable.__docgenInfo={description:"",displayName:"EnhancedRemoteTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},defaultSort:{defaultValue:null,description:"",name:"defaultSort",required:!0,type:{name:"string | number | symbol"}},defaultOrder:{defaultValue:null,description:"",name:"defaultOrder",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"HeadCell<T>[]"}},onRequestSort:{defaultValue:null,description:"",name:"onRequestSort",required:!0,type:{name:'(col: keyof T, orderBy: "desc" | "asc") => void'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/enhanced-remote-table/enhanced-remote-table.tsx#EnhancedRemoteTable"]={docgenInfo:EnhancedRemoteTable.__docgenInfo,name:"EnhancedRemoteTable",path:"src/enhanced-remote-table/enhanced-remote-table.tsx#EnhancedRemoteTable"})}catch(__react_docgen_typescript_loader_error){}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function EnhancedRemoteDummyTable(props){return(0,jsx_runtime.jsx)(EnhancedRemoteTable,_objectSpread(_objectSpread({},props),{},{children:function children(d){return(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:d.name}),(0,jsx_runtime.jsx)(TableCell.Z,{children:d.id}),(0,jsx_runtime.jsx)(TableCell.Z,{children:d.startDate})]},d.id)}}))}EnhancedRemoteDummyTable.displayName="EnhancedRemoteDummyTable";try{EnhancedRemoteDummyTable.displayName="EnhancedRemoteDummyTable",EnhancedRemoteDummyTable.__docgenInfo={description:"",displayName:"EnhancedRemoteDummyTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data[]"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},defaultSort:{defaultValue:null,description:"",name:"defaultSort",required:!0,type:{name:"enum",value:[{value:'"name"'},{value:'"id"'},{value:'"startDate"'}]}},defaultOrder:{defaultValue:null,description:"",name:"defaultOrder",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"HeadCell<Data>[]"}},onRequestSort:{defaultValue:null,description:"",name:"onRequestSort",required:!0,type:{name:"(col: string, orderBy: Order) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/enhanced-remote-table/enhanced-remote-table.mock.tsx#EnhancedRemoteDummyTable"]={docgenInfo:EnhancedRemoteDummyTable.__docgenInfo,name:"EnhancedRemoteDummyTable",path:"src/enhanced-remote-table/enhanced-remote-table.mock.tsx#EnhancedRemoteDummyTable"})}catch(__react_docgen_typescript_loader_error){}const enhanced_remote_table_stories={title:"Components/Tables/EnhancedRemoteTable",component:EnhancedRemoteDummyTable,parameters:{layout:"fullscreen"}};var Default={args:{columns:enhanced_table_mock.zF,data:enhanced_table_mock.aT,loading:!1,defaultSort:"startDate",defaultOrder:"asc"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    columns,\n    data,\n    loading: false,\n    defaultSort: "startDate",\n    defaultOrder: "asc"\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/enhanced-table/enhanced-table.mock.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ST:()=>TestTable,aT:()=>data,zF:()=>columns});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/enhanced-table/index.ts"),_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),columns=[{id:"name",numeric:!1,disablePadding:!1,label:"Name",sort:!0},{id:"id",numeric:!0,disablePadding:!1,label:"Garmin ID",sort:!0},{id:"startDate",numeric:!1,disablePadding:!1,label:"Date",sort:!0}],data=[{id:2,name:"HIIT",startDate:"11/04/2022"},{id:1,name:"on/off x 1",startDate:"05/04/2022"},{id:3,name:"EMOM 30'",startDate:"07/04/2022"},{id:4,name:"Tabata",startDate:"09/04/2022"},{id:5,name:"AMRAPx2",startDate:"10/04/2022"}],TestTable=function TestTable(_ref){var data=_ref.data,columns=_ref.columns,defaultOrder=_ref.defaultOrder,defaultSort=_ref.defaultSort,loading=_ref.loading;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_0__.N,{search:!0,data,columns,defaultSort,defaultOrder,loading,children:function children(data){return data.map((function(d){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__.Z,{children:d.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__.Z,{children:d.id}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__.Z,{children:d.startDate})]},d.id)}))}})};TestTable.displayName="TestTable";try{TestTable.displayName="TestTable",TestTable.__docgenInfo={description:"",displayName:"TestTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"HeadCell<Data>[]"}},defaultSort:{defaultValue:null,description:"",name:"defaultSort",required:!0,type:{name:"enum",value:[{value:'"name"'},{value:'"id"'},{value:'"startDate"'}]}},defaultOrder:{defaultValue:null,description:"",name:"defaultOrder",required:!0,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/enhanced-table/enhanced-table.mock.tsx#TestTable"]={docgenInfo:TestTable.__docgenInfo,name:"TestTable",path:"src/enhanced-table/enhanced-table.mock.tsx#TestTable"})}catch(__react_docgen_typescript_loader_error){}},"./src/enhanced-table/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>EnhancedTable,j:()=>EnhancedTableHead});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),TableContainer=__webpack_require__("./node_modules/@mui/material/TableContainer/TableContainer.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),TableBody=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),Table=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/CircularProgress/CircularProgress.js"),TableCell=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),TableRow=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),Search=__webpack_require__("./node_modules/@mui/icons-material/esm/Search.js"),TableSortLabel=__webpack_require__("./node_modules/@mui/material/TableSortLabel/TableSortLabel.js"),TableHead=__webpack_require__("./node_modules/@mui/material/TableHead/TableHead.js"),visuallyHidden=__webpack_require__("./node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),EnhancedTableHead=function EnhancedTableHead(_ref){var order=_ref.order,orderBy=_ref.orderBy,headCells=_ref.headCells,onRequestSort=_ref.onRequestSort,createSortHandler=function createSortHandler(property){return function(){onRequestSort(property)}};return(0,jsx_runtime.jsx)(TableHead.Z,{children:(0,jsx_runtime.jsx)(TableRow.Z,{children:headCells.map((function(headCell){return(0,jsx_runtime.jsx)(TableCell.Z,{variant:"head",padding:headCell.disablePadding?"none":"normal",sortDirection:orderBy===headCell.id&&order,sx:{fontWeight:"bold"},children:headCell.sort?(0,jsx_runtime.jsxs)(TableSortLabel.Z,{active:orderBy===headCell.id,direction:orderBy===headCell.id?order:"asc",onClick:createSortHandler(headCell.id),children:[headCell.label,orderBy===headCell.id?(0,jsx_runtime.jsx)(Box.Z,{component:"span",sx:visuallyHidden.Z,children:"desc"===order?"sorted descending":"sorted ascending"}):null]}):headCell.label},String(headCell.id))}))})})};EnhancedTableHead.displayName="EnhancedTableHead";try{EnhancedTableHead.displayName="EnhancedTableHead",EnhancedTableHead.__docgenInfo={description:"",displayName:"EnhancedTableHead",props:{onRequestSort:{defaultValue:null,description:"",name:"onRequestSort",required:!0,type:{name:"(property: keyof T) => void"}},order:{defaultValue:null,description:"",name:"order",required:!0,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}},orderBy:{defaultValue:null,description:"",name:"orderBy",required:!0,type:{name:"string | number | symbol"}},headCells:{defaultValue:null,description:"",name:"headCells",required:!0,type:{name:"HeadCell<T>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/enhanced-table/enhanced-table-head.tsx#EnhancedTableHead"]={docgenInfo:EnhancedTableHead.__docgenInfo,name:"EnhancedTableHead",path:"src/enhanced-table/enhanced-table-head.tsx#EnhancedTableHead"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function descendingComparator(a,b,orderBy){return b[orderBy]<a[orderBy]?-1:b[orderBy]>a[orderBy]?1:0}var EnhancedTable=function EnhancedTable(_ref){var children=_ref.children,data=_ref.data,search=_ref.search,columns=_ref.columns,defaultSort=_ref.defaultSort,_ref$defaultOrder=_ref.defaultOrder,defaultOrder=void 0===_ref$defaultOrder?"asc":_ref$defaultOrder,_ref$loading=_ref.loading,loading=void 0!==_ref$loading&&_ref$loading,_useState2=_slicedToArray((0,react.useState)(""),2),searchFilter=_useState2[0],setSearchFilter=_useState2[1],_useState4=_slicedToArray((0,react.useState)(defaultOrder),2),order=_useState4[0],setOrder=_useState4[1],_useState6=_slicedToArray((0,react.useState)(defaultSort),2),orderBy=_useState6[0],setOrderBy=_useState6[1],filteredData=data.slice().filter(function getFilter(columns,search){return function(d){return!search||columns.some((function(col){var _value,_value2,value=d[col.id];return null!==(_value=value)&&void 0!==_value&&_value.toLowerCase&&(value=value.toLowerCase()),null===(_value2=value)||void 0===_value2?void 0:_value2.toString().includes(search.toLowerCase())}))}}(columns,searchFilter)).sort(function getComparator(order,orderBy){return"desc"===order?function(a,b){return descendingComparator(a,b,orderBy)}:function(a,b){return-descendingComparator(a,b,orderBy)}}(order,orderBy));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Box.Z,{sx:{paddingX:1,paddingBottom:2},children:[search&&(0,jsx_runtime.jsx)(Box.Z,{paddingY:2,children:(0,jsx_runtime.jsx)(TextField.Z,{fullWidth:!0,placeholder:"Search",InputProps:{role:"search",startAdornment:(0,jsx_runtime.jsx)(InputAdornment.Z,{position:"start",children:(0,jsx_runtime.jsx)(Search.Z,{})})},onChange:function onChange(e){return setSearchFilter(e.target.value)}})}),(0,jsx_runtime.jsx)(TableContainer.Z,{children:(0,jsx_runtime.jsxs)(Table.Z,{children:[(0,jsx_runtime.jsx)(EnhancedTableHead,{order,orderBy,headCells:columns,onRequestSort:function handleRequestSort(property){setOrder(orderBy===property&&"asc"===order?"desc":"asc"),setOrderBy(property)}}),(0,jsx_runtime.jsx)(TableBody.Z,{children:loading?(0,jsx_runtime.jsx)(TableRow.Z,{children:(0,jsx_runtime.jsx)(TableCell.Z,{colSpan:columns.length,sx:{textAlign:"center"},children:(0,jsx_runtime.jsx)(CircularProgress.Z,{})})}):0===filteredData.length?(0,jsx_runtime.jsx)(TableRow.Z,{children:(0,jsx_runtime.jsx)(TableCell.Z,{colSpan:columns.length,sx:{textAlign:"center"},children:"No data"})}):children(filteredData)})]})})]})})};EnhancedTable.defaultProps={defaultOrder:"asc"};try{EnhancedTable.displayName="EnhancedTable",EnhancedTable.__docgenInfo={description:"",displayName:"EnhancedTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},search:{defaultValue:null,description:"",name:"search",required:!1,type:{name:"boolean"}},defaultSort:{defaultValue:null,description:"",name:"defaultSort",required:!0,type:{name:"string | number | symbol"}},defaultOrder:{defaultValue:{value:"asc"},description:"",name:"defaultOrder",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"HeadCell<T>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/enhanced-table/enhanced-table.tsx#EnhancedTable"]={docgenInfo:EnhancedTable.__docgenInfo,name:"EnhancedTable",path:"src/enhanced-table/enhanced-table.tsx#EnhancedTable"})}catch(__react_docgen_typescript_loader_error){}}}]);