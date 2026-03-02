import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-BbA-wopx.js";import{B as c}from"./button-Cp_yuWGP.js";import{w as u}from"./storybook-CxXwq-E5.js";import{E as n}from"./expandable-alert-BdCijBFF.js";import"./preload-helper-PPVm8Dsz.js";import"./button-y8UJw2AW.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./useRenderElement-SQgKJxjE.js";import"./notification-center-provider-Dlt_oZp3.js";import"./index-DqHivdvk.js";import"./index-Pvbw17Wo.js";import"./loader-circle-DhJ-wMWs.js";import"./createLucideIcon-FAJFlL9b.js";import"./triangle-alert-COhhum2C.js";import"./sidebar-DoXfl7gx.js";import"./DirectionContext-CaYKzn7y.js";import"./inertValue-B1tfPk2D.js";import"./x-DhU6w5cI.js";import"./DialogTitle-Bj_sAikw.js";import"./index-CfKeI9Pd.js";import"./useRender-C9crks1o.js";import"./board-55xARVAr.js";import"./collapsible-CA63Hmc1.js";import"./useCollapsiblePanel-C9kQDfqV.js";import"./chevron-up-CXwHfMBK.js";import"./chevron-down-CxFUI7rf.js";const H={title:"Alerts/ExpandableAlert",component:n,decorators:[u({width:500})],parameters:{layout:"centered"}},s={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]}},o={args:{...s.args,severity:"success"}},a={args:{...s.args,severity:"error"}},m={args:{...s.args,severity:"warning"}},i={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet"}},r=()=>e.jsx(n,{severity:"info",onClose:()=>null,title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"],metadataComponent:e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsx("div",{className:"font-semibold",children:"lorem: ipsum"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"foo: bar"}),e.jsx("div",{className:"line-through",children:"header: this"}),e.jsx("div",{className:"font-bold",children:"host: localhost"})]})}),t=()=>{const[p,l]=d.useState(!1);return e.jsxs("div",{children:[e.jsx(c,{variant:"primary",onClick:()=>l(!0),children:"Show alert"}),p?e.jsx("div",{className:"mt-3 max-w-md",children:e.jsx(n,{severity:"info",onClose:()=>l(!1),title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]})}):null]})};r.__docgenInfo={description:"",methods:[],displayName:"MetadataCustomComponent"};t.__docgenInfo={description:"",methods:[],displayName:"FloatingAlert"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
