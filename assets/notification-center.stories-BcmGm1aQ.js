import{j as t}from"./jsx-runtime-u17CrQMm.js";import{B as o}from"./button-yGNfiGto.js";import{C as s}from"./content-Cg7XQsbO.js";import{S as r}from"./skeleton-grid-BvJC6kQy.js";import{u as a,N as c}from"./notification-center-provider-C47Pv2Md.js";import"./button-q2sCJWC4.js";import"./index-C16iSc_-.js";import"./utils-CJxB-tWf.js";import"./iframe-C_7bLouK.js";import"./preload-helper-PPVm8Dsz.js";import"./useRenderElement-Bt1an2v0.js";import"./skeleton-card-DG6yUFI2.js";import"./index-CvzTXi8f.js";import"./index-ChAihCM8.js";import"./loader-circle-9lhHWVhj.js";import"./createLucideIcon-CMKN0kEv.js";import"./triangle-alert-DfgpFmgS.js";const e={info:{title:"Heads up",message:"We are syncing your preferences in the background."},success:{title:"Saved",message:"Your changes were stored successfully."},warning:{title:"Check details",message:"Some fields need attention before continuing."},error:{title:"Internal Server error",message:"Unable to save the item. Try again later."}},y={title:"Feedback/NotificationCenter",component:s,decorators:[n=>t.jsx(c,{children:t.jsx(n,{})})],parameters:{layout:"fullscreen"}},i=()=>{const{toast:n}=a();return t.jsxs(s,{className:"p-2",children:[t.jsxs("div",{className:"flex flex-wrap gap-2 pb-2",children:[t.jsx(o,{variant:"info",onClick:()=>n.info(e.info.title,{description:e.info.message}),children:"Show info"}),t.jsx(o,{variant:"success",onClick:()=>n.success(e.success.title,{description:e.success.message}),children:"Show success"}),t.jsx(o,{variant:"warning",onClick:()=>n.warning(e.warning.title,{description:e.warning.message}),children:"Show warning"}),t.jsx(o,{variant:"error",onClick:()=>n.error(e.error.title,{description:e.error.message}),children:"Show error"}),t.jsx(o,{variant:"outline",onClick:()=>n.dismiss(),children:"hide"})]}),t.jsx(r,{size:3})]})};i.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from '@pautena/react-design-system';

function App() {
  return (
    <NotificationCenterProvider>
      <MyComponent />
    </NotificationCenterProvider>
  );
}

function MyComponent() {
  const { toast } = useNotificationCenter();

  const handleClick = () => {
    toast.success("Success", {
      description: "Operation completed successfully",
    });
  };

  return <button onClick={handleClick}>Show Notification</button>;
}`}}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    toast
  } = useNotificationCenter();
  return <Content className="p-2">
      <div className="flex flex-wrap gap-2 pb-2">
        <Button variant="info" onClick={() => toast.info(Notifications.info.title, {
        description: Notifications.info.message
      })}>
          Show info
        </Button>
        <Button variant="success" onClick={() => toast.success(Notifications.success.title, {
        description: Notifications.success.message
      })}>
          Show success
        </Button>
        <Button variant="warning" onClick={() => toast.warning(Notifications.warning.title, {
        description: Notifications.warning.message
      })}>
          Show warning
        </Button>
        <Button variant="error" onClick={() => toast.error(Notifications.error.title, {
        description: Notifications.error.message
      })}>
          Show error
        </Button>
        <Button variant="outline" onClick={() => toast.dismiss()}>
          hide
        </Button>
      </div>
      <SkeletonGrid size={3} />
    </Content>;
}`,...i.parameters?.docs?.source}}};const b=["Default"];export{i as Default,b as __namedExportsOrder,y as default};
