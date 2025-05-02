import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{N as p,u as d}from"./notification-center.provider-BELCKNoI.js";import{C as c}from"./content-placeholder-QyzwLaxU.js";import{B as l}from"./Box-qtFv-FAL.js";import{B as t}from"./Button-CuyBN5Mz.js";import"./index-MPVjHJeJ.js";import"./Typography-onhS7x9v.js";import"./generateUtilityClasses-DLmekfm-.js";import"./identifier-AWcriSoQ.js";import"./memoTheme-DlVnEjn-.js";import"./DefaultPropsProvider-DsKJO0Hi.js";import"./emotion-react.browser.esm-BfpurQfk.js";import"./createSimplePaletteValueFilter-DPgxyE5U.js";import"./index-C40_slqU.js";import"./extendSxProp-BeG7G82_.js";import"./resolveComponentProps-C6ngqkZn.js";import"./useTheme-DGVEPoVB.js";import"./useSlot-BtCt5ImH.js";import"./ClickAwayListener-DBe_3dQ_.js";import"./Grow-C1jt-nhT.js";import"./index-CY-aScCg.js";import"./index-Bzm33-PM.js";import"./Paper-C5PX7apq.js";import"./Close-D2L7LIV6.js";import"./IconButton-Ozf8R3HC.js";import"./CircularProgress-DQ5TipBg.js";import"./skeleton-grid-DPSHcixD.js";import"./arrays-DN8njEnP.js";import"./skeleton-card-CtaNVoi2.js";import"./Skeleton-BQXy7c4l.js";import"./Grid-BFTfWWd6.js";import"./Container-BHYBiLXC.js";import"./styled-B1TEfYIr.js";import"./useThemeProps-mN8LFFEn.js";const i={title:"Internal Server error",message:"Unable to save the item"},T={title:"Components/Feedback/NotificationCenter",component:c,decorators:[n=>o.jsx(p,{children:o.jsx(n,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:n,hide:m}=d();return o.jsx(c,{size:3,p:2,children:o.jsxs(l,{pb:2,children:[o.jsx(t,{onClick:()=>n({...i,severity:"info"}),variant:"contained",children:"Show info"}),o.jsx(t,{onClick:()=>n({...i,severity:"success"}),variant:"contained",children:"Show success"}),o.jsx(t,{onClick:()=>n({...i,severity:"warning"}),variant:"contained",children:"Show warning"}),o.jsx(t,{onClick:()=>n({...i,severity:"error"}),variant:"contained",children:"Show error"}),o.jsx(t,{onClick:m,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,s,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
