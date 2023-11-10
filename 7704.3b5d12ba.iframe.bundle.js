"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[7704],{"./node_modules/@mui/material/AlertTitle/AlertTitle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AlertTitle_AlertTitle});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAlertTitleUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiAlertTitle",slot)}(0,generateUtilityClasses.Z)("MuiAlertTitle",["root"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className"],AlertTitleRoot=(0,styled.ZP)(Typography.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme})=>({fontWeight:theme.typography.fontWeightMedium,marginTop:-2}))),AlertTitle_AlertTitle=react.forwardRef((function AlertTitle(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiAlertTitle"}),{className}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=props,classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getAlertTitleUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(AlertTitleRoot,(0,esm_extends.Z)({gutterBottom:!0,component:"div",ownerState,ref,className:(0,clsx_m.Z)(classes.root,className)},other))}))},"./node_modules/@mui/material/Snackbar/Snackbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Snackbar_Snackbar});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useSlotProps=__webpack_require__("./node_modules/@mui/material/node_modules/@mui/base/utils/useSlotProps.js"),ClickAwayListener=__webpack_require__("./node_modules/@mui/material/node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js"),useEventCallback=__webpack_require__("./node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js"),extractEventHandlers=__webpack_require__("./node_modules/@mui/material/node_modules/@mui/base/utils/extractEventHandlers.js");var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),Grow=__webpack_require__("./node_modules/@mui/material/Grow/Grow.js"),clsx_m=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.m.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSnackbarContentUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSnackbarContent",slot)}(0,generateUtilityClasses.Z)("MuiSnackbarContent",["root","message","action"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["action","className","message","role"],SnackbarContentRoot=(0,styled.ZP)(Paper.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme})=>{const emphasis="light"===theme.palette.mode?.8:.98,backgroundColor=(0,colorManipulator._4)(theme.palette.background.default,emphasis);return(0,esm_extends.Z)({},theme.typography.body2,{color:theme.vars?theme.vars.palette.SnackbarContent.color:theme.palette.getContrastText(backgroundColor),backgroundColor:theme.vars?theme.vars.palette.SnackbarContent.bg:backgroundColor,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(theme.vars||theme).shape.borderRadius,flexGrow:1,[theme.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})})),SnackbarContentMessage=(0,styled.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(props,styles)=>styles.message})({padding:"8px 0"}),SnackbarContentAction=(0,styled.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(props,styles)=>styles.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),SnackbarContent_SnackbarContent=react.forwardRef((function SnackbarContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSnackbarContent"}),{action,className,message,role="alert"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=props,classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],action:["action"],message:["message"]},getSnackbarContentUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SnackbarContentRoot,(0,esm_extends.Z)({role,square:!0,elevation:6,className:(0,clsx_m.Z)(classes.root,className),ownerState,ref},other,{children:[(0,jsx_runtime.jsx)(SnackbarContentMessage,{className:classes.message,ownerState,children:message}),action?(0,jsx_runtime.jsx)(SnackbarContentAction,{className:classes.action,ownerState,children:action}):null]}))}));function getSnackbarUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSnackbar",slot)}(0,generateUtilityClasses.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Snackbar_excluded=["onEnter","onExited"],_excluded2=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],SnackbarRoot=(0,styled.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`anchorOrigin${(0,capitalize.Z)(ownerState.anchorOrigin.vertical)}${(0,capitalize.Z)(ownerState.anchorOrigin.horizontal)}`]]}})((({theme,ownerState})=>(0,esm_extends.Z)({zIndex:(theme.vars||theme).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===ownerState.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===ownerState.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===ownerState.anchorOrigin.horizontal&&{justifyContent:"flex-end"},{[theme.breakpoints.up("sm")]:(0,esm_extends.Z)({},"top"===ownerState.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===ownerState.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===ownerState.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===ownerState.anchorOrigin.horizontal&&{right:24,left:"auto"})}))),Snackbar_Snackbar=react.forwardRef((function Snackbar(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSnackbar"}),theme=(0,useTheme.Z)(),defaultTransitionDuration={enter:theme.transitions.duration.enteringScreen,exit:theme.transitions.duration.leavingScreen},{action,anchorOrigin:{vertical,horizontal}={vertical:"bottom",horizontal:"left"},autoHideDuration=null,children,className,ClickAwayListenerProps,ContentProps,disableWindowBlurListener=!1,message,open,TransitionComponent=Grow.Z,transitionDuration=defaultTransitionDuration,TransitionProps:{onEnter,onExited}={}}=props,TransitionProps=(0,objectWithoutPropertiesLoose.Z)(props.TransitionProps,Snackbar_excluded),other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),ownerState=(0,esm_extends.Z)({},props,{anchorOrigin:{vertical,horizontal},autoHideDuration,disableWindowBlurListener,TransitionComponent,transitionDuration}),classes=(ownerState=>{const{classes,anchorOrigin}=ownerState,slots={root:["root",`anchorOrigin${(0,capitalize.Z)(anchorOrigin.vertical)}${(0,capitalize.Z)(anchorOrigin.horizontal)}`]};return(0,composeClasses.Z)(slots,getSnackbarUtilityClass,classes)})(ownerState),{getRootProps,onClickAway}=function useSnackbar(parameters){const{autoHideDuration=null,disableWindowBlurListener=!1,onClose,open,resumeHideDuration}=parameters,timerAutoHide=react.useRef();react.useEffect((()=>{if(open)return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)};function handleKeyDown(nativeEvent){nativeEvent.defaultPrevented||"Escape"!==nativeEvent.key&&"Esc"!==nativeEvent.key||null==onClose||onClose(nativeEvent,"escapeKeyDown")}}),[open,onClose]);const handleClose=(0,useEventCallback.Z)(((event,reason)=>{null==onClose||onClose(event,reason)})),setAutoHideTimer=(0,useEventCallback.Z)((autoHideDurationParam=>{onClose&&null!=autoHideDurationParam&&(clearTimeout(timerAutoHide.current),timerAutoHide.current=setTimeout((()=>{handleClose(null,"timeout")}),autoHideDurationParam))}));react.useEffect((()=>(open&&setAutoHideTimer(autoHideDuration),()=>{clearTimeout(timerAutoHide.current)})),[open,autoHideDuration,setAutoHideTimer]);const handlePause=()=>{clearTimeout(timerAutoHide.current)},handleResume=react.useCallback((()=>{null!=autoHideDuration&&setAutoHideTimer(null!=resumeHideDuration?resumeHideDuration:.5*autoHideDuration)}),[autoHideDuration,resumeHideDuration,setAutoHideTimer]),createHandleBlur=otherHandlers=>event=>{const onBlurCallback=otherHandlers.onBlur;null==onBlurCallback||onBlurCallback(event),handleResume()},createHandleFocus=otherHandlers=>event=>{const onFocusCallback=otherHandlers.onFocus;null==onFocusCallback||onFocusCallback(event),handlePause()},createMouseEnter=otherHandlers=>event=>{const onMouseEnterCallback=otherHandlers.onMouseEnter;null==onMouseEnterCallback||onMouseEnterCallback(event),handlePause()},createMouseLeave=otherHandlers=>event=>{const onMouseLeaveCallback=otherHandlers.onMouseLeave;null==onMouseLeaveCallback||onMouseLeaveCallback(event),handleResume()};return react.useEffect((()=>{if(!disableWindowBlurListener&&open)return window.addEventListener("focus",handleResume),window.addEventListener("blur",handlePause),()=>{window.removeEventListener("focus",handleResume),window.removeEventListener("blur",handlePause)}}),[disableWindowBlurListener,handleResume,open]),{getRootProps:(otherHandlers={})=>{const propsEventHandlers=(0,extractEventHandlers.Z)(parameters),externalEventHandlers=(0,esm_extends.Z)({},propsEventHandlers,otherHandlers);return(0,esm_extends.Z)({role:"presentation"},externalEventHandlers,{onBlur:createHandleBlur(externalEventHandlers),onFocus:createHandleFocus(externalEventHandlers),onMouseEnter:createMouseEnter(externalEventHandlers),onMouseLeave:createMouseLeave(externalEventHandlers)})},onClickAway:event=>{null==onClose||onClose(event,"clickaway")}}}((0,esm_extends.Z)({},ownerState)),[exited,setExited]=react.useState(!0),rootProps=(0,useSlotProps.Z)({elementType:SnackbarRoot,getSlotProps:getRootProps,externalForwardedProps:other,ownerState,additionalProps:{ref},className:[classes.root,className]});return!open&&exited?null:(0,jsx_runtime.jsx)(ClickAwayListener.Z,(0,esm_extends.Z)({onClickAway},ClickAwayListenerProps,{children:(0,jsx_runtime.jsx)(SnackbarRoot,(0,esm_extends.Z)({},rootProps,{children:(0,jsx_runtime.jsx)(TransitionComponent,(0,esm_extends.Z)({appear:!0,in:open,timeout:transitionDuration,direction:"top"===vertical?"down":"up",onEnter:(node,isAppearing)=>{setExited(!1),onEnter&&onEnter(node,isAppearing)},onExited:node=>{setExited(!0),onExited&&onExited(node)}},TransitionProps,{children:children||(0,jsx_runtime.jsx)(SnackbarContent_SnackbarContent,(0,esm_extends.Z)({message,action},ContentProps))}))}))}))}))},"./node_modules/@mui/material/node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function mapEventPropToEvent(eventProp){return eventProp.substring(2).toLowerCase()}const __WEBPACK_DEFAULT_EXPORT__=function ClickAwayListener(props){const{children,disableReactTree=!1,mouseEvent="onClick",onClickAway,touchEvent="onTouchEnd"}=props,movedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),nodeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),activatedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),syntheticEventRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(setTimeout((()=>{activatedRef.current=!0}),0),()=>{activatedRef.current=!1})),[]);const handleRef=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(children.ref,nodeRef),handleClickAway=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__.Z)((event=>{const insideReactTree=syntheticEventRef.current;syntheticEventRef.current=!1;const doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current);if(!activatedRef.current||!nodeRef.current||"clientX"in event&&function clickedRootScrollbar(event,doc){return doc.documentElement.clientWidth<event.clientX||doc.documentElement.clientHeight<event.clientY}(event,doc))return;if(movedRef.current)return void(movedRef.current=!1);let insideDOM;insideDOM=event.composedPath?event.composedPath().indexOf(nodeRef.current)>-1:!doc.documentElement.contains(event.target)||nodeRef.current.contains(event.target),insideDOM||!disableReactTree&&insideReactTree||onClickAway(event)})),createHandleSynthetic=handlerName=>event=>{syntheticEventRef.current=!0;const childrenPropsHandler=children.props[handlerName];childrenPropsHandler&&childrenPropsHandler(event)},childrenProps={ref:handleRef};return!1!==touchEvent&&(childrenProps[touchEvent]=createHandleSynthetic(touchEvent)),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(!1!==touchEvent){const mappedTouchEvent=mapEventPropToEvent(touchEvent),doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current),handleTouchMove=()=>{movedRef.current=!0};return doc.addEventListener(mappedTouchEvent,handleClickAway),doc.addEventListener("touchmove",handleTouchMove),()=>{doc.removeEventListener(mappedTouchEvent,handleClickAway),doc.removeEventListener("touchmove",handleTouchMove)}}}),[handleClickAway,touchEvent]),!1!==mouseEvent&&(childrenProps[mouseEvent]=createHandleSynthetic(mouseEvent)),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(!1!==mouseEvent){const mappedMouseEvent=mapEventPropToEvent(mouseEvent),doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current);return doc.addEventListener(mappedMouseEvent,handleClickAway),()=>{doc.removeEventListener(mappedMouseEvent,handleClickAway)}}}),[handleClickAway,mouseEvent]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,childrenProps)})}}}]);