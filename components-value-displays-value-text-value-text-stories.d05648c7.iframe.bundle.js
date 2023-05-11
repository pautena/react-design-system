"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[3892],{"./src/components/value-displays/value-base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qW:()=>value_displays_types.q,kX:()=>ValueEditButton,Pb:()=>ValueEditButtons,yH:()=>getEditTextFieldSx,fv:()=>useEditableValueDisplay});var react=__webpack_require__("./node_modules/react/index.js"),Check=__webpack_require__("./node_modules/@mui/icons-material/Check.js"),Clear=__webpack_require__("./node_modules/@mui/icons-material/Clear.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),inputBaseClasses=__webpack_require__("./node_modules/@mui/material/InputBase/inputBaseClasses.js"),Edit=__webpack_require__("./node_modules/@mui/icons-material/Edit.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ValueEditButtons=function ValueEditButtons(_ref){var dense=_ref.dense,onClickCancel=_ref.onClickCancel,onSubmitEdit=_ref.onSubmitEdit,sx=_ref.sx,iconSx=dense?{fontSize:12}:{};return(0,jsx_runtime.jsxs)(InputAdornment.Z,{position:"end",sx,children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",size:"small",color:"error",startIcon:(0,jsx_runtime.jsx)(Clear.Z,{sx:iconSx}),onClick:onClickCancel,sx:{paddingRight:0,minWidth:0,marginRight:1}}),(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",size:"small",color:"primary",startIcon:(0,jsx_runtime.jsx)(Check.Z,{sx:iconSx}),onClick:onSubmitEdit,sx:{paddingRight:0,minWidth:0}})]})};ValueEditButtons.displayName="ValueEditButtons";var useEditableValueDisplay=function useEditableValueDisplay(initialValue,onEdit){var _useState2=_slicedToArray((0,react.useState)(!1),2),isEditing=_useState2[0],setIsEditing=_useState2[1],_useState4=_slicedToArray((0,react.useState)(initialValue),2),editValue=_useState4[0],setEditValue=_useState4[1],cancelEdit=function cancelEdit(){setIsEditing(!1),setEditValue(initialValue)};return{isEditing,cancelEdit,editValue,setEditValue,startEdit:function startEdit(){setIsEditing(!0)},submitEdit:function submitEdit(){onEdit(editValue),cancelEdit()}}},ValueEditButton=function ValueEditButton(_ref2){var dense=_ref2.dense,onClick=_ref2.onClick,typography=(0,useTheme.Z)().typography;return(0,jsx_runtime.jsx)(IconButton.Z,{size:"small",onClick,sx:{ml:dense?.5:1},children:(0,jsx_runtime.jsx)(Edit.Z,{sx:{fontSize:typography.pxToRem(dense?18:24)}})})};ValueEditButton.displayName="ValueEditButton";var getEditTextFieldSx=function getEditTextFieldSx(dense){var _ref3;return dense?(_defineProperty(_ref3={},"& .".concat(inputBaseClasses.Z.root),{paddingRight:1}),_defineProperty(_ref3,"& .".concat(inputBaseClasses.Z.input),{paddingLeft:1,paddingY:.5}),_ref3):void 0};try{ValueEditButtons.displayName="ValueEditButtons",ValueEditButtons.__docgenInfo={description:"",displayName:"ValueEditButtons",props:{dense:{defaultValue:null,description:"",name:"dense",required:!1,type:{name:"boolean"}},onClickCancel:{defaultValue:null,description:"",name:"onClickCancel",required:!0,type:{name:"() => void"}},onSubmitEdit:{defaultValue:null,description:"",name:"onSubmitEdit",required:!0,type:{name:"() => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-base/value-edit.tsx#ValueEditButtons"]={docgenInfo:ValueEditButtons.__docgenInfo,name:"ValueEditButtons",path:"src/components/value-displays/value-base/value-edit.tsx#ValueEditButtons"})}catch(__react_docgen_typescript_loader_error){}try{useEditableValueDisplay.displayName="useEditableValueDisplay",useEditableValueDisplay.__docgenInfo={description:"Hook to manage the editing behaviour",displayName:"useEditableValueDisplay",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-base/value-edit.tsx#useEditableValueDisplay"]={docgenInfo:useEditableValueDisplay.__docgenInfo,name:"useEditableValueDisplay",path:"src/components/value-displays/value-base/value-edit.tsx#useEditableValueDisplay"})}catch(__react_docgen_typescript_loader_error){}try{ValueEditButton.displayName="ValueEditButton",ValueEditButton.__docgenInfo={description:"",displayName:"ValueEditButton",props:{dense:{defaultValue:null,description:"",name:"dense",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-base/value-edit.tsx#ValueEditButton"]={docgenInfo:ValueEditButton.__docgenInfo,name:"ValueEditButton",path:"src/components/value-displays/value-base/value-edit.tsx#ValueEditButton"})}catch(__react_docgen_typescript_loader_error){}try{getEditTextFieldSx.displayName="getEditTextFieldSx",getEditTextFieldSx.__docgenInfo={description:"",displayName:"getEditTextFieldSx",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-base/value-edit.tsx#getEditTextFieldSx"]={docgenInfo:getEditTextFieldSx.__docgenInfo,name:"getEditTextFieldSx",path:"src/components/value-displays/value-base/value-edit.tsx#getEditTextFieldSx"})}catch(__react_docgen_typescript_loader_error){}var value_displays_types=__webpack_require__("./src/components/value-displays/value-base/value-displays.types.ts")},"./src/components/value-displays/value-base/value-displays.types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>DefaultPlaceholder});var DefaultPlaceholder="-"},"./src/components/value-displays/value-content/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>_value_content__WEBPACK_IMPORTED_MODULE_0__.V,f:()=>_value_content__WEBPACK_IMPORTED_MODULE_0__.f});var _value_content__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/value-displays/value-content/value-content.tsx")},"./src/components/value-displays/value-content/value-content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>getValueContentLabelId,f:()=>ValueContent});var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),getValueContentLabelId=function getValueContentLabelId(label){return"label-".concat(label.replace(/ /g,"-"))},ValueContent=function ValueContent(_ref){var label=_ref.label,tooltip=_ref.tooltip,_ref$tooltipEnterDela=_ref.tooltipEnterDelay,tooltipEnterDelay=void 0===_ref$tooltipEnterDela?2e3:_ref$tooltipEnterDela,children=_ref.children,dense=_ref.dense,sx=_ref.sx,typography=(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z)().typography,id=getValueContentLabelId(label);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{width:1,lineHeight:dense?0:void 0,sx,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{variant:dense?"caption":"subtitle2",role:"label",id,lineHeight:dense?typography.pxToRem(15):void 0,children:label}),tooltip?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{title:tooltip,placement:"top",enterDelay:tooltipEnterDelay,children}):children]})};ValueContent.displayName="ValueContent";try{getValueContentLabelId.displayName="getValueContentLabelId",getValueContentLabelId.__docgenInfo={description:"",displayName:"getValueContentLabelId",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-content/value-content.tsx#getValueContentLabelId"]={docgenInfo:getValueContentLabelId.__docgenInfo,name:"getValueContentLabelId",path:"src/components/value-displays/value-content/value-content.tsx#getValueContentLabelId"})}catch(__react_docgen_typescript_loader_error){}try{ValueContent.displayName="ValueContent",ValueContent.__docgenInfo={description:"Displays a string value with a label",displayName:"ValueContent",props:{label:{defaultValue:null,description:"Name of the displayed value",name:"label",required:!0,type:{name:"string"}},tooltip:{defaultValue:null,description:"If defined, a tooltip is going to be added arround the children;",name:"tooltip",required:!1,type:{name:"string"}},tooltipEnterDelay:{defaultValue:{value:"2000"},description:"Timeout before the tooltip appears when the user hovers the value",name:"tooltipEnterDelay",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Component that's going to be renderd under the label",name:"children",required:!0,type:{name:"ReactElement<any, any>"}},dense:{defaultValue:null,description:"The value has to be displayed as compact or not.\nFalse by default",name:"dense",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"Custom styles for the root component",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-content/value-content.tsx#ValueContent"]={docgenInfo:ValueContent.__docgenInfo,name:"ValueContent",path:"src/components/value-displays/value-content/value-content.tsx#ValueContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/value-displays/value-text/value-text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>ValueText});var _mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_value_base__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/value-displays/value-base/index.ts")),_value_content__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/value-displays/value-content/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ValueText=function ValueText(_ref){var label=_ref.label,valueProp=_ref.value,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?_value_base__WEBPACK_IMPORTED_MODULE_1__.qW:_ref$placeholder,editable=_ref.editable,dense=_ref.dense,_ref$onEdit=_ref.onEdit,onEdit=void 0===_ref$onEdit?function(){return null}:_ref$onEdit,_useEditableValueDisp=(0,_value_base__WEBPACK_IMPORTED_MODULE_1__.fv)(null==valueProp?void 0:valueProp.toString(),onEdit),isEditing=_useEditableValueDisp.isEditing,editValue=_useEditableValueDisp.editValue,startEdit=_useEditableValueDisp.startEdit,cancelEdit=_useEditableValueDisp.cancelEdit,setEditValue=_useEditableValueDisp.setEditValue,submitEdit=_useEditableValueDisp.submitEdit,id=(0,_value_content__WEBPACK_IMPORTED_MODULE_2__.V)(label),value=(null==valueProp?void 0:valueProp.toString())||placeholder;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_value_content__WEBPACK_IMPORTED_MODULE_2__.f,{label,tooltip:value,dense,children:isEditing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{value:editValue,size:"small",onChange:function onChange(e){return setEditValue(e.target.value)},InputProps:{endAdornment:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_value_base__WEBPACK_IMPORTED_MODULE_1__.Pb,{dense,onClickCancel:cancelEdit,onSubmitEdit:submitEdit})},sx:(0,_value_base__WEBPACK_IMPORTED_MODULE_1__.yH)(dense)}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{variant:dense?"body1":"h5",noWrap:!0,"aria-labelledby":id,children:[value,editable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_value_base__WEBPACK_IMPORTED_MODULE_1__.kX,{dense,onClick:startEdit})]})})};ValueText.displayName="ValueText";try{ValueText.displayName="ValueText",ValueText.__docgenInfo={description:"Displays a string value with a label",displayName:"ValueText",props:{label:{defaultValue:null,description:"Name of the displayed value",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"Value displayed",name:"value",required:!1,type:{name:"string | number"}},placeholder:{defaultValue:{value:"-"},description:"String rendered if value is undefined",name:"placeholder",required:!1,type:{name:"string"}},dense:{defaultValue:null,description:"The value has to be displayed as compact or not.\nFalse by default",name:"dense",required:!1,type:{name:"boolean"}},editable:{defaultValue:null,description:"This field can be edited or not",name:"editable",required:!1,type:{name:"boolean"}},onEdit:{defaultValue:{value:"() => null"},description:"Callback executed when the value is edited",name:"onEdit",required:!1,type:{name:"((value?: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/value-displays/value-text/value-text.tsx#ValueText"]={docgenInfo:ValueText.__docgenInfo,name:"ValueText",path:"src/components/value-displays/value-text/value-text.tsx#ValueText"})}catch(__react_docgen_typescript_loader_error){}},"./src/providers/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dg:()=>notification_center_provider.D,sM:()=>TabProvider,nb:()=>useNotifyWhenValueChanges,xD:()=>useTab});var notification_center_provider=__webpack_require__("./src/providers/notification-center/notification-center.provider.tsx"),notification_center_context=__webpack_require__("./src/providers/notification-center/notification-center.context.ts"),react=__webpack_require__("./node_modules/react/index.js"),useNotifyWhenValueChanges=function useNotifyWhenValueChanges(notification,value,_ref){var from=_ref.from,to=_ref.to,prevRef=(0,react.useRef)(),show=(0,notification_center_context.JI)().show;(0,react.useEffect)((function(){prevRef.current===from&&value===to&&show(notification),prevRef.current=value}),[value])},TabContext=(0,react.createContext)([0,function(){return null}]),TabContextProvider=TabContext.Provider,useTab=function useTab(){return(0,react.useContext)(TabContext)},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TabProvider=function TabProvider(_ref){var children=_ref.children,_ref$initialValue=_ref.initialValue,initialValue=void 0===_ref$initialValue?0:_ref$initialValue,tabState=(0,react.useState)(initialValue);return(0,jsx_runtime.jsx)(TabContextProvider,{value:tabState,children})};TabProvider.displayName="TabProvider";try{TabProvider.displayName="TabProvider",TabProvider.__docgenInfo={description:"",displayName:"TabProvider",props:{initialValue:{defaultValue:{value:"0"},description:"",name:"initialValue",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/tab-provider/tab-provider.provider.tsx#TabProvider"]={docgenInfo:TabProvider.__docgenInfo,name:"TabProvider",path:"src/providers/tab-provider/tab-provider.provider.tsx#TabProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/providers/notification-center/notification-center.context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fk:()=>NotificationCenterContext,JI:()=>useNotificationCenter});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),NotificationCenterProviderUndefinedError=new Error("NotificationCenterContext.Provider is required and was undefined"),NotificationCenterContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0),useNotificationCenter=function useNotificationCenter(){var context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NotificationCenterContext);if(void 0===context)throw NotificationCenterProviderUndefinedError;return context}},"./src/providers/notification-center/notification-center.provider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>NotificationCenterProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Snackbar/Snackbar.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/AlertTitle/AlertTitle.js"),_notification_center_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/notification-center/notification-center.context.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var NotificationCenterProvider=function NotificationCenterProvider(_ref){var children=_ref.children,_ref$autoHideDuration=_ref.autoHideDuration,autoHideDuration=void 0===_ref$autoHideDuration?6e3:_ref$autoHideDuration,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),2),notification=_useState2[0],setNotification=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open=_useState4[0],setOpen=_useState4[1],hide=function hide(){setOpen(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_notification_center_context__WEBPACK_IMPORTED_MODULE_1__.Fk.Provider,{value:{show:function show(notification){setNotification(notification),setOpen(!0)},hide},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{open,autoHideDuration,onClose:hide,anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{onClose:hide,severity:null==notification?void 0:notification.severity,"aria-label":null==notification?void 0:notification.severity,sx:{width:"100%"},children:[(null==notification?void 0:notification.title)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{children:null==notification?void 0:notification.title}),null==notification?void 0:notification.message]})}),children]})};NotificationCenterProvider.displayName="NotificationCenterProvider";try{NotificationCenterProvider.displayName="NotificationCenterProvider",NotificationCenterProvider.__docgenInfo={description:"",displayName:"NotificationCenterProvider",props:{autoHideDuration:{defaultValue:{value:"6000"},description:"",name:"autoHideDuration",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/notification-center/notification-center.provider.tsx#NotificationCenterProvider"]={docgenInfo:NotificationCenterProvider.__docgenInfo,name:"NotificationCenterProvider",path:"src/providers/notification-center/notification-center.provider.tsx#NotificationCenterProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Rd:()=>withFullHeight,bw:()=>withLocalizationProvider,ey:()=>withMemoryRouter,jI:()=>withActionRouter,lJ:()=>StoryDialogManager,li:()=>withContainer,ps:()=>withNotificationCenter,w3:()=>withPadding});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router/dist/index.js"),_providers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/index.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_mui_x_date_pickers___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js"),_mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/x-date-pickers/AdapterDateFns/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var replaceAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("navigator/replace"),goAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("navigator/go"),pushAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("navigator/push"),closeDialogAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("dialog/close"),withActionRouter=function withActionRouter(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$location=_ref.location,location=void 0===_ref$location?"/":_ref$location,_ref$path=_ref.path,path=void 0===_ref$path?"/":_ref$path;return function(Story){var navigator={replace:function replace(args){return replaceAction(args)},go:function go(args){return goAction(args)},push:function push(args){return pushAction(args)},createHref:function createHref(){return""}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.F0,{location,navigator,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Z5,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.AW,{path,element:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})})})}},withMemoryRouter=function withMemoryRouter(){var initialEntries=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["/"];return function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.VA,{initialEntries,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})}},withNotificationCenter=function withNotificationCenter(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_providers__WEBPACK_IMPORTED_MODULE_1__.Dg,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})};withNotificationCenter.displayName="withNotificationCenter";var withFullHeight=function withFullHeight(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{height:"100vh",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})};withFullHeight.displayName="withFullHeight";var withContainer=function withContainer(_ref2){var width=_ref2.width,height=_ref2.height,bordered=_ref2.bordered,backgroundColor=_ref2.backgroundColor,padding=_ref2.padding;return function(Story){var sx={backgroundColor,padding};return bordered&&(sx=_objectSpread(_objectSpread({},sx),{},{border:"solid 1px black"})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{width,height,sx,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})}},withPadding=function withPadding(){var padding=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{padding,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})}},withLocalizationProvider=function withLocalizationProvider(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_x_date_pickers___WEBPACK_IMPORTED_MODULE_6__._,{dateAdapter:_mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_7__.H,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})};withLocalizationProvider.displayName="withLocalizationProvider";var StoryDialogManager=function StoryDialogManager(_ref3){var C=_ref3.component,args=_ref3.args,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1],handleClose=function handleClose(key){setOpen(!1),closeDialogAction(key)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,{variant:"contained",onClick:function onClick(){return setOpen(!0)},children:"Open"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(C,_objectSpread(_objectSpread({},args),{},{open,onClose:function onClose(){return handleClose("close")},onCancel:function onCancel(){return handleClose("cancel")},onAccept:function onAccept(){return handleClose("accept")},onConfirm:function onConfirm(){return handleClose("confirm")},onSubmit:function onSubmit(){return handleClose("submit")}}))]})};StoryDialogManager.displayName="StoryDialogManager";try{withActionRouter.displayName="withActionRouter",withActionRouter.__docgenInfo={description:"",displayName:"withActionRouter",props:{location:{defaultValue:{value:"/"},description:"",name:"location",required:!1,type:{name:"string"}},path:{defaultValue:{value:"/"},description:"",name:"path",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withActionRouter"]={docgenInfo:withActionRouter.__docgenInfo,name:"withActionRouter",path:"src/storybook.tsx#withActionRouter"})}catch(__react_docgen_typescript_loader_error){}try{withMemoryRouter.displayName="withMemoryRouter",withMemoryRouter.__docgenInfo={description:"",displayName:"withMemoryRouter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withMemoryRouter"]={docgenInfo:withMemoryRouter.__docgenInfo,name:"withMemoryRouter",path:"src/storybook.tsx#withMemoryRouter"})}catch(__react_docgen_typescript_loader_error){}try{withNotificationCenter.displayName="withNotificationCenter",withNotificationCenter.__docgenInfo={description:"",displayName:"withNotificationCenter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withNotificationCenter"]={docgenInfo:withNotificationCenter.__docgenInfo,name:"withNotificationCenter",path:"src/storybook.tsx#withNotificationCenter"})}catch(__react_docgen_typescript_loader_error){}try{withFullHeight.displayName="withFullHeight",withFullHeight.__docgenInfo={description:"",displayName:"withFullHeight",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withFullHeight"]={docgenInfo:withFullHeight.__docgenInfo,name:"withFullHeight",path:"src/storybook.tsx#withFullHeight"})}catch(__react_docgen_typescript_loader_error){}try{withContainer.displayName="withContainer",withContainer.__docgenInfo={description:"",displayName:"withContainer",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withContainer"]={docgenInfo:withContainer.__docgenInfo,name:"withContainer",path:"src/storybook.tsx#withContainer"})}catch(__react_docgen_typescript_loader_error){}try{withPadding.displayName="withPadding",withPadding.__docgenInfo={description:"",displayName:"withPadding",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withPadding"]={docgenInfo:withPadding.__docgenInfo,name:"withPadding",path:"src/storybook.tsx#withPadding"})}catch(__react_docgen_typescript_loader_error){}try{withLocalizationProvider.displayName="withLocalizationProvider",withLocalizationProvider.__docgenInfo={description:"",displayName:"withLocalizationProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withLocalizationProvider"]={docgenInfo:withLocalizationProvider.__docgenInfo,name:"withLocalizationProvider",path:"src/storybook.tsx#withLocalizationProvider"})}catch(__react_docgen_typescript_loader_error){}try{StoryDialogManager.displayName="StoryDialogManager",StoryDialogManager.__docgenInfo={description:"",displayName:"StoryDialogManager",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"FunctionComponent<any>"}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#StoryDialogManager"]={docgenInfo:StoryDialogManager.__docgenInfo,name:"StoryDialogManager",path:"src/storybook.tsx#StoryDialogManager"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/value-displays/value-text/value-text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomPlaceholder:()=>CustomPlaceholder,Default:()=>Default,Dense:()=>Dense,DenseEditable:()=>DenseEditable,Editable:()=>Editable,NumberAsValue:()=>NumberAsValue,Placeholder:()=>Placeholder,TruncatedText:()=>TruncatedText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _value_text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/value-displays/value-text/value-text.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/storybook.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Value displays/ValueText",component:_value_text__WEBPACK_IMPORTED_MODULE_0__.q,decorators:[(0,_storybook__WEBPACK_IMPORTED_MODULE_1__.li)({width:200})],parameters:{layout:"centered"}};var Default={args:{label:"Lorem",value:"ipsum sit"}},Dense={args:{label:"Lorem",value:"ipsum sit",dense:!0}},NumberAsValue={args:{label:"Lorem",value:1e3}},TruncatedText={args:{label:"Lorem",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}},Placeholder={args:{label:"Lorem"}},CustomPlaceholder={args:{label:"Lorem",placeholder:"."}},Editable={args:{label:"Lorem",value:"lorem ipsum",editable:!0}},DenseEditable={args:{label:"Lorem",value:"lorem ipsum",dense:!0,editable:!0}},__namedExportsOrder=["Default","Dense","NumberAsValue","TruncatedText","Placeholder","CustomPlaceholder","Editable","DenseEditable"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: "ipsum sit"\n  }\n}',...Default.parameters?.docs?.source}}},Dense.parameters={...Dense.parameters,docs:{...Dense.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: "ipsum sit",\n    dense: true\n  }\n}',...Dense.parameters?.docs?.source}}},NumberAsValue.parameters={...NumberAsValue.parameters,docs:{...NumberAsValue.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: 1000\n  }\n}',...NumberAsValue.parameters?.docs?.source}}},TruncatedText.parameters={...TruncatedText.parameters,docs:{...TruncatedText.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n  }\n}',...TruncatedText.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem"\n  }\n}',...Placeholder.parameters?.docs?.source}}},CustomPlaceholder.parameters={...CustomPlaceholder.parameters,docs:{...CustomPlaceholder.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    placeholder: "."\n  }\n}',...CustomPlaceholder.parameters?.docs?.source}}},Editable.parameters={...Editable.parameters,docs:{...Editable.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: "lorem ipsum",\n    editable: true\n  }\n}',...Editable.parameters?.docs?.source}}},DenseEditable.parameters={...DenseEditable.parameters,docs:{...DenseEditable.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: "lorem ipsum",\n    dense: true,\n    editable: true\n  }\n}',...DenseEditable.parameters?.docs?.source}}}}}]);