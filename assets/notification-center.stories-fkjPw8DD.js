import{j as n}from"./iframe-BupHDtd1.js";import{C as i}from"./content-placeholder-DMAb1r8e.js";import{N as a,u as c}from"./notification-center.provider-D6bLtnLQ.js";import{B as m}from"./Box-BZzEFwUz.js";import{B as t}from"./Button-orM3su5N.js";import"./preload-helper-PPVm8Dsz.js";import"./skeleton-grid-CZw1Raw_.js";import"./skeleton-card-DFDufsBr.js";import"./Skeleton-Blxh1aOH.js";import"./memoTheme-uoO9vclW.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./arrays-DN8njEnP.js";import"./Grid-BpBV2Lm1.js";import"./useTheme-Big8xsoA.js";import"./styled-DyaDxy-H.js";import"./isMuiElement-B9Yk4f5Q.js";import"./useThemeProps-B7SWTtEU.js";import"./Container-ggggtD9A.js";import"./Typography-BHekySi3.js";import"./createSimplePaletteValueFilter-LbGOAHYa.js";import"./useSlot-CDAVMGN6.js";import"./ClickAwayListener-HtsNmCH7.js";import"./Grow-CP6B5ywO.js";import"./index-DGx7bEnB.js";import"./index-dSTdg89Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-ZM7KCuNl.js";import"./Close-Dc-soyav.js";import"./IconButton-CYN55AKW.js";import"./CircularProgress-CA-yQluH.js";const e={title:"Internal Server error",message:"Unable to save the item"},G={title:"Components/Feedback/NotificationCenter",component:i,decorators:[o=>n.jsx(a,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:o,hide:s}=c();return n.jsx(i,{size:3,p:2,children:n.jsxs(m,{pb:2,children:[n.jsx(t,{onClick:()=>o({...e,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(t,{onClick:()=>o({...e,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(t,{onClick:()=>o({...e,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(t,{onClick:()=>o({...e,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(t,{onClick:s,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
