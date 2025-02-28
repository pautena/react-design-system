"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[3441],{"./node_modules/@mui/material/Divider/dividerClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>getDividerUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDividerUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiDivider",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},"./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,f:()=>getListItemIconUtilityClass});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemIconUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiListItemIcon",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},"./node_modules/@mui/material/ListItemText/ListItemText.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_Typography_index_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Typography/typographyClasses.js"),_Typography_index_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_List_ListContext_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),_listItemTextClasses_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/ListItemText/listItemTextClasses.js"),_utils_useSlot_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/utils/useSlot.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ListItemTextRoot=(0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[{[`& .${_listItemTextClasses_js__WEBPACK_IMPORTED_MODULE_3__.Z.primary}`]:styles.primary},{[`& .${_listItemTextClasses_js__WEBPACK_IMPORTED_MODULE_3__.Z.secondary}`]:styles.secondary},styles.root,ownerState.inset&&styles.inset,ownerState.primary&&ownerState.secondary&&styles.multiline,ownerState.dense&&styles.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${_Typography_index_js__WEBPACK_IMPORTED_MODULE_5__.Z.root}:where(& .${_listItemTextClasses_js__WEBPACK_IMPORTED_MODULE_3__.Z.primary})`]:{display:"block"},[`.${_Typography_index_js__WEBPACK_IMPORTED_MODULE_5__.Z.root}:where(& .${_listItemTextClasses_js__WEBPACK_IMPORTED_MODULE_3__.Z.secondary})`]:{display:"block"},variants:[{props:({ownerState})=>ownerState.primary&&ownerState.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState})=>ownerState.inset,style:{paddingLeft:56}}]}),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ListItemText(inProps,ref){const props=(0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__.i)({props:inProps,name:"MuiListItemText"}),{children,className,disableTypography=!1,inset=!1,primary:primaryProp,primaryTypographyProps,secondary:secondaryProp,secondaryTypographyProps,slots={},slotProps={},...other}=props,{dense}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext_js__WEBPACK_IMPORTED_MODULE_7__.Z);let primary=null!=primaryProp?primaryProp:children,secondary=secondaryProp;const ownerState={...props,disableTypography,inset,primary:!!primary,secondary:!!secondary,dense},classes=(ownerState=>{const{classes,inset,primary,secondary,dense}=ownerState,slots={root:["root",inset&&"inset",dense&&"dense",primary&&secondary&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__.Z)(slots,_listItemTextClasses_js__WEBPACK_IMPORTED_MODULE_3__.L,classes)})(ownerState),externalForwardedProps={slots,slotProps:{primary:primaryTypographyProps,secondary:secondaryTypographyProps,...slotProps}},[PrimarySlot,primarySlotProps]=(0,_utils_useSlot_js__WEBPACK_IMPORTED_MODULE_8__.Z)("primary",{className:classes.primary,elementType:_Typography_index_js__WEBPACK_IMPORTED_MODULE_9__.Z,externalForwardedProps,ownerState}),[SecondarySlot,secondarySlotProps]=(0,_utils_useSlot_js__WEBPACK_IMPORTED_MODULE_8__.Z)("secondary",{className:classes.secondary,elementType:_Typography_index_js__WEBPACK_IMPORTED_MODULE_9__.Z,externalForwardedProps,ownerState});return null==primary||primary.type===_Typography_index_js__WEBPACK_IMPORTED_MODULE_9__.Z||disableTypography||(primary=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PrimarySlot,{variant:dense?"body2":"body1",component:primarySlotProps?.variant?void 0:"span",...primarySlotProps,children:primary})),null==secondary||secondary.type===_Typography_index_js__WEBPACK_IMPORTED_MODULE_9__.Z||disableTypography||(secondary=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SecondarySlot,{variant:"body2",color:"textSecondary",...secondarySlotProps,children:secondary})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ListItemTextRoot,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_10__.Z)(classes.root,className),ownerState,ref,...other,children:[primary,secondary]})}))},"./node_modules/@mui/material/ListItemText/listItemTextClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>getListItemTextUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemTextUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiListItemText",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},"./node_modules/ramda/es/assocPath.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>es_assocPath});var _curry1=__webpack_require__("./node_modules/ramda/es/internal/_curry1.js"),_curry2=__webpack_require__("./node_modules/ramda/es/internal/_curry2.js"),_isPlaceholder=__webpack_require__("./node_modules/ramda/es/internal/_isPlaceholder.js");function _curry3(fn){return function f3(a,b,c){switch(arguments.length){case 0:return f3;case 1:return(0,_isPlaceholder.Z)(a)?f3:(0,_curry2.Z)((function(_b,_c){return fn(a,_b,_c)}));case 2:return(0,_isPlaceholder.Z)(a)&&(0,_isPlaceholder.Z)(b)?f3:(0,_isPlaceholder.Z)(a)?(0,_curry2.Z)((function(_a,_c){return fn(_a,b,_c)})):(0,_isPlaceholder.Z)(b)?(0,_curry2.Z)((function(_b,_c){return fn(a,_b,_c)})):(0,_curry1.Z)((function(_c){return fn(a,b,_c)}));default:return(0,_isPlaceholder.Z)(a)&&(0,_isPlaceholder.Z)(b)&&(0,_isPlaceholder.Z)(c)?f3:(0,_isPlaceholder.Z)(a)&&(0,_isPlaceholder.Z)(b)?(0,_curry2.Z)((function(_a,_b){return fn(_a,_b,c)})):(0,_isPlaceholder.Z)(a)&&(0,_isPlaceholder.Z)(c)?(0,_curry2.Z)((function(_a,_c){return fn(_a,b,_c)})):(0,_isPlaceholder.Z)(b)&&(0,_isPlaceholder.Z)(c)?(0,_curry2.Z)((function(_b,_c){return fn(a,_b,_c)})):(0,_isPlaceholder.Z)(a)?(0,_curry1.Z)((function(_a){return fn(_a,b,c)})):(0,_isPlaceholder.Z)(b)?(0,_curry1.Z)((function(_b){return fn(a,_b,c)})):(0,_isPlaceholder.Z)(c)?(0,_curry1.Z)((function(_c){return fn(a,b,_c)})):fn(a,b,c)}}}var _has=__webpack_require__("./node_modules/ramda/es/internal/_has.js");const _isInteger=Number.isInteger||function _isInteger(n){return n<<0===n};var _isArray=__webpack_require__("./node_modules/ramda/es/internal/_isArray.js");const es_isNil=(0,_curry1.Z)((function isNil(x){return null==x}));const es_assocPath=_curry3((function assocPath(path,val,obj){if(0===path.length)return val;var idx=path[0];if(path.length>1){var nextObj=!es_isNil(obj)&&(0,_has.Z)(idx,obj)&&"object"==typeof obj[idx]?obj[idx]:_isInteger(path[1])?[]:{};val=assocPath(Array.prototype.slice.call(path,1),val,nextObj)}return function _assoc(prop,val,obj){if(_isInteger(prop)&&(0,_isArray.Z)(obj)){var arr=[].concat(obj);return arr[prop]=val,arr}var result={};for(var p in obj)result[p]=obj[p];return result[prop]=val,result}(idx,val,obj)}))},"./node_modules/ramda/es/internal/_curry1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_curry1});var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ramda/es/internal/_isPlaceholder.js");function _curry1(fn){return function f1(a){return 0===arguments.length||(0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__.Z)(a)?f1:fn.apply(this,arguments)}}},"./node_modules/ramda/es/internal/_curry2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_curry2});var _curry1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/ramda/es/internal/_curry1.js"),_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ramda/es/internal/_isPlaceholder.js");function _curry2(fn){return function f2(a,b){switch(arguments.length){case 0:return f2;case 1:return(0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__.Z)(a)?f2:(0,_curry1_js__WEBPACK_IMPORTED_MODULE_1__.Z)((function(_b){return fn(a,_b)}));default:return(0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__.Z)(a)&&(0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__.Z)(b)?f2:(0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__.Z)(a)?(0,_curry1_js__WEBPACK_IMPORTED_MODULE_1__.Z)((function(_a){return fn(_a,b)})):(0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__.Z)(b)?(0,_curry1_js__WEBPACK_IMPORTED_MODULE_1__.Z)((function(_b){return fn(a,_b)})):fn(a,b)}}}},"./node_modules/ramda/es/internal/_has.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _has(prop,obj){return Object.prototype.hasOwnProperty.call(obj,prop)}__webpack_require__.d(__webpack_exports__,{Z:()=>_has})},"./node_modules/ramda/es/internal/_isArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=Array.isArray||function _isArray(val){return null!=val&&val.length>=0&&"[object Array]"===Object.prototype.toString.call(val)}},"./node_modules/ramda/es/internal/_isPlaceholder.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _isPlaceholder(a){return null!=a&&"object"==typeof a&&!0===a["@@functional/placeholder"]}__webpack_require__.d(__webpack_exports__,{Z:()=>_isPlaceholder})},"./node_modules/ramda/es/uniq.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>es_uniq});var _curry1=__webpack_require__("./node_modules/ramda/es/internal/_curry1.js");function _identity(x){return x}const es_identity=(0,_curry1.Z)(_identity);var _curry2=__webpack_require__("./node_modules/ramda/es/internal/_curry2.js");function _arrayFromIterator(iter){for(var next,list=[];!(next=iter.next()).done;)list.push(next.value);return list}function _includesWith(pred,x,list){for(var idx=0,len=list.length;idx<len;){if(pred(x,list[idx]))return!0;idx+=1}return!1}var _has=__webpack_require__("./node_modules/ramda/es/internal/_has.js");const internal_objectIs="function"==typeof Object.is?Object.is:function _objectIs(a,b){return a===b?0!==a||1/a==1/b:a!=a&&b!=b};var _isArguments_toString=Object.prototype.toString;const internal_isArguments=function(){return"[object Arguments]"===_isArguments_toString.call(arguments)?function _isArguments(x){return"[object Arguments]"===_isArguments_toString.call(x)}:function _isArguments(x){return(0,_has.Z)("callee",x)}}();var hasEnumBug=!{toString:null}.propertyIsEnumerable("toString"),nonEnumerableProps=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],hasArgsEnumBug=function(){return arguments.propertyIsEnumerable("length")}(),contains=function contains(list,item){for(var idx=0;idx<list.length;){if(list[idx]===item)return!0;idx+=1}return!1};const es_keys="function"!=typeof Object.keys||hasArgsEnumBug?(0,_curry1.Z)((function keys(obj){if(Object(obj)!==obj)return[];var prop,nIdx,ks=[],checkArgsLength=hasArgsEnumBug&&internal_isArguments(obj);for(prop in obj)!(0,_has.Z)(prop,obj)||checkArgsLength&&"length"===prop||(ks[ks.length]=prop);if(hasEnumBug)for(nIdx=nonEnumerableProps.length-1;nIdx>=0;)prop=nonEnumerableProps[nIdx],(0,_has.Z)(prop,obj)&&!contains(ks,prop)&&(ks[ks.length]=prop),nIdx-=1;return ks})):(0,_curry1.Z)((function keys(obj){return Object(obj)!==obj?[]:Object.keys(obj)}));const es_type=(0,_curry1.Z)((function type(val){return null===val?"Null":void 0===val?"Undefined":Object.prototype.toString.call(val).slice(8,-1)}));function _uniqContentEquals(aIterator,bIterator,stackA,stackB){var a=_arrayFromIterator(aIterator);function eq(_a,_b){return _equals(_a,_b,stackA.slice(),stackB.slice())}return!_includesWith((function(b,aItem){return!_includesWith(eq,aItem,b)}),_arrayFromIterator(bIterator),a)}function _equals(a,b,stackA,stackB){if(internal_objectIs(a,b))return!0;var typeA=es_type(a);if(typeA!==es_type(b))return!1;if("function"==typeof a["fantasy-land/equals"]||"function"==typeof b["fantasy-land/equals"])return"function"==typeof a["fantasy-land/equals"]&&a["fantasy-land/equals"](b)&&"function"==typeof b["fantasy-land/equals"]&&b["fantasy-land/equals"](a);if("function"==typeof a.equals||"function"==typeof b.equals)return"function"==typeof a.equals&&a.equals(b)&&"function"==typeof b.equals&&b.equals(a);switch(typeA){case"Arguments":case"Array":case"Object":if("function"==typeof a.constructor&&"Promise"===function _functionName(f){var match=String(f).match(/^function (\w*)/);return null==match?"":match[1]}(a.constructor))return a===b;break;case"Boolean":case"Number":case"String":if(typeof a!=typeof b||!internal_objectIs(a.valueOf(),b.valueOf()))return!1;break;case"Date":if(!internal_objectIs(a.valueOf(),b.valueOf()))return!1;break;case"Error":return a.name===b.name&&a.message===b.message;case"RegExp":if(a.source!==b.source||a.global!==b.global||a.ignoreCase!==b.ignoreCase||a.multiline!==b.multiline||a.sticky!==b.sticky||a.unicode!==b.unicode)return!1}for(var idx=stackA.length-1;idx>=0;){if(stackA[idx]===a)return stackB[idx]===b;idx-=1}switch(typeA){case"Map":return a.size===b.size&&_uniqContentEquals(a.entries(),b.entries(),stackA.concat([a]),stackB.concat([b]));case"Set":return a.size===b.size&&_uniqContentEquals(a.values(),b.values(),stackA.concat([a]),stackB.concat([b]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var keysA=es_keys(a);if(keysA.length!==es_keys(b).length)return!1;var extendedStackA=stackA.concat([a]),extendedStackB=stackB.concat([b]);for(idx=keysA.length-1;idx>=0;){var key=keysA[idx];if(!(0,_has.Z)(key,b)||!_equals(b[key],a[key],extendedStackA,extendedStackB))return!1;idx-=1}return!0}const es_equals=(0,_curry2.Z)((function equals(a,b){return _equals(a,b,[],[])}));function _includes(a,list){return function _indexOf(list,a,idx){var inf,item;if("function"==typeof list.indexOf)switch(typeof a){case"number":if(0===a){for(inf=1/a;idx<list.length;){if(0===(item=list[idx])&&1/item===inf)return idx;idx+=1}return-1}if(a!=a){for(;idx<list.length;){if("number"==typeof(item=list[idx])&&item!=item)return idx;idx+=1}return-1}return list.indexOf(a,idx);case"string":case"boolean":case"function":case"undefined":return list.indexOf(a,idx);case"object":if(null===a)return list.indexOf(a,idx)}for(;idx<list.length;){if(es_equals(list[idx],a))return idx;idx+=1}return-1}(list,a,0)>=0}function hasOrAdd(item,shouldAdd,set){var prevSize,type=typeof item;switch(type){case"string":case"number":return 0===item&&1/item==-1/0?!!set._items["-0"]||(shouldAdd&&(set._items["-0"]=!0),!1):null!==set._nativeSet?shouldAdd?(prevSize=set._nativeSet.size,set._nativeSet.add(item),set._nativeSet.size===prevSize):set._nativeSet.has(item):type in set._items?item in set._items[type]||(shouldAdd&&(set._items[type][item]=!0),!1):(shouldAdd&&(set._items[type]={},set._items[type][item]=!0),!1);case"boolean":if(type in set._items){var bIdx=item?1:0;return!!set._items[type][bIdx]||(shouldAdd&&(set._items[type][bIdx]=!0),!1)}return shouldAdd&&(set._items[type]=item?[!1,!0]:[!0,!1]),!1;case"function":return null!==set._nativeSet?shouldAdd?(prevSize=set._nativeSet.size,set._nativeSet.add(item),set._nativeSet.size===prevSize):set._nativeSet.has(item):type in set._items?!!_includes(item,set._items[type])||(shouldAdd&&set._items[type].push(item),!1):(shouldAdd&&(set._items[type]=[item]),!1);case"undefined":return!!set._items[type]||(shouldAdd&&(set._items[type]=!0),!1);case"object":if(null===item)return!!set._items.null||(shouldAdd&&(set._items.null=!0),!1);default:return(type=Object.prototype.toString.call(item))in set._items?!!_includes(item,set._items[type])||(shouldAdd&&set._items[type].push(item),!1):(shouldAdd&&(set._items[type]=[item]),!1)}}const internal_Set=function(){function _Set(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return _Set.prototype.add=function(item){return!hasOrAdd(item,!0,this)},_Set.prototype.has=function(item){return hasOrAdd(item,!1,this)},_Set}();var _isArray=__webpack_require__("./node_modules/ramda/es/internal/_isArray.js");function _dispatchable(methodNames,transducerCreator,fn){return function(){if(0===arguments.length)return fn();var obj=arguments[arguments.length-1];if(!(0,_isArray.Z)(obj)){for(var idx=0;idx<methodNames.length;){if("function"==typeof obj[methodNames[idx]])return obj[methodNames[idx]].apply(obj,Array.prototype.slice.call(arguments,0,-1));idx+=1}if(function _isTransformer(obj){return null!=obj&&"function"==typeof obj["@@transducer/step"]}(obj))return transducerCreator.apply(null,Array.prototype.slice.call(arguments,0,-1))(obj)}return fn.apply(this,arguments)}}const _xfBase_init=function(){return this.xf["@@transducer/init"]()},_xfBase_result=function(result){return this.xf["@@transducer/result"](result)};var XUniqBy=function(){function XUniqBy(f,xf){this.xf=xf,this.f=f,this.set=new internal_Set}return XUniqBy.prototype["@@transducer/init"]=_xfBase_init,XUniqBy.prototype["@@transducer/result"]=_xfBase_result,XUniqBy.prototype["@@transducer/step"]=function(result,input){return this.set.add(this.f(input))?this.xf["@@transducer/step"](result,input):result},XUniqBy}();function _xuniqBy(f){return function(xf){return new XUniqBy(f,xf)}}const es_uniq=(0,_curry2.Z)(_dispatchable([],_xuniqBy,(function(fn,list){for(var appliedItem,item,set=new internal_Set,result=[],idx=0;idx<list.length;)appliedItem=fn(item=list[idx]),set.add(appliedItem)&&result.push(item),idx+=1;return result})))(es_identity)}}]);