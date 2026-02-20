import{j as o}from"./iframe-CP7Wc6pw.js";import{C as i}from"./ContentPlaceholder-BEeaP4Ye.js";import{u as a,N as c}from"./NotificationCenter.provider-Dpi0SYme.js";import{B as m}from"./Box-BNYW9fHR.js";import{B as r}from"./Button-UaS2k6XY.js";import"./preload-helper-PPVm8Dsz.js";import"./SkeletonGrid-5xbewZFA.js";import"./SkeletonCard-B5J-yD1d.js";import"./memoTheme-Y1W1LvfH.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Grid-C_earOP1.js";import"./useTheme-CUXq88LR.js";import"./isMuiElement-NAUfHtuS.js";import"./styled-WPEz_9pV.js";import"./useThemeProps-BYROKmPG.js";import"./Container-oASjCXae.js";import"./Typography-D9aj5x0O.js";import"./createSimplePaletteValueFilter-m8gWY3yr.js";import"./useSlot-S2W5Go50.js";import"./Grow-DKmJQIhj.js";import"./index-D--87nxG.js";import"./index-CV0XEDZf.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-CnH1HhRt.js";import"./createSvgIcon-Dhag-SiT.js";import"./IconButton-D4ZGjbLn.js";import"./ButtonBase-DLelyPlg.js";import"./CircularProgress-DWrDzHkd.js";const e={title:"Internal Server error",message:"Unable to save the item"},R={title:"Feedback/NotificationCenter",component:i,decorators:[n=>o.jsx(c,{children:o.jsx(n,{})})],parameters:{layout:"fullscreen"}},t=()=>{const{show:n,hide:s}=a();return o.jsx(i,{size:3,p:2,children:o.jsxs(m,{pb:2,children:[o.jsx(r,{onClick:()=>n({...e,severity:"info"}),variant:"contained",children:"Show info"}),o.jsx(r,{onClick:()=>n({...e,severity:"success"}),variant:"contained",children:"Show success"}),o.jsx(r,{onClick:()=>n({...e,severity:"warning"}),variant:"contained",children:"Show warning"}),o.jsx(r,{onClick:()=>n({...e,severity:"error"}),variant:"contained",children:"Show error"}),o.jsx(r,{onClick:s,variant:"contained",children:"hide"})]})})};t.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from './NotificationCenter';

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
}`,...t.parameters?.docs?.source}}};const U=["Default"];export{t as Default,U as __namedExportsOrder,R as default};
