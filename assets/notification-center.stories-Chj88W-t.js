import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{N as p,u as d}from"./notification-center.provider-BNDZvRPM.js";import{C as c}from"./content-placeholder-f-OVdOVO.js";import{B as l}from"./Box-TC8t5Mes.js";import{B as t}from"./Button-DXBGL2Bf.js";import"./index-CFahbR6w.js";import"./Typography-BHoRv_UT.js";import"./generateUtilityClasses-DuX1QiOS.js";import"./identifier-BgYKR63G.js";import"./memoTheme-CBZDwJAx.js";import"./DefaultPropsProvider-CoDhPOBZ.js";import"./emotion-react.browser.esm-zxExLa5N.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./index-iW7Z6w0e.js";import"./extendSxProp-BwMkgJDT.js";import"./resolveComponentProps-hmdrCTBm.js";import"./useTheme-4gy_rbmZ.js";import"./useSlot-nPjAgQtl.js";import"./ClickAwayListener-DudWtlIt.js";import"./Grow-lPLudiBQ.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./Paper-CjO-mYoO.js";import"./Close-Ciaj37At.js";import"./IconButton-BsiGod7k.js";import"./CircularProgress-CfAkpgYB.js";import"./skeleton-grid-BPmkskTI.js";import"./arrays-DN8njEnP.js";import"./skeleton-card-CJIjPIqf.js";import"./Skeleton-DXkS5h5V.js";import"./Grid-DT1OaBEq.js";import"./Container-C5Nb5XrP.js";import"./styled-BFylpJ-T.js";import"./useThemeProps-BhaBqnWn.js";const i={title:"Internal Server error",message:"Unable to save the item"},T={title:"Components/Feedback/NotificationCenter",component:c,decorators:[n=>o.jsx(p,{children:o.jsx(n,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:n,hide:m}=d();return o.jsx(c,{size:3,p:2,children:o.jsxs(l,{pb:2,children:[o.jsx(t,{onClick:()=>n({...i,severity:"info"}),variant:"contained",children:"Show info"}),o.jsx(t,{onClick:()=>n({...i,severity:"success"}),variant:"contained",children:"Show success"}),o.jsx(t,{onClick:()=>n({...i,severity:"warning"}),variant:"contained",children:"Show warning"}),o.jsx(t,{onClick:()=>n({...i,severity:"error"}),variant:"contained",children:"Show error"}),o.jsx(t,{onClick:m,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,s,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
