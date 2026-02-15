import{j as o}from"./iframe-D9_KR-Vm.js";import{C as i}from"./ContentPlaceholder-qFbRfxkA.js";import{N as a,u as c}from"./NotificationCenter.provider-DmDmO-iN.js";import{B as m}from"./Box-Be92HNMn.js";import{B as e}from"./Button-23wGEqNA.js";import"./preload-helper-PPVm8Dsz.js";import"./SkeletonGrid-CRqFah6u.js";import"./SkeletonCard-D5zSRoKz.js";import"./memoTheme-CqkFtSQ1.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Grid-DI8BF5to.js";import"./useTheme-I0hne2ge.js";import"./styled-C5_L6O4r.js";import"./isMuiElement-DE1wNB7s.js";import"./useThemeProps-DEraMp6x.js";import"./Container-_nhoTIg8.js";import"./Typography-2wT6CWDx.js";import"./createSimplePaletteValueFilter-6wxtO0wC.js";import"./useSlot-i-Ylfmke.js";import"./Grow-Cifmxdwe.js";import"./index-DC4ANDc3.js";import"./index-DJQ4Myga.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-VO7GYAI2.js";import"./IconButton-B1MZngJm.js";import"./CircularProgress-DXln3DRW.js";const r={title:"Internal Server error",message:"Unable to save the item"},A={title:"Feedback/NotificationCenter",component:i,decorators:[n=>o.jsx(a,{children:o.jsx(n,{})})],parameters:{layout:"fullscreen"}},t=()=>{const{show:n,hide:s}=c();return o.jsx(i,{size:3,p:2,children:o.jsxs(m,{pb:2,children:[o.jsx(e,{onClick:()=>n({...r,severity:"info"}),variant:"contained",children:"Show info"}),o.jsx(e,{onClick:()=>n({...r,severity:"success"}),variant:"contained",children:"Show success"}),o.jsx(e,{onClick:()=>n({...r,severity:"warning"}),variant:"contained",children:"Show warning"}),o.jsx(e,{onClick:()=>n({...r,severity:"error"}),variant:"contained",children:"Show error"}),o.jsx(e,{onClick:s,variant:"contained",children:"hide"})]})})};t.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from './NotificationCenter';

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
}`,...t.parameters?.docs?.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,A as default};
