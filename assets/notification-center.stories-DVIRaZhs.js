import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{N as p,u as d}from"./notification-center.provider-C4UJUDIP.js";import{C as c}from"./content-placeholder-Zq-SzD4A.js";import{B as l}from"./Box-DMp0MiFl.js";import{B as t}from"./Button-BeHrC0uU.js";import"./index-MPVjHJeJ.js";import"./Typography-DLQAKUPY.js";import"./generateUtilityClasses-ZVRInTit.js";import"./identifier-CqKYzcDD.js";import"./memoTheme-Mdb9V92W.js";import"./DefaultPropsProvider-DsKJO0Hi.js";import"./emotion-react.browser.esm-qvwvrbe5.js";import"./createSimplePaletteValueFilter-DPgxyE5U.js";import"./index-Co4SDwek.js";import"./extendSxProp-CYxjGvMX.js";import"./resolveComponentProps-CIZOP662.js";import"./useTheme-BF8Ncbmi.js";import"./useSlot-p0MVzPyR.js";import"./ClickAwayListener-B4_uifCL.js";import"./Grow-CbZFvkjr.js";import"./index-CY-aScCg.js";import"./index-Bzm33-PM.js";import"./Paper-BrCCIvcA.js";import"./Close-DGeI0zpO.js";import"./IconButton-DDxpHrRS.js";import"./CircularProgress-DAfSkrMo.js";import"./skeleton-grid-BkrQDtEv.js";import"./arrays-DN8njEnP.js";import"./skeleton-card-B1IEVblc.js";import"./Skeleton-CVbswXAj.js";import"./Grid-C9aPoWl3.js";import"./Container-HhYhRh-y.js";import"./styled-1zRV0hFD.js";import"./useThemeProps-DA--fVAZ.js";const i={title:"Internal Server error",message:"Unable to save the item"},T={title:"Components/Feedback/NotificationCenter",component:c,decorators:[n=>o.jsx(p,{children:o.jsx(n,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:n,hide:m}=d();return o.jsx(c,{size:3,p:2,children:o.jsxs(l,{pb:2,children:[o.jsx(t,{onClick:()=>n({...i,severity:"info"}),variant:"contained",children:"Show info"}),o.jsx(t,{onClick:()=>n({...i,severity:"success"}),variant:"contained",children:"Show success"}),o.jsx(t,{onClick:()=>n({...i,severity:"warning"}),variant:"contained",children:"Show warning"}),o.jsx(t,{onClick:()=>n({...i,severity:"error"}),variant:"contained",children:"Show error"}),o.jsx(t,{onClick:m,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,s,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const V=["Default"];export{r as Default,V as __namedExportsOrder,T as default};
