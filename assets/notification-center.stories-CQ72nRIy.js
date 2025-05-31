import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{C as m}from"./content-placeholder-Bfz85duz.js";import{N as p,u as d}from"./notification-center.provider-NRwxa4Yv.js";import{B as l}from"./Box-CzrcP6gm.js";import{B as t}from"./Button-Dyh-ErXE.js";import"./skeleton-grid-CpCQcacq.js";import"./skeleton-card-dirtapzW.js";import"./Skeleton-CeUC3G2q.js";import"./index-MPVjHJeJ.js";import"./generateUtilityClasses-C0mA1QAX.js";import"./defaultTheme-D1CkU4eW.js";import"./memoTheme-L0vtuW4h.js";import"./DefaultPropsProvider-DsKJO0Hi.js";import"./emotion-react.browser.esm-B1ab5vTn.js";import"./arrays-DN8njEnP.js";import"./Grid-Ca03CLp9.js";import"./useTheme-CkEAvl6p.js";import"./extendSxProp-CacC3vWi.js";import"./Container-BOVquvyU.js";import"./styled-DU7v_UeT.js";import"./useThemeProps-BbkvGCaA.js";import"./capitalize-BKnSthTY.js";import"./ButtonBase-BNEyy1UI.js";import"./index-RWZtYoiK.js";import"./createSimplePaletteValueFilter-C8wpUTih.js";import"./resolveComponentProps-D7k8s6fM.js";import"./useSlot-D_Ed8wEH.js";import"./ClickAwayListener-CSxt-yVS.js";import"./Grow-CF5vml_o.js";import"./index-vJCRx9DD.js";import"./index-Bzm33-PM.js";import"./Paper-DuuDja31.js";import"./Close-Bd7fRRpH.js";import"./IconButton-poK4IEU9.js";import"./CircularProgress-D3NUXaEm.js";const i={title:"Internal Server error",message:"Unable to save the item"},V={title:"Components/Feedback/NotificationCenter",component:m,decorators:[n=>o.jsx(p,{children:o.jsx(n,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:n,hide:c}=d();return o.jsx(m,{size:3,p:2,children:o.jsxs(l,{pb:2,children:[o.jsx(t,{onClick:()=>n({...i,severity:"info"}),variant:"contained",children:"Show info"}),o.jsx(t,{onClick:()=>n({...i,severity:"success"}),variant:"contained",children:"Show success"}),o.jsx(t,{onClick:()=>n({...i,severity:"warning"}),variant:"contained",children:"Show warning"}),o.jsx(t,{onClick:()=>n({...i,severity:"error"}),variant:"contained",children:"Show error"}),o.jsx(t,{onClick:c,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,s,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
