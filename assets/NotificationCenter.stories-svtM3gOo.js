import{j as n}from"./iframe-DoHxLgiQ.js";import{C as i}from"./ContentPlaceholder-D5TTnlNk.js";import{u as a,N as c}from"./NotificationCenter.provider-BPzvgZ7t.js";import{B as m}from"./Box-DeYITPa_.js";import{B as e}from"./Button-B2xgUCVd.js";import"./preload-helper-PPVm8Dsz.js";import"./skeleton-grid-D5HkrhlP.js";import"./skeleton-card-hhwuTUMO.js";import"./utils-ByKj-FM5.js";import"./Container-BMQIEMVN.js";import"./styled-CxtL0g1W.js";import"./styled-CrWtcJlt.js";import"./useThemeProps-CnABTLmb.js";import"./Typography-CCBxMdr1.js";import"./useSlot-DB0NX2DN.js";import"./useTheme-ydX2sAJM.js";import"./Grow-MYIRJLP-.js";import"./index-Bo9E3z2s.js";import"./index-BpLgNbkB.js";import"./Paper-CAEioaFg.js";import"./IconButton-B0-Pj2Aa.js";import"./CircularProgress-i2TneyIi.js";const r={title:"Internal Server error",message:"Unable to save the item"},z={title:"Feedback/NotificationCenter",component:i,decorators:[o=>n.jsx(c,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},t=()=>{const{show:o,hide:s}=a();return n.jsx(i,{size:3,p:2,children:n.jsxs(m,{pb:2,children:[n.jsx(e,{onClick:()=>o({...r,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(e,{onClick:()=>o({...r,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(e,{onClick:()=>o({...r,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(e,{onClick:()=>o({...r,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(e,{onClick:s,variant:"contained",children:"hide"})]})})};t.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from './NotificationCenter';

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
  return <ContentPlaceholder size={3} p={2}>
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
    </ContentPlaceholder>;
}`,...t.parameters?.docs?.source}}};const I=["Default"];export{t as Default,I as __namedExportsOrder,z as default};
