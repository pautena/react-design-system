/*! For license information please see 4031.594b93a0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[4031],{"./node_modules/@mui/material/List/List.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>List_List});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/base/node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ListContext=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiList",slot)}(0,generateUtilityClasses.Z)("MuiList",["root","padding","dense","subheader"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","component","dense","disablePadding","subheader"],ListRoot=(0,styled.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,!ownerState.disablePadding&&styles.padding,ownerState.dense&&styles.dense,ownerState.subheader&&styles.subheader]}})((({ownerState})=>(0,esm_extends.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!ownerState.disablePadding&&{paddingTop:8,paddingBottom:8},ownerState.subheader&&{paddingTop:0}))),List_List=react.forwardRef((function List(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiList"}),{children,className,component="ul",dense=!1,disablePadding=!1,subheader}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),context=react.useMemo((()=>({dense})),[dense]),ownerState=(0,esm_extends.Z)({},props,{component,dense,disablePadding}),classes=(ownerState=>{const{classes,disablePadding,dense,subheader}=ownerState,slots={root:["root",!disablePadding&&"padding",dense&&"dense",subheader&&"subheader"]};return(0,composeClasses.Z)(slots,getListUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ListContext.Z.Provider,{value:context,children:(0,jsx_runtime.jsxs)(ListRoot,(0,esm_extends.Z)({as:component,className:(0,clsx_m.Z)(classes.root,className),ref,ownerState},other,{children:[subheader,children]}))})}))},"./node_modules/@mui/material/List/ListContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext({})},"./node_modules/@mui/material/Popover/Popover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XS:()=>PopoverPaper,ZP:()=>Popover_Popover});var esm_extends=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/base/node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useSlotProps=__webpack_require__("./node_modules/@mui/base/utils/useSlotProps.js"),isHostComponent=__webpack_require__("./node_modules/@mui/base/utils/isHostComponent.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),debounce=__webpack_require__("./node_modules/@mui/material/utils/debounce.js"),ownerDocument=__webpack_require__("./node_modules/@mui/material/utils/ownerDocument.js"),ownerWindow=__webpack_require__("./node_modules/@mui/material/utils/ownerWindow.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),Grow=__webpack_require__("./node_modules/@mui/material/Grow/Grow.js"),Modal=__webpack_require__("./node_modules/@mui/material/Modal/Modal.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPopoverUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiPopover",slot)}(0,generateUtilityClasses.Z)("MuiPopover",["root","paper"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["onEntering"],_excluded2=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],_excluded3=["slotProps"];function getOffsetTop(rect,vertical){let offset=0;return"number"==typeof vertical?offset=vertical:"center"===vertical?offset=rect.height/2:"bottom"===vertical&&(offset=rect.height),offset}function getOffsetLeft(rect,horizontal){let offset=0;return"number"==typeof horizontal?offset=horizontal:"center"===horizontal?offset=rect.width/2:"right"===horizontal&&(offset=rect.width),offset}function getTransformOriginValue(transformOrigin){return[transformOrigin.horizontal,transformOrigin.vertical].map((n=>"number"==typeof n?`${n}px`:n)).join(" ")}function resolveAnchorEl(anchorEl){return"function"==typeof anchorEl?anchorEl():anchorEl}const PopoverRoot=(0,styled.ZP)(Modal.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),PopoverPaper=(0,styled.ZP)(Paper.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(props,styles)=>styles.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Popover_Popover=react.forwardRef((function Popover(inProps,ref){var _slotProps$paper,_slots$root,_slots$paper;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiPopover"}),{action,anchorEl,anchorOrigin={vertical:"top",horizontal:"left"},anchorPosition,anchorReference="anchorEl",children,className,container:containerProp,elevation=8,marginThreshold=16,open,PaperProps:PaperPropsProp={},slots,slotProps,transformOrigin={vertical:"top",horizontal:"left"},TransitionComponent=Grow.Z,transitionDuration:transitionDurationProp="auto",TransitionProps:{onEntering}={}}=props,TransitionProps=(0,objectWithoutPropertiesLoose.Z)(props.TransitionProps,_excluded),other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),externalPaperSlotProps=null!=(_slotProps$paper=null==slotProps?void 0:slotProps.paper)?_slotProps$paper:PaperPropsProp,paperRef=react.useRef(),handlePaperRef=(0,useForkRef.Z)(paperRef,externalPaperSlotProps.ref),ownerState=(0,esm_extends.Z)({},props,{anchorOrigin,anchorReference,elevation,marginThreshold,externalPaperSlotProps,transformOrigin,TransitionComponent,transitionDuration:transitionDurationProp,TransitionProps}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],paper:["paper"]},getPopoverUtilityClass,classes)})(ownerState),getAnchorOffset=react.useCallback((()=>{if("anchorPosition"===anchorReference)return anchorPosition;const resolvedAnchorEl=resolveAnchorEl(anchorEl),anchorRect=(resolvedAnchorEl&&1===resolvedAnchorEl.nodeType?resolvedAnchorEl:(0,ownerDocument.Z)(paperRef.current).body).getBoundingClientRect();return{top:anchorRect.top+getOffsetTop(anchorRect,anchorOrigin.vertical),left:anchorRect.left+getOffsetLeft(anchorRect,anchorOrigin.horizontal)}}),[anchorEl,anchorOrigin.horizontal,anchorOrigin.vertical,anchorPosition,anchorReference]),getTransformOrigin=react.useCallback((elemRect=>({vertical:getOffsetTop(elemRect,transformOrigin.vertical),horizontal:getOffsetLeft(elemRect,transformOrigin.horizontal)})),[transformOrigin.horizontal,transformOrigin.vertical]),getPositioningStyle=react.useCallback((element=>{const elemRect={width:element.offsetWidth,height:element.offsetHeight},elemTransformOrigin=getTransformOrigin(elemRect);if("none"===anchorReference)return{top:null,left:null,transformOrigin:getTransformOriginValue(elemTransformOrigin)};const anchorOffset=getAnchorOffset();let top=anchorOffset.top-elemTransformOrigin.vertical,left=anchorOffset.left-elemTransformOrigin.horizontal;const bottom=top+elemRect.height,right=left+elemRect.width,containerWindow=(0,ownerWindow.Z)(resolveAnchorEl(anchorEl)),heightThreshold=containerWindow.innerHeight-marginThreshold,widthThreshold=containerWindow.innerWidth-marginThreshold;if(top<marginThreshold){const diff=top-marginThreshold;top-=diff,elemTransformOrigin.vertical+=diff}else if(bottom>heightThreshold){const diff=bottom-heightThreshold;top-=diff,elemTransformOrigin.vertical+=diff}if(left<marginThreshold){const diff=left-marginThreshold;left-=diff,elemTransformOrigin.horizontal+=diff}else if(right>widthThreshold){const diff=right-widthThreshold;left-=diff,elemTransformOrigin.horizontal+=diff}return{top:`${Math.round(top)}px`,left:`${Math.round(left)}px`,transformOrigin:getTransformOriginValue(elemTransformOrigin)}}),[anchorEl,anchorReference,getAnchorOffset,getTransformOrigin,marginThreshold]),[isPositioned,setIsPositioned]=react.useState(open),setPositioningStyles=react.useCallback((()=>{const element=paperRef.current;if(!element)return;const positioning=getPositioningStyle(element);null!==positioning.top&&(element.style.top=positioning.top),null!==positioning.left&&(element.style.left=positioning.left),element.style.transformOrigin=positioning.transformOrigin,setIsPositioned(!0)}),[getPositioningStyle]);react.useEffect((()=>{open&&setPositioningStyles()})),react.useImperativeHandle(action,(()=>open?{updatePosition:()=>{setPositioningStyles()}}:null),[open,setPositioningStyles]),react.useEffect((()=>{if(!open)return;const handleResize=(0,debounce.Z)((()=>{setPositioningStyles()})),containerWindow=(0,ownerWindow.Z)(anchorEl);return containerWindow.addEventListener("resize",handleResize),()=>{handleResize.clear(),containerWindow.removeEventListener("resize",handleResize)}}),[anchorEl,open,setPositioningStyles]);let transitionDuration=transitionDurationProp;"auto"!==transitionDurationProp||TransitionComponent.muiSupportAuto||(transitionDuration=void 0);const container=containerProp||(anchorEl?(0,ownerDocument.Z)(resolveAnchorEl(anchorEl)).body:void 0),RootSlot=null!=(_slots$root=null==slots?void 0:slots.root)?_slots$root:PopoverRoot,PaperSlot=null!=(_slots$paper=null==slots?void 0:slots.paper)?_slots$paper:PopoverPaper,paperProps=(0,useSlotProps.Z)({elementType:PaperSlot,externalSlotProps:(0,esm_extends.Z)({},externalPaperSlotProps,{style:isPositioned?externalPaperSlotProps.style:(0,esm_extends.Z)({},externalPaperSlotProps.style,{opacity:0})}),additionalProps:{elevation,ref:handlePaperRef},ownerState,className:(0,clsx_m.Z)(classes.paper,null==externalPaperSlotProps?void 0:externalPaperSlotProps.className)}),_useSlotProps=(0,useSlotProps.Z)({elementType:RootSlot,externalSlotProps:(null==slotProps?void 0:slotProps.root)||{},externalForwardedProps:other,additionalProps:{ref,slotProps:{backdrop:{invisible:!0}},container,open},ownerState,className:(0,clsx_m.Z)(classes.root,className)}),{slotProps:rootSlotPropsProp}=_useSlotProps,rootProps=(0,objectWithoutPropertiesLoose.Z)(_useSlotProps,_excluded3);return(0,jsx_runtime.jsx)(RootSlot,(0,esm_extends.Z)({},rootProps,!(0,isHostComponent.Z)(RootSlot)&&{slotProps:rootSlotPropsProp},{children:(0,jsx_runtime.jsx)(TransitionComponent,(0,esm_extends.Z)({appear:!0,in:open,onEntering:(element,isAppearing)=>{onEntering&&onEntering(element,isAppearing),setPositioningStyles()},onExited:()=>{setIsPositioned(!1)},timeout:transitionDuration},TransitionProps,{children:(0,jsx_runtime.jsx)(PaperSlot,(0,esm_extends.Z)({},paperProps,{children}))}))}))}))},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var u,b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen");function v(a){if("object"==typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}u=Symbol.for("react.module.reference")},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);