import{j as n}from"./iframe-EZlCblT_.js";import{C as i}from"./content-placeholder-DksZKLxS.js";import{N as a,u as c}from"./notification-center.provider-4_hiLkGe.js";import{B as m}from"./Box-C0oK-ZD8.js";import{B as t}from"./Button-fNy9YLcp.js";import"./preload-helper-PPVm8Dsz.js";import"./skeleton-grid-Bv6xR5Fk.js";import"./skeleton-card-ChPjD1ST.js";import"./Skeleton-usBYKFoT.js";import"./memoTheme-CjfLGB6G.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./arrays-DN8njEnP.js";import"./Grid-eQci8erC.js";import"./useTheme-BkEo2tXZ.js";import"./styled-CQAdqEOk.js";import"./isMuiElement-DscGPJ5R.js";import"./useThemeProps-DymWMTR7.js";import"./Container-enQBmRdh.js";import"./Typography-vAnbId3H.js";import"./createSimplePaletteValueFilter-BROrGcBZ.js";import"./useSlot-JprQW5-3.js";import"./ClickAwayListener-N12zeSeK.js";import"./Grow-CXlVsDrX.js";import"./index-Bw2dNR8W.js";import"./index-BKuDT_6P.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-C0CMzwYM.js";import"./Close-BKTzgdKH.js";import"./IconButton-CoVD8RR9.js";import"./CircularProgress-CWLujbj3.js";const e={title:"Internal Server error",message:"Unable to save the item"},G={title:"Components/Feedback/NotificationCenter",component:i,decorators:[o=>n.jsx(a,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:o,hide:s}=c();return n.jsx(i,{size:3,p:2,children:n.jsxs(m,{pb:2,children:[n.jsx(t,{onClick:()=>o({...e,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(t,{onClick:()=>o({...e,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(t,{onClick:()=>o({...e,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(t,{onClick:()=>o({...e,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(t,{onClick:s,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
