import{r as b,a as L,j as e,c as G}from"./iframe-D9_KR-Vm.js";import{C as H}from"./Close-Dc_IoJrS.js";import{D as J,g as K,a as Q,b as X,c as Y}from"./DialogContent-BnPfe-VZ.js";import{s as Z,a as $}from"./memoTheme-CqkFtSQ1.js";import{T as P}from"./Typography-2wT6CWDx.js";import{B as y}from"./Box-Be92HNMn.js";import{C as ee}from"./CircularProgress-DXln3DRW.js";import{I as te}from"./IconButton-B1MZngJm.js";import{B as h}from"./Button-23wGEqNA.js";const ne=s=>{const{classes:a}=s;return $({root:["root"]},K,a)},oe=Z(P,{name:"MuiDialogTitle",slot:"Root"})({padding:"16px 24px",flex:"0 0 auto"}),ae=b.forwardRef(function(a,r){const c=L({props:a,name:"MuiDialogTitle"}),{className:o,id:d,...p}=c,i=c,m=ne(i),{titleId:u=d}=b.useContext(J);return e.jsx(oe,{component:"h2",className:G(m.root,o),ownerState:i,ref:r,variant:"h6",id:d??u,...p})});function ie({open:s,title:a,component:r,componentProps:c={},disabled:o,disableAccept:d,disableCancel:p,actions:i=[],children:m,loading:u,cancelable:C,callCloseWhenCancel:T=!0,acceptable:f,acceptText:x="Accept",cancelText:B="Cancel",onAccept:D,onCancel:q=()=>null,onClose:g,acceptType:A="button",slots:t,slotProps:n}){const v=i.length>0||f||C,j=t?.dialog??Q,w=t?.dialogTitle??ae,W=t?.titleContainer??y,I=t?.loadingIndicator??ee,R=t?.closeButton??te,V=t?.closeIcon??H,k=t?.contentWrapper??y,E=t?.dialogContent??X,N=t?.dialogActions??Y,S=t?.actionButton??h,z=t?.cancelButton??h,F=t?.acceptButton??h;return e.jsxs(j,{open:s,onClose:g,...n?.dialog,children:[e.jsxs(w,{sx:{display:"flex",alignItems:"center"},...n?.dialogTitle,children:[e.jsxs(W,{...n?.titleContainer,children:[a,u&&!f&&e.jsx(I,{size:20,sx:{ml:2,color:l=>l.palette.grey[500]},...n?.loadingIndicator})]}),e.jsx(R,{disabled:o,"aria-label":"close",onClick:g,sx:{position:"absolute",right:8,top:8,color:l=>l.palette.grey[500]},...n?.closeButton,children:e.jsx(V,{})})]}),e.jsxs(k,{component:r,...c,...n?.contentWrapper,children:[e.jsx(E,{dividers:!0,...n?.dialogContent,children:m}),v&&e.jsxs(N,{...n?.dialogActions,children:[i.map(({id:l,text:U,type:M="button",onClick:O,color:_="primary"})=>e.jsx(S,{type:M,disabled:o,onClick:O,color:_,...n?.actionButton,children:U},l)),C&&e.jsx(z,{color:"error",disabled:o||p,onClick:()=>{q(),T&&g()},...n?.cancelButton,children:B}),f&&e.jsx(F,{type:A,loading:u,disabled:o||d,onClick:D,...n?.acceptButton,children:x})]})]})]})}ie.__docgenInfo={description:`A customizable dialog component. Use it as a base to create more dialogs

Supports extensive customization through slots and slotProps.
Each internal element can be customized or replaced.

@example
\`\`\`tsx
// Basic usage
<BootstrapDialog
  open={true}
  title="Confirm Action"
  onClose={handleClose}
  acceptable
  cancelable
>
  Are you sure?
</BootstrapDialog>

// Custom close button
<BootstrapDialog
  title="Settings"
  slotProps={{
    closeButton: { color: 'error' }
  }}
/>
\`\`\``,methods:[],displayName:"BootstrapDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the dialog is open."},title:{required:!0,tsType:{name:"string"},description:"The title of the dialog."},loading:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is in a loading state.
@default false`},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is disabled.
@default false`},disableAccept:{required:!1,tsType:{name:"boolean"},description:`Whether the accept button is disabled.
@default false`},disableCancel:{required:!1,tsType:{name:"boolean"},description:`Whether the cancel button is disabled.
@default false`},cancelable:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is cancelable.
@default true`},acceptable:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is acceptable.
@default true`},callCloseWhenCancel:{required:!1,tsType:{name:"boolean"},description:`Whether to call the onClose function when the cancel button is clicked.
@default true`,defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"Actions to be displayed in the dialog.",defaultValue:{value:"[]",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:`Text for the cancel button.
@default "Cancel"`,defaultValue:{value:'"Cancel"',computed:!1}},acceptText:{required:!1,tsType:{name:"string"},description:`Text for the accept button.
@default "Accept"`,defaultValue:{value:'"Accept"',computed:!1}},acceptType:{required:!1,tsType:{name:"union",raw:'"button" | "submit"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'}]},description:`Type of the accept button.
@default "button"`,defaultValue:{value:'"button"',computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the dialog is closed."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the cancel button is clicked.",defaultValue:{value:"() => null",computed:!1}},onAccept:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the accept button is clicked."},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Component to be rendered inside the dialog."},componentProps:{required:!1,tsType:{name:"any"},description:"Props to be passed to the component.",defaultValue:{value:"{}",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"ReactNode | undefined",elements:[{name:"ReactNode"},{name:"undefined"}]},description:"Children to be rendered inside the dialog."},slots:{required:!1,tsType:{name:"BootstrapDialogSlots"},description:"Optional slots for custom rendering within the dialog"},slotProps:{required:!1,tsType:{name:"BootstrapDialogSlotProps"},description:"Optional props for the slots"}}};export{ie as B};
