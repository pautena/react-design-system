"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[6586],{"./node_modules/@mui/material/DialogContentText/DialogContentText.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DialogContentText_DialogContentText});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),rootShouldForwardProp=__webpack_require__("./node_modules/@mui/material/styles/rootShouldForwardProp.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDialogContentTextUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiDialogContentText",slot)}(0,generateUtilityClasses.Z)("MuiDialogContentText",["root"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DialogContentTextRoot=(0,styled.ZP)(Typography.Z,{shouldForwardProp:prop=>(0,rootShouldForwardProp.Z)(prop)||"classes"===prop,name:"MuiDialogContentText",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),DialogContentText_DialogContentText=react.forwardRef((function DialogContentText(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiDialogContentText"}),{children,className,...ownerState}=props,classes=(ownerState=>{const{classes}=ownerState,composedClasses=(0,composeClasses.Z)({root:["root"]},getDialogContentTextUtilityClass,classes);return{...classes,...composedClasses}})(ownerState);return(0,jsx_runtime.jsx)(DialogContentTextRoot,{component:"p",variant:"body1",color:"textSecondary",ref,ownerState,className:(0,clsx.Z)(classes.root,className),...props,classes})}))},"./node_modules/@mui/utils/esm/useControlled/useControlled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useControlled});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useControlled({controlled,default:defaultProp,name,state="value"}){const{current:isControlled}=react__WEBPACK_IMPORTED_MODULE_0__.useRef(void 0!==controlled),[valueState,setValue]=react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp);return[isControlled?controlled:valueState,react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newValue=>{isControlled||setValue(newValue)}),[])]}},"./src/action/action.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Confirmable:()=>Confirmable,ConfirmableWithPassphrase:()=>ConfirmableWithPassphrase,CustomDescription:()=>CustomDescription,Default:()=>Default,Error:()=>Error,Sucess:()=>Sucess,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>action_stories});var Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),DialogContentText=__webpack_require__("./node_modules/@mui/material/DialogContentText/DialogContentText.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ActionHeader=function ActionHeader(_ref){var title=_ref.title,_ref$titleVariant=_ref.titleVariant,titleVariant=void 0===_ref$titleVariant?"h4":_ref$titleVariant,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,palette=(0,useTheme.Z)().palette,titleColor={primary:void 0,error:"error",warning:palette.warning.main,success:palette.success.main};return(0,jsx_runtime.jsx)(Typography.Z,{color:titleColor[variant],variant:titleVariant,pb:1,borderBottom:1,borderColor:"grey.300",children:title})};try{ActionHeader.displayName="ActionHeader",ActionHeader.__docgenInfo={description:"",displayName:"ActionHeader",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleVariant:{defaultValue:{value:"h4"},description:"",name:"titleVariant",required:!1,type:{name:"enum",value:[{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/action/action-header.tsx#ActionHeader"]={docgenInfo:ActionHeader.__docgenInfo,name:"ActionHeader",path:"src/action/action-header.tsx#ActionHeader"})}catch(__react_docgen_typescript_loader_error){}var confirm_dialog=__webpack_require__("./src/confirm-dialog/confirm-dialog.tsx"),react=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Action=function Action(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,title=_ref.title,_ref$titleVariant=_ref.titleVariant,titleVariant=void 0===_ref$titleVariant?"h4":_ref$titleVariant,description=_ref.description,_ref$descriptionVaria=_ref.descriptionVariant,descriptionVariant=void 0===_ref$descriptionVaria?"body2":_ref$descriptionVaria,buttonText=_ref.buttonText,helperText=_ref.helperText,_ref$helperTextVarian=_ref.helperTextVariant,helperTextVariant=void 0===_ref$helperTextVarian?"caption":_ref$helperTextVarian,confirmable=_ref.confirmable,passphrase=_ref.passphrase,_ref$confirmTitle=_ref.confirmTitle,confirmTitle=void 0===_ref$confirmTitle?"":_ref$confirmTitle,_ref$confirmDescripti=_ref.confirmDescription,confirmDescription=void 0===_ref$confirmDescripti?"":_ref$confirmDescripti,onAction=_ref.onAction,_useDialog=function useDialog(){var intialOpen=arguments.length>0&&void 0!==arguments[0]&&arguments[0],_useState2=_slicedToArray((0,react.useState)(intialOpen),2),isOpen=_useState2[0],setIsOpen=_useState2[1];return{isOpen,open:function open(){return setIsOpen(!0)},close:function close(){return setIsOpen(!1)},setIsOpen}}(),isOpen=_useDialog.isOpen,open=_useDialog.open,close=_useDialog.close;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,spacing:1,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,mb:2,children:(0,jsx_runtime.jsx)(ActionHeader,{title,titleVariant})}),description&&(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:descriptionVariant,children:description})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,mt:1,children:(0,jsx_runtime.jsx)(Button.Z,{color:variant,variant:"contained",onClick:function handleClickActionButton(){confirmable?open():onAction()},children:buttonText})}),helperText&&(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:helperTextVariant,children:helperText})})]}),(0,jsx_runtime.jsx)(confirm_dialog.Q,{open:isOpen,title:confirmTitle,passphrase,onCancel:close,onConfirm:function handleConfirmDialog(){onAction(),close()},children:(0,jsx_runtime.jsx)(DialogContentText.Z,{children:confirmDescription})})]})};try{Action.displayName="Action",Action.__docgenInfo={description:"",displayName:"Action",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleVariant:{defaultValue:{value:"h4"},description:"",name:"titleVariant",required:!1,type:{name:"enum",value:[{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>>"}},descriptionVariant:{defaultValue:{value:"body2"},description:"",name:"descriptionVariant",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"caption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"subtitle1"'},{value:'"subtitle2"'},{value:'"body1"'},{value:'"body2"'},{value:'"overline"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},helperTextVariant:{defaultValue:{value:"caption"},description:"",name:"helperTextVariant",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"caption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"subtitle1"'},{value:'"subtitle2"'},{value:'"body1"'},{value:'"body2"'},{value:'"overline"'}]}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},confirmable:{defaultValue:null,description:"",name:"confirmable",required:!1,type:{name:"boolean"}},confirmTitle:{defaultValue:{value:""},description:"",name:"confirmTitle",required:!1,type:{name:"string"}},confirmDescription:{defaultValue:{value:""},description:"",name:"confirmDescription",required:!1,type:{name:"string"}},passphrase:{defaultValue:null,description:"",name:"passphrase",required:!1,type:{name:"string"}},onAction:{defaultValue:null,description:"",name:"onAction",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/action/action.tsx#Action"]={docgenInfo:Action.__docgenInfo,name:"Action",path:"src/action/action.tsx#Action"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/lorem-ipsum/dist/index.js"),storybook=__webpack_require__("./src/storybook.tsx"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js");const action_stories={title:"Components/Inputs/Action",component:Action,decorators:[(0,storybook.li)({padding:2})],parameters:{layout:"fullscreen"}},Default={args:{title:"Change username",description:(0,dist.fH)({count:5,units:"sentence"}),buttonText:"Change username",helperText:(0,dist.fH)({count:1,units:"sentence"})}},CustomDescription={args:{title:"Change username",description:(0,jsx_runtime.jsx)(Box.Z,{children:(0,jsx_runtime.jsxs)(Typography.Z,{children:["This is a test description",(0,jsx_runtime.jsx)(Typography.Z,{fontWeight:"bold",children:"with bold text"})]})}),buttonText:"Change username",helperText:(0,dist.fH)({count:1,units:"sentence"})}},Error={args:{...Default.args,variant:"error"}},Warning={args:{...Default.args,variant:"warning"}},Sucess={args:{...Default.args,variant:"success"}},Confirmable={args:{...Default.args,confirmable:!0,confirmTitle:"Username change",confirmDescription:"Do you want to change the username?"}},ConfirmableWithPassphrase={args:{...Confirmable.args,passphrase:"yes"}},__namedExportsOrder=["Default","CustomDescription","Error","Warning","Sucess","Confirmable","ConfirmableWithPassphrase"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Change username",\n    description: loremIpsum({\n      count: 5,\n      units: "sentence"\n    }),\n    buttonText: "Change username",\n    helperText: loremIpsum({\n      count: 1,\n      units: "sentence"\n    })\n  }\n}',...Default.parameters?.docs?.source}}},CustomDescription.parameters={...CustomDescription.parameters,docs:{...CustomDescription.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Change username",\n    description: <Box>\n        <Typography>\n          This is a test description<Typography fontWeight="bold">with bold text</Typography>\n        </Typography>\n      </Box>,\n    buttonText: "Change username",\n    helperText: loremIpsum({\n      count: 1,\n      units: "sentence"\n    })\n  }\n}',...CustomDescription.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    variant: "error"\n  }\n}',...Error.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    variant: "warning"\n  }\n}',...Warning.parameters?.docs?.source}}},Sucess.parameters={...Sucess.parameters,docs:{...Sucess.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    variant: "success"\n  }\n}',...Sucess.parameters?.docs?.source}}},Confirmable.parameters={...Confirmable.parameters,docs:{...Confirmable.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    confirmable: true,\n    confirmTitle: "Username change",\n    confirmDescription: "Do you want to change the username?"\n  }\n}',...Confirmable.parameters?.docs?.source}}},ConfirmableWithPassphrase.parameters={...ConfirmableWithPassphrase.parameters,docs:{...ConfirmableWithPassphrase.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Confirmable.args,\n    passphrase: "yes"\n  }\n}',...ConfirmableWithPassphrase.parameters?.docs?.source}}}},"./src/bootstrap-dialog/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_0__._});var _bootstrap_dialog__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/bootstrap-dialog/bootstrap-dialog.tsx")},"./src/confirm-dialog/confirm-dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>ConfirmDialog});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/bootstrap-dialog/index.ts"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var ConfirmDialog=function ConfirmDialog(_ref){var open=_ref.open,title=_ref.title,loading=_ref.loading,disabled=_ref.disabled,_ref$confirmText=_ref.confirmText,confirmText=void 0===_ref$confirmText?"Confirm":_ref$confirmText,_ref$cancelText=_ref.cancelText,cancelText=void 0===_ref$cancelText?"Cancel":_ref$cancelText,passphrase=_ref.passphrase,children=_ref.children,onConfirm=_ref.onConfirm,onCancel=_ref.onCancel,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),2),inputPassphrase=_useState2[0],setInputPassphrase=_useState2[1],validPassphrase=!passphrase||inputPassphrase===passphrase;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_1__._,{title,loading,disabled:loading||disabled,disableAccept:!validPassphrase,open,onClose:onCancel,acceptable:!0,cancelable:!0,callCloseWhenCancel:!1,acceptText:confirmText,cancelText,onCancel,onAccept:onConfirm,children:[children,passphrase&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__.Z,{size:"small",fullWidth:!0,value:inputPassphrase,onChange:function onChange(e){return setInputPassphrase(e.target.value)},placeholder:passphrase})]})};try{ConfirmDialog.displayName="ConfirmDialog",ConfirmDialog.__docgenInfo={description:"",displayName:"ConfirmDialog",props:{confirmText:{defaultValue:{value:"Confirm"},description:"",name:"confirmText",required:!1,type:{name:"string"}},canceText:{defaultValue:null,description:"",name:"canceText",required:!1,type:{name:"string"}},passphrase:{defaultValue:null,description:"",name:"passphrase",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},disableAccept:{defaultValue:null,description:"",name:"disableAccept",required:!1,type:{name:"boolean"}},disableCancel:{defaultValue:null,description:"",name:"disableCancel",required:!1,type:{name:"boolean"}},cancelText:{defaultValue:{value:"Cancel"},description:"",name:"cancelText",required:!1,type:{name:"string"}},acceptText:{defaultValue:null,description:"",name:"acceptText",required:!1,type:{name:"string"}},componentProps:{defaultValue:null,description:"",name:"componentProps",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/confirm-dialog/confirm-dialog.tsx#ConfirmDialog"]={docgenInfo:ConfirmDialog.__docgenInfo,name:"ConfirmDialog",path:"src/confirm-dialog/confirm-dialog.tsx#ConfirmDialog"})}catch(__react_docgen_typescript_loader_error){}}}]);