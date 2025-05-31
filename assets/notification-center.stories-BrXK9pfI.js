import{j as n}from"./iframe-DF1-CE8W.js";import{C as c}from"./content-placeholder-DtFhRuPz.js";import{N as p,u as d}from"./notification-center.provider-BuC7hSZT.js";import{B as l}from"./Box-94sBtQLg.js";import{B as t}from"./Button-Bg4vScNa.js";import"./skeleton-grid-B7QzGX7O.js";import"./skeleton-card-D47h5LmQ.js";import"./Skeleton-CJ-WWJKF.js";import"./generateUtilityClasses-ep8tZ6E9.js";import"./memoTheme-BiQeu4dL.js";import"./arrays-DN8njEnP.js";import"./Grid-DccweqVM.js";import"./useTheme-CzxbhnGL.js";import"./Container-MkmdmYpL.js";import"./styled-YCXQpnaK.js";import"./useThemeProps-Um56U43-.js";import"./capitalize-BXHuhfc0.js";import"./Typography-DnRJLN7A.js";import"./createSimplePaletteValueFilter-DV0SZFES.js";import"./resolveComponentProps-MDGWKvpl.js";import"./useSlot-DkRJhMCp.js";import"./ClickAwayListener-BngSux_m.js";import"./Grow-VY7noeTZ.js";import"./index-EIGdvPod.js";import"./index-BFIYPmsr.js";import"./Paper-Cf1sSZwi.js";import"./Close-BLGPiyJW.js";import"./IconButton-DVduu1i_.js";import"./CircularProgress-P5Z1KMXE.js";const e={title:"Internal Server error",message:"Unable to save the item"},J={title:"Components/Feedback/NotificationCenter",component:c,decorators:[o=>n.jsx(p,{children:n.jsx(o,{})})],parameters:{layout:"fullscreen"}},r=()=>{const{show:o,hide:m}=d();return n.jsx(c,{size:3,p:2,children:n.jsxs(l,{pb:2,children:[n.jsx(t,{onClick:()=>o({...e,severity:"info"}),variant:"contained",children:"Show info"}),n.jsx(t,{onClick:()=>o({...e,severity:"success"}),variant:"contained",children:"Show success"}),n.jsx(t,{onClick:()=>o({...e,severity:"warning"}),variant:"contained",children:"Show warning"}),n.jsx(t,{onClick:()=>o({...e,severity:"error"}),variant:"contained",children:"Show error"}),n.jsx(t,{onClick:m,variant:"contained",children:"hide"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,s,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
