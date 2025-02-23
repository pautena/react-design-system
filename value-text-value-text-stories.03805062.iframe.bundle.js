"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[9761],{"./node_modules/@mui/icons-material/esm/Check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},"./node_modules/@mui/icons-material/esm/Clear.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear")},"./node_modules/@mui/icons-material/esm/Edit.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},"./node_modules/@mui/material/InputAdornment/InputAdornment.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InputAdornment_InputAdornment});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),FormControlContext=__webpack_require__("./node_modules/@mui/material/FormControl/FormControlContext.js"),useFormControl=__webpack_require__("./node_modules/@mui/material/FormControl/useFormControl.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),memoTheme=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getInputAdornmentUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiInputAdornment",slot)}const InputAdornment_inputAdornmentClasses=(0,generateUtilityClasses.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var _span,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputAdornmentRoot=(0,styled.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`position${(0,capitalize.Z)(ownerState.position)}`],!0===ownerState.disablePointerEvents&&styles.disablePointerEvents,styles[ownerState.variant]]}})((0,memoTheme.Z)((({theme})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(theme.vars||theme).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${InputAdornment_inputAdornmentClasses.positionStart}&:not(.${InputAdornment_inputAdornmentClasses.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]})))),InputAdornment_InputAdornment=react.forwardRef((function InputAdornment(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiInputAdornment"}),{children,className,component="div",disablePointerEvents=!1,disableTypography=!1,position,variant:variantProp,...other}=props,muiFormControl=(0,useFormControl.Z)()||{};let variant=variantProp;variantProp&&muiFormControl.variant,muiFormControl&&!variant&&(variant=muiFormControl.variant);const ownerState={...props,hiddenLabel:muiFormControl.hiddenLabel,size:muiFormControl.size,disablePointerEvents,position,variant},classes=(ownerState=>{const{classes,disablePointerEvents,hiddenLabel,position,size,variant}=ownerState,slots={root:["root",disablePointerEvents&&"disablePointerEvents",position&&`position${(0,capitalize.Z)(position)}`,variant,hiddenLabel&&"hiddenLabel",size&&`size${(0,capitalize.Z)(size)}`]};return(0,composeClasses.Z)(slots,getInputAdornmentUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(FormControlContext.Z.Provider,{value:null,children:(0,jsx_runtime.jsx)(InputAdornmentRoot,{as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref,...other,children:"string"!=typeof children||disableTypography?(0,jsx_runtime.jsxs)(react.Fragment,{children:["start"===position?_span||(_span=(0,jsx_runtime.jsx)("span",{className:"notranslate","aria-hidden":!0,children:"​"})):null,children]}):(0,jsx_runtime.jsx)(Typography.Z,{color:"textSecondary",children})})})}))},"./src/value-text/value-text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomPlaceholder:()=>CustomPlaceholder,Default:()=>Default,Dense:()=>Dense,DenseEditable:()=>DenseEditable,Editable:()=>Editable,NumberAsValue:()=>NumberAsValue,Placeholder:()=>Placeholder,TruncatedText:()=>TruncatedText,TruncatedTextEditable:()=>TruncatedTextEditable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _value_text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/value-text/value-text.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/storybook.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Value displays/ValueText",component:_value_text__WEBPACK_IMPORTED_MODULE_0__.q,decorators:[(0,_storybook__WEBPACK_IMPORTED_MODULE_1__.li)({width:200})],parameters:{layout:"centered"}};var Default={args:{label:"Lorem",value:"ipsum sit"}},Dense={args:{label:"Lorem",value:"ipsum sit",dense:!0}},NumberAsValue={args:{label:"Lorem",value:1e3}},TruncatedText={args:{label:"Lorem",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}},TruncatedTextEditable={args:{label:"Lorem",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",editable:!0}},Placeholder={args:{label:"Lorem"}},CustomPlaceholder={args:{label:"Lorem",placeholder:"."}},Editable={args:{label:"Lorem",value:"lorem ipsum",editable:!0}},DenseEditable={args:{label:"Lorem",value:"lorem ipsum",dense:!0,editable:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: "ipsum sit"\n  }\n}',...Default.parameters?.docs?.source}}},Dense.parameters={...Dense.parameters,docs:{...Dense.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: "ipsum sit",\n    dense: true\n  }\n}',...Dense.parameters?.docs?.source}}},NumberAsValue.parameters={...NumberAsValue.parameters,docs:{...NumberAsValue.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: 1000\n  }\n}',...NumberAsValue.parameters?.docs?.source}}},TruncatedText.parameters={...TruncatedText.parameters,docs:{...TruncatedText.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n  }\n}',...TruncatedText.parameters?.docs?.source}}},TruncatedTextEditable.parameters={...TruncatedTextEditable.parameters,docs:{...TruncatedTextEditable.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",\n    editable: true\n  }\n}',...TruncatedTextEditable.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem"\n  }\n}',...Placeholder.parameters?.docs?.source}}},CustomPlaceholder.parameters={...CustomPlaceholder.parameters,docs:{...CustomPlaceholder.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    placeholder: "."\n  }\n}',...CustomPlaceholder.parameters?.docs?.source}}},Editable.parameters={...Editable.parameters,docs:{...Editable.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: "lorem ipsum",\n    editable: true\n  }\n}',...Editable.parameters?.docs?.source}}},DenseEditable.parameters={...DenseEditable.parameters,docs:{...DenseEditable.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Lorem",\n    value: "lorem ipsum",\n    dense: true,\n    editable: true\n  }\n}',...DenseEditable.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Dense","NumberAsValue","TruncatedText","TruncatedTextEditable","Placeholder","CustomPlaceholder","Editable","DenseEditable"]},"./src/notification-center/notification-center.context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fk:()=>NotificationCenterContext,JI:()=>useNotificationCenter});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),NotificationCenterProviderUndefinedError=new Error("NotificationCenterContext.Provider is required and was undefined"),NotificationCenterContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useNotificationCenter=function useNotificationCenter(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NotificationCenterContext);if(void 0===context)throw NotificationCenterProviderUndefinedError;return context}},"./src/notification-center/notification-center.provider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>NotificationCenterProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Snackbar/Snackbar.js"),_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),_mui_material_AlertTitle__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/AlertTitle/AlertTitle.js"),_notification_center_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/notification-center/notification-center.context.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var NotificationCenterProvider=function NotificationCenterProvider(_ref){var children=_ref.children,_ref$autoHideDuration=_ref.autoHideDuration,autoHideDuration=void 0===_ref$autoHideDuration?6e3:_ref$autoHideDuration,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),2),notification=_useState2[0],setNotification=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open=_useState4[0],setOpen=_useState4[1],hide=function hide(){setOpen(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_notification_center_context__WEBPACK_IMPORTED_MODULE_1__.Fk.Provider,{value:{show:function show(notification){setNotification(notification),setOpen(!0)},hide},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_3__.Z,{open,autoHideDuration,onClose:hide,anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__.Z,{onClose:hide,severity:null==notification?void 0:notification.severity,"aria-label":null==notification?void 0:notification.severity,sx:{width:"100%"},children:[(null==notification?void 0:notification.title)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_AlertTitle__WEBPACK_IMPORTED_MODULE_5__.Z,{children:null==notification?void 0:notification.title}),null==notification?void 0:notification.message]})}),children]})};NotificationCenterProvider.displayName="NotificationCenterProvider";try{NotificationCenterProvider.displayName="NotificationCenterProvider",NotificationCenterProvider.__docgenInfo={description:"",displayName:"NotificationCenterProvider",props:{autoHideDuration:{defaultValue:{value:"6000"},description:"",name:"autoHideDuration",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/notification-center/notification-center.provider.tsx#NotificationCenterProvider"]={docgenInfo:NotificationCenterProvider.__docgenInfo,name:"NotificationCenterProvider",path:"src/notification-center/notification-center.provider.tsx#NotificationCenterProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lJ:()=>StoryDialogManager,li:()=>withContainer,Rd:()=>withFullHeight,bw:()=>withLocalizationProvider,w3:()=>withPadding});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),notification_center_provider=__webpack_require__("./src/notification-center/notification-center.provider.tsx"),dist=(__webpack_require__("./src/notification-center/notification-center.context.ts"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs")),LocalizationProvider=__webpack_require__("./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js"),AdapterDateFnsV3=__webpack_require__("./node_modules/@mui/x-date-pickers/AdapterDateFnsV3/AdapterDateFnsV3.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var closeDialogAction=(0,dist.aD)("dialog/close"),withNotificationCenter=function withNotificationCenter(Story){return(0,jsx_runtime.jsx)(notification_center_provider.D,{children:(0,jsx_runtime.jsx)(Story,{})})};withNotificationCenter.displayName="withNotificationCenter";var withFullHeight=function withFullHeight(Story){return(0,jsx_runtime.jsx)(Box.Z,{height:"100vh",children:(0,jsx_runtime.jsx)(Story,{})})};withFullHeight.displayName="withFullHeight";var withContainer=function withContainer(_ref){var width=_ref.width,height=_ref.height,bordered=_ref.bordered,backgroundColor=_ref.backgroundColor,padding=_ref.padding;return function(Story){var sx={backgroundColor,padding};return bordered&&(sx=_objectSpread(_objectSpread({},sx),{},{border:"solid 1px black"})),(0,jsx_runtime.jsx)(Box.Z,{width,height,sx,children:(0,jsx_runtime.jsx)(Story,{})})}},withPadding=function withPadding(){var padding=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return function(Story){return(0,jsx_runtime.jsx)(Box.Z,{padding,children:(0,jsx_runtime.jsx)(Story,{})})}},withLocalizationProvider=function withLocalizationProvider(Story){return(0,jsx_runtime.jsx)(LocalizationProvider._,{dateAdapter:AdapterDateFnsV3.H,children:(0,jsx_runtime.jsx)(Story,{})})};withLocalizationProvider.displayName="withLocalizationProvider";var StoryDialogManager=function StoryDialogManager(_ref2){var C=_ref2.component,args=_ref2.args,_useState2=_slicedToArray((0,react.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1],handleClose=function handleClose(key){setOpen(!1),closeDialogAction(key)};return(0,jsx_runtime.jsxs)(Box.Z,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",onClick:function onClick(){return setOpen(!0)},children:"Open"}),(0,jsx_runtime.jsx)(C,_objectSpread(_objectSpread({},args),{},{open,onClose:function onClose(){return handleClose("close")},onCancel:function onCancel(){return handleClose("cancel")},onAccept:function onAccept(){return handleClose("accept")},onConfirm:function onConfirm(){return handleClose("confirm")},onSubmit:function onSubmit(){return handleClose("submit")}}))]})};StoryDialogManager.displayName="StoryDialogManager";try{withNotificationCenter.displayName="withNotificationCenter",withNotificationCenter.__docgenInfo={description:"",displayName:"withNotificationCenter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withNotificationCenter"]={docgenInfo:withNotificationCenter.__docgenInfo,name:"withNotificationCenter",path:"src/storybook.tsx#withNotificationCenter"})}catch(__react_docgen_typescript_loader_error){}try{withFullHeight.displayName="withFullHeight",withFullHeight.__docgenInfo={description:"",displayName:"withFullHeight",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withFullHeight"]={docgenInfo:withFullHeight.__docgenInfo,name:"withFullHeight",path:"src/storybook.tsx#withFullHeight"})}catch(__react_docgen_typescript_loader_error){}try{withContainer.displayName="withContainer",withContainer.__docgenInfo={description:"",displayName:"withContainer",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withContainer"]={docgenInfo:withContainer.__docgenInfo,name:"withContainer",path:"src/storybook.tsx#withContainer"})}catch(__react_docgen_typescript_loader_error){}try{withPadding.displayName="withPadding",withPadding.__docgenInfo={description:"",displayName:"withPadding",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withPadding"]={docgenInfo:withPadding.__docgenInfo,name:"withPadding",path:"src/storybook.tsx#withPadding"})}catch(__react_docgen_typescript_loader_error){}try{withLocalizationProvider.displayName="withLocalizationProvider",withLocalizationProvider.__docgenInfo={description:"",displayName:"withLocalizationProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#withLocalizationProvider"]={docgenInfo:withLocalizationProvider.__docgenInfo,name:"withLocalizationProvider",path:"src/storybook.tsx#withLocalizationProvider"})}catch(__react_docgen_typescript_loader_error){}try{StoryDialogManager.displayName="StoryDialogManager",StoryDialogManager.__docgenInfo={description:"",displayName:"StoryDialogManager",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"FunctionComponent<any>"}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook.tsx#StoryDialogManager"]={docgenInfo:StoryDialogManager.__docgenInfo,name:"StoryDialogManager",path:"src/storybook.tsx#StoryDialogManager"})}catch(__react_docgen_typescript_loader_error){}},"./src/value-base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qW:()=>DefaultPlaceholder,kX:()=>ValueEditButton,Pb:()=>ValueEditButtons,fv:()=>useEditableValueDisplay});var react=__webpack_require__("./node_modules/react/index.js"),Check=__webpack_require__("./node_modules/@mui/icons-material/esm/Check.js"),Clear=__webpack_require__("./node_modules/@mui/icons-material/esm/Clear.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),Edit=__webpack_require__("./node_modules/@mui/icons-material/esm/Edit.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var ValueEditButtons=function ValueEditButtons(_ref){var onClickCancel=_ref.onClickCancel,onClickSubmit=_ref.onClickSubmit,sx=_ref.sx;return(0,jsx_runtime.jsxs)(InputAdornment.Z,{position:"end",sx,children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",size:"small",color:"error","aria-label":"cancel button",startIcon:(0,jsx_runtime.jsx)(Clear.Z,{sx:{fontSize:12}}),onClick:onClickCancel,sx:{paddingRight:0,minWidth:0,marginRight:1}}),(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",size:"small",color:"primary","aria-label":"submit button",startIcon:(0,jsx_runtime.jsx)(Check.Z,{sx:{fontSize:12}}),onClick:onClickSubmit,sx:{paddingRight:0,minWidth:0}})]})};ValueEditButtons.displayName="ValueEditButtons";var useEditableValueDisplay=function useEditableValueDisplay(initialValue,onEdit){var _useState2=_slicedToArray((0,react.useState)(!1),2),isEditing=_useState2[0],setIsEditing=_useState2[1],_useState4=_slicedToArray((0,react.useState)(initialValue),2),editValue=_useState4[0],setEditValue=_useState4[1],cancelEdit=function cancelEdit(){setIsEditing(!1),setEditValue(initialValue)};return{isEditing,cancelEdit,editValue,setEditValue,startEdit:function startEdit(){setIsEditing(!0)},submitEdit:function submitEdit(){onEdit(editValue),cancelEdit()}}},ValueEditButton=function ValueEditButton(_ref2){var dense=_ref2.dense,onClick=_ref2.onClick,typography=(0,useTheme.Z)().typography;return(0,jsx_runtime.jsx)(IconButton.Z,{size:"small",onClick,sx:{ml:dense?.5:1},"aria-label":"edit button",children:(0,jsx_runtime.jsx)(Edit.Z,{sx:{fontSize:typography.pxToRem(dense?18:24)}})})};ValueEditButton.displayName="ValueEditButton";try{ValueEditButtons.displayName="ValueEditButtons",ValueEditButtons.__docgenInfo={description:"",displayName:"ValueEditButtons",props:{onClickCancel:{defaultValue:null,description:"",name:"onClickCancel",required:!0,type:{name:"() => void"}},onClickSubmit:{defaultValue:null,description:"",name:"onClickSubmit",required:!0,type:{name:"() => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/value-base/value-edit.tsx#ValueEditButtons"]={docgenInfo:ValueEditButtons.__docgenInfo,name:"ValueEditButtons",path:"src/value-base/value-edit.tsx#ValueEditButtons"})}catch(__react_docgen_typescript_loader_error){}try{useEditableValueDisplay.displayName="useEditableValueDisplay",useEditableValueDisplay.__docgenInfo={description:"Hook to manage the editing behaviour",displayName:"useEditableValueDisplay",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/value-base/value-edit.tsx#useEditableValueDisplay"]={docgenInfo:useEditableValueDisplay.__docgenInfo,name:"useEditableValueDisplay",path:"src/value-base/value-edit.tsx#useEditableValueDisplay"})}catch(__react_docgen_typescript_loader_error){}try{ValueEditButton.displayName="ValueEditButton",ValueEditButton.__docgenInfo={description:"",displayName:"ValueEditButton",props:{dense:{defaultValue:null,description:"",name:"dense",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/value-base/value-edit.tsx#ValueEditButton"]={docgenInfo:ValueEditButton.__docgenInfo,name:"ValueEditButton",path:"src/value-base/value-edit.tsx#ValueEditButton"})}catch(__react_docgen_typescript_loader_error){}var DefaultPlaceholder="-"},"./src/value-content/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>_value_content__WEBPACK_IMPORTED_MODULE_0__.V,f:()=>_value_content__WEBPACK_IMPORTED_MODULE_0__.f});var _value_content__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/value-content/value-content.tsx")},"./src/value-content/value-content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>getValueContentLabelId,f:()=>ValueContent});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),getValueContentLabelId=function getValueContentLabelId(label){return"label-".concat(label.replace(/ /g,"-"))},ValueContent=function ValueContent(_ref){var label=_ref.label,hideLabel=_ref.hideLabel,tooltip=_ref.tooltip,_ref$tooltipEnterDela=_ref.tooltipEnterDelay,tooltipEnterDelay=void 0===_ref$tooltipEnterDela?2e3:_ref$tooltipEnterDela,children=_ref.children,dense=_ref.dense,sx=_ref.sx,typography=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.Z)().typography,id=getValueContentLabelId(label);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__.Z,{width:1,lineHeight:dense?0:void 0,sx,children:[!hideLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__.Z,{variant:dense?"caption":"subtitle2",role:"label",id,lineHeight:dense?typography.pxToRem(15):void 0,children:label}),tooltip?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{title:tooltip,placement:"top",enterDelay:tooltipEnterDelay,children}):children]})};ValueContent.displayName="ValueContent";try{getValueContentLabelId.displayName="getValueContentLabelId",getValueContentLabelId.__docgenInfo={description:"",displayName:"getValueContentLabelId",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/value-content/value-content.tsx#getValueContentLabelId"]={docgenInfo:getValueContentLabelId.__docgenInfo,name:"getValueContentLabelId",path:"src/value-content/value-content.tsx#getValueContentLabelId"})}catch(__react_docgen_typescript_loader_error){}try{ValueContent.displayName="ValueContent",ValueContent.__docgenInfo={description:"Displays a string value with a label",displayName:"ValueContent",props:{label:{defaultValue:null,description:"Name of the displayed value",name:"label",required:!0,type:{name:"string"}},hideLabel:{defaultValue:null,description:"If true, the label will not be shown",name:"hideLabel",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"If defined, a tooltip is going to be added arround the children;",name:"tooltip",required:!1,type:{name:"string"}},tooltipEnterDelay:{defaultValue:{value:"2000"},description:"Timeout before the tooltip appears when the user hovers the value",name:"tooltipEnterDelay",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Component that's going to be renderd under the label",name:"children",required:!0,type:{name:"ReactElement<any, any>"}},dense:{defaultValue:null,description:"The value has to be displayed as compact or not.\nFalse by default",name:"dense",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"Custom styles for the root component",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/value-content/value-content.tsx#ValueContent"]={docgenInfo:ValueContent.__docgenInfo,name:"ValueContent",path:"src/value-content/value-content.tsx#ValueContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/value-text/value-text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>ValueText});var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_value_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/value-base/index.ts"),_value_content__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/value-content/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ValueText=function ValueText(_ref){var label=_ref.label,valueProp=_ref.value,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?_value_base__WEBPACK_IMPORTED_MODULE_1__.qW:_ref$placeholder,editable=_ref.editable,dense=_ref.dense,_ref$onEdit=_ref.onEdit,onEdit=void 0===_ref$onEdit?function(){return null}:_ref$onEdit,editInputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useEditableValueDisp=(0,_value_base__WEBPACK_IMPORTED_MODULE_1__.fv)(null==valueProp?void 0:valueProp.toString(),onEdit),isEditing=_useEditableValueDisp.isEditing,editValue=_useEditableValueDisp.editValue,startEdit=_useEditableValueDisp.startEdit,cancelEdit=_useEditableValueDisp.cancelEdit,setEditValue=_useEditableValueDisp.setEditValue,submitEdit=_useEditableValueDisp.submitEdit,id=(0,_value_content__WEBPACK_IMPORTED_MODULE_2__.V)(label),value=(null==valueProp?void 0:valueProp.toString())||placeholder,editKeyPressListener=function editKeyPressListener(e){"Enter"===e.key&&onEdit(e.target.value)};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _editInputRef$current;return null===(_editInputRef$current=editInputRef.current)||void 0===_editInputRef$current||_editInputRef$current.addEventListener("keypress",editKeyPressListener),function(){var _editInputRef$current2;return null===(_editInputRef$current2=editInputRef.current)||void 0===_editInputRef$current2?void 0:_editInputRef$current2.removeEventListener("keypress",editKeyPressListener)}}),[editInputRef.current]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_value_content__WEBPACK_IMPORTED_MODULE_2__.f,{hideLabel:isEditing,label,tooltip:value,dense,children:isEditing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__.Z,{inputRef:editInputRef,value:editValue,label,size:"small",onChange:function onChange(e){return setEditValue(e.target.value)},InputProps:{endAdornment:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_value_base__WEBPACK_IMPORTED_MODULE_1__.Pb,{onClickCancel:cancelEdit,onClickSubmit:submitEdit})},sx:{marginY:dense?0:1}}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__.Z,{display:"flex","aria-labelledby":id,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__.Z,{variant:dense?"body1":"h5",noWrap:!0,children:value}),editable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_value_base__WEBPACK_IMPORTED_MODULE_1__.kX,{dense,onClick:startEdit})]})})};ValueText.displayName="ValueText";try{ValueText.displayName="ValueText",ValueText.__docgenInfo={description:"Displays a string value with a label",displayName:"ValueText",props:{label:{defaultValue:null,description:"Name of the displayed value",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"Value displayed",name:"value",required:!1,type:{name:"string | number"}},placeholder:{defaultValue:{value:"-"},description:"String rendered if value is undefined",name:"placeholder",required:!1,type:{name:"string"}},dense:{defaultValue:null,description:"The value has to be displayed as compact or not.\nFalse by default",name:"dense",required:!1,type:{name:"boolean"}},editable:{defaultValue:null,description:"This field can be edited or not",name:"editable",required:!1,type:{name:"boolean"}},onEdit:{defaultValue:{value:"() => null"},description:"Callback executed when the value is edited",name:"onEdit",required:!1,type:{name:"((value?: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/value-text/value-text.tsx#ValueText"]={docgenInfo:ValueText.__docgenInfo,name:"ValueText",path:"src/value-text/value-text.tsx#ValueText"})}catch(__react_docgen_typescript_loader_error){}}}]);