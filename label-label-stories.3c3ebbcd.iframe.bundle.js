"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[3733],{"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}({themeId:identifier.Z,defaultTheme,defaultClassName:"MuiBox-root",generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/material/styles/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useTheme});__webpack_require__("./node_modules/react/index.js");var _mui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),_defaultTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),_identifier__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useTheme(){const theme=(0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.Z)(_defaultTheme__WEBPACK_IMPORTED_MODULE_2__.Z);return theme[_identifier__WEBPACK_IMPORTED_MODULE_3__.Z]||theme}},"./node_modules/@mui/styled-engine/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>styled,Co:()=>internal_processStyles});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_memoize_esm=__webpack_require__("./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),reactPropsRegex=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,isPropValid=(0,emotion_memoize_esm.Z)((function(prop){return reactPropsRegex.test(prop)||111===prop.charCodeAt(0)&&110===prop.charCodeAt(1)&&prop.charCodeAt(2)<91})),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),emotion_serialize_browser_esm=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_use_insertion_effect_with_fallbacks_browser_esm=__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),testOmitPropsOnStringTag=isPropValid,testOmitPropsOnComponent=function testOmitPropsOnComponent(key){return"theme"!==key},getDefaultShouldForwardProp=function getDefaultShouldForwardProp(tag){return"string"==typeof tag&&tag.charCodeAt(0)>96?testOmitPropsOnStringTag:testOmitPropsOnComponent},composeShouldForwardProps=function composeShouldForwardProps(tag,options,isReal){var shouldForwardProp;if(options){var optionsShouldForwardProp=options.shouldForwardProp;shouldForwardProp=tag.__emotion_forwardProp&&optionsShouldForwardProp?function(propName){return tag.__emotion_forwardProp(propName)&&optionsShouldForwardProp(propName)}:optionsShouldForwardProp}return"function"!=typeof shouldForwardProp&&isReal&&(shouldForwardProp=tag.__emotion_forwardProp),shouldForwardProp},Insertion=function Insertion(_ref){var cache=_ref.cache,serialized=_ref.serialized,isStringTag=_ref.isStringTag;return(0,emotion_utils_browser_esm.hC)(cache,serialized,isStringTag),(0,emotion_use_insertion_effect_with_fallbacks_browser_esm.L)((function(){return(0,emotion_utils_browser_esm.My)(cache,serialized,isStringTag)})),null},newStyled=function createStyled(tag,options){var identifierName,targetClassName,isReal=tag.__emotion_real===tag,baseTag=isReal&&tag.__emotion_base||tag;void 0!==options&&(identifierName=options.label,targetClassName=options.target);var shouldForwardProp=composeShouldForwardProps(tag,options,isReal),defaultShouldForwardProp=shouldForwardProp||getDefaultShouldForwardProp(baseTag),shouldUseAs=!defaultShouldForwardProp("as");return function(){var args=arguments,styles=isReal&&void 0!==tag.__emotion_styles?tag.__emotion_styles.slice(0):[];if(void 0!==identifierName&&styles.push("label:"+identifierName+";"),null==args[0]||void 0===args[0].raw)styles.push.apply(styles,args);else{0,styles.push(args[0][0]);for(var len=args.length,i=1;i<len;i++)styles.push(args[i],args[0][i])}var Styled=(0,emotion_element_c39617d8_browser_esm.w)((function(props,cache,ref){var FinalTag=shouldUseAs&&props.as||baseTag,className="",classInterpolations=[],mergedProps=props;if(null==props.theme){for(var key in mergedProps={},props)mergedProps[key]=props[key];mergedProps.theme=react.useContext(emotion_element_c39617d8_browser_esm.T)}"string"==typeof props.className?className=(0,emotion_utils_browser_esm.fp)(cache.registered,classInterpolations,props.className):null!=props.className&&(className=props.className+" ");var serialized=(0,emotion_serialize_browser_esm.O)(styles.concat(classInterpolations),cache.registered,mergedProps);className+=cache.key+"-"+serialized.name,void 0!==targetClassName&&(className+=" "+targetClassName);var finalShouldForwardProp=shouldUseAs&&void 0===shouldForwardProp?getDefaultShouldForwardProp(FinalTag):defaultShouldForwardProp,newProps={};for(var _key in props)shouldUseAs&&"as"===_key||finalShouldForwardProp(_key)&&(newProps[_key]=props[_key]);return newProps.className=className,newProps.ref=ref,react.createElement(react.Fragment,null,react.createElement(Insertion,{cache,serialized,isStringTag:"string"==typeof FinalTag}),react.createElement(FinalTag,newProps))}));return Styled.displayName=void 0!==identifierName?identifierName:"Styled("+("string"==typeof baseTag?baseTag:baseTag.displayName||baseTag.name||"Component")+")",Styled.defaultProps=tag.defaultProps,Styled.__emotion_real=Styled,Styled.__emotion_base=baseTag,Styled.__emotion_styles=styles,Styled.__emotion_forwardProp=shouldForwardProp,Object.defineProperty(Styled,"toString",{value:function value(){return"."+targetClassName}}),Styled.withComponent=function(nextTag,nextOptions){return createStyled(nextTag,(0,esm_extends.Z)({},options,nextOptions,{shouldForwardProp:composeShouldForwardProps(Styled,nextOptions,!0)})).apply(void 0,styles)},Styled}}.bind();function styled(tag,options){return newStyled(tag,options)}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(tagName){newStyled[tagName]=newStyled(tagName)}));const internal_processStyles=(tag,processor)=>{Array.isArray(tag.__emotion_styles)&&(tag.__emotion_styles=processor(tag.__emotion_styles))}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const _excluded=["sx"],splitProps=props=>{var _props$theme$unstable,_props$theme;const result={systemProps:{},otherProps:{}},config=null!=(_props$theme$unstable=null==props||null==(_props$theme=props.theme)?void 0:_props$theme.unstable_sxConfig)?_props$theme$unstable:_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const defaultGenerator=componentName=>componentName,__WEBPACK_DEFAULT_EXPORT__=(()=>{let generate=defaultGenerator;return{configure(generator){generate=generator},generate:componentName=>generate(componentName),reset(){generate=defaultGenerator}}})()},"./src/label/label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3,_Info$parameters,_Info$parameters2,_Info$parameters2$doc,_Warning$parameters,_Warning$parameters2,_Warning$parameters2$,_Error$parameters,_Error$parameters2,_Error$parameters2$do;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,Info:()=>Info,Primary:()=>Primary,Secondary:()=>Secondary,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Data Display/Label",component:__webpack_require__("./src/label/label.tsx")._,parameters:{layout:"centered"}};var Default={args:{text:"lorem",variant:"default"}},Primary={args:{text:"lorem",variant:"primary"}},Secondary={args:{text:"lorem",variant:"secondary"}},Info={args:{text:"lorem",variant:"info"}},Warning={args:{text:"lorem",variant:"warning"}},Error={args:{text:"lorem",variant:"error"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    text: "lorem",\n    variant: "default"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    text: "lorem",\n    variant: "primary"\n  }\n}'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Secondary.parameters=_objectSpread(_objectSpread({},Secondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    text: "lorem",\n    variant: "secondary"\n  }\n}'},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source)})}),Info.parameters=_objectSpread(_objectSpread({},Info.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Info$parameters=Info.parameters)||void 0===_Info$parameters?void 0:_Info$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    text: "lorem",\n    variant: "info"\n  }\n}'},null===(_Info$parameters2=Info.parameters)||void 0===_Info$parameters2||null===(_Info$parameters2$doc=_Info$parameters2.docs)||void 0===_Info$parameters2$doc?void 0:_Info$parameters2$doc.source)})}),Warning.parameters=_objectSpread(_objectSpread({},Warning.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Warning$parameters=Warning.parameters)||void 0===_Warning$parameters?void 0:_Warning$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    text: "lorem",\n    variant: "warning"\n  }\n}'},null===(_Warning$parameters2=Warning.parameters)||void 0===_Warning$parameters2||null===(_Warning$parameters2$=_Warning$parameters2.docs)||void 0===_Warning$parameters2$?void 0:_Warning$parameters2$.source)})}),Error.parameters=_objectSpread(_objectSpread({},Error.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Error$parameters=Error.parameters)||void 0===_Error$parameters?void 0:_Error$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    text: "lorem",\n    variant: "error"\n  }\n}'},null===(_Error$parameters2=Error.parameters)||void 0===_Error$parameters2||null===(_Error$parameters2$do=_Error$parameters2.docs)||void 0===_Error$parameters2$do?void 0:_Error$parameters2$do.source)})});var __namedExportsOrder=["Default","Primary","Secondary","Info","Warning","Error"]},"./src/label/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Label=function Label(_ref){var text=_ref.text,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,_ref$textTransform=_ref.textTransform,textTransform=void 0===_ref$textTransform?"capitalize":_ref$textTransform,sx=_ref.sx,_useTheme=(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z)(),palette=_useTheme.palette,typography=_useTheme.typography,backgroundColor={default:"light"===palette.mode?palette.grey[100]:palette.grey[900],primary:palette.primary.light,secondary:palette.secondary.light,info:palette.info.light,warning:palette.warning.light,error:palette.error.light,success:palette.success.light},textColor={default:palette.getContrastText(backgroundColor.default),primary:palette.primary.contrastText,secondary:palette.secondary.contrastText,info:palette.info.contrastText,warning:palette.warning.contrastText,error:palette.error.contrastText,success:palette.success.contrastText};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{height:24,minWidth:22,display:"inline-flex",justifyContent:"center",alignItems:"center",bgcolor:backgroundColor[variant],color:textColor[variant],fontSize:typography.caption.fontSize,fontWeight:typography.fontWeightBold,lineHeight:0,textTransform,whiteSpace:"nowrap",borderRadius:2,role:"label","aria-label":"".concat(text," ").concat(variant," label"),py:0,px:1,sx:_objectSpread({cursor:"default"},sx),children:text})};Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"Compact element to represent a text",displayName:"Label",props:{text:{defaultValue:null,description:"Content of the component",name:"text",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"Color palette used to draw the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"default"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},sx:{defaultValue:null,description:"Custom styles",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},textTransform:{defaultValue:{value:"capitalize"},description:"Show the text as uppercase",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/label/label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/label/label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);