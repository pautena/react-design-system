import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{N as p,u as d}from"./notification-center.provider-DGQlM2s5.js";import{C as c}from"./content-placeholder-BSqQlGqC.js";import{B as l}from"./Box-CLV6Ujku.js";import{B as t}from"./Button-C1N17xc9.js";import"./index-CFahbR6w.js";import"./Typography-BXSoh8s2.js";import"./identifier-ChVxdG4r.js";import"./memoTheme-kZCwlU27.js";import"./emotion-react.browser.esm-C1MoURgL.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./extendSxProp-C7aHAb1N.js";import"./resolveComponentProps-BnY4DdR-.js";import"./useTheme-CfVHYLf1.js";import"./useSlot-HZ3RMWsh.js";import"./ClickAwayListener-CE8GBNsl.js";import"./Grow-DSkAUVrm.js";import"./index-D_4lP2oU.js";import"./index-chp1rBSu.js";import"./Paper-0PE78at3.js";import"./Alert-CoN8pKaz.js";import"./Close-D7PaC3tu.js";import"./IconButton-X2xkCwyW.js";import"./CircularProgress-5NeNm8J5.js";import"./skeleton-grid-w6fKwav9.js";import"./arrays-DN8njEnP.js";import"./skeleton-card-DRnJEpvy.js";import"./Skeleton-DoE8ehbV.js";import"./Grid-CKxAJcKv.js";import"./Container-D3jbaP2i.js";import"./styled-CKN7woRo.js";import"./useThemeProps-B6n0nbSt.js";const i={title:"Internal Server error",message:"Unable to save the item"},M={title:"Components/Feedback/NotificationCenter",component:c,decorators:[o=>n.jsx(p,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:o,hide:m}=d();return n.jsx(c,{size:3,p:2,children:n.jsxs(l,{pb:2,children:[n.jsx(t,{onClick:()=>o({...i,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(t,{onClick:()=>o({...i,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(t,{onClick:()=>o({...i,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(t,{onClick:()=>o({...i,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(t,{onClick:m,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,s,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Q=["Default"];export{r as Default,Q as __namedExportsOrder,M as default};
