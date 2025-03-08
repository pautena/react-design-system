import{R as w,r as g}from"./index-CFahbR6w.js";import{g as U,a as E,c as N,e as n}from"./identifier-ChVxdG4r.js";import{u as F,s as v,a as z,m as $}from"./memoTheme-kZCwlU27.js";import{c as A}from"./createSimplePaletteValueFilter-BX9OVMun.js";import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{c as R,k as D}from"./emotion-react.browser.esm-C1MoURgL.js";let S=0;function G(e){const[r,s]=g.useState(e),a=e||r;return g.useEffect(()=>{r==null&&(S+=1,s(`mui-${S}`))},[r]),a}const K={...w},b=K.useId;function O(e){if(b!==void 0){const r=b();return e??r}return G(e)}function V(e){return E("MuiCircularProgress",e)}const rr=U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]),t=44,y=D`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=D`
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
`,B=typeof y!="string"?R`
        animation: ${y} 1.4s linear infinite;
      `:null,T=typeof h!="string"?R`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,W=e=>{const{classes:r,variant:s,color:a,disableShrink:c}=e,l={root:["root",s,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,c&&"circleDisableShrink"]};return z(l,V,r)},Z=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${n(s.color)}`]]}})($(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:B||{animation:`${y} 1.4s linear infinite`}},...Object.entries(e.palette).filter(A()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),q=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),H=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${n(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})($(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:T||{animation:`${h} 1.4s ease-in-out infinite`}}]}))),er=g.forwardRef(function(r,s){const a=F({props:r,name:"MuiCircularProgress"}),{className:c,color:l="primary",disableShrink:I=!1,size:u=40,style:M,thickness:o=3.6,value:m=0,variant:k="indeterminate",...j}=a,i={...a,color:l,disableShrink:I,size:u,thickness:o,value:m,variant:k},p=W(i),f={},x={},C={};if(k==="determinate"){const P=2*Math.PI*((t-o)/2);f.strokeDasharray=P.toFixed(3),C["aria-valuenow"]=Math.round(m),f.strokeDashoffset=`${((100-m)/100*P).toFixed(3)}px`,x.transform="rotate(-90deg)"}return d.jsx(Z,{className:N(p.root,c),style:{width:u,height:u,...x,...M},ownerState:i,ref:s,role:"progressbar",...C,...j,children:d.jsx(q,{className:p.svg,ownerState:i,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:d.jsx(H,{className:p.circle,style:f,ownerState:i,cx:t,cy:t,r:(t-o)/2,fill:"none",strokeWidth:o})})})});export{er as C,rr as c,O as u};
