"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[5935],{"./node_modules/@mui/material/Container/Container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Container_Container});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/system/esm/styled.js"),createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","disableGutters","fixed","maxWidth","classes"],defaultTheme=(0,createTheme.Z)(),defaultCreateStyledComponent=(0,styled.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemePropsDefault=inProps=>(0,useThemeProps.Z)({props:inProps,name:"MuiContainer",defaultTheme});var utils_capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styles_styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const Container=function createContainer(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiContainer"}=options,ContainerRoot=createStyledComponent((({theme,ownerState})=>(0,esm_extends.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!ownerState.disableGutters&&{paddingLeft:theme.spacing(2),paddingRight:theme.spacing(2),[theme.breakpoints.up("sm")]:{paddingLeft:theme.spacing(3),paddingRight:theme.spacing(3)}})),(({theme,ownerState})=>ownerState.fixed&&Object.keys(theme.breakpoints.values).reduce(((acc,breakpointValueKey)=>{const breakpoint=breakpointValueKey,value=theme.breakpoints.values[breakpoint];return 0!==value&&(acc[theme.breakpoints.up(breakpoint)]={maxWidth:`${value}${theme.breakpoints.unit}`}),acc}),{})),(({theme,ownerState})=>(0,esm_extends.Z)({},"xs"===ownerState.maxWidth&&{[theme.breakpoints.up("xs")]:{maxWidth:Math.max(theme.breakpoints.values.xs,444)}},ownerState.maxWidth&&"xs"!==ownerState.maxWidth&&{[theme.breakpoints.up(ownerState.maxWidth)]:{maxWidth:`${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`}}))),Container=react.forwardRef((function Container(inProps,ref){const props=useThemeProps(inProps),{className,component="div",disableGutters=!1,fixed=!1,maxWidth="lg"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component,disableGutters,fixed,maxWidth}),classes=((ownerState,componentName)=>{const{classes,fixed,disableGutters,maxWidth}=ownerState,slots={root:["root",maxWidth&&`maxWidth${(0,capitalize.Z)(String(maxWidth))}`,fixed&&"fixed",disableGutters&&"disableGutters"]};return(0,composeClasses.Z)(slots,(slot=>(0,generateUtilityClass.Z)(componentName,slot)),classes)})(ownerState,componentName);return(0,jsx_runtime.jsx)(ContainerRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref},other))}));return Container}({createStyledComponent:(0,styles_styled.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,utils_capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemeProps:inProps=>(0,styles_useThemeProps.Z)({props:inProps,name:"MuiContainer"})}),Container_Container=Container},"./node_modules/@mui/material/Skeleton/Skeleton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Skeleton_Skeleton});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.m.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");function getUnit(input){return String(input).match(/[\d.\-+]*\s*(.*)/)[1]||""}function toUnitless(length){return parseFloat(length)}var colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSkeletonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSkeleton",slot)}(0,generateUtilityClasses.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["animation","className","component","height","style","variant","width"];let _t,_t2,_t3,_t4,_=t=>t;const pulseKeyframe=(0,emotion_react_browser_esm.F4)(_t||(_t=_`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),waveKeyframe=(0,emotion_react_browser_esm.F4)(_t2||(_t2=_`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),SkeletonRoot=(0,styled.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!1!==ownerState.animation&&styles[ownerState.animation],ownerState.hasChildren&&styles.withChildren,ownerState.hasChildren&&!ownerState.width&&styles.fitContent,ownerState.hasChildren&&!ownerState.height&&styles.heightAuto]}})((({theme,ownerState})=>{const radiusUnit=getUnit(theme.shape.borderRadius)||"px",radiusValue=toUnitless(theme.shape.borderRadius);return(0,esm_extends.Z)({display:"block",backgroundColor:theme.vars?theme.vars.palette.Skeleton.bg:(0,colorManipulator.Fq)(theme.palette.text.primary,"light"===theme.palette.mode?.11:.13),height:"1.2em"},"text"===ownerState.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${radiusValue}${radiusUnit}/${Math.round(radiusValue/.6*10)/10}${radiusUnit}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===ownerState.variant&&{borderRadius:"50%"},"rounded"===ownerState.variant&&{borderRadius:(theme.vars||theme).shape.borderRadius},ownerState.hasChildren&&{"& > *":{visibility:"hidden"}},ownerState.hasChildren&&!ownerState.width&&{maxWidth:"fit-content"},ownerState.hasChildren&&!ownerState.height&&{height:"auto"})}),(({ownerState})=>"pulse"===ownerState.animation&&(0,emotion_react_browser_esm.iv)(_t3||(_t3=_`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),pulseKeyframe)),(({ownerState,theme})=>"wave"===ownerState.animation&&(0,emotion_react_browser_esm.iv)(_t4||(_t4=_`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),waveKeyframe,(theme.vars||theme).palette.action.hover))),Skeleton_Skeleton=react.forwardRef((function Skeleton(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSkeleton"}),{animation="pulse",className,component="span",height,style,variant="text",width}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{animation,component,variant,hasChildren:Boolean(other.children)}),classes=(ownerState=>{const{classes,variant,animation,hasChildren,width,height}=ownerState,slots={root:["root",variant,animation,hasChildren&&"withChildren",hasChildren&&!width&&"fitContent",hasChildren&&!height&&"heightAuto"]};return(0,composeClasses.Z)(slots,getSkeletonUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(SkeletonRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx_m.Z)(classes.root,className),ownerState},other,{style:(0,esm_extends.Z)({width,height},style)}))}))},"./node_modules/@mui/system/esm/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/esm/createStyled.js").ZP)()},"./src/notification-center/notification-center.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_notification_center_provider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/notification-center/notification-center.provider.tsx"),_notification_center_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/notification-center/notification-center.context.ts"),_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_content_placeholder__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/content-placeholder/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var DummyError={title:"Internal Server error",message:"Unable to save the item"};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Feedback/NotificationCenter",component:_content_placeholder__WEBPACK_IMPORTED_MODULE_2__.r,decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_notification_center_provider__WEBPACK_IMPORTED_MODULE_0__.D,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})}],parameters:{layout:"fullscreen"}};var Default=function Default(){var _useNotificationCente=(0,_notification_center_context__WEBPACK_IMPORTED_MODULE_1__.JI)(),show=_useNotificationCente.show,hide=_useNotificationCente.hide;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_content_placeholder__WEBPACK_IMPORTED_MODULE_2__.r,{size:3,p:2,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__.Z,{pb:2,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__.Z,{onClick:function onClick(){return show(_objectSpread(_objectSpread({},DummyError),{},{severity:"info"}))},variant:"contained",children:"Show info"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__.Z,{onClick:function onClick(){return show(_objectSpread(_objectSpread({},DummyError),{},{severity:"success"}))},variant:"contained",children:"Show success"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__.Z,{onClick:function onClick(){return show(_objectSpread(_objectSpread({},DummyError),{},{severity:"warning"}))},variant:"contained",children:"Show warning"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__.Z,{onClick:function onClick(){return show(_objectSpread(_objectSpread({},DummyError),{},{severity:"error"}))},variant:"contained",children:"Show error"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__.Z,{onClick:hide,variant:"contained",children:"hide"})]})})};Default.displayName="Default",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'() => {\n  const {\n    show,\n    hide\n  } = useNotificationCenter();\n  return <ContentPlaceholder size={3} p={2}>\n      <Box pb={2}>\n        <Button onClick={() => show({\n        ...DummyError,\n        severity: "info"\n      })} variant="contained">\n          Show info\n        </Button>\n        <Button onClick={() => show({\n        ...DummyError,\n        severity: "success"\n      })} variant="contained">\n          Show success\n        </Button>\n        <Button onClick={() => show({\n        ...DummyError,\n        severity: "warning"\n      })} variant="contained">\n          Show warning\n        </Button>\n        <Button onClick={() => show({\n        ...DummyError,\n        severity: "error"\n      })} variant="contained">\n          Show error\n        </Button>\n        <Button onClick={hide} variant="contained">\n          hide\n        </Button>\n      </Box>\n    </ContentPlaceholder>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/content-placeholder/content-placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>ContentPlaceholder});var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),_skeleton_grid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/skeleton-grid/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ContentPlaceholder=function ContentPlaceholder(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?20:_ref$size,children=_ref.children,p=_ref.p;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_2__.Z,{component:"main",sx:{p},"data-testid":"content-placeholder-test",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_skeleton_grid__WEBPACK_IMPORTED_MODULE_0__.N,{size})]})};ContentPlaceholder.displayName="ContentPlaceholder";try{ContentPlaceholder.displayName="ContentPlaceholder",ContentPlaceholder.__docgenInfo={description:"",displayName:"ContentPlaceholder",props:{size:{defaultValue:{value:"20"},description:"",name:"size",required:!1,type:{name:"number"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/content-placeholder/content-placeholder.tsx#ContentPlaceholder"]={docgenInfo:ContentPlaceholder.__docgenInfo,name:"ContentPlaceholder",path:"src/content-placeholder/content-placeholder.tsx#ContentPlaceholder"})}catch(__react_docgen_typescript_loader_error){}},"./src/content-placeholder/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>_content_placeholder__WEBPACK_IMPORTED_MODULE_0__.r});var _content_placeholder__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/content-placeholder/content-placeholder.tsx")},"./src/notification-center/notification-center.context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fk:()=>NotificationCenterContext,JI:()=>useNotificationCenter});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),NotificationCenterProviderUndefinedError=new Error("NotificationCenterContext.Provider is required and was undefined"),NotificationCenterContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useNotificationCenter=function useNotificationCenter(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NotificationCenterContext);if(void 0===context)throw NotificationCenterProviderUndefinedError;return context}},"./src/notification-center/notification-center.provider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>NotificationCenterProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Snackbar/Snackbar.js"),_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),_mui_material_AlertTitle__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/AlertTitle/AlertTitle.js"),_notification_center_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/notification-center/notification-center.context.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var NotificationCenterProvider=function NotificationCenterProvider(_ref){var children=_ref.children,_ref$autoHideDuration=_ref.autoHideDuration,autoHideDuration=void 0===_ref$autoHideDuration?6e3:_ref$autoHideDuration,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),2),notification=_useState2[0],setNotification=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open=_useState4[0],setOpen=_useState4[1],hide=function hide(){setOpen(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_notification_center_context__WEBPACK_IMPORTED_MODULE_1__.Fk.Provider,{value:{show:function show(notification){setNotification(notification),setOpen(!0)},hide},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_3__.Z,{open,autoHideDuration,onClose:hide,anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__.Z,{onClose:hide,severity:null==notification?void 0:notification.severity,"aria-label":null==notification?void 0:notification.severity,sx:{width:"100%"},children:[(null==notification?void 0:notification.title)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_AlertTitle__WEBPACK_IMPORTED_MODULE_5__.Z,{children:null==notification?void 0:notification.title}),null==notification?void 0:notification.message]})}),children]})};NotificationCenterProvider.displayName="NotificationCenterProvider";try{NotificationCenterProvider.displayName="NotificationCenterProvider",NotificationCenterProvider.__docgenInfo={description:"",displayName:"NotificationCenterProvider",props:{autoHideDuration:{defaultValue:{value:"6000"},description:"",name:"autoHideDuration",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/notification-center/notification-center.provider.tsx#NotificationCenterProvider"]={docgenInfo:NotificationCenterProvider.__docgenInfo,name:"NotificationCenterProvider",path:"src/notification-center/notification-center.provider.tsx#NotificationCenterProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/skeleton-card/skeleton-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SkeletonCard});var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Skeleton/Skeleton.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SkeletonCard=function SkeletonCard(_ref){var _ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width,_ref$animation=_ref.animation,animation=void 0!==_ref$animation&&_ref$animation;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{width,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2__.Z,{animation,variant:"rectangular",height:118}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2__.Z,{animation,variant:"rectangular",height:16,sx:{my:1}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2__.Z,{animation,variant:"rectangular",width:"80%",height:16})]})};SkeletonCard.displayName="SkeletonCard";try{SkeletonCard.displayName="SkeletonCard",SkeletonCard.__docgenInfo={description:"",displayName:"SkeletonCard",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string | number"}},animation:{defaultValue:{value:"false"},description:"",name:"animation",required:!1,type:{name:'false | "pulse" | "wave"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/skeleton-card/skeleton-card.tsx#SkeletonCard"]={docgenInfo:SkeletonCard.__docgenInfo,name:"SkeletonCard",path:"src/skeleton-card/skeleton-card.tsx#SkeletonCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/skeleton-grid/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>_skeleton_grid__WEBPACK_IMPORTED_MODULE_0__.N});var _skeleton_grid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/skeleton-grid/skeleton-grid.tsx")},"./src/skeleton-grid/skeleton-grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SkeletonGrid});var Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),arrays=__webpack_require__("./src/utils/arrays.ts"),skeleton_card=__webpack_require__("./src/skeleton-card/skeleton-card.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SkeletonGrid=function SkeletonGrid(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?20:_ref$size;return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,spacing:2,children:(0,arrays.G)(size,0).map((function(_,i){return(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:4,children:(0,jsx_runtime.jsx)(skeleton_card.A,{width:1})},i)}))})};SkeletonGrid.displayName="SkeletonGrid";try{SkeletonGrid.displayName="SkeletonGrid",SkeletonGrid.__docgenInfo={description:"",displayName:"SkeletonGrid",props:{size:{defaultValue:{value:"20"},description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/skeleton-grid/skeleton-grid.tsx#SkeletonGrid"]={docgenInfo:SkeletonGrid.__docgenInfo,name:"SkeletonGrid",path:"src/skeleton-grid/skeleton-grid.tsx#SkeletonGrid"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/arrays.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>newArrayWithSize});var newArrayWithSize=function newArrayWithSize(size,fillValue){return new Array(size).fill(fillValue)}}}]);
//# sourceMappingURL=notification-center-notification-center-stories.660804f0.iframe.bundle.js.map