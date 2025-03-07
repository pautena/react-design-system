"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[1089],{"./node_modules/@mui/icons-material/esm/Search.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiBox",["root"]),defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),{className,component="div",...other}=(0,extendSxProp.Z)(inProps);return(0,jsx_runtime.jsx)(BoxRoot,{as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme,...other})}))}({themeId:identifier.Z,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/material/CircularProgress/CircularProgress.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),_utils_createSimplePaletteValueFilter_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/utils/createSimplePaletteValueFilter.js"),_circularProgressClasses_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/CircularProgress/circularProgressClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const circularRotateKeyframe=_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,circularDashKeyframe=_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,rotateAnimation="string"!=typeof circularRotateKeyframe?_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__.iv`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      `:null,dashAnimation="string"!=typeof circularDashKeyframe?_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__.iv`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      `:null,CircularProgressRoot=(0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_6__.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],styles[`color${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__.Z)(ownerState.color)}`]]}})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_7__.Z)((({theme})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:theme.transitions.create("transform")}},{props:{variant:"indeterminate"},style:rotateAnimation||{animation:`${circularRotateKeyframe} 1.4s linear infinite`}},...Object.entries(theme.palette).filter((0,_utils_createSimplePaletteValueFilter_js__WEBPACK_IMPORTED_MODULE_8__.Z)()).map((([color])=>({props:{color},style:{color:(theme.vars||theme).palette[color].main}})))]})))),CircularProgressSVG=(0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_6__.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(props,styles)=>styles.svg})({display:"block"}),CircularProgressCircle=(0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_6__.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.circle,styles[`circle${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__.Z)(ownerState.variant)}`],ownerState.disableShrink&&styles.circleDisableShrink]}})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_7__.Z)((({theme})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:theme.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState})=>"indeterminate"===ownerState.variant&&!ownerState.disableShrink,style:dashAnimation||{animation:`${circularDashKeyframe} 1.4s ease-in-out infinite`}}]})))),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function CircularProgress(inProps,ref){const props=(0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_9__.i)({props:inProps,name:"MuiCircularProgress"}),{className,color="primary",disableShrink=!1,size=40,style,thickness=3.6,value=0,variant="indeterminate",...other}=props,ownerState={...props,color,disableShrink,size,thickness,value,variant},classes=(ownerState=>{const{classes,variant,color,disableShrink}=ownerState,slots={root:["root",variant,`color${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__.Z)(color)}`],svg:["svg"],circle:["circle",`circle${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__.Z)(variant)}`,disableShrink&&"circleDisableShrink"]};return(0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__.Z)(slots,_circularProgressClasses_js__WEBPACK_IMPORTED_MODULE_5__.C,classes)})(ownerState),circleStyle={},rootStyle={},rootProps={};if("determinate"===variant){const circumference=2*Math.PI*((44-thickness)/2);circleStyle.strokeDasharray=circumference.toFixed(3),rootProps["aria-valuenow"]=Math.round(value),circleStyle.strokeDashoffset=`${((100-value)/100*circumference).toFixed(3)}px`,rootStyle.transform="rotate(-90deg)"}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CircularProgressRoot,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_10__.Z)(classes.root,className),style:{width:size,height:size,...rootStyle,...style},ownerState,ref,role:"progressbar",...rootProps,...other,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CircularProgressSVG,{className:classes.svg,ownerState,viewBox:"22 22 44 44",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CircularProgressCircle,{className:classes.circle,style:circleStyle,ownerState,cx:44,cy:44,r:(44-thickness)/2,fill:"none",strokeWidth:thickness})})})}))},"./node_modules/@mui/material/CircularProgress/circularProgressClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>getCircularProgressUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCircularProgressUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiCircularProgress",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},"./node_modules/@mui/material/utils/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useId/useId.js").Z},"./node_modules/@mui/utils/esm/useId/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{Z:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let globalId=0;const maybeReactUseId={...react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))}.useId;function useId(idOverride){if(void 0!==maybeReactUseId){const reactId=maybeReactUseId();return idOverride??reactId}return function useGlobalId(idOverride){const[defaultId,setDefaultId]=react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride),id=idOverride||defaultId;return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{null==defaultId&&(globalId+=1,setDefaultId(`mui-${globalId}`))}),[defaultId]),id}(idOverride)}},"./src/placeholder/placeholder.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithActions:()=>WithActions,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>placeholder_stories});var placeholder=__webpack_require__("./src/placeholder/placeholder.tsx"),Search=__webpack_require__("./node_modules/@mui/icons-material/esm/Search.js"),actions=[{id:"add",text:"Add",href:"/placeholders/add"},{id:"edit",text:"Edit",onClick:(0,__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs").aD)("on click edit action")}],jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const placeholder_stories={title:"Components/Placeholders/Placeholder",component:placeholder.V,parameters:{layout:"fullscreen"}},Default={args:{title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"}},WithIcon={args:{icon:({size,color})=>(0,jsx_runtime.jsx)(Search.Z,{color,sx:{fontSize:size}}),title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"}},WithActions={args:{icon:({size,color})=>(0,jsx_runtime.jsx)(Search.Z,{color,sx:{fontSize:size}}),title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor",actions}},__namedExportsOrder=["Default","WithIcon","WithActions"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Lorem ipsum dolor sit amet",\n    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"\n  }\n}',...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    icon: ({\n      size,\n      color\n    }: PlaceholderIconArgs) => <SearchIcon color={color} sx={{\n      fontSize: size\n    }} />,\n    title: "Lorem ipsum dolor sit amet",\n    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"\n  }\n}',...WithIcon.parameters?.docs?.source}}},WithActions.parameters={...WithActions.parameters,docs:{...WithActions.parameters?.docs,source:{originalSource:'{\n  args: {\n    icon: ({\n      size,\n      color\n    }: PlaceholderIconArgs) => <SearchIcon color={color} sx={{\n      fontSize: size\n    }} />,\n    title: "Lorem ipsum dolor sit amet",\n    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor",\n    actions\n  }\n}',...WithActions.parameters?.docs?.source}}}},"./src/placeholder/placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Placeholder});var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Placeholder=function Placeholder(_ref){var title=_ref.title,subtitle=_ref.subtitle,icon=_ref.icon,_ref$iconSize=_ref.iconSize,iconSize=void 0===_ref$iconSize?200:_ref$iconSize,actions=_ref.actions;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",children:[icon&&icon({size:iconSize,color:"primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"h4",role:"heading","aria-level":1,children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"subtitle1",role:"heading","aria-level":2,sx:{mt:2},children:subtitle}),actions&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{sx:{pt:2},children:actions.map((function(_ref2,index){var id=_ref2.id,text=_ref2.text,href=_ref2.href,onClick=_ref2.onClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{role:"button",variant:"contained",href,onClick,sx:{mr:index<actions.length-1?2:0},children:text},id)}))})]})};try{Placeholder.displayName="Placeholder",Placeholder.__docgenInfo={description:"",displayName:"Placeholder",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string"}},iconSize:{defaultValue:{value:"200"},description:"",name:"iconSize",required:!1,type:{name:"number"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"PlaceholderIcon"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"PlaceholderAction[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/placeholder/placeholder.tsx#Placeholder"]={docgenInfo:Placeholder.__docgenInfo,name:"Placeholder",path:"src/placeholder/placeholder.tsx#Placeholder"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=placeholder-placeholder-stories.af5fc250.iframe.bundle.js.map