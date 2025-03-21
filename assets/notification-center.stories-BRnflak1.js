import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{N as p,u as d}from"./notification-center.provider-D8y3sSgq.js";import{C as c}from"./content-placeholder-CrgIoziW.js";import{B as l}from"./Box-GFssEyp-.js";import{B as t}from"./Button-BDSDs9oN.js";import"./index-CFahbR6w.js";import"./Typography-kEBT9KOp.js";import"./generateUtilityClasses-D-SxHVPw.js";import"./identifier-BgYKR63G.js";import"./memoTheme-DMhdsnBH.js";import"./DefaultPropsProvider-CoDhPOBZ.js";import"./emotion-react.browser.esm-zxExLa5N.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./index-iW7Z6w0e.js";import"./extendSxProp-BwMkgJDT.js";import"./resolveComponentProps-Cr8BEufl.js";import"./useTheme-4gy_rbmZ.js";import"./useSlot-CxWRxdBG.js";import"./ClickAwayListener-Dgn3xjyf.js";import"./Grow-DUOMFKMB.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./Paper-CKIh7Zii.js";import"./Close-vvyBwv4a.js";import"./IconButton-DAJ6x1dW.js";import"./CircularProgress-DZYD8Un3.js";import"./skeleton-grid-DPfcDEeF.js";import"./arrays-DN8njEnP.js";import"./skeleton-card-B3sk-Ix6.js";import"./Skeleton-BgDA9I_P.js";import"./Grid-7GKz2fft.js";import"./Container-CCloLR4j.js";import"./styled-Fyvs-mlI.js";import"./useThemeProps-BhaBqnWn.js";const i={title:"Internal Server error",message:"Unable to save the item"},T={title:"Components/Feedback/NotificationCenter",component:c,decorators:[n=>o.jsx(p,{children:o.jsx(n,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:n,hide:m}=d();return o.jsx(c,{size:3,p:2,children:o.jsxs(l,{pb:2,children:[o.jsx(t,{onClick:()=>n({...i,severity:"info"}),variant:"contained",children:"Show info"}),o.jsx(t,{onClick:()=>n({...i,severity:"success"}),variant:"contained",children:"Show success"}),o.jsx(t,{onClick:()=>n({...i,severity:"warning"}),variant:"contained",children:"Show warning"}),o.jsx(t,{onClick:()=>n({...i,severity:"error"}),variant:"contained",children:"Show error"}),o.jsx(t,{onClick:m,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,s,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
