import{j as n}from"./iframe-Bf5-ajDf.js";import{C as i}from"./ContentPlaceholder-TvPDJgpy.js";import{u as a,N as c}from"./NotificationCenter.provider-C1YuFE5z.js";import{B as m}from"./Box-Dh__eHRG.js";import{B as e}from"./Button-n-T55MPp.js";import"./preload-helper-PPVm8Dsz.js";import"./SkeletonGrid-C-WVMC5n.js";import"./SkeletonCard-DgCV6KYh.js";import"./memoTheme-rYOwdVL2.js";import"./Grid-GUPTDLQQ.js";import"./useTheme-BkpYa0dr.js";import"./isMuiElement-D6WuoLET.js";import"./styled-C763vnku.js";import"./useThemeProps-BjHCCwio.js";import"./Container-HJW5YxB0.js";import"./Typography-CAHfUSwG.js";import"./useSlot-CEvqNXnJ.js";import"./Grow-CgZOrNOu.js";import"./index-VU6iQnRk.js";import"./index-BTGEyl45.js";import"./Paper--4xR-YH7.js";import"./createSvgIcon-BTC8lzaD.js";import"./IconButton-CT7WGyXl.js";import"./ButtonBase-DOY-mQq5.js";import"./CircularProgress-CAtrJVii.js";const r={title:"Internal Server error",message:"Unable to save the item"},O={title:"Feedback/NotificationCenter",component:i,decorators:[o=>n.jsx(c,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},t=()=>{const{show:o,hide:s}=a();return n.jsx(i,{size:3,p:2,children:n.jsxs(m,{pb:2,children:[n.jsx(e,{onClick:()=>o({...r,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(e,{onClick:()=>o({...r,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(e,{onClick:()=>o({...r,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(e,{onClick:()=>o({...r,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(e,{onClick:s,variant:"contained",children:"hide"})]})})};t.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from './NotificationCenter';

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
