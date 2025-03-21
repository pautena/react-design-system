import{r as j}from"./index-CFahbR6w.js";import{g as R,a as q,c as O}from"./generateUtilityClasses-D-SxHVPw.js";import{u as z}from"./index-DDS9h_yT.js";import{s as b,a as M,m}from"./memoTheme-DMhdsnBH.js";import{c as l}from"./createSimplePaletteValueFilter-BX9OVMun.js";import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{u as N}from"./DefaultPropsProvider-CoDhPOBZ.js";import{c as t,l as D,b as w}from"./identifier-BgYKR63G.js";import{c as P,k as $}from"./emotion-react.browser.esm-zxExLa5N.js";function A(e){return q("MuiLinearProgress",e)}const er=R("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]),v=4,y=$`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,S=typeof y!="string"?P`
        animation: ${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,C=$`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,T=typeof C!="string"?P`
        animation: ${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,h=$`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,U=typeof h!="string"?P`
        animation: ${h} 3s infinite linear;
      `:null,K=e=>{const{classes:r,variant:a,color:o}=e,d={root:["root",`color${t(o)}`,a],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar","bar1",`barColor${t(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",a!=="buffer"&&`barColor${t(o)}`,a==="buffer"&&`color${t(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return M(d,A,r)},k=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?D(e.palette[r].main,.62):w(e.palette[r].main,.5),E=b("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[`color${t(a.color)}`],r[a.variant]]}})(m(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(l()).map(([r])=>({props:{color:r},style:{backgroundColor:k(e,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),X=b("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.dashed,r[`dashedColor${t(a.color)}`]]}})(m(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(l()).map(([r])=>{const a=k(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}})]})),U||{animation:`${h} 3s infinite linear`}),F=b("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r.bar1,r[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar1Indeterminate,a.variant==="determinate"&&r.bar1Determinate,a.variant==="buffer"&&r.bar1Buffer]}})(m(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(l()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${v}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${v}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:S||{animation:`${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),V=b("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r.bar2,r[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar2Indeterminate,a.variant==="buffer"&&r.bar2Buffer]}})(m(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(l()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(l()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:k(e,r),transition:`transform .${v}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:T||{animation:`${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),ar=j.forwardRef(function(r,a){const o=N({props:r,name:"MuiLinearProgress"}),{className:d,color:B="primary",value:g,valueBuffer:x,variant:i="indeterminate",...I}=o,s={...o,color:B,variant:i},f=K(s),L=z(),p={},c={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&g!==void 0){p["aria-valuenow"]=Math.round(g),p["aria-valuemin"]=0,p["aria-valuemax"]=100;let n=g-100;L&&(n=-n),c.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&x!==void 0){let n=(x||0)-100;L&&(n=-n),c.bar2.transform=`translateX(${n}%)`}return u.jsxs(E,{className:O(f.root,d),ownerState:s,role:"progressbar",...p,ref:a,...I,children:[i==="buffer"?u.jsx(X,{className:f.dashed,ownerState:s}):null,u.jsx(F,{className:f.bar1,ownerState:s,style:c.bar1}),i==="determinate"?null:u.jsx(V,{className:f.bar2,ownerState:s,style:c.bar2})]})});export{ar as L,er as l};
