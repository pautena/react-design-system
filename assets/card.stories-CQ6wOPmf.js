import{j as e}from"./jsx-runtime-u17CrQMm.js";import{w as c}from"./storybook-Bq401jfZ.js";import{C as n,a as s,b as d,c as i,d as o,e as m,f as l}from"./card-ZfRm_uGh.js";import"./iframe-BvMtHTNp.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-DvEgKYF6.js";import"./index-WIL9i1O2.js";import"./index-BnwzXdH2.js";import"./loader-circle-DX3r9wpe.js";import"./createLucideIcon-b2KNZfrT.js";import"./triangle-alert-n8kWsz47.js";import"./sidebar-DJjs4gpy.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./button-Cs3s96rh.js";import"./useRenderElement-A5mMAjhN.js";import"./DirectionContext-BXkAloLx.js";import"./inertValue-DaHRill-.js";import"./x-DFJcBLed.js";import"./DialogTitle-Cy3WSPEe.js";import"./index-CYGSoTX1.js";import"./useRender-BN00Wl-0.js";const z={title:"Data Display/Card",component:n,decorators:[c({width:360,padding:2})],parameters:{layout:"centered"}},r={render:()=>e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(d,{children:"Account details"}),e.jsx(i,{children:"Review the latest billing summary."})]}),e.jsx(o,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Next invoice scheduled for April 3."})}),e.jsx(m,{children:e.jsx("span",{className:"text-sm",children:"Status: Active"})})]})},t={render:()=>e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(d,{children:"Notifications"}),e.jsx(i,{children:"Manage alert settings."}),e.jsx(l,{children:e.jsx("button",{type:"button",className:"text-xs text-primary",children:"Edit"})})]}),e.jsx(o,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Email alerts are enabled for new activity."})})]})},a={render:()=>e.jsxs(n,{size:"sm",children:[e.jsxs(s,{children:[e.jsx(d,{children:"Compact card"}),e.jsx(i,{children:"Smaller paddings and gaps."})]}),e.jsx(o,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Short summary."})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <CardHeader>
        <CardTitle>Account details</CardTitle>
        <CardDescription>Review the latest billing summary.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Next invoice scheduled for April 3.
        </p>
      </CardContent>
      <CardFooter>
        <span className="text-sm">Status: Active</span>
      </CardFooter>
    </Card>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage alert settings.</CardDescription>
        <CardAction>
          <button type="button" className="text-xs text-primary">
            Edit
          </button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Email alerts are enabled for new activity.
        </p>
      </CardContent>
    </Card>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Card size="sm">
      <CardHeader>
        <CardTitle>Compact card</CardTitle>
        <CardDescription>Smaller paddings and gaps.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Short summary.</p>
      </CardContent>
    </Card>
}`,...a.parameters?.docs?.source}}};const M=["Default","WithAction","Small"];export{r as Default,a as Small,t as WithAction,M as __namedExportsOrder,z as default};
