import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as f}from"./loading-area-Bz7QugPc.js";import{H as j,T as p}from"./header-DDSqtIvq.js";import{R as u}from"./ReportProblem-BxW_9OXn.js";import{P as g}from"./placeholder-BLeJ8SXY.js";import{C as H}from"./content-DI9x824m.js";import{B as t}from"./Box-CohR-H6x.js";import{L}from"./LinearProgress-8-13sGHv.js";const s=()=>e.jsx(u,{color:"error",sx:{width:200,height:200}}),y=({loading:i,title:o,subtitle:d,slots:a,slotProps:n,children:m,fetching:c,error:r})=>{const h=(a==null?void 0:a.header)||j,x=(a==null?void 0:a.content)||H;return e.jsx(p,{children:e.jsxs(t,{display:"flex",flexDirection:"column",height:1,children:[e.jsx(h,{title:o,subtitle:d,...n==null?void 0:n.header}),c&&e.jsx(t,{width:1,children:e.jsx(L,{})}),i&&e.jsx(f,{}),r&&e.jsx(t,{mt:4,children:e.jsx(g,{icon:r.icon||s,title:r.title||"There has been an error",subtitle:r.message})}),!i&&!r&&e.jsx(x,{...n==null?void 0:n.content,children:m})]})})};y.__docgenInfo={description:"A layout component that provides a header and content area with optional loading, fetching, and error states.",methods:[],displayName:"HeaderLayout"};export{y as H};
