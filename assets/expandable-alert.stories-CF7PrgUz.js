import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-C8GoqKMl.js";import{B as c}from"./button-C4FGKLek.js";import{w as u}from"./storybook-Dr9sP6fi.js";import{E as n}from"./expandable-alert-qcESTK1i.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CqmGLEkD.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./useRenderElement-B98N9jJg.js";import"./notification-center-provider-BkXpd-S-.js";import"./index-Ilw0fZRU.js";import"./index-BtdLg3S9.js";import"./loader-circle-BdDYgNFh.js";import"./createLucideIcon-zSeE5OCt.js";import"./triangle-alert-Cki19iAl.js";import"./sidebar-DAaa7t-4.js";import"./DirectionContext-qIuXBF4_.js";import"./inertValue-2mOOpLpY.js";import"./x-Dv0RtamN.js";import"./DialogTitle-BnuiqYCT.js";import"./index-DYiUusy3.js";import"./useRender-D-Hu_BU4.js";import"./board-CUhqVCRk.js";import"./collapsible-BsKSk76a.js";import"./useCollapsiblePanel-BkJUEMfL.js";import"./chevron-up-DZ-9lDWb.js";import"./chevron-down-BVoY5dIV.js";const H={title:"Alerts/ExpandableAlert",component:n,decorators:[u({width:500})],parameters:{layout:"centered"}},s={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]}},o={args:{...s.args,severity:"success"}},a={args:{...s.args,severity:"error"}},m={args:{...s.args,severity:"warning"}},i={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet"}},r=()=>e.jsx(n,{severity:"info",onClose:()=>null,title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"],metadataComponent:e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsx("div",{className:"font-semibold",children:"lorem: ipsum"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"foo: bar"}),e.jsx("div",{className:"line-through",children:"header: this"}),e.jsx("div",{className:"font-bold",children:"host: localhost"})]})}),t=()=>{const[p,l]=d.useState(!1);return e.jsxs("div",{children:[e.jsx(c,{variant:"primary",onClick:()=>l(!0),children:"Show alert"}),p?e.jsx("div",{className:"mt-3 max-w-md",children:e.jsx(n,{severity:"info",onClose:()=>l(!1),title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]})}):null]})};r.__docgenInfo={description:"",methods:[],displayName:"MetadataCustomComponent"};t.__docgenInfo={description:"",methods:[],displayName:"FloatingAlert"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet",
    metadata: ["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    severity: "success"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    severity: "error"
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    severity: "warning"
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet"
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <ExpandableAlert severity="info" onClose={() => null} title="Lorem ipsum" message="Lorem ipsum dolor sit amet" metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]} metadataComponent={<div className="space-y-1 text-sm">
        <div className="font-semibold">lorem: ipsum</div>
        <div className="text-xs text-muted-foreground">foo: bar</div>
        <div className="line-through">header: this</div>
        <div className="font-bold">host: localhost</div>
      </div>} />`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Show alert
      </Button>
      {open ? <div className="mt-3 max-w-md">
          <ExpandableAlert severity="info" onClose={() => setOpen(false)} title="Lorem ipsum" message="Lorem ipsum dolor sit amet" metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]} />
        </div> : null}
    </div>;
}`,...t.parameters?.docs?.source}}};const J=["Default","Success","Error","Warning","WithoutMetadata","MetadataCustomComponent","FloatingAlert"];export{s as Default,a as Error,t as FloatingAlert,r as MetadataCustomComponent,o as Success,m as Warning,i as WithoutMetadata,J as __namedExportsOrder,H as default};
