import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{N as p,u as d}from"./notification-center.provider-zQQfevSj.js";import{C as m}from"./content-placeholder-2kMeqQ5_.js";import{B as l}from"./Box-0-Tyqcm1.js";import{B as t}from"./Button-DIAwl1fo.js";import"./index-MPVjHJeJ.js";import"./Typography-CyG_osfu.js";import"./generateUtilityClasses-BktTZPgl.js";import"./identifier-DNvq2pxS.js";import"./memoTheme-BcQRFLl-.js";import"./DefaultPropsProvider-DsKJO0Hi.js";import"./capitalize-BAmrW1px.js";import"./emotion-react.browser.esm-By2wk1sz.js";import"./createSimplePaletteValueFilter-C8wpUTih.js";import"./index-CfQGRItp.js";import"./extendSxProp-Bje7bXD4.js";import"./resolveComponentProps-DoQ0TnDj.js";import"./useTheme-CPdeOTZ4.js";import"./useSlot-DotCfz4C.js";import"./ClickAwayListener-CeZGyw_Z.js";import"./Grow-CR1pdftr.js";import"./index-vJCRx9DD.js";import"./index-Bzm33-PM.js";import"./Paper-FGekKhYT.js";import"./Close-Bp27t3Dr.js";import"./IconButton-iRnWSj6z.js";import"./CircularProgress--HHt6BCj.js";import"./skeleton-grid-Lq1Q2nol.js";import"./arrays-DN8njEnP.js";import"./skeleton-card-CXnLXTG2.js";import"./Skeleton-DxKL-mFO.js";import"./Grid-pZna8s08.js";import"./Container-DNHF5_Ad.js";import"./styled-bx67Emj6.js";import"./useThemeProps-DHy3-fAy.js";const i={title:"Internal Server error",message:"Unable to save the item"},V={title:"Components/Feedback/NotificationCenter",component:m,decorators:[n=>o.jsx(p,{children:o.jsx(n,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:n,hide:c}=d();return o.jsx(m,{size:3,p:2,children:o.jsxs(l,{pb:2,children:[o.jsx(t,{onClick:()=>n({...i,severity:"info"}),variant:"contained",children:"Show info"}),o.jsx(t,{onClick:()=>n({...i,severity:"success"}),variant:"contained",children:"Show success"}),o.jsx(t,{onClick:()=>n({...i,severity:"warning"}),variant:"contained",children:"Show warning"}),o.jsx(t,{onClick:()=>n({...i,severity:"error"}),variant:"contained",children:"Show error"}),o.jsx(t,{onClick:c,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,s,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const W=["Default"];export{r as Default,W as __namedExportsOrder,V as default};
