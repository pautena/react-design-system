"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[1603],{"./node_modules/@mui/material/List/List.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>List_List});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),ListContext=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiList",slot)}(0,generateUtilityClasses.Z)("MuiList",["root","padding","dense","subheader"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ListRoot=(0,styled.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,!ownerState.disablePadding&&styles.padding,ownerState.dense&&styles.dense,ownerState.subheader&&styles.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState})=>!ownerState.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState})=>ownerState.subheader,style:{paddingTop:0}}]}),List_List=react.forwardRef((function List(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiList"}),{children,className,component="ul",dense=!1,disablePadding=!1,subheader,...other}=props,context=react.useMemo((()=>({dense})),[dense]),ownerState={...props,component,dense,disablePadding},classes=(ownerState=>{const{classes,disablePadding,dense,subheader}=ownerState,slots={root:["root",!disablePadding&&"padding",dense&&"dense",subheader&&"subheader"]};return(0,composeClasses.Z)(slots,getListUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ListContext.Z.Provider,{value:context,children:(0,jsx_runtime.jsxs)(ListRoot,{as:component,className:(0,clsx.Z)(classes.root,className),ref,ownerState,...other,children:[subheader,children]})})}))},"./node_modules/@mui/material/List/ListContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext({})},"./node_modules/@mui/material/Popover/Popover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XS:()=>PopoverPaper,ZP:()=>Popover_Popover});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),isHostComponent=__webpack_require__("./node_modules/@mui/material/utils/isHostComponent.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),debounce=__webpack_require__("./node_modules/@mui/material/utils/debounce.js"),ownerDocument=__webpack_require__("./node_modules/@mui/material/utils/ownerDocument.js"),ownerWindow=__webpack_require__("./node_modules/@mui/material/utils/ownerWindow.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),Grow=__webpack_require__("./node_modules/@mui/material/Grow/Grow.js"),Modal=__webpack_require__("./node_modules/@mui/material/Modal/Modal.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPopoverUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiPopover",slot)}(0,generateUtilityClasses.Z)("MuiPopover",["root","paper"]);var useSlot=__webpack_require__("./node_modules/@mui/material/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function getOffsetTop(rect,vertical){let offset=0;return"number"==typeof vertical?offset=vertical:"center"===vertical?offset=rect.height/2:"bottom"===vertical&&(offset=rect.height),offset}function getOffsetLeft(rect,horizontal){let offset=0;return"number"==typeof horizontal?offset=horizontal:"center"===horizontal?offset=rect.width/2:"right"===horizontal&&(offset=rect.width),offset}function getTransformOriginValue(transformOrigin){return[transformOrigin.horizontal,transformOrigin.vertical].map((n=>"number"==typeof n?`${n}px`:n)).join(" ")}function resolveAnchorEl(anchorEl){return"function"==typeof anchorEl?anchorEl():anchorEl}const PopoverRoot=(0,styled.ZP)(Modal.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),PopoverPaper=(0,styled.ZP)(Paper.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(props,styles)=>styles.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Popover_Popover=react.forwardRef((function Popover(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiPopover"}),{action,anchorEl,anchorOrigin={vertical:"top",horizontal:"left"},anchorPosition,anchorReference="anchorEl",children,className,container:containerProp,elevation=8,marginThreshold=16,open,PaperProps:PaperPropsProp={},slots={},slotProps={},transformOrigin={vertical:"top",horizontal:"left"},TransitionComponent=Grow.Z,transitionDuration:transitionDurationProp="auto",TransitionProps:{onEntering,...TransitionProps}={},disableScrollLock=!1,...other}=props,externalPaperSlotProps=slotProps?.paper??PaperPropsProp,paperRef=react.useRef(),ownerState={...props,anchorOrigin,anchorReference,elevation,marginThreshold,externalPaperSlotProps,transformOrigin,TransitionComponent,transitionDuration:transitionDurationProp,TransitionProps},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],paper:["paper"]},getPopoverUtilityClass,classes)})(ownerState),getAnchorOffset=react.useCallback((()=>{if("anchorPosition"===anchorReference)return anchorPosition;const resolvedAnchorEl=resolveAnchorEl(anchorEl),anchorRect=(resolvedAnchorEl&&1===resolvedAnchorEl.nodeType?resolvedAnchorEl:(0,ownerDocument.Z)(paperRef.current).body).getBoundingClientRect();return{top:anchorRect.top+getOffsetTop(anchorRect,anchorOrigin.vertical),left:anchorRect.left+getOffsetLeft(anchorRect,anchorOrigin.horizontal)}}),[anchorEl,anchorOrigin.horizontal,anchorOrigin.vertical,anchorPosition,anchorReference]),getTransformOrigin=react.useCallback((elemRect=>({vertical:getOffsetTop(elemRect,transformOrigin.vertical),horizontal:getOffsetLeft(elemRect,transformOrigin.horizontal)})),[transformOrigin.horizontal,transformOrigin.vertical]),getPositioningStyle=react.useCallback((element=>{const elemRect={width:element.offsetWidth,height:element.offsetHeight},elemTransformOrigin=getTransformOrigin(elemRect);if("none"===anchorReference)return{top:null,left:null,transformOrigin:getTransformOriginValue(elemTransformOrigin)};const anchorOffset=getAnchorOffset();let top=anchorOffset.top-elemTransformOrigin.vertical,left=anchorOffset.left-elemTransformOrigin.horizontal;const bottom=top+elemRect.height,right=left+elemRect.width,containerWindow=(0,ownerWindow.Z)(resolveAnchorEl(anchorEl)),heightThreshold=containerWindow.innerHeight-marginThreshold,widthThreshold=containerWindow.innerWidth-marginThreshold;if(null!==marginThreshold&&top<marginThreshold){const diff=top-marginThreshold;top-=diff,elemTransformOrigin.vertical+=diff}else if(null!==marginThreshold&&bottom>heightThreshold){const diff=bottom-heightThreshold;top-=diff,elemTransformOrigin.vertical+=diff}if(null!==marginThreshold&&left<marginThreshold){const diff=left-marginThreshold;left-=diff,elemTransformOrigin.horizontal+=diff}else if(right>widthThreshold){const diff=right-widthThreshold;left-=diff,elemTransformOrigin.horizontal+=diff}return{top:`${Math.round(top)}px`,left:`${Math.round(left)}px`,transformOrigin:getTransformOriginValue(elemTransformOrigin)}}),[anchorEl,anchorReference,getAnchorOffset,getTransformOrigin,marginThreshold]),[isPositioned,setIsPositioned]=react.useState(open),setPositioningStyles=react.useCallback((()=>{const element=paperRef.current;if(!element)return;const positioning=getPositioningStyle(element);null!==positioning.top&&element.style.setProperty("top",positioning.top),null!==positioning.left&&(element.style.left=positioning.left),element.style.transformOrigin=positioning.transformOrigin,setIsPositioned(!0)}),[getPositioningStyle]);react.useEffect((()=>(disableScrollLock&&window.addEventListener("scroll",setPositioningStyles),()=>window.removeEventListener("scroll",setPositioningStyles))),[anchorEl,disableScrollLock,setPositioningStyles]);react.useEffect((()=>{open&&setPositioningStyles()})),react.useImperativeHandle(action,(()=>open?{updatePosition:()=>{setPositioningStyles()}}:null),[open,setPositioningStyles]),react.useEffect((()=>{if(!open)return;const handleResize=(0,debounce.Z)((()=>{setPositioningStyles()})),containerWindow=(0,ownerWindow.Z)(anchorEl);return containerWindow.addEventListener("resize",handleResize),()=>{handleResize.clear(),containerWindow.removeEventListener("resize",handleResize)}}),[anchorEl,open,setPositioningStyles]);let transitionDuration=transitionDurationProp;"auto"!==transitionDurationProp||TransitionComponent.muiSupportAuto||(transitionDuration=void 0);const container=containerProp||(anchorEl?(0,ownerDocument.Z)(resolveAnchorEl(anchorEl)).body:void 0),externalForwardedProps={slots,slotProps:{...slotProps,paper:externalPaperSlotProps}},[PaperSlot,paperProps]=(0,useSlot.Z)("paper",{elementType:PopoverPaper,externalForwardedProps,additionalProps:{elevation,className:(0,clsx.Z)(classes.paper,externalPaperSlotProps?.className),style:isPositioned?externalPaperSlotProps.style:{...externalPaperSlotProps.style,opacity:0}},ownerState}),[RootSlot,{slotProps:rootSlotPropsProp,...rootProps}]=(0,useSlot.Z)("root",{elementType:PopoverRoot,externalForwardedProps,additionalProps:{slotProps:{backdrop:{invisible:!0}},container,open},ownerState,className:(0,clsx.Z)(classes.root,className)}),handlePaperRef=(0,useForkRef.Z)(paperRef,paperProps.ref);return(0,jsx_runtime.jsx)(RootSlot,{...rootProps,...!(0,isHostComponent.Z)(RootSlot)&&{slotProps:rootSlotPropsProp,disableScrollLock},...other,ref,children:(0,jsx_runtime.jsx)(TransitionComponent,{appear:!0,in:open,onEntering:(element,isAppearing)=>{onEntering&&onEntering(element,isAppearing),setPositioningStyles()},onExited:()=>{setIsPositioned(!1)},timeout:transitionDuration,...TransitionProps,children:(0,jsx_runtime.jsx)(PaperSlot,{...paperProps,ref:handlePaperRef,children})})})}))},"./node_modules/@mui/material/utils/debounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/debounce/debounce.js").Z},"./node_modules/@mui/material/utils/isHostComponent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function isHostComponent(element){return"string"==typeof element}},"./node_modules/@mui/material/utils/ownerDocument.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js").Z},"./node_modules/@mui/material/utils/ownerWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js").Z},"./node_modules/@mui/material/utils/useEnhancedEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js").Z},"./node_modules/@mui/utils/esm/debounce/debounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function debounce(func,wait=166){let timeout;function debounced(...args){clearTimeout(timeout),timeout=setTimeout((()=>{func.apply(this,args)}),wait)}return debounced.clear=()=>{clearTimeout(timeout)},debounced}__webpack_require__.d(__webpack_exports__,{Z:()=>debounce})}}]);