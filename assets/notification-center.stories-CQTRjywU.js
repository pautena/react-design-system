import{j as n}from"./iframe-u8LB376j.js";import{C as i}from"./content-placeholder-Bwgbnoaf.js";import{N as a,u as c}from"./notification-center.provider-CR_O05N3.js";import{B as m}from"./Box-r6KuYIW2.js";import{B as t}from"./Button-B1FhpMe7.js";import"./preload-helper-PPVm8Dsz.js";import"./skeleton-grid-DGimQ5aw.js";import"./skeleton-card-CQ5O6R4x.js";import"./Skeleton-B2TiFIGO.js";import"./memoTheme-V5gp6nHU.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./arrays-DN8njEnP.js";import"./Grid-CozWxSeG.js";import"./useTheme-DuCPUz7t.js";import"./styled-j-Jxc9wR.js";import"./isMuiElement-DZKLzQP7.js";import"./useThemeProps-CoUj8Mfc.js";import"./Container-hp888gu2.js";import"./Typography-yXzabRJh.js";import"./createSimplePaletteValueFilter-BA1C3KMz.js";import"./useSlot-C0yEUZxy.js";import"./ClickAwayListener-WJK6T669.js";import"./Grow-C0Me-irx.js";import"./index-aSWeh4o7.js";import"./index-CQl9WEtC.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-ufo0IKvl.js";import"./Close-DCdKt3RS.js";import"./IconButton-DfMYPZbC.js";import"./CircularProgress-DnZ0hM6Q.js";const e={title:"Internal Server error",message:"Unable to save the item"},G={title:"Components/Feedback/NotificationCenter",component:i,decorators:[o=>n.jsx(a,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:o,hide:s}=c();return n.jsx(i,{size:3,p:2,children:n.jsxs(m,{pb:2,children:[n.jsx(t,{onClick:()=>o({...e,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(t,{onClick:()=>o({...e,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(t,{onClick:()=>o({...e,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(t,{onClick:()=>o({...e,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(t,{onClick:s,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
