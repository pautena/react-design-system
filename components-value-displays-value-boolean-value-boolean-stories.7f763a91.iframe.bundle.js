"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[7417],{"./src/components/value-displays/value-base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qW:()=>value_displays_types.q,Pb:()=>ValueEditButtons,fv:()=>useEditableValueDisplay});var react=__webpack_require__("./node_modules/react/index.js"),Check=__webpack_require__("./node_modules/@mui/icons-material/Check.js"),Clear=__webpack_require__("./node_modules/@mui/icons-material/Clear.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ValueEditButtons=function ValueEditButtons(_ref){var onClickCancel=_ref.onClickCancel,onSubmitEdit=_ref.onSubmitEdit,sx=_ref.sx;return(0,jsx_runtime.jsxs)(InputAdornment.Z,{position:"end",sx,children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",size:"small",color:"error",startIcon:(0,jsx_runtime.jsx)(Clear.Z,{}),onClick:onClickCancel,sx:{paddingRight:0,minWidth:0,marginRight:1}}),(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",size:"small",color:"primary",startIcon:(0,jsx_runtime.jsx)(Check.Z,{}),onClick:onSubmitEdit,sx:{paddingRight:0,minWidth:0}})]})};ValueEditButtons.displayName="ValueEditButtons";var useEditableValueDisplay=function useEditableValueDisplay(initialValue,onEdit){var _useState2=_slicedToArray((0,react.useState)(!1),2),isEditing=_useState2[0],setIsEditing=_useState2[1],_useState4=_slicedToArray((0,react.useState)(initialValue),2),editValue=_useState4[0],setEditValue=_useState4[1],cancelEdit=function cancelEdit(){setIsEditing(!1),setEditValue(initialValue)};return{isEditing,cancelEdit,editValue,setEditValue,startEdit:function startEdit(){setIsEditing(!0)},submitEdit:function submitEdit(){onEdit(editValue),cancelEdit()}}};try{ValueEditButtons.displayName="ValueEditButtons",ValueEditButtons.__docgenInfo={description:"",displayName:"ValueEditButtons",props:{onClickCancel:{defaultValue:null,description:"",name:"onClickCancel",required:!0,type:{name:"() => void"}},onSubmitEdit:{defaultValue:null,description:"",name:"onSubmitEdit",required:!0,type:{name:"() => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-base/value-edit.tsx#ValueEditButtons"]={docgenInfo:ValueEditButtons.__docgenInfo,name:"ValueEditButtons",path:"src/components/value-displays/value-base/value-edit.tsx#ValueEditButtons"})}catch(__react_docgen_typescript_loader_error){}try{useEditableValueDisplay.displayName="useEditableValueDisplay",useEditableValueDisplay.__docgenInfo={description:"Hook to manage the editing behaviour",displayName:"useEditableValueDisplay",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-base/value-edit.tsx#useEditableValueDisplay"]={docgenInfo:useEditableValueDisplay.__docgenInfo,name:"useEditableValueDisplay",path:"src/components/value-displays/value-base/value-edit.tsx#useEditableValueDisplay"})}catch(__react_docgen_typescript_loader_error){}var value_displays_types=__webpack_require__("./src/components/value-displays/value-base/value-displays.types.ts")},"./src/components/value-displays/value-base/value-displays.types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>DefaultPlaceholder});var DefaultPlaceholder="-"},"./src/components/value-displays/value-boolean/value-boolean.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ValueBoolean});var _mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Switch/Switch.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@mui/icons-material/Check.js")),_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/icons-material/Close.js"),_value_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/value-displays/value-base/index.ts"),_value_content__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/value-displays/value-content/index.ts"),_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/icons-material/Edit.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ValueBoolean=function ValueBoolean(_ref){var label=_ref.label,value=_ref.value,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?_value_base__WEBPACK_IMPORTED_MODULE_1__.qW:_ref$placeholder,editable=_ref.editable,dense=_ref.dense,_ref$onEdit=_ref.onEdit,onEdit=void 0===_ref$onEdit?function(){return null}:_ref$onEdit,typography=(0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z)().typography,_useEditableValueDisp=(0,_value_base__WEBPACK_IMPORTED_MODULE_1__.fv)(value,onEdit),isEditing=_useEditableValueDisp.isEditing,editValue=_useEditableValueDisp.editValue,startEdit=_useEditableValueDisp.startEdit,cancelEdit=_useEditableValueDisp.cancelEdit,setEditValue=_useEditableValueDisp.setEditValue,submitEdit=_useEditableValueDisp.submitEdit,iconSx={fontSize:dense?typography.h6.fontSize:typography.h5.fontSize};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_value_content__WEBPACK_IMPORTED_MODULE_2__.f,{label,dense,children:isEditing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{display:"flex",alignItems:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{checked:editValue,onChange:function onChange(e){return setEditValue(e.target.checked)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_value_base__WEBPACK_IMPORTED_MODULE_1__.Pb,{onClickCancel:cancelEdit,onSubmitEdit:submitEdit})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{display:"flex",alignItems:"center",children:[void 0===value?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{variant:"h5",children:placeholder}):value?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_8__.Z,{color:"success",sx:iconSx}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__.Z,{color:"error",sx:iconSx}),editable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Z,{size:"small",onClick:startEdit,sx:{ml:1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_11__.Z,{})})]})})};ValueBoolean.displayName="ValueBoolean";try{ValueBoolean.displayName="ValueBoolean",ValueBoolean.__docgenInfo={description:"Displays a boolean value with a label",displayName:"ValueBoolean",props:{label:{defaultValue:null,description:"Name of the displayed value",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"Value displayed",name:"value",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"-"},description:"String rendered if value is undefined",name:"placeholder",required:!1,type:{name:"string"}},dense:{defaultValue:null,description:"The value has to be displayed as compact or not.\nFalse by default",name:"dense",required:!1,type:{name:"boolean"}},editable:{defaultValue:null,description:"This field can be edited or not",name:"editable",required:!1,type:{name:"boolean"}},onEdit:{defaultValue:{value:"() => null"},description:"Callback executed when the value is edited",name:"onEdit",required:!1,type:{name:"((value?: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-boolean/value-boolean.tsx#ValueBoolean"]={docgenInfo:ValueBoolean.__docgenInfo,name:"ValueBoolean",path:"src/components/value-displays/value-boolean/value-boolean.tsx#ValueBoolean"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/value-displays/value-content/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>_value_content__WEBPACK_IMPORTED_MODULE_0__.V,f:()=>_value_content__WEBPACK_IMPORTED_MODULE_0__.f});var _value_content__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/value-displays/value-content/value-content.tsx")},"./src/components/value-displays/value-content/value-content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>getValueContentLabelId,f:()=>ValueContent});var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),getValueContentLabelId=function getValueContentLabelId(label){return"label-".concat(label.replace(/ /g,"-"))},ValueContent=function ValueContent(_ref){var label=_ref.label,tooltip=_ref.tooltip,_ref$tooltipEnterDela=_ref.tooltipEnterDelay,tooltipEnterDelay=void 0===_ref$tooltipEnterDela?2e3:_ref$tooltipEnterDela,children=_ref.children,dense=_ref.dense,typography=(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z)().typography,id=getValueContentLabelId(label);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{width:1,lineHeight:dense?0:void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{variant:dense?"caption":"subtitle2",role:"label",id,lineHeight:dense?typography.pxToRem(15):void 0,children:label}),tooltip?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{title:tooltip,placement:"top",enterDelay:tooltipEnterDelay,children}):children]})};ValueContent.displayName="ValueContent";try{getValueContentLabelId.displayName="getValueContentLabelId",getValueContentLabelId.__docgenInfo={description:"",displayName:"getValueContentLabelId",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-content/value-content.tsx#getValueContentLabelId"]={docgenInfo:getValueContentLabelId.__docgenInfo,name:"getValueContentLabelId",path:"src/components/value-displays/value-content/value-content.tsx#getValueContentLabelId"})}catch(__react_docgen_typescript_loader_error){}try{ValueContent.displayName="ValueContent",ValueContent.__docgenInfo={description:"Displays a string value with a label",displayName:"ValueContent",props:{label:{defaultValue:null,description:"Name of the displayed value",name:"label",required:!0,type:{name:"string"}},tooltip:{defaultValue:null,description:"If defined, a tooltip is going to be added arround the children;",name:"tooltip",required:!1,type:{name:"string"}},tooltipEnterDelay:{defaultValue:{value:"2000"},description:"Timeout before the tooltip appears when the user hovers the value",name:"tooltipEnterDelay",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Component that's going to be renderd under the label",name:"children",required:!0,type:{name:"ReactElement<any, any>"}},dense:{defaultValue:null,description:"The value has to be displayed as compact or not.\nFalse by default",name:"dense",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-content/value-content.tsx#ValueContent"]={docgenInfo:ValueContent.__docgenInfo,name:"ValueContent",path:"src/components/value-displays/value-content/value-content.tsx#ValueContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/value-displays/value-boolean/value-boolean.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dense:()=>Dense,Editable:()=>Editable,False:()=>False,True:()=>True,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Value displays/ValueBoolean",component:__webpack_require__("./src/components/value-displays/value-boolean/value-boolean.tsx").h,parameters:{layout:"centered"}};var True={args:{label:"Lorem ipsum",value:!0}},False={args:{label:"Lorem ipsum",value:!1}},Editable={args:{label:"Lorem ipsum",value:!1,editable:!0}},Dense={args:{label:"Lorem ipsum",value:!0,dense:!0}},__namedExportsOrder=["True","False","Editable","Dense"];True.parameters={...True.parameters,docs:{...True.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem ipsum",\n    value: true\n  }\n}',...True.parameters?.docs?.source}}},False.parameters={...False.parameters,docs:{...False.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem ipsum",\n    value: false\n  }\n}',...False.parameters?.docs?.source}}},Editable.parameters={...Editable.parameters,docs:{...Editable.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem ipsum",\n    value: false,\n    editable: true\n  }\n}',...Editable.parameters?.docs?.source}}},Dense.parameters={...Dense.parameters,docs:{...Dense.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem ipsum",\n    value: true,\n    dense: true\n  }\n}',...Dense.parameters?.docs?.source}}}}}]);