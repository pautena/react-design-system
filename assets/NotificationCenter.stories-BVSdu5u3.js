import{j as n}from"./iframe-OKrkvHog.js";import{C as i}from"./ContentPlaceholder-CU0sbPvr.js";import{u as a,N as c}from"./NotificationCenter.provider-CXoiJd3C.js";import{B as m}from"./Box-DdvrumJ4.js";import{B as e}from"./Button-CNKKXh8l.js";import"./preload-helper-PPVm8Dsz.js";import"./skeleton-grid-BG1b4fRo.js";import"./skeleton-card-D91F36u4.js";import"./utils-BtxETjiC.js";import"./Container-T7_tTLhI.js";import"./styled-DS6LlOMU.js";import"./styled-BW8sm9vC.js";import"./useThemeProps-thKpCK-a.js";import"./Typography-Dj8pBh4O.js";import"./useSlot-EiJaCkM0.js";import"./useTheme-RQYRicNz.js";import"./Grow-CTMKRTGh.js";import"./index-DeODwBsH.js";import"./index-CjliXV4g.js";import"./Paper-ChCS8O8h.js";import"./IconButton-pTNTveEx.js";import"./CircularProgress-lc5GuTxj.js";const r={title:"Internal Server error",message:"Unable to save the item"},z={title:"Feedback/NotificationCenter",component:i,decorators:[o=>n.jsx(c,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},t=()=>{const{show:o,hide:s}=a();return n.jsx(i,{size:3,p:2,children:n.jsxs(m,{pb:2,children:[n.jsx(e,{onClick:()=>o({...r,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(e,{onClick:()=>o({...r,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(e,{onClick:()=>o({...r,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(e,{onClick:()=>o({...r,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(e,{onClick:s,variant:"contained",children:"hide"})]})})};t.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from './NotificationCenter';

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
