import{j as n}from"./iframe-B6ohfiup.js";import{C as i}from"./content-placeholder-BO5Cvypj.js";import{N as a,u as c}from"./notification-center.provider-DDdDN_Mx.js";import{B as m}from"./Box-CXgehUqD.js";import{B as t}from"./Button-B9lAKHiE.js";import"./preload-helper-PPVm8Dsz.js";import"./skeleton-grid-B2C9-wm_.js";import"./skeleton-card-Bgde9nE_.js";import"./Skeleton-DoD44uyi.js";import"./memoTheme-CC-1Q7gO.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./arrays-DN8njEnP.js";import"./Grid-Cb8DrkkP.js";import"./useTheme-DsWhHYnr.js";import"./styled-DFzctvoG.js";import"./isMuiElement-pQtj3-kC.js";import"./useThemeProps-BwjGz0Xf.js";import"./Container-CmxiSSsd.js";import"./Typography-DaaAGHYc.js";import"./createSimplePaletteValueFilter-C0yhpO25.js";import"./useSlot-QV38wpNi.js";import"./ClickAwayListener-CQoOqBrP.js";import"./Grow-B2B6SMAZ.js";import"./index-DXCvjZCK.js";import"./index-Cn8b4sBC.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-CU8usuf0.js";import"./Close-BkjWXVCk.js";import"./IconButton-Cwope62c.js";import"./CircularProgress-DNnVD90t.js";const e={title:"Internal Server error",message:"Unable to save the item"},G={title:"Components/Feedback/NotificationCenter",component:i,decorators:[o=>n.jsx(a,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:o,hide:s}=c();return n.jsx(i,{size:3,p:2,children:n.jsxs(m,{pb:2,children:[n.jsx(t,{onClick:()=>o({...e,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(t,{onClick:()=>o({...e,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(t,{onClick:()=>o({...e,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(t,{onClick:()=>o({...e,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(t,{onClick:s,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const H=["Default"];export{r as Default,H as __namedExportsOrder,G as default};
