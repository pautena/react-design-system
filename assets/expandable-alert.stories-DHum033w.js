import{r as d,j as e}from"./iframe-lRwKKAeA.js";import{B as c}from"./button-OsMYNPhM.js";import{a as u}from"./storybook-COLW6OeD.js";import{E as n}from"./expandable-alert-DKYoU_jH.js";import"./preload-helper-PPVm8Dsz.js";import"./button-h5PM8KId.js";import"./index-BZl2Gm-o.js";import"./utils-wLV4pmrJ.js";import"./useRenderElement-DXpJT6eM.js";import"./notification-center-provider-CDSuuxjR.js";import"./index-aCLD_6gc.js";import"./index-so3LO3Cr.js";import"./loader-circle-D9QnFWM9.js";import"./createLucideIcon-CW1mXz6K.js";import"./triangle-alert-xAnxLRrM.js";import"./sidebar-2ulj49hr.js";import"./DirectionContext-D015V4zZ.js";import"./composite-CvqMpLXs.js";import"./x-Dvkqv4wB.js";import"./DialogTitle-DczUCJzh.js";import"./index-Ozf5NBs-.js";import"./useRender-BYihtJcv.js";import"./isSameDay-BaBEc9bM.js";import"./board-DsPwuRop.js";import"./collapsible-DgW0LYXB.js";import"./chevron-up-CvAzd9Aw.js";import"./chevron-down-hKLTOZmu.js";const G={title:"Alerts/ExpandableAlert",component:n,decorators:[u({width:500})],parameters:{layout:"centered"}},s={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]}},o={args:{...s.args,severity:"success"}},a={args:{...s.args,severity:"error"}},m={args:{...s.args,severity:"warning"}},i={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet"}},r=()=>e.jsx(n,{severity:"info",onClose:()=>null,title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"],metadataComponent:e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsx("div",{className:"font-semibold",children:"lorem: ipsum"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"foo: bar"}),e.jsx("div",{className:"line-through",children:"header: this"}),e.jsx("div",{className:"font-bold",children:"host: localhost"})]})}),t=()=>{const[p,l]=d.useState(!1);return e.jsxs("div",{children:[e.jsx(c,{variant:"primary",onClick:()=>l(!0),children:"Show alert"}),p?e.jsx("div",{className:"mt-3 max-w-md",children:e.jsx(n,{severity:"info",onClose:()=>l(!1),title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]})}):null]})};r.__docgenInfo={description:"",methods:[],displayName:"MetadataCustomComponent"};t.__docgenInfo={description:"",methods:[],displayName:"FloatingAlert"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const H=["Default","Success","Error","Warning","WithoutMetadata","MetadataCustomComponent","FloatingAlert"];export{s as Default,a as Error,t as FloatingAlert,r as MetadataCustomComponent,o as Success,m as Warning,i as WithoutMetadata,H as __namedExportsOrder,G as default};
