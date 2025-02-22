"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[3527],{"./node_modules/@mui/material/Rating/Rating.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Rating_Rating});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),clamp=__webpack_require__("./node_modules/@mui/utils/esm/clamp/clamp.js"),visuallyHidden=__webpack_require__("./node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),RtlProvider=__webpack_require__("./node_modules/@mui/system/esm/RtlProvider/index.js"),isFocusVisible=__webpack_require__("./node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useId=__webpack_require__("./node_modules/@mui/material/utils/useId.js"),useControlled=__webpack_require__("./node_modules/@mui/material/utils/useControlled.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Star=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),StarBorder=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),memoTheme=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),slotShouldForwardProp=__webpack_require__("./node_modules/@mui/material/styles/slotShouldForwardProp.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getRatingUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiRating",slot)}const Rating_ratingClasses=(0,generateUtilityClasses.Z)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);function roundValueToPrecision(value,precision){if(null==value)return value;const nearest=Math.round(value/precision)*precision;return Number(nearest.toFixed(function getDecimalPrecision(num){const decimalPart=num.toString().split(".")[1];return decimalPart?decimalPart.length:0}(precision)))}const RatingRoot=(0,styled.ZP)("span",{name:"MuiRating",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[{[`& .${Rating_ratingClasses.visuallyHidden}`]:styles.visuallyHidden},styles.root,styles[`size${(0,capitalize.Z)(ownerState.size)}`],ownerState.readOnly&&styles.readOnly]}})((0,memoTheme.Z)((({theme})=>({display:"inline-flex",position:"relative",fontSize:theme.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${Rating_ratingClasses.disabled}`]:{opacity:(theme.vars||theme).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${Rating_ratingClasses.focusVisible} .${Rating_ratingClasses.iconActive}`]:{outline:"1px solid #999"},[`& .${Rating_ratingClasses.visuallyHidden}`]:visuallyHidden.Z,variants:[{props:{size:"small"},style:{fontSize:theme.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:theme.typography.pxToRem(30)}},{props:({ownerState})=>ownerState.readOnly,style:{pointerEvents:"none"}}]})))),RatingLabel=(0,styled.ZP)("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState},styles)=>[styles.label,ownerState.emptyValueFocused&&styles.labelEmptyValueActive]})({cursor:"inherit",variants:[{props:({ownerState})=>ownerState.emptyValueFocused,style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),RatingIcon=(0,styled.ZP)("span",{name:"MuiRating",slot:"Icon",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.icon,ownerState.iconEmpty&&styles.iconEmpty,ownerState.iconFilled&&styles.iconFilled,ownerState.iconHover&&styles.iconHover,ownerState.iconFocus&&styles.iconFocus,ownerState.iconActive&&styles.iconActive]}})((0,memoTheme.Z)((({theme})=>({display:"flex",transition:theme.transitions.create("transform",{duration:theme.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:({ownerState})=>ownerState.iconActive,style:{transform:"scale(1.2)"}},{props:({ownerState})=>ownerState.iconEmpty,style:{color:(theme.vars||theme).palette.action.disabled}}]})))),RatingDecimal=(0,styled.ZP)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:prop=>(0,slotShouldForwardProp.Z)(prop)&&"iconActive"!==prop,overridesResolver:(props,styles)=>{const{iconActive}=props;return[styles.decimal,iconActive&&styles.iconActive]}})({position:"relative",variants:[{props:({iconActive})=>iconActive,style:{transform:"scale(1.2)"}}]});function IconContainer(props){const{value,...other}=props;return(0,jsx_runtime.jsx)("span",{...other})}function RatingItem(props){const{classes,disabled,emptyIcon,focus,getLabelText,highlightSelectedOnly,hover,icon,IconContainerComponent,isActive,itemValue,labelProps,name,onBlur,onChange,onClick,onFocus,readOnly,ownerState,ratingValue,ratingValueRounded}=props,isFilled=highlightSelectedOnly?itemValue===ratingValue:itemValue<=ratingValue,isHovered=itemValue<=hover,isFocused=itemValue<=focus,isChecked=itemValue===ratingValueRounded,id=`${name}-${(0,useId.Z)()}`,container=(0,jsx_runtime.jsx)(RatingIcon,{as:IconContainerComponent,value:itemValue,className:(0,clsx.Z)(classes.icon,isFilled?classes.iconFilled:classes.iconEmpty,isHovered&&classes.iconHover,isFocused&&classes.iconFocus,isActive&&classes.iconActive),ownerState:{...ownerState,iconEmpty:!isFilled,iconFilled:isFilled,iconHover:isHovered,iconFocus:isFocused,iconActive:isActive},children:emptyIcon&&!isFilled?emptyIcon:icon});return readOnly?(0,jsx_runtime.jsx)("span",{...labelProps,children:container}):(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsxs)(RatingLabel,{ownerState:{...ownerState,emptyValueFocused:void 0},htmlFor:id,...labelProps,children:[container,(0,jsx_runtime.jsx)("span",{className:classes.visuallyHidden,children:getLabelText(itemValue)})]}),(0,jsx_runtime.jsx)("input",{className:classes.visuallyHidden,onFocus,onBlur,onChange,onClick,disabled,value:itemValue,id,type:"radio",name,checked:isChecked})]})}const defaultIcon=(0,jsx_runtime.jsx)(Star,{fontSize:"inherit"}),defaultEmptyIcon=(0,jsx_runtime.jsx)(StarBorder,{fontSize:"inherit"});function defaultLabelText(value){return`${value||"0"} Star${1!==value?"s":""}`}const Rating_Rating=react.forwardRef((function Rating(inProps,ref){const props=(0,DefaultPropsProvider.i)({name:"MuiRating",props:inProps}),{component="span",className,defaultValue=null,disabled=!1,emptyIcon=defaultEmptyIcon,emptyLabelText="Empty",getLabelText=defaultLabelText,highlightSelectedOnly=!1,icon=defaultIcon,IconContainerComponent=IconContainer,max=5,name:nameProp,onChange,onChangeActive,onMouseLeave,onMouseMove,precision=1,readOnly=!1,size="medium",value:valueProp,...other}=props,name=(0,useId.Z)(nameProp),[valueDerived,setValueState]=(0,useControlled.Z)({controlled:valueProp,default:defaultValue,name:"Rating"}),valueRounded=roundValueToPrecision(valueDerived,precision),isRtl=(0,RtlProvider.V)(),[{hover,focus},setState]=react.useState({hover:-1,focus:-1});let value=valueRounded;-1!==hover&&(value=hover),-1!==focus&&(value=focus);const[focusVisible,setFocusVisible]=react.useState(!1),rootRef=react.useRef(),handleRef=(0,useForkRef.Z)(rootRef,ref),handleChange=event=>{let newValue=""===event.target.value?null:parseFloat(event.target.value);-1!==hover&&(newValue=hover),setValueState(newValue),onChange&&onChange(event,newValue)},handleClear=event=>{0===event.clientX&&0===event.clientY||(setState({hover:-1,focus:-1}),setValueState(null),onChange&&parseFloat(event.target.value)===valueRounded&&onChange(event,null))},handleFocus=event=>{(0,isFocusVisible.Z)(event.target)&&setFocusVisible(!0);const newFocus=parseFloat(event.target.value);setState((prev=>({hover:prev.hover,focus:newFocus})))},handleBlur=event=>{if(-1!==hover)return;(0,isFocusVisible.Z)(event.target)||setFocusVisible(!1);setState((prev=>({hover:prev.hover,focus:-1})))},[emptyValueFocused,setEmptyValueFocused]=react.useState(!1),ownerState={...props,component,defaultValue,disabled,emptyIcon,emptyLabelText,emptyValueFocused,focusVisible,getLabelText,icon,IconContainerComponent,max,precision,readOnly,size},classes=(ownerState=>{const{classes,size,readOnly,disabled,emptyValueFocused,focusVisible}=ownerState,slots={root:["root",`size${(0,capitalize.Z)(size)}`,disabled&&"disabled",focusVisible&&"focusVisible",readOnly&&"readOnly"],label:["label","pristine"],labelEmptyValue:[emptyValueFocused&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,composeClasses.Z)(slots,getRatingUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(RatingRoot,{as:component,ref:handleRef,onMouseMove:event=>{onMouseMove&&onMouseMove(event);const rootNode=rootRef.current,{right,left,width:containerWidth}=rootNode.getBoundingClientRect();let percent;percent=isRtl?(right-event.clientX)/containerWidth:(event.clientX-left)/containerWidth;let newHover=roundValueToPrecision(max*percent+precision/2,precision);newHover=(0,clamp.Z)(newHover,precision,max),setState((prev=>prev.hover===newHover&&prev.focus===newHover?prev:{hover:newHover,focus:newHover})),setFocusVisible(!1),onChangeActive&&hover!==newHover&&onChangeActive(event,newHover)},onMouseLeave:event=>{onMouseLeave&&onMouseLeave(event);setState({hover:-1,focus:-1}),onChangeActive&&-1!==hover&&onChangeActive(event,-1)},className:(0,clsx.Z)(classes.root,className,readOnly&&"MuiRating-readOnly"),ownerState,role:readOnly?"img":null,"aria-label":readOnly?getLabelText(value):null,...other,children:[Array.from(new Array(max)).map(((_,index)=>{const itemValue=index+1,ratingItemProps={classes,disabled,emptyIcon,focus,getLabelText,highlightSelectedOnly,hover,icon,IconContainerComponent,name,onBlur:handleBlur,onChange:handleChange,onClick:handleClear,onFocus:handleFocus,ratingValue:value,ratingValueRounded:valueRounded,readOnly,ownerState},isActive=itemValue===Math.ceil(value)&&(-1!==hover||-1!==focus);if(precision<1){const items=Array.from(new Array(1/precision));return(0,jsx_runtime.jsx)(RatingDecimal,{className:(0,clsx.Z)(classes.decimal,isActive&&classes.iconActive),ownerState,iconActive:isActive,children:items.map((($,indexDecimal)=>{const itemDecimalValue=roundValueToPrecision(itemValue-1+(indexDecimal+1)*precision,precision);return(0,jsx_runtime.jsx)(RatingItem,{...ratingItemProps,isActive:!1,itemValue:itemDecimalValue,labelProps:{style:items.length-1===indexDecimal?{}:{width:itemDecimalValue===value?(indexDecimal+1)*precision*100+"%":"0%",overflow:"hidden",position:"absolute"}}},itemDecimalValue)}))},itemValue)}return(0,jsx_runtime.jsx)(RatingItem,{...ratingItemProps,isActive,itemValue},itemValue)})),!readOnly&&!disabled&&(0,jsx_runtime.jsxs)(RatingLabel,{className:(0,clsx.Z)(classes.label,classes.labelEmptyValue),ownerState,children:[(0,jsx_runtime.jsx)("input",{className:classes.visuallyHidden,value:"",id:`${name}-empty`,type:"radio",name,checked:null==valueRounded,onFocus:()=>setEmptyValueFocused(!0),onBlur:()=>setEmptyValueFocused(!1),onChange:handleChange}),(0,jsx_runtime.jsx)("span",{className:classes.visuallyHidden,children:emptyLabelText})]})]})}))}}]);