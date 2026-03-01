import{j as t}from"./iframe-lRwKKAeA.js";import{B as o}from"./button-OsMYNPhM.js";import{C as s}from"./content-DPxwszPs.js";import{S as r}from"./skeleton-grid-603R2Zt7.js";import{u as a,N as c}from"./notification-center-provider-CDSuuxjR.js";import"./preload-helper-PPVm8Dsz.js";import"./button-h5PM8KId.js";import"./index-BZl2Gm-o.js";import"./utils-wLV4pmrJ.js";import"./useRenderElement-DXpJT6eM.js";import"./skeleton-card-DEi15W7y.js";import"./index-aCLD_6gc.js";import"./index-so3LO3Cr.js";import"./loader-circle-D9QnFWM9.js";import"./createLucideIcon-CW1mXz6K.js";import"./triangle-alert-xAnxLRrM.js";const e={info:{title:"Heads up",message:"We are syncing your preferences in the background."},success:{title:"Saved",message:"Your changes were stored successfully."},warning:{title:"Check details",message:"Some fields need attention before continuing."},error:{title:"Internal Server error",message:"Unable to save the item. Try again later."}},B={title:"Feedback/NotificationCenter",component:s,decorators:[n=>t.jsx(c,{children:t.jsx(n,{})})],parameters:{layout:"fullscreen"}},i=()=>{const{toast:n}=a();return t.jsxs(s,{className:"p-2",children:[t.jsxs("div",{className:"flex flex-wrap gap-2 pb-2",children:[t.jsx(o,{variant:"info",onClick:()=>n.info(e.info.title,{description:e.info.message}),children:"Show info"}),t.jsx(o,{variant:"success",onClick:()=>n.success(e.success.title,{description:e.success.message}),children:"Show success"}),t.jsx(o,{variant:"warning",onClick:()=>n.warning(e.warning.title,{description:e.warning.message}),children:"Show warning"}),t.jsx(o,{variant:"error",onClick:()=>n.error(e.error.title,{description:e.error.message}),children:"Show error"}),t.jsx(o,{variant:"outline",onClick:()=>n.dismiss(),children:"hide"})]}),t.jsx(r,{size:3})]})};i.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from '@pautena/react-design-system';

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
}`,...i.parameters?.docs?.source}}};const y=["Default"];export{i as Default,y as __namedExportsOrder,B as default};
