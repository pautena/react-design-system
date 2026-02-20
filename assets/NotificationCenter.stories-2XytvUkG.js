import{j as n}from"./iframe-BSF_zI2e.js";import{C as i}from"./ContentPlaceholder-DdcmdNRq.js";import{u as a,N as c}from"./NotificationCenter.provider-D2vjEJ8b.js";import{B as m}from"./Box-CHcsadOg.js";import{B as e}from"./Button-C1usO_3W.js";import"./preload-helper-PPVm8Dsz.js";import"./SkeletonGrid-D8p727xw.js";import"./SkeletonCard-CPA0qL0Y.js";import"./memoTheme-gZcicJog.js";import"./Grid-D41GmVQG.js";import"./useTheme-Bdii9Etj.js";import"./isMuiElement-Bq0JcP6U.js";import"./styled-BIFOFSEp.js";import"./useThemeProps-Kptf8z7g.js";import"./Container-D_NSUzBx.js";import"./Typography-D0EjtIU6.js";import"./useSlot-C2ujFzFD.js";import"./Grow-DLP78off.js";import"./index-Dx7ZuBcJ.js";import"./index-Y6Tbe8Fy.js";import"./Paper-BvMysOCA.js";import"./createSvgIcon-CWjcVlRY.js";import"./IconButton-BCQOCuxl.js";import"./ButtonBase-mZjpsr3J.js";import"./CircularProgress-Btce5Lb0.js";const r={title:"Internal Server error",message:"Unable to save the item"},O={title:"Feedback/NotificationCenter",component:i,decorators:[o=>n.jsx(c,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},t=()=>{const{show:o,hide:s}=a();return n.jsx(i,{size:3,p:2,children:n.jsxs(m,{pb:2,children:[n.jsx(e,{onClick:()=>o({...r,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(e,{onClick:()=>o({...r,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(e,{onClick:()=>o({...r,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(e,{onClick:()=>o({...r,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(e,{onClick:s,variant:"contained",children:"hide"})]})})};t.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from './NotificationCenter';

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
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,O as default};
