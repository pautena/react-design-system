import{j as o}from"./iframe-CPJC-7_S.js";import{C as i}from"./ContentPlaceholder-B5QHSQ10.js";import{N as a,u as c}from"./NotificationCenter.provider-u8BAQXhU.js";import{B as m}from"./Box-TJyasLSX.js";import{B as r}from"./Button-D9bdBOIi.js";import"./preload-helper-PPVm8Dsz.js";import"./SkeletonGrid-C8hRcBE-.js";import"./SkeletonCard-D8xBk661.js";import"./memoTheme-C8b3s5Nq.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Grid-C9tx9Mtn.js";import"./useTheme-DdlF0zeT.js";import"./styled-BSpG49Gz.js";import"./isMuiElement-DZytaqmN.js";import"./useThemeProps-Dulreeay.js";import"./Container-DAvAVEC0.js";import"./Typography-CLOlFX5y.js";import"./createSimplePaletteValueFilter-Bx-47Vpk.js";import"./useSlot-B7v4Ed5k.js";import"./Grow-NGX5tjGB.js";import"./index-_RsBnxVX.js";import"./index-CNtkKQx-.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-BHj2CCUq.js";import"./createSvgIcon-BgPxQH2C.js";import"./IconButton-5Zbhdaoz.js";import"./ButtonBase-DNHRbV3y.js";import"./CircularProgress-C6ftKUTK.js";const e={title:"Internal Server error",message:"Unable to save the item"},R={title:"Feedback/NotificationCenter",component:i,decorators:[n=>o.jsx(a,{children:o.jsx(n,{})})],parameters:{layout:"fullscreen"}},t=()=>{const{show:n,hide:s}=c();return o.jsx(i,{size:3,p:2,children:o.jsxs(m,{pb:2,children:[o.jsx(r,{onClick:()=>n({...e,severity:"info"}),variant:"contained",children:"Show info"}),o.jsx(r,{onClick:()=>n({...e,severity:"success"}),variant:"contained",children:"Show success"}),o.jsx(r,{onClick:()=>n({...e,severity:"warning"}),variant:"contained",children:"Show warning"}),o.jsx(r,{onClick:()=>n({...e,severity:"error"}),variant:"contained",children:"Show error"}),o.jsx(r,{onClick:s,variant:"contained",children:"hide"})]})})};t.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from './NotificationCenter';

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
