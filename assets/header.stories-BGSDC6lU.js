import{j as e}from"./iframe-DF1-CE8W.js";import{c as De,T as i}from"./Typography-DnRJLN7A.js";import{C as fe}from"./content-BMuOOta0.js";import{H as Te,T as Le}from"./header-DReFOgCm.js";import{L as ye}from"./label-CVr5-uaC.js";import{T as f}from"./tab-panel-Z0Q4LLPl.js";import{B as he}from"./Box-94sBtQLg.js";import"./generateUtilityClasses-ep8tZ6E9.js";import"./memoTheme-BiQeu4dL.js";import"./capitalize-BXHuhfc0.js";import"./createSimplePaletteValueFilter-DV0SZFES.js";import"./Container-MkmdmYpL.js";import"./styled-YCXQpnaK.js";import"./useThemeProps-Um56U43-.js";import"./theme-cTbikRh5.js";import"./useTheme-CzxbhnGL.js";import"./CircularProgress-P5Z1KMXE.js";import"./Button-Bg4vScNa.js";import"./Link-Bw2XHO1I.js";import"./useSlotProps-Bi130jt1.js";import"./resolveComponentProps-MDGWKvpl.js";import"./Tabs-D7nce7k8.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-D0dQqHhA.js";import"./useSlot-DkRJhMCp.js";const Se=De(e.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack"),{action:L}=__STORYBOOK_MODULE_ACTIONS__,t=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],a=[{id:"new",text:"Add",href:"/items/add"},{id:"edit",text:"Edit",onClick:L("click action edit")},{id:"disabled",text:"Disabled",disabled:!0,onClick:L("click action disabled")},{id:"delete",text:"Delete",onClick:L("click action delete")}],s=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],Qe={title:"Components/Data Display/Header",component:Te,parameters:{layout:"fullscreen"}},r={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:t,actions:a}},n={args:{title:"Lorem ipsum"}},l={args:{...r.args,title:e.jsxs(he,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(i,{variant:"h6",children:"Lorem ipsum"}),e.jsx(ye,{variant:"primary",text:"4 items",sx:{ml:1}})]})}},m={args:{...r.args,loadingTitle:!0}},c={args:{...r.args,subtitle:e.jsxs(he,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(i,{variant:"body2",children:"Dolor sit amet"}),e.jsx(ye,{variant:"error",text:"since yesterday",sx:{ml:1}})]})}},p={args:{...r.args,loadingSubtitle:!0}},d={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"inherit",breadcrumbs:t,tabs:s,actions:a}},u={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"primary",breadcrumbs:t,tabs:s,actions:a}},b={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"secondary",breadcrumbs:t,tabs:s,actions:a}},g={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:t,tabs:s,actions:a}},x={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"transparent",breadcrumbs:t,tabs:s,actions:a}},T={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet"}},y={args:{title:"Lorem ipsum",breadcrumbs:t}},h={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",tabsMode:"panel",breadcrumbs:t,actions:a}},o=()=>e.jsxs(Le,{children:[e.jsx(Te,{title:"Lorem ipsum",subtitle:"Dolor sit amet",tabsMode:"panel",tabs:s}),e.jsxs(fe,{children:[e.jsx(f,{index:0,children:e.jsx(i,{children:"Panel Tab 1"})}),e.jsx(f,{index:1,children:e.jsx(i,{children:"Panel Tab 2"})}),e.jsx(f,{index:2,children:e.jsx(i,{children:"Panel Tab 3"})})]})]}),D={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",navigationButton:{text:"Go back",href:"/back",icon:e.jsx(Se,{})}}};o.__docgenInfo={description:"",methods:[],displayName:"WithPanelTabs"};var S,C,P;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    breadcrumbs,
    actions
  }
}`,...(P=(C=r.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var j,v,B;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum"
  }
}`,...(B=(v=n.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var k,I,_;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="h6">Lorem ipsum</Typography>
        <Label variant="primary" text="4 items" sx={{
        ml: 1
      }} />
      </Box>
  }
}`,...(_=(I=l.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var W,w,O;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loadingTitle: true
  }
}`,...(O=(w=m.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var A,H,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    subtitle: <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="body2">Dolor sit amet</Typography>
        <Label variant="error" text="since yesterday" sx={{
        ml: 1
      }} />
      </Box>
  }
}`,...(M=(H=c.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var E,N,G;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loadingSubtitle: true
  }
}`,...(G=(N=p.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var R,z,K;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "inherit",
    breadcrumbs,
    tabs,
    actions
  }
}`,...(K=(z=d.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var U,Y,q;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "primary",
    breadcrumbs,
    tabs,
    actions
  }
}`,...(q=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var F,J,Q;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "secondary",
    breadcrumbs,
    tabs,
    actions
  }
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,X,Z;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    breadcrumbs,
    tabs,
    actions
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "transparent",
    breadcrumbs,
    tabs,
    actions
  }
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,se;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet"
  }
}`,...(se=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ie,ne;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    breadcrumbs
  }
}`,...(ne=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var le,me,ce;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    tabsMode: "panel",
    breadcrumbs,
    actions
  }
}`,...(ce=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,de,ue;o.parameters={...o.parameters,docs:{...(pe=o.parameters)==null?void 0:pe.docs,source:{originalSource:`() => <TabProvider>
    <Header title="Lorem ipsum" subtitle="Dolor sit amet" tabsMode="panel" tabs={tabs} />
    <Content>
      <TabPanel index={0}>
        <Typography>Panel Tab 1</Typography>
      </TabPanel>
      <TabPanel index={1}>
        <Typography>Panel Tab 2</Typography>
      </TabPanel>
      <TabPanel index={2}>
        <Typography>Panel Tab 3</Typography>
      </TabPanel>
    </Content>
  </TabProvider>`,...(ue=(de=o.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var be,ge,xe;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    navigationButton: {
      text: "Go back",
      href: "/back",
      icon: <ArrowBackIcon />
    }
  }
}`,...(xe=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};const Ve=["Default","OnlyTitle","CustomTitle","TitleLoading","CustomSubtitle","SubtitleLoading","ColorInherit","ColorPrimary","ColorSecondary","ColorDefault","ColorTransparent","WithSubheader","WithBreadcumbs","WithActions","WithPanelTabs","NavigationButton"];export{g as ColorDefault,d as ColorInherit,u as ColorPrimary,b as ColorSecondary,x as ColorTransparent,c as CustomSubtitle,l as CustomTitle,r as Default,D as NavigationButton,n as OnlyTitle,p as SubtitleLoading,m as TitleLoading,h as WithActions,y as WithBreadcumbs,o as WithPanelTabs,T as WithSubheader,Ve as __namedExportsOrder,Qe as default};
