"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[6486],{"./node_modules/@mui/material/DialogContentText/DialogContentText.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DialogContentText_DialogContentText});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),rootShouldForwardProp=__webpack_require__("./node_modules/@mui/material/styles/rootShouldForwardProp.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDialogContentTextUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiDialogContentText",slot)}(0,generateUtilityClasses.Z)("MuiDialogContentText",["root"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DialogContentTextRoot=(0,styled.ZP)(Typography.Z,{shouldForwardProp:prop=>(0,rootShouldForwardProp.Z)(prop)||"classes"===prop,name:"MuiDialogContentText",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),DialogContentText_DialogContentText=react.forwardRef((function DialogContentText(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiDialogContentText"}),{children,className,...ownerState}=props,classes=(ownerState=>{const{classes}=ownerState,composedClasses=(0,composeClasses.Z)({root:["root"]},getDialogContentTextUtilityClass,classes);return{...classes,...composedClasses}})(ownerState);return(0,jsx_runtime.jsx)(DialogContentTextRoot,{component:"p",variant:"body1",color:"textSecondary",ref,ownerState,className:(0,clsx.Z)(classes.root,className),...props,classes})}))},"./src/bootstrap-dialog/bootstrap-dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AcceptableAndCancelable:()=>AcceptableAndCancelable,CustomTexts:()=>CustomTexts,Default:()=>Default,Disabled:()=>Disabled,Loading:()=>Loading,LoadingWithAcceptable:()=>LoadingWithAcceptable,WithExtraActions:()=>WithExtraActions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/DialogContentText/DialogContentText.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/bootstrap-dialog/bootstrap-dialog.tsx"),lorem_ipsum__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lorem-ipsum/dist/index.js"),_storybook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const onClickAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("On click dialog action"),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Dialogs/BootstrapDialog",component:_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_1__._,parameters:{layout:"centered"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook__WEBPACK_IMPORTED_MODULE_3__.lJ,{component:_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_1__._,args})},Default={args:{title:"Lorem ipsum",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_5__.Z,{children:(0,lorem_ipsum__WEBPACK_IMPORTED_MODULE_2__.fH)({count:1,units:"paragraph"})})}},AcceptableAndCancelable={args:{...Default.args,acceptable:!0,cancelable:!0}},WithExtraActions={args:{...Default.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:onClickAction},{id:"action2",text:"Action 2",onClick:onClickAction}]}},LoadingWithAcceptable={args:{...Default.args,acceptable:!0,loading:!0}},Loading={args:{...Default.args,loading:!0}},Disabled={args:{...WithExtraActions.args,disabled:!0}},CustomTexts={args:{...Default.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}},__namedExportsOrder=["Default","AcceptableAndCancelable","WithExtraActions","LoadingWithAcceptable","Loading","Disabled","CustomTexts"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Lorem ipsum",\n    children: <DialogContentText>{loremIpsum({\n        count: 1,\n        units: "paragraph"\n      })}</DialogContentText>\n  }\n}',...Default.parameters?.docs?.source}}},AcceptableAndCancelable.parameters={...AcceptableAndCancelable.parameters,docs:{...AcceptableAndCancelable.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    acceptable: true,\n    cancelable: true\n  }\n}",...AcceptableAndCancelable.parameters?.docs?.source}}},WithExtraActions.parameters={...WithExtraActions.parameters,docs:{...WithExtraActions.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    cancelable: true,\n    actions: [{\n      id: "action1",\n      text: "Action 1",\n      color: "error",\n      onClick: onClickAction\n    }, {\n      id: "action2",\n      text: "Action 2",\n      onClick: onClickAction\n    }]\n  }\n}',...WithExtraActions.parameters?.docs?.source}}},LoadingWithAcceptable.parameters={...LoadingWithAcceptable.parameters,docs:{...LoadingWithAcceptable.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    acceptable: true,\n    loading: true\n  }\n}",...LoadingWithAcceptable.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    loading: true\n  }\n}",...Loading.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...WithExtraActions.args,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},CustomTexts.parameters={...CustomTexts.parameters,docs:{...CustomTexts.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    acceptable: true,\n    cancelable: true,\n    cancelText: "Cancel updated",\n    acceptText: "Accept updated"\n  }\n}',...CustomTexts.parameters?.docs?.source}}}}}]);