import{r as N,j as e}from"./iframe-BOp0KoHw.js";import{S as W}from"./storybook-Do16VOkD.js";import{T as R}from"./text-field-eAVdC3Vq.js";import{B as v}from"./button-CeFxFZak.js";import{c as d}from"./utils-BFne8Zvq.js";import{a as V}from"./useRenderElement-Bx6ca6GP.js";import{h as $,i as B,j as M,k as E,a as F,b as H,c as J,d as X,e as G,f as K}from"./DialogTitle-B9dNSudn.js";import{X as Q}from"./x-C2irfWeI.js";import{L as U}from"./loader-circle-qQxEsC5F.js";function Y(a){const{children:t,open:o,defaultOpen:l=!1,onOpenChange:r,onOpenChangeComplete:s,actionsRef:c,handle:h,triggerId:x,defaultTriggerId:D=null}=a,u=$(),C=!!u,n=V(()=>h?.store??new E({open:l,openProp:o,activeTriggerId:D,triggerIdProp:x,modal:!0,disablePointerDismissal:!0,nested:C,role:"alertdialog"})).current;n.useControlledProp("openProp",o),n.useControlledProp("triggerIdProp",x),n.useSyncedValue("nested",C),n.useContextCallback("onOpenChange",r),n.useContextCallback("onOpenChangeComplete",s);const y=n.useState("payload");B({store:n,actionsRef:c,parentContext:u?.store.context});const b=N.useMemo(()=>({store:n}),[n]);return e.jsx(M.Provider,{value:b,children:typeof t=="function"?t({payload:y}):t})}function A({...a}){return e.jsx(Y,{"data-slot":"alert-dialog",...a})}function O({...a}){return e.jsx(G,{"data-slot":"alert-dialog-portal",...a})}function P({className:a,...t}){return e.jsx(K,{"data-slot":"alert-dialog-overlay",className:d("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs",a),...t})}function z({className:a,size:t="default",...o}){return e.jsxs(O,{children:[e.jsx(P,{}),e.jsx(F,{"data-slot":"alert-dialog-content","data-size":t,className:d("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-background ring-foreground/10 group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-6 rounded-xl p-6 ring-1 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-lg",a),...o})]})}function I({className:a,...t}){return e.jsx("div",{"data-slot":"alert-dialog-header",className:d("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",a),...t})}function w({className:a,...t}){return e.jsx("div",{"data-slot":"alert-dialog-footer",className:d("flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",a),...t})}function S({className:a,...t}){return e.jsx(J,{"data-slot":"alert-dialog-title",className:d("text-lg font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",a),...t})}function q({className:a,...t}){return e.jsx(X,{"data-slot":"alert-dialog-description",className:d("text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3",a),...t})}function k({className:a,...t}){return e.jsx(v,{"data-slot":"alert-dialog-action",className:d(a),...t})}function _({className:a,variant:t="outline",size:o="default",...l}){return e.jsx(H,{"data-slot":"alert-dialog-cancel",className:d(a),render:e.jsx(v,{variant:t,size:o}),...l})}A.__docgenInfo={description:"",methods:[],displayName:"AlertDialog"};k.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction"};_.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};z.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent",props:{size:{required:!1,tsType:{name:"union",raw:'"default" | "sm"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};q.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};w.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};I.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};P.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};O.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"};S.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};function T({open:a,title:t,loading:o=!1,disabled:l=!1,confirmText:r="Confirm",cancelText:s="Cancel",passphrase:c,children:h,onConfirm:x,onCancel:D}){const[u,C]=N.useState(""),n=!c||u===c,y=l||o,b=l||o,L=l||o||!n;return e.jsx(A,{open:a,onOpenChange:j=>{j||D()},children:e.jsxs(z,{className:"sm:max-w-md",children:[e.jsx("div",{className:"absolute right-4 top-4",children:e.jsx(_,{variant:"ghost",size:"icon-sm","aria-label":"close",disabled:y,children:e.jsx(Q,{className:"h-4 w-4","aria-hidden":"true"})})}),e.jsxs(I,{children:[e.jsx(S,{children:t}),h?e.jsx(q,{children:h}):null]}),c?e.jsx(R,{label:"Passphrase",placeholder:c,value:u,onChange:j=>C(j.target.value),fullWidth:!0,size:"small"}):null,e.jsxs(w,{children:[e.jsx(_,{disabled:b,children:s}),e.jsx(k,{onClick:x,disabled:L,children:o?e.jsxs("span",{className:"inline-flex items-center gap-2",children:[e.jsx(U,{role:"progressbar","aria-label":"loading",className:"h-4 w-4 animate-spin"}),r]}):r})]})]})})}T.__docgenInfo={description:"Confirm dialog for destructive or critical actions.",methods:[],displayName:"ConfirmDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the dialog is open."},title:{required:!0,tsType:{name:"string"},description:"Dialog title."},loading:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is in a loading state.
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},confirmText:{required:!1,tsType:{name:"string"},description:`Text to display on the confirm button.
@default "Confirm"`,defaultValue:{value:'"Confirm"',computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:`Text to display on the cancel button.
@default "Cancel"`,defaultValue:{value:'"Cancel"',computed:!1}},passphrase:{required:!1,tsType:{name:"string"},description:"Optional passphrase for additional confirmation."},children:{required:!1,tsType:{name:"ReactNode"},description:"Optional content rendered inside the dialog."},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to handle cancel action."},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to handle confirm action."}}};const Z={title:"Dialogs/ConfirmDialog",component:T,parameters:{layout:"centered",docs:{source:{transform:(a,t)=>{const{args:o}=t;return`<ConfirmDialog
  ${Object.entries(o).filter(([r])=>r!=="children").map(([r,s])=>typeof s=="boolean"&&s===!0?r:typeof s=="string"?`${r}="${s}"`:typeof s=="function"?`${r}={${r}}`:`${r}={${JSON.stringify(s)}}`).filter(Boolean).join(`
  `)}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
>
  {children}
</ConfirmDialog>`}}}},argTypes:{open:{description:"Whether the dialog is open."},title:{description:"The title of the dialog."},loading:{description:"Whether the dialog is in a loading state."},disabled:{description:"Whether the dialog is disabled."},children:{description:"Children to be rendered inside the dialog."}},render:a=>e.jsx(W,{component:T,args:a})},i={args:{open:!0,title:"Lorem ipsum",children:e.jsx("span",{className:"text-sm text-muted-foreground",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}};i.parameters={docs:{source:{code:`import { useState } from 'react';
import { ConfirmDialog } from '@pautena/react-design-system';

function MyComponent() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Confirm Dialog</button>
      <ConfirmDialog
        open={open}
        title="Lorem ipsum"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to proceed?</p>
      </ConfirmDialog>
    </>
  );
}`}}};const p={args:{...i.args,loading:!0}},m={args:{...i.args,disabled:!0}},g={args:{...i.args,confirmText:"Create token",cancelText:"Don't create a token"}},f={args:{title:"Lorem ipsum",children:e.jsx("span",{className:"text-sm text-muted-foreground",children:"Write the passphrase to confirm your action"}),passphrase:"delete permanently"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: "Lorem ipsum",
    children: <span className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    confirmText: "Create token",
    cancelText: "Don't create a token"
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    children: <span className="text-sm text-muted-foreground">
        Write the passphrase to confirm your action
      </span>,
    passphrase: "delete permanently"
  }
}`,...f.parameters?.docs?.source}}};const ee=["Default","Loading","Disabled","CustomButtonText","Passphrase"],ce=Object.freeze(Object.defineProperty({__proto__:null,CustomButtonText:g,Default:i,Disabled:m,Loading:p,Passphrase:f,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{T as C,i as D,ce as c};
