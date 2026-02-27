import{j as n}from"./iframe-VMkoG4ZL.js";import{C as i}from"./content-B82fcULD.js";import{S as a}from"./skeleton-grid-B9AJZb4A.js";import{u as c,N as m}from"./NotificationCenter.provider-Csm6e6JQ.js";import{B as u}from"./Box-JY1TTY9I.js";import{B as e}from"./Button-BbnIsc5V.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-n6qbTURJ.js";import"./skeleton-card-ByrJ5o8E.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./index-6A0628O0.js";import"./index-BgY_nV53.js";const r={title:"Internal Server error",message:"Unable to save the item"},N={title:"Feedback/NotificationCenter",component:i,decorators:[o=>n.jsx(m,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},t=()=>{const{show:o,hide:s}=c();return n.jsxs(i,{className:"p-2",children:[n.jsxs(u,{pb:2,children:[n.jsx(e,{onClick:()=>o({...r,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(e,{onClick:()=>o({...r,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(e,{onClick:()=>o({...r,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(e,{onClick:()=>o({...r,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(e,{onClick:s,variant:"contained",children:"hide"})]}),n.jsx(a,{size:3})]})};t.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from './NotificationCenter';

function App() {
  return (
    <NotificationCenterProvider>
      <MyComponent />
    </NotificationCenterProvider>
  );
}

function MyComponent() {
  const { show, hide } = useNotificationCenter();

  const handleClick = () => {
    show({
      severity: "success",
      title: "Success",
      message: "Operation completed successfully"
    });
  };

  return <button onClick={handleClick}>Show Notification</button>;
}`}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    show,
    hide
  } = useNotificationCenter();
  return <Content className="p-2">
      <Box pb={2}>
        <Button onClick={() => show({
        ...DummyError,
        severity: "info"
      })} variant="contained">
          Show info
        </Button>
        <Button onClick={() => show({
        ...DummyError,
        severity: "success"
      })} variant="contained">
          Show success
        </Button>
        <Button onClick={() => show({
        ...DummyError,
        severity: "warning"
      })} variant="contained">
          Show warning
        </Button>
        <Button onClick={() => show({
        ...DummyError,
        severity: "error"
      })} variant="contained">
          Show error
        </Button>
        <Button onClick={hide} variant="contained">
          hide
        </Button>
      </Box>
      <SkeletonGrid size={3} />
    </Content>;
}`,...t.parameters?.docs?.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,N as default};
