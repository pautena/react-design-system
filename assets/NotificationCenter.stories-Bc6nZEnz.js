import{j as n}from"./iframe-CnbMuzLM.js";import{C as i}from"./ContentPlaceholder-DcshqOla.js";import{u as a,N as c}from"./NotificationCenter.provider-DZQuwpgl.js";import{B as m}from"./Box-Cw1nbHt1.js";import{B as e}from"./Button-CoExOmeN.js";import"./preload-helper-PPVm8Dsz.js";import"./SkeletonGrid-BgZHoWoS.js";import"./SkeletonCard-VubKLShH.js";import"./memoTheme-BsYj_Q0c.js";import"./Grid-DxI5JUkv.js";import"./useTheme-DnF_gfMc.js";import"./isMuiElement-IbqOvYYV.js";import"./styled-DypEcibl.js";import"./useThemeProps-XwFaLuaT.js";import"./Container-DPgGd-ZF.js";import"./Typography-DvHYNeI8.js";import"./useSlot-BROZ5lZE.js";import"./Grow-pF7fPETi.js";import"./index-D7nFk_1R.js";import"./index-XSIcV2pE.js";import"./Paper-Bjk2txYz.js";import"./IconButton-BPiEJA8y.js";import"./CircularProgress-CWaDErbR.js";const r={title:"Internal Server error",message:"Unable to save the item"},I={title:"Feedback/NotificationCenter",component:i,decorators:[o=>n.jsx(c,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},t=()=>{const{show:o,hide:s}=a();return n.jsx(i,{size:3,p:2,children:n.jsxs(m,{pb:2,children:[n.jsx(e,{onClick:()=>o({...r,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(e,{onClick:()=>o({...r,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(e,{onClick:()=>o({...r,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(e,{onClick:()=>o({...r,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(e,{onClick:s,variant:"contained",children:"hide"})]})})};t.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from './NotificationCenter';

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
}`,...t.parameters?.docs?.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,I as default};
