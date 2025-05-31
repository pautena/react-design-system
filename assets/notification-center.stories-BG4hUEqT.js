import{j as n}from"./iframe-CyC2w49y.js";import{C as c}from"./content-placeholder-Hhhg0lk9.js";import{N as p,u as d}from"./notification-center.provider-hMjTnbFV.js";import{B as l}from"./Box-Bu5_Wahq.js";import{B as t}from"./Button-BsHUy8NG.js";import"./skeleton-grid-BwJ-cyI5.js";import"./skeleton-card-D4lKEynh.js";import"./Skeleton-CxG-iX25.js";import"./generateUtilityClasses-DiH4kTrr.js";import"./memoTheme-D8ZqR_KA.js";import"./arrays-DN8njEnP.js";import"./Grid-DcpqZmzV.js";import"./useTheme-Ds7l_2HV.js";import"./styled-CqjPRaVl.js";import"./isMuiElement-REqKdDgZ.js";import"./useThemeProps-Bdhk1Fnw.js";import"./Container-CIGK5HYI.js";import"./Typography-CyoT5iG8.js";import"./createSimplePaletteValueFilter-DpK-1nce.js";import"./useSlot-Cmez1d-s.js";import"./ClickAwayListener-DqyQjJ40.js";import"./Grow--wL55YRT.js";import"./index-B5T9s_eP.js";import"./index-CFgBVtQr.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-VpekSNGd.js";import"./Close-C358guxW.js";import"./IconButton-G5bFnDkw.js";import"./CircularProgress-DDQh3gzr.js";const e={title:"Internal Server error",message:"Unable to save the item"},J={title:"Components/Feedback/NotificationCenter",component:c,decorators:[o=>n.jsx(p,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:o,hide:m}=d();return n.jsx(c,{size:3,p:2,children:n.jsxs(l,{pb:2,children:[n.jsx(t,{onClick:()=>o({...e,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(t,{onClick:()=>o({...e,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(t,{onClick:()=>o({...e,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(t,{onClick:()=>o({...e,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(t,{onClick:m,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,s,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const K=["Default"];export{r as Default,K as __namedExportsOrder,J as default};
