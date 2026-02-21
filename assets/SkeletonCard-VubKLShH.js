import{r as w,f as C,j as r,i as k,o as m,p as f}from"./iframe-CnbMuzLM.js";import{B as x}from"./Box-Cw1nbHt1.js";import{g as S,a as R,b as $,s as j,m as U}from"./memoTheme-BsYj_Q0c.js";function M(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function T(e){return parseFloat(e)}function A(e){return S("MuiSkeleton",e)}R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const B=e=>{const{classes:t,variant:a,animation:n,hasChildren:s,width:o,height:i}=e;return $({root:["root",a,n,s&&"withChildren",s&&!o&&"fitContent",s&&!i&&"heightAuto"]},A,t)},p=m`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,d=m`
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
`,X=typeof p!="string"?f`
        animation: ${p} 2s ease-in-out 0.5s infinite;
      `:null,N=typeof d!="string"?f`
        &::after {
          animation: ${d} 2s linear 0.5s infinite;
        }
      `:null,V=j("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.animation!==!1&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(U(({theme:e})=>{const t=M(e.shape.borderRadius)||"px",a=T(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${t}/${Math.round(a/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:X||{animation:`${p} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:N||{"&::after":{animation:`${d} 2s linear 0.5s infinite`}}}]}})),l=w.forwardRef(function(t,a){const n=C({props:t,name:"MuiSkeleton"}),{animation:s="pulse",className:o,component:i="span",height:u,style:g,variant:v="text",width:y,...h}=n,c={...n,animation:s,component:i,variant:v,hasChildren:!!h.children},b=B(c);return r.jsx(V,{as:i,ref:a,className:k(b.root,o),ownerState:c,...h,style:{width:y,height:u,...g}})});function q({width:e="100%",animation:t=!1}){return r.jsxs(x,{width:e,children:[r.jsx(l,{animation:t,variant:"rectangular",height:118}),r.jsx(l,{animation:t,variant:"rectangular",height:16,sx:{my:1}}),r.jsx(l,{animation:t,variant:"rectangular",width:"80%",height:16})]})}q.__docgenInfo={description:"SkeletonCard component renders a skeleton loading placeholder for a card.",methods:[],displayName:"SkeletonCard",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:'The width of the skeleton card. Can be a number (interpreted as pixels) or a string (e.g., "100%", "50px").',defaultValue:{value:'"100%"',computed:!1}},animation:{required:!1,tsType:{name:"union",raw:'"pulse" | "wave" | false',elements:[{name:"literal",value:'"pulse"'},{name:"literal",value:'"wave"'},{name:"literal",value:"false"}]},description:'The animation style for the skeleton card. Can be "pulse", "wave", or false to disable animation.',defaultValue:{value:"false",computed:!1}}}};export{q as S};
