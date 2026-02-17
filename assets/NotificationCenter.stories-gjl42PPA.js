import{j as o}from"./iframe-DsTVfloC.js";import{C as i}from"./ContentPlaceholder-BF4SdAwb.js";import{N as a,u as c}from"./NotificationCenter.provider-Qn2b0MYJ.js";import{B as m}from"./Box-NA8e93Q6.js";import{B as r}from"./Button-CDhaqlqn.js";import"./preload-helper-PPVm8Dsz.js";import"./SkeletonGrid-zJl3CBoQ.js";import"./SkeletonCard-BJsiVoat.js";import"./memoTheme-BRt6PzmZ.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Grid-CHWeI7dt.js";import"./useTheme-CCKGC9oU.js";import"./styled-yzy5UF35.js";import"./isMuiElement-11riNvTT.js";import"./useThemeProps-BSyr1XhP.js";import"./Container-BIJwtr4K.js";import"./Typography-gDXReP41.js";import"./createSimplePaletteValueFilter-BJ-oStuy.js";import"./useSlot-oLQ_jf4b.js";import"./Grow-C5Q0umzb.js";import"./index-DYPk2-7N.js";import"./index-CzFc1kR-.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-BnI4yZC3.js";import"./createSvgIcon-CnolC6q_.js";import"./IconButton-BPngOvgY.js";import"./ButtonBase-C6uyn3ST.js";import"./CircularProgress-DLv6AHtv.js";const e={title:"Internal Server error",message:"Unable to save the item"},R={title:"Feedback/NotificationCenter",component:i,decorators:[n=>o.jsx(a,{children:o.jsx(n,{})})],parameters:{layout:"fullscreen"}},t=()=>{const{show:n,hide:s}=c();return o.jsx(i,{size:3,p:2,children:o.jsxs(m,{pb:2,children:[o.jsx(r,{onClick:()=>n({...e,severity:"info"}),variant:"contained",children:"Show info"}),o.jsx(r,{onClick:()=>n({...e,severity:"success"}),variant:"contained",children:"Show success"}),o.jsx(r,{onClick:()=>n({...e,severity:"warning"}),variant:"contained",children:"Show warning"}),o.jsx(r,{onClick:()=>n({...e,severity:"error"}),variant:"contained",children:"Show error"}),o.jsx(r,{onClick:s,variant:"contained",children:"hide"})]})})};t.parameters={docs:{source:{code:`import { NotificationCenterProvider, useNotificationCenter } from './NotificationCenter';

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
