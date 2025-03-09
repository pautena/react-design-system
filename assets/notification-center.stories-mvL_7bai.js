import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{N as p,u as d}from"./notification-center.provider-BTkGblW5.js";import{C as m}from"./content-placeholder--lHrfZe9.js";import{B as l}from"./Box-CohR-H6x.js";import{B as t}from"./Button-CRc0Eyhl.js";import"./index-CFahbR6w.js";import"./Typography-ByJtF3w8.js";import"./generateUtilityClasses-F-VSJTCv.js";import"./identifier-CAo-jtr-.js";import"./memoTheme-DEu9pJpV.js";import"./DefaultPropsProvider-CoDhPOBZ.js";import"./emotion-react.browser.esm-3FlxQS88.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./index-CGHpqm4L.js";import"./extendSxProp-BvoZt83L.js";import"./resolveComponentProps-C6NMVkEU.js";import"./useTheme-BLxwKqlM.js";import"./useSlot-N3pciUg7.js";import"./ClickAwayListener-BKgkYejO.js";import"./Grow-2Tfe9bro.js";import"./index-BHL8jL0s.js";import"./index-chp1rBSu.js";import"./Paper-F-UPHvIG.js";import"./Alert-BP5pwJe5.js";import"./Close-CgV9NucM.js";import"./IconButton-ez-CP-G1.js";import"./CircularProgress-8aVj90tP.js";import"./skeleton-grid-BzCo_bKk.js";import"./arrays-DN8njEnP.js";import"./skeleton-card-DGfodN8j.js";import"./Skeleton-CL2KNp-n.js";import"./Grid-BUgJ8WKb.js";import"./Container-BnYRtWN1.js";import"./styled-c3B0WkF5.js";import"./useThemeProps-DgFt-1LU.js";const i={title:"Internal Server error",message:"Unable to save the item"},V={title:"Components/Feedback/NotificationCenter",component:m,decorators:[n=>o.jsx(p,{children:o.jsx(n,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:n,hide:c}=d();return o.jsx(m,{size:3,p:2,children:o.jsxs(l,{pb:2,children:[o.jsx(t,{onClick:()=>n({...i,severity:"info"}),variant:"contained",children:"Show info"}),o.jsx(t,{onClick:()=>n({...i,severity:"success"}),variant:"contained",children:"Show success"}),o.jsx(t,{onClick:()=>n({...i,severity:"warning"}),variant:"contained",children:"Show warning"}),o.jsx(t,{onClick:()=>n({...i,severity:"error"}),variant:"contained",children:"Show error"}),o.jsx(t,{onClick:c,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,s,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
