import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as R}from"./Close-scFSIpVJ.js";import{D as W,g as B,a as V,b as k,c as I}from"./DialogContent-Cr_M1Czr.js";import{r as g}from"./index-CFahbR6w.js";import{c as N}from"./generateUtilityClasses-F-VSJTCv.js";import{u as P}from"./DefaultPropsProvider-CoDhPOBZ.js";import{s as E,a as F}from"./memoTheme-DEu9pJpV.js";import{T as U}from"./Typography-ByJtF3w8.js";import{C as z}from"./CircularProgress-8aVj90tP.js";import{I as M}from"./IconButton-ez-CP-G1.js";import{B as _}from"./Box-CohR-H6x.js";import{B as f}from"./Button-CRc0Eyhl.js";const S=a=>{const{classes:t}=a;return F({root:["root"]},B,t)},G=E(U,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(a,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),H=g.forwardRef(function(t,i){const l=P({props:t,name:"MuiDialogTitle"}),{className:o,id:r,...d}=l,s=l,u=S(s),{titleId:c=r}=g.useContext(W);return e.jsx(G,{component:"h2",className:N(u.root,o),ownerState:s,ref:i,variant:"h6",id:r??c,...d})}),J=({open:a,title:t,component:i,componentProps:l={},disabled:o,disableAccept:r,disableCancel:d,actions:s=[],children:u,loading:c,cancelable:h,callCloseWhenCancel:y=!0,acceptable:p,acceptText:b="Accept",cancelText:T="Cancel",onAccept:x,onCancel:C=()=>null,onClose:m,acceptType:q="button"})=>{const v=s.length>0||p||h;return e.jsxs(V,{open:a,onClose:m,children:[e.jsxs(H,{sx:{display:"flex",alignItems:"center"},children:[t,c&&!p&&e.jsx(z,{size:20,sx:{ml:2,color:n=>n.palette.grey[500]}}),e.jsx(M,{disabled:o,"aria-label":"close",onClick:m,sx:{position:"absolute",right:8,top:8,color:n=>n.palette.grey[500]},children:e.jsx(R,{})})]}),e.jsxs(_,{component:i,...l,children:[e.jsx(k,{dividers:!0,children:u}),v&&e.jsxs(I,{children:[s.map(({id:n,text:D,type:j="button",onClick:w,color:A="primary"})=>e.jsx(f,{type:j,disabled:o,onClick:w,color:A,children:D},n)),h&&e.jsx(f,{color:"error",disabled:o||d,onClick:()=>{C(),y&&m()},children:T}),p&&e.jsx(f,{type:q,loading:c,disabled:o||r,onClick:x,children:b})]})]})]})};J.__docgenInfo={description:"A customizable dialog component. Use it as a base to create more dialogs",methods:[],displayName:"BootstrapDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the dialog is open."},title:{required:!0,tsType:{name:"string"},description:"The title of the dialog."},loading:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is in a loading state.
@default false`},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is disabled.
@default false`},disableAccept:{required:!1,tsType:{name:"boolean"},description:`Whether the accept button is disabled.
@default false`},disableCancel:{required:!1,tsType:{name:"boolean"},description:`Whether the cancel button is disabled.
@default false`},cancelable:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is cancelable.
@default true`},acceptable:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is acceptable.
@default true`},callCloseWhenCancel:{required:!1,tsType:{name:"boolean"},description:`Whether to call the onClose function when the cancel button is clicked.
@default true`,defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"Actions to be displayed in the dialog.",defaultValue:{value:"[]",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:`Text for the cancel button.
@default "Cancel"`,defaultValue:{value:'"Cancel"',computed:!1}},acceptText:{required:!1,tsType:{name:"string"},description:`Text for the accept button.
@default "Accept"`,defaultValue:{value:'"Accept"',computed:!1}},acceptType:{required:!1,tsType:{name:"union",raw:'"button" | "submit"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'}]},description:`Type of the accept button.
@default "button"`,defaultValue:{value:'"button"',computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the dialog is closed."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the cancel button is clicked.",defaultValue:{value:"() => null",computed:!1}},onAccept:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the accept button is clicked."},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Component to be rendered inside the dialog."},componentProps:{required:!1,tsType:{name:"any"},description:"Props to be passed to the component.",defaultValue:{value:"{}",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"ReactNode | undefined",elements:[{name:"ReactNode"},{name:"undefined"}]},description:"Children to be rendered inside the dialog."}}};export{J as B};
