"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[4743],{"./node_modules/@mui/material/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Link_Link});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),useIsFocusVisible=__webpack_require__("./node_modules/@mui/material/utils/useIsFocusVisible.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getLinkUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiLink",slot)}const Link_linkClasses=(0,generateUtilityClasses.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var style=__webpack_require__("./node_modules/@mui/system/esm/style.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js");const colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Link_getTextDecoration=({theme,ownerState})=>{const transformedColor=(color=>colorTransformations[color]||color)(ownerState.color),color=(0,style.DW)(theme,`palette.${transformedColor}`,!1)||ownerState.color,channelColor=(0,style.DW)(theme,`palette.${transformedColor}Channel`);return"vars"in theme&&channelColor?`rgba(${channelColor} / 0.4)`:(0,colorManipulator.Fq)(color,.4)};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],LinkRoot=(0,styled.ZP)(Typography.Z,{name:"MuiLink",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`underline${(0,capitalize.Z)(ownerState.underline)}`],"button"===ownerState.component&&styles.button]}})((({theme,ownerState})=>(0,esm_extends.Z)({},"none"===ownerState.underline&&{textDecoration:"none"},"hover"===ownerState.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===ownerState.underline&&(0,esm_extends.Z)({textDecoration:"underline"},"inherit"!==ownerState.color&&{textDecorationColor:Link_getTextDecoration({theme,ownerState})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===ownerState.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Link_linkClasses.focusVisible}`]:{outline:"auto"}}))),Link_Link=react.forwardRef((function Link(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiLink"}),{className,color="primary",component="a",onBlur,onFocus,TypographyClasses,underline="always",variant="inherit",sx}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{isFocusVisibleRef,onBlur:handleBlurVisible,onFocus:handleFocusVisible,ref:focusVisibleRef}=(0,useIsFocusVisible.Z)(),[focusVisible,setFocusVisible]=react.useState(!1),handlerRef=(0,useForkRef.Z)(ref,focusVisibleRef),ownerState=(0,esm_extends.Z)({},props,{color,component,focusVisible,underline,variant}),classes=(ownerState=>{const{classes,component,focusVisible,underline}=ownerState,slots={root:["root",`underline${(0,capitalize.Z)(underline)}`,"button"===component&&"button",focusVisible&&"focusVisible"]};return(0,composeClasses.Z)(slots,getLinkUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(LinkRoot,(0,esm_extends.Z)({color,className:(0,clsx_m.Z)(classes.root,className),classes:TypographyClasses,component,onBlur:event=>{handleBlurVisible(event),!1===isFocusVisibleRef.current&&setFocusVisible(!1),onBlur&&onBlur(event)},onFocus:event=>{handleFocusVisible(event),!0===isFocusVisibleRef.current&&setFocusVisible(!0),onFocus&&onFocus(event)},ref:handlerRef,ownerState,variant,sx:[...Object.keys(colorTransformations).includes(color)?[]:[{color}],...Array.isArray(sx)?sx:[sx]]},other))}))},"./node_modules/markdown-to-jsx/dist/index.modern.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function n(){return n=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},n.apply(this,arguments)}const e=["children","options"],r=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((t,n)=>(t[n.toLowerCase()]=n,t)),{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},c=["style","script"],a=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,_=/mailto:/i,u=/\n{2,}$/,i=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,l=/^ *> ?/gm,s=/^ {2,}\n/,f=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,d=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,p=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,m=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,g=/^(?:\n *)*\n/,y=/\r\n?/g,h=/^\[\^([^\]]+)](:.*)\n/,k=/^\[\^([^\]]+)]/,x=/\f/g,b=/^\s*?\[(x|\s)\]/,v=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,$=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,S=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,z=/&([a-zA-Z]+);/g,w=/^<!--[\s\S]*?(?:-->)/,A=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,E=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,L=/^\{.*\}$/,M=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,I=/^<([^ >]+@[^ >]+)>/,O=/^<([^ >]+:\/[^ >]+)>/,B=/-([a-z])?/gi,R=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,T=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,j=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,C=/^\[([^\]]*)\] ?\[([^\]]*)\]/,D=/(\[|\])/g,N=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Z=/\t/g,F=/^ *\| */,P=/(^ *\||\| *$)/g,G=/ *$/,H=/^ *:-+: *$/,q=/^ *:-+ *$/,U=/^ *-+: *$/,V=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,W=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,Q=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,X=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,J=/^\\([^0-9A-Za-z\s])/,K=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,Y=/^\n+/,tt=/^([ \t]*)/,nt=/\\([^\\])/g,et=/ *\n+$/,rt=/(?:^|\n)( *)$/,ot="(?:\\d+\\.)",ct="(?:[*+-])";function at(t){return"( *)("+(1===t?ot:ct)+") +"}const _t=at(1),ut=at(2);function it(t){return new RegExp("^"+(1===t?_t:ut))}const lt=it(1),st=it(2);function ft(t){return new RegExp("^"+(1===t?_t:ut)+"[^\\n]*(?:\\n(?!\\1"+(1===t?ot:ct)+" )[^\\n]*)*(\\n|$)","gm")}const dt=ft(1),pt=ft(2);function mt(t){const n=1===t?ot:ct;return new RegExp("^( *)("+n+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+n+" (?!"+n+" ))\\n*|\\s*\\n*$)")}const gt=mt(1),yt=mt(2);function ht(t,n){const e=1===n,r=e?gt:yt,o=e?dt:pt,c=e?lt:st;return{t(t,n,e){const o=rt.exec(e);return o&&(n.o||!n._&&!n.u)?r.exec(t=o[1]+t):null},i:Gt.HIGH,l(t,n,r){const a=e?+t[2]:void 0,_=t[0].replace(u,"\n").match(o);let i=!1;return{p:_.map((function(t,e){const o=c.exec(t)[0].length,a=new RegExp("^ {1,"+o+"}","gm"),u=t.replace(a,"").replace(c,""),l=e===_.length-1,s=-1!==u.indexOf("\n\n")||l&&i;i=s;const f=r._,d=r.o;let p;r.o=!0,s?(r._=!1,p=u.replace(et,"\n\n")):(r._=!0,p=u.replace(et,""));const m=n(p,r);return r._=f,r.o=d,m})),m:e,g:a}},h:(n,e,r)=>t(n.m?"ol":"ul",{key:r.k,start:n.g},n.p.map((function(n,o){return t("li",{key:o},e(n,r))})))}}const kt=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,xt=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,bt=[i,d,p,v,$,w,R,dt,gt,pt,yt],vt=[...bt,/^[^\n]+(?:  \n|\n{2,})/,S,E];function $t(t){return t.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function St(t){return U.test(t)?"right":H.test(t)?"center":q.test(t)?"left":null}function zt(t,n,e){const r=e.v;e.v=!0;const o=n(t.trim(),e);e.v=r;let c=[[]];return o.forEach((function(t,n){"tableSeparator"===t.type?0!==n&&n!==o.length-1&&c.push([]):("text"!==t.type||null!=o[n+1]&&"tableSeparator"!==o[n+1].type||(t.$=t.$.replace(G,"")),c[c.length-1].push(t))})),c}function wt(t,n,e){e._=!0;const r=zt(t[1],n,e),o=t[2].replace(P,"").split("|").map(St),c=function(t,n,e){return t.trim().split("\n").map((function(t){return zt(t,n,e)}))}(t[3],n,e);return e._=!1,{S:o,A:c,L:r,type:"table"}}function At(t,n){return null==t.S[n]?{}:{textAlign:t.S[n]}}function Et(t){return function(n,e){return e._?t.exec(n):null}}function Lt(t){return function(n,e){return e._||e.u?t.exec(n):null}}function Mt(t){return function(n,e){return e._||e.u?null:t.exec(n)}}function It(t){return function(n){return t.exec(n)}}function Ot(t,n,e){if(n._||n.u)return null;if(e&&!e.endsWith("\n"))return null;let r="";t.split("\n").every((t=>!bt.some((n=>n.test(t)))&&(r+=t+"\n",t.trim())));const o=r.trimEnd();return""==o?null:[r,o]}function Bt(t){try{if(decodeURIComponent(t).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(t){return null}return t}function Rt(t){return t.replace(nt,"$1")}function Tt(t,n,e){const r=e._||!1,o=e.u||!1;e._=!0,e.u=!0;const c=t(n,e);return e._=r,e.u=o,c}function jt(t,n,e){const r=e._||!1,o=e.u||!1;e._=!1,e.u=!0;const c=t(n,e);return e._=r,e.u=o,c}function Ct(t,n,e){return e._=!1,t(n+"\n\n",e)}const Dt=(t,n,e)=>({$:Tt(n,t[1],e)});function Nt(){return{}}function Zt(){return null}function Ft(...t){return t.filter(Boolean).join(" ")}function Pt(t,n,e){let r=t;const o=n.split(".");for(;o.length&&(r=r[o[0]],void 0!==r);)o.shift();return r||e}var Gt,t;function Ht(e,u={}){u.overrides=u.overrides||{},u.slugify=u.slugify||$t,u.namedCodesToUnicode=u.namedCodesToUnicode?n({},o,u.namedCodesToUnicode):o;const P=u.createElement||react__WEBPACK_IMPORTED_MODULE_0__.createElement;function G(t,e,...r){const o=Pt(u.overrides,`${t}.props`,{});return P(function(t,n){const e=Pt(n,t);return e?"function"==typeof e||"object"==typeof e&&"render"in e?e:Pt(n,`${t}.component`,t):t}(t,u.overrides),n({},e,o,{className:Ft(null==e?void 0:e.className,o.className)||void 0}),...r)}function H(n){let e=!1;u.forceInline?e=!0:u.forceBlock||(e=!1===N.test(n));const r=ot(rt(e?n:`${n.trimEnd().replace(Y,"")}\n\n`,{_:e}));for(;"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===u.wrapper)return r;const o=u.wrapper||(e?"span":"div");let c;if(r.length>1||u.forceWrapper)c=r;else{if(1===r.length)return c=r[0],"string"==typeof c?G("span",{key:"outer"},c):c;c=null}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(o,{key:"outer"},c)}function q(n){const e=n.match(a);return e?e.reduce((function(n,e,o){const c=e.indexOf("=");if(-1!==c){const a=(t=e.slice(0,c),-1!==t.indexOf("-")&&null===t.match(A)&&(t=t.replace(B,(function(t,n){return n.toUpperCase()}))),t).trim(),_=function(t){const n=t[0];return('"'===n||"'"===n)&&t.length>=2&&t[t.length-1]===n?t.slice(1,-1):t}(e.slice(c+1).trim()),u=r[a]||a,i=n[u]=function(t,n){return"style"===t?n.split(/;\s?/).reduce((function(t,n){const e=n.slice(0,n.indexOf(":"));return t[e.replace(/(-[a-z])/g,(t=>t[1].toUpperCase()))]=n.slice(e.length+1).trim(),t}),{}):"href"===t?Bt(n):(n.match(L)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(a,_);"string"==typeof i&&(S.test(i)||E.test(i))&&(n[u]=react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(H(i.trim()),{key:o}))}else"style"!==e&&(n[r[e]||e]=!0);var t;return n}),{}):null}const U=[],nt={},et={blockQuote:{t:Mt(i),i:Gt.HIGH,l:(t,n,e)=>({$:n(t[0].replace(l,""),e)}),h:(t,n,e)=>G("blockquote",{key:e.k},n(t.$,e))},breakLine:{t:It(s),i:Gt.HIGH,l:Nt,h:(t,n,e)=>G("br",{key:e.k})},breakThematic:{t:Mt(f),i:Gt.HIGH,l:Nt,h:(t,n,e)=>G("hr",{key:e.k})},codeBlock:{t:Mt(p),i:Gt.MAX,l:t=>({$:t[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}),h:(t,e,r)=>G("pre",{key:r.k},G("code",n({},t.I,{className:t.M?`lang-${t.M}`:""}),t.$))},codeFenced:{t:Mt(d),i:Gt.MAX,l:t=>({I:q(t[3]||""),$:t[4],M:t[2]||void 0,type:"codeBlock"})},codeInline:{t:Lt(m),i:Gt.LOW,l:t=>({$:t[2]}),h:(t,n,e)=>G("code",{key:e.k},t.$)},footnote:{t:Mt(h),i:Gt.MAX,l:t=>(U.push({O:t[2],B:t[1]}),{}),h:Zt},footnoteReference:{t:Et(k),i:Gt.HIGH,l:t=>({$:t[1],R:`#${u.slugify(t[1])}`}),h:(t,n,e)=>G("a",{key:e.k,href:Bt(t.R)},G("sup",{key:e.k},t.$))},gfmTask:{t:Et(b),i:Gt.HIGH,l:t=>({T:"x"===t[1].toLowerCase()}),h:(t,n,e)=>G("input",{checked:t.T,key:e.k,readOnly:!0,type:"checkbox"})},heading:{t:Mt(v),i:Gt.HIGH,l:(t,n,e)=>({$:Tt(n,t[2],e),j:u.slugify(t[2]),C:t[1].length}),h:(t,n,e)=>G(`h${t.C}`,{id:t.j,key:e.k},n(t.$,e))},headingSetext:{t:Mt($),i:Gt.MAX,l:(t,n,e)=>({$:Tt(n,t[1],e),C:"="===t[2]?1:2,type:"heading"})},htmlComment:{t:It(w),i:Gt.HIGH,l:()=>({}),h:Zt},image:{t:Lt(xt),i:Gt.HIGH,l:t=>({D:t[1],R:Rt(t[2]),N:t[3]}),h:(t,n,e)=>G("img",{key:e.k,alt:t.D||void 0,title:t.N||void 0,src:Bt(t.R)})},link:{t:Et(kt),i:Gt.LOW,l:(t,n,e)=>({$:jt(n,t[1],e),R:Rt(t[2]),N:t[3]}),h:(t,n,e)=>G("a",{key:e.k,href:Bt(t.R),title:t.N},n(t.$,e))},linkAngleBraceStyleDetector:{t:Et(O),i:Gt.MAX,l:t=>({$:[{$:t[1],type:"text"}],R:t[1],type:"link"})},linkBareUrlDetector:{t:(t,n)=>n.Z?null:Et(M)(t,n),i:Gt.MAX,l:t=>({$:[{$:t[1],type:"text"}],R:t[1],N:void 0,type:"link"})},linkMailtoDetector:{t:Et(I),i:Gt.MAX,l(t){let n=t[1],e=t[1];return _.test(e)||(e="mailto:"+e),{$:[{$:n.replace("mailto:",""),type:"text"}],R:e,type:"link"}}},orderedList:ht(G,1),unorderedList:ht(G,2),newlineCoalescer:{t:Mt(g),i:Gt.LOW,l:Nt,h:()=>"\n"},paragraph:{t:Ot,i:Gt.LOW,l:Dt,h:(t,n,e)=>G("p",{key:e.k},n(t.$,e))},ref:{t:Et(T),i:Gt.MAX,l:t=>(nt[t[1]]={R:t[2],N:t[4]},{}),h:Zt},refImage:{t:Lt(j),i:Gt.MAX,l:t=>({D:t[1]||void 0,F:t[2]}),h:(t,n,e)=>G("img",{key:e.k,alt:t.D,src:Bt(nt[t.F].R),title:nt[t.F].N})},refLink:{t:Et(C),i:Gt.MAX,l:(t,n,e)=>({$:n(t[1],e),P:n(t[0].replace(D,"\\$1"),e),F:t[2]}),h:(t,n,e)=>nt[t.F]?G("a",{key:e.k,href:Bt(nt[t.F].R),title:nt[t.F].N},n(t.$,e)):G("span",{key:e.k},n(t.P,e))},table:{t:Mt(R),i:Gt.HIGH,l:wt,h:(t,n,e)=>G("table",{key:e.k},G("thead",null,G("tr",null,t.L.map((function(r,o){return G("th",{key:o,style:At(t,o)},n(r,e))})))),G("tbody",null,t.A.map((function(r,o){return G("tr",{key:o},r.map((function(r,o){return G("td",{key:o,style:At(t,o)},n(r,e))})))}))))},tableSeparator:{t:function(t,n){return n.v?F.exec(t):null},i:Gt.HIGH,l:function(){return{type:"tableSeparator"}},h:()=>" | "},text:{t:It(K),i:Gt.MIN,l:t=>({$:t[0].replace(z,((t,n)=>u.namedCodesToUnicode[n]?u.namedCodesToUnicode[n]:t))}),h:t=>t.$},textBolded:{t:Lt(V),i:Gt.MED,l:(t,n,e)=>({$:n(t[2],e)}),h:(t,n,e)=>G("strong",{key:e.k},n(t.$,e))},textEmphasized:{t:Lt(W),i:Gt.LOW,l:(t,n,e)=>({$:n(t[2],e)}),h:(t,n,e)=>G("em",{key:e.k},n(t.$,e))},textEscaped:{t:Lt(J),i:Gt.HIGH,l:t=>({$:t[1],type:"text"})},textMarked:{t:Lt(Q),i:Gt.LOW,l:Dt,h:(t,n,e)=>G("mark",{key:e.k},n(t.$,e))},textStrikethroughed:{t:Lt(X),i:Gt.LOW,l:Dt,h:(t,n,e)=>G("del",{key:e.k},n(t.$,e))}};!0!==u.disableParsingRawHTML&&(et.htmlBlock={t:It(S),i:Gt.HIGH,l(t,n,e){const[,r]=t[3].match(tt),o=new RegExp(`^${r}`,"gm"),a=t[3].replace(o,""),_=(u=a,vt.some((t=>t.test(u)))?Ct:Tt);var u;const i=t[1].toLowerCase(),l=-1!==c.indexOf(i);e.Z=e.Z||"a"===i;const s=l?t[3]:_(n,a,e);return e.Z=!1,{I:q(t[2]),$:s,G:l,H:l?i:t[1]}},h:(t,e,r)=>G(t.H,n({key:r.k},t.I),t.G?t.$:e(t.$,r))},et.htmlSelfClosing={t:It(E),i:Gt.HIGH,l:t=>({I:q(t[2]||""),H:t[1]}),h:(t,e,r)=>G(t.H,n({},t.I,{key:r.k}))});const rt=function(t){let n=Object.keys(t);function e(r,o){let c=[],a="";for(;r;){let _=0;for(;_<n.length;){const u=n[_],i=t[u],l=i.t(r,o,a);if(l){const t=l[0];r=r.substring(t.length);const n=i.l(l,e,o);null==n.type&&(n.type=u),c.push(n),a=t;break}_++}}return c}return n.sort((function(n,e){let r=t[n].i,o=t[e].i;return r!==o?r-o:n<e?-1:1})),function(t,n){return e(function(t){return t.replace(y,"\n").replace(x,"").replace(Z,"    ")}(t),n)}}(et),ot=(t=et,ct=function(n,e,r){return t[n.type].h(n,e,r)},function t(n,e={}){if(Array.isArray(n)){const r=e.k,o=[];let c=!1;for(let r=0;r<n.length;r++){e.k=r;const a=t(n[r],e),_="string"==typeof a;_&&c?o[o.length-1]+=a:null!==a&&o.push(a),c=_}return e.k=r,o}return ct(n,t,e)});var t,ct;const at=H(e);return U.length?G("div",null,at,G("footer",{key:"footer"},U.map((function(t){return G("div",{id:u.slugify(t.B),key:t.B},t.B,ot(rt(t.O,{_:!0})))})))):at}(t=Gt||(Gt={}))[t.MAX=0]="MAX",t[t.HIGH=1]="HIGH",t[t.MED=2]="MED",t[t.LOW=3]="LOW",t[t.MIN=4]="MIN";const __WEBPACK_DEFAULT_EXPORT__=n=>{let{children:r,options:o}=n,c=function(t,n){if(null==t)return{};var e,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n.indexOf(e=c[r])>=0||(o[e]=t[e]);return o}(n,e);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(Ht(r,o),c)}}}]);