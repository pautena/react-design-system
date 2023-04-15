"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[3501],{"./node_modules/@mui/icons-material/MoreVert.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_default=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");exports.Z=_default},"./node_modules/@mui/material/InputAdornment/InputAdornment.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InputAdornment_InputAdornment});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),FormControlContext=__webpack_require__("./node_modules/@mui/material/FormControl/FormControlContext.js"),useFormControl=__webpack_require__("./node_modules/@mui/material/FormControl/useFormControl.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getInputAdornmentUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiInputAdornment",slot)}const InputAdornment_inputAdornmentClasses=(0,generateUtilityClasses.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var _span,useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","component","disablePointerEvents","disableTypography","position","variant"],InputAdornmentRoot=(0,styled.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`position${(0,capitalize.Z)(ownerState.position)}`],!0===ownerState.disablePointerEvents&&styles.disablePointerEvents,styles[ownerState.variant]]}})((({theme,ownerState})=>(0,esm_extends.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(theme.vars||theme).palette.action.active},"filled"===ownerState.variant&&{[`&.${InputAdornment_inputAdornmentClasses.positionStart}&:not(.${InputAdornment_inputAdornmentClasses.hiddenLabel})`]:{marginTop:16}},"start"===ownerState.position&&{marginRight:8},"end"===ownerState.position&&{marginLeft:8},!0===ownerState.disablePointerEvents&&{pointerEvents:"none"}))),InputAdornment_InputAdornment=react.forwardRef((function InputAdornment(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiInputAdornment"}),{children,className,component="div",disablePointerEvents=!1,disableTypography=!1,position,variant:variantProp}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),muiFormControl=(0,useFormControl.Z)()||{};let variant=variantProp;variantProp&&muiFormControl.variant,muiFormControl&&!variant&&(variant=muiFormControl.variant);const ownerState=(0,esm_extends.Z)({},props,{hiddenLabel:muiFormControl.hiddenLabel,size:muiFormControl.size,disablePointerEvents,position,variant}),classes=(ownerState=>{const{classes,disablePointerEvents,hiddenLabel,position,size,variant}=ownerState,slots={root:["root",disablePointerEvents&&"disablePointerEvents",position&&`position${(0,capitalize.Z)(position)}`,variant,hiddenLabel&&"hiddenLabel",size&&`size${(0,capitalize.Z)(size)}`]};return(0,composeClasses.Z)(slots,getInputAdornmentUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(FormControlContext.Z.Provider,{value:null,children:(0,jsx_runtime.jsx)(InputAdornmentRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx_m.Z)(classes.root,className),ref},other,{children:"string"!=typeof children||disableTypography?(0,jsx_runtime.jsxs)(react.Fragment,{children:["start"===position?_span||(_span=(0,jsx_runtime.jsx)("span",{className:"notranslate",children:"​"})):null,children]}):(0,jsx_runtime.jsx)(Typography.Z,{color:"text.secondary",children})}))})}))},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_KKE3V3AL.aD});var chunk_KKE3V3AL=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./src/components/tables/enhanced-table/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>EnhancedTable,j:()=>EnhancedTableHead});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),TableContainer=__webpack_require__("./node_modules/@mui/material/TableContainer/TableContainer.js"),Table=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),TableBody=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),TableRow=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),TableCell=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/CircularProgress/CircularProgress.js"),Search=__webpack_require__("./node_modules/@mui/icons-material/Search.js"),TableHead=__webpack_require__("./node_modules/@mui/material/TableHead/TableHead.js"),TableSortLabel=__webpack_require__("./node_modules/@mui/material/TableSortLabel/TableSortLabel.js"),visuallyHidden=__webpack_require__("./node_modules/@mui/utils/esm/visuallyHidden.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),EnhancedTableHead=function EnhancedTableHead(_ref){var order=_ref.order,orderBy=_ref.orderBy,headCells=_ref.headCells,onRequestSort=_ref.onRequestSort,createSortHandler=function createSortHandler(property){return function(){onRequestSort(property)}};return(0,jsx_runtime.jsx)(TableHead.Z,{children:(0,jsx_runtime.jsx)(TableRow.Z,{children:headCells.map((function(headCell){return(0,jsx_runtime.jsx)(TableCell.Z,{variant:"head",padding:headCell.disablePadding?"none":"normal",sortDirection:orderBy===headCell.id&&order,sx:{fontWeight:"bold"},children:headCell.sort?(0,jsx_runtime.jsxs)(TableSortLabel.Z,{active:orderBy===headCell.id,direction:orderBy===headCell.id?order:"asc",onClick:createSortHandler(headCell.id),children:[headCell.label,orderBy===headCell.id?(0,jsx_runtime.jsx)(Box.Z,{component:"span",sx:visuallyHidden.Z,children:"desc"===order?"sorted descending":"sorted ascending"}):null]}):headCell.label},String(headCell.id))}))})})};EnhancedTableHead.displayName="EnhancedTableHead";try{EnhancedTableHead.displayName="EnhancedTableHead",EnhancedTableHead.__docgenInfo={description:"",displayName:"EnhancedTableHead",props:{onRequestSort:{defaultValue:null,description:"",name:"onRequestSort",required:!0,type:{name:"(property: keyof T) => void"}},order:{defaultValue:null,description:"",name:"order",required:!0,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},orderBy:{defaultValue:null,description:"",name:"orderBy",required:!0,type:{name:"string | number | symbol"}},headCells:{defaultValue:null,description:"",name:"headCells",required:!0,type:{name:"HeadCell<T>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tables/enhanced-table/enhanced-table-head.tsx#EnhancedTableHead"]={docgenInfo:EnhancedTableHead.__docgenInfo,name:"EnhancedTableHead",path:"src/components/tables/enhanced-table/enhanced-table-head.tsx#EnhancedTableHead"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function descendingComparator(a,b,orderBy){return b[orderBy]<a[orderBy]?-1:b[orderBy]>a[orderBy]?1:0}var EnhancedTable=function EnhancedTable(_ref){var children=_ref.children,data=_ref.data,search=_ref.search,columns=_ref.columns,defaultSort=_ref.defaultSort,_ref$defaultOrder=_ref.defaultOrder,defaultOrder=void 0===_ref$defaultOrder?"asc":_ref$defaultOrder,_ref$loading=_ref.loading,loading=void 0!==_ref$loading&&_ref$loading,_useState2=_slicedToArray((0,react.useState)(""),2),searchFilter=_useState2[0],setSearchFilter=_useState2[1],_useState4=_slicedToArray((0,react.useState)(defaultOrder),2),order=_useState4[0],setOrder=_useState4[1],_useState6=_slicedToArray((0,react.useState)(defaultSort),2),orderBy=_useState6[0],setOrderBy=_useState6[1],filteredData=data.slice().filter(function getFilter(columns,search){return function(d){return!search||columns.some((function(col){var _value,_value2,value=d[col.id];return null!==(_value=value)&&void 0!==_value&&_value.toLowerCase&&(value=value.toLowerCase()),null===(_value2=value)||void 0===_value2?void 0:_value2.toString().includes(search.toLowerCase())}))}}(columns,searchFilter)).sort(function getComparator(order,orderBy){return"desc"===order?function(a,b){return descendingComparator(a,b,orderBy)}:function(a,b){return-descendingComparator(a,b,orderBy)}}(order,orderBy));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Box.Z,{sx:{paddingX:1,paddingBottom:2},children:[search&&(0,jsx_runtime.jsx)(Box.Z,{paddingY:2,children:(0,jsx_runtime.jsx)(TextField.Z,{fullWidth:!0,placeholder:"Search",InputProps:{role:"search",startAdornment:(0,jsx_runtime.jsx)(InputAdornment.Z,{position:"start",children:(0,jsx_runtime.jsx)(Search.Z,{})})},onChange:function onChange(e){return setSearchFilter(e.target.value)}})}),(0,jsx_runtime.jsx)(TableContainer.Z,{children:(0,jsx_runtime.jsxs)(Table.Z,{children:[(0,jsx_runtime.jsx)(EnhancedTableHead,{order,orderBy,headCells:columns,onRequestSort:function handleRequestSort(property){setOrder(orderBy===property&&"asc"===order?"desc":"asc"),setOrderBy(property)}}),(0,jsx_runtime.jsx)(TableBody.Z,{children:loading?(0,jsx_runtime.jsx)(TableRow.Z,{children:(0,jsx_runtime.jsx)(TableCell.Z,{colSpan:columns.length,sx:{textAlign:"center"},children:(0,jsx_runtime.jsx)(CircularProgress.Z,{})})}):0===filteredData.length?(0,jsx_runtime.jsx)(TableRow.Z,{children:(0,jsx_runtime.jsx)(TableCell.Z,{colSpan:columns.length,sx:{textAlign:"center"},children:"No data"})}):children(filteredData)})]})})]})})};EnhancedTable.defaultProps={defaultOrder:"asc"};try{EnhancedTable.displayName="EnhancedTable",EnhancedTable.__docgenInfo={description:"",displayName:"EnhancedTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},search:{defaultValue:null,description:"",name:"search",required:!1,type:{name:"boolean"}},defaultSort:{defaultValue:null,description:"",name:"defaultSort",required:!0,type:{name:"string | number | symbol"}},defaultOrder:{defaultValue:{value:"asc"},description:"",name:"defaultOrder",required:!1,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"HeadCell<T>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tables/enhanced-table/enhanced-table.tsx#EnhancedTable"]={docgenInfo:EnhancedTable.__docgenInfo,name:"EnhancedTable",path:"src/components/tables/enhanced-table/enhanced-table.tsx#EnhancedTable"})}catch(__react_docgen_typescript_loader_error){}},"./src/generators/table-list/table-list.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>TableList});var _mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Menu/Menu.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_tables_enhanced_table__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/tables/enhanced-table/index.ts"),_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/MoreVert.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var TableList=function TableList(_ref){var columnsProp=_ref.columns,options=_ref.options,data=_ref.data,_onClick=_ref.onClick,search=_ref.search,defaultSort=_ref.defaultSort,defaultOrder=_ref.defaultOrder,loading=_ref.loading,columns=[].concat(_toConsumableArray(columnsProp),[{id:"__options",label:"",disablePadding:!1,numeric:!1,sort:!1}]),_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(null),2),anchorMenuEl=_React$useState2[0],setAnchorMenuEl=_React$useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_tables_enhanced_table__WEBPACK_IMPORTED_MODULE_1__.N,{columns,data,search,defaultSort,defaultOrder,loading,children:function children(filteredData){return filteredData.map((function(row,i){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{onClick:function onClick(){return _onClick&&_onClick(row)},role:"row","aria-rowindex":i,sx:{cursor:_onClick&&"pointer"},children:[columns.map((function(_ref2,j){var id=_ref2.id;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{role:"cell",scope:"row","aria-rowindex":i,"aria-colindex":j,children:row[id]},id.toString())})),options&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{"data-testid":"options-".concat(row.id),onClick:function onClick(event){event.stopPropagation(),setAnchorMenuEl({item:row,anchor:event.currentTarget})},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_6__.Z,{})})})]},row.id)}))}}),options&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{anchorEl:null==anchorMenuEl?void 0:anchorMenuEl.anchor,open:!!anchorMenuEl,onClose:function onClose(){return setAnchorMenuEl(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:options.map((function(_ref3){var id=_ref3.id,label=_ref3.label,_onClick2=_ref3.onClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,{onClick:function onClick(){anchorMenuEl&&_onClick2(null==anchorMenuEl?void 0:anchorMenuEl.item),setAnchorMenuEl(null)},children:label},id)}))})]})};try{TableList.displayName="TableList",TableList.__docgenInfo={description:"",displayName:"TableList",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"HeadCell<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},search:{defaultValue:null,description:"",name:"search",required:!1,type:{name:"boolean"}},defaultSort:{defaultValue:null,description:"",name:"defaultSort",required:!0,type:{name:"string"}},defaultOrder:{defaultValue:null,description:"",name:"defaultOrder",required:!1,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"TableRowOption<T>[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((d: T) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/generators/table-list/table-list.tsx#TableList"]={docgenInfo:TableList.__docgenInfo,name:"TableList",path:"src/generators/table-list/table-list.tsx#TableList"})}catch(__react_docgen_typescript_loader_error){}},"./src/generators/table-list/table-list.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,WihtoutSearch:()=>WihtoutSearch,WithOptions:()=>WithOptions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _mui_x_data_grid_generator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/x-data-grid-generator/hooks/useDemoData.js"),_table_list__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/generators/table-list/table-list.tsx"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["dataSetType","size"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var DummyTableList=function DummyTableList(_ref){var dataSetType=_ref.dataSetType,size=_ref.size,rest=_objectWithoutProperties(_ref,_excluded),data=(0,_mui_x_data_grid_generator__WEBPACK_IMPORTED_MODULE_4__.PT)({dataSet:dataSetType,rowLength:size,maxColumns:3}).data,rows=data.rows,columns=data.columns.map((function(_ref2){return{id:_ref2.field,label:_ref2.headerName||"invalid",sort:!0,disablePadding:!1,numeric:!1}}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_table_list__WEBPACK_IMPORTED_MODULE_1__.b,_objectSpread(_objectSpread({},rest),{},{columns,data:rows,onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("onClick row")}))};DummyTableList.displayName="DummyTableList";const __WEBPACK_DEFAULT_EXPORT__={title:"Generators/TableList",component:DummyTableList,parameters:{layout:"fullscreen"}};var Default={args:{size:40,dataSetType:"Commodity",search:!0}},Loading={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},WihtoutSearch={args:{size:40,dataSetType:"Commodity",search:!1}},WithOptions={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("Option edit")},{id:"remove",label:"Remove",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("Option remove")}]}},__namedExportsOrder=["Default","Loading","WihtoutSearch","WithOptions"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: 40,\n    dataSetType: "Commodity",\n    search: true\n  }\n}',...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: 40,\n    dataSetType: "Commodity",\n    search: true,\n    loading: true\n  }\n}',...Loading.parameters?.docs?.source}}},WihtoutSearch.parameters={...WihtoutSearch.parameters,docs:{...WihtoutSearch.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: 40,\n    dataSetType: "Commodity",\n    search: false\n  }\n}',...WihtoutSearch.parameters?.docs?.source}}},WithOptions.parameters={...WithOptions.parameters,docs:{...WithOptions.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: 40,\n    dataSetType: "Commodity",\n    search: false,\n    options: [{\n      id: "edit",\n      label: "Edit",\n      onClick: action("Option edit")\n    }, {\n      id: "remove",\n      label: "Remove",\n      onClick: action("Option remove")\n    }]\n  }\n}',...WithOptions.parameters?.docs?.source}}}}}]);