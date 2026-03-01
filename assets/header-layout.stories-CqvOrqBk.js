import{r as d,u as T,j as o,c as h,x as y}from"./iframe-BOp0KoHw.js";import{S as I}from"./skeleton-grid-BcG54TJt.js";import{c as ee,w as te}from"./storybook-Do16VOkD.js";import{g as x,a as v,c as f,s as C,m as A}from"./memoTheme-JIGN605i.js";import{P as ae}from"./Paper-Bw76yxBx.js";import{T as U}from"./tab-panel-DBw3FO6H.js";import{H as oe}from"./header-layout-O5G_eRNc.js";import"./preload-helper-PPVm8Dsz.js";import"./skeleton-card-Byqgq6AV.js";import"./utils-BFne8Zvq.js";import"./notification-center-provider-PoIJU_Tq.js";import"./index-9QzqYQcq.js";import"./index-C7szOnQe.js";import"./loader-circle-qQxEsC5F.js";import"./createLucideIcon-DZ32gi55.js";import"./triangle-alert-BPrZaYjk.js";import"./sidebar-B9aCzTK8.js";import"./index-Bnpl_KYd.js";import"./button-CeFxFZak.js";import"./useRenderElement-Bx6ca6GP.js";import"./DirectionContext-DXfzSasD.js";import"./composite-D-UgRGj8.js";import"./x-C2irfWeI.js";import"./DialogTitle-B9dNSudn.js";import"./index-CpQ-kypr.js";import"./useRender-DckHBBRP.js";import"./tab-provider.provider-D4weS62S.js";import"./content-BszyI1VQ.js";import"./header-CFOsUNpy.js";import"./breadcrumbs-BEg4lcci.js";import"./chevron-right-BaBV-ZKi.js";import"./button-CULGPqEQ.js";import"./useCompositeItem-NTYu_eVU.js";import"./placeholder-DSlzV37G.js";const Q=d.createContext();function se(e){return x("MuiTable",e)}v("MuiTable",["root","stickyHeader"]);const ne=e=>{const{classes:t,stickyHeader:a}=e;return f({root:["root",a&&"stickyHeader"]},se,t)},re=C("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})(A(({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:t})=>t.stickyHeader,style:{borderCollapse:"separate"}}]}))),G="table",le=d.forwardRef(function(t,a){const s=T({props:t,name:"MuiTable"}),{className:r,component:n=G,padding:i="normal",size:l="medium",stickyHeader:c=!1,...u}=s,p={...s,component:n,padding:i,size:l,stickyHeader:c},R=ne(p),N=d.useMemo(()=>({padding:i,size:l,stickyHeader:c}),[i,l,c]);return o.jsx(Q.Provider,{value:N,children:o.jsx(re,{as:n,role:n===G?null:"table",ref:a,className:h(R.root,r),ownerState:p,...u})})}),z=d.createContext();function ie(e){return x("MuiTableBody",e)}v("MuiTableBody",["root"]);const ce=e=>{const{classes:t}=e;return f({root:["root"]},ie,t)},de=C("tbody",{name:"MuiTableBody",slot:"Root"})({display:"table-row-group"}),pe={variant:"body"},F="tbody",ue=d.forwardRef(function(t,a){const s=T({props:t,name:"MuiTableBody"}),{className:r,component:n=F,...i}=s,l={...s,component:n},c=ce(l);return o.jsx(z.Provider,{value:pe,children:o.jsx(de,{className:h(c.root,r),as:n,ref:a,role:n===F?null:"rowgroup",ownerState:l,...i})})});function me(e){return x("MuiTableCell",e)}const be=v("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),ge=e=>{const{classes:t,variant:a,align:s,padding:r,size:n,stickyHeader:i}=e,l={root:["root",a,i&&"stickyHeader",s!=="inherit"&&`align${y(s)}`,r!=="normal"&&`padding${y(r)}`,`size${y(n)}`]};return f(l,me,t)},ye=C("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${y(a.size)}`],a.padding!=="normal"&&t[`padding${y(a.padding)}`],a.align!=="inherit"&&t[`align${y(a.align)}`],a.stickyHeader&&t.stickyHeader]}})(A(({theme:e})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?e.lighten(e.alpha(e.palette.divider,1),.88):e.darken(e.alpha(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(e.vars||e).palette.text.primary}},{props:{variant:"footer"},style:{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${be.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:t})=>t.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}}]}))),b=d.forwardRef(function(t,a){const s=T({props:t,name:"MuiTableCell"}),{align:r="inherit",className:n,component:i,padding:l,scope:c,size:u,sortDirection:p,variant:R,...N}=s,m=d.useContext(Q),k=d.useContext(z),E=k&&k.variant==="head";let B;i?B=i:B=E?"th":"td";let j=c;B==="td"?j=void 0:!j&&E&&(j="col");const _=R||k&&k.variant,O={...s,align:r,component:B,padding:l||(m&&m.padding?m.padding:"normal"),size:u||(m&&m.size?m.size:"medium"),sortDirection:p,stickyHeader:_==="head"&&m&&m.stickyHeader,variant:_},Z=ge(O);let q=null;return p&&(q=p==="asc"?"ascending":"descending"),o.jsx(ye,{as:B,ref:a,className:h(Z.root,n),"aria-sort":q,scope:j,ownerState:O,...N})});function Te(e){return x("MuiTableContainer",e)}v("MuiTableContainer",["root"]);const he=e=>{const{classes:t}=e;return f({root:["root"]},Te,t)},xe=C("div",{name:"MuiTableContainer",slot:"Root"})({width:"100%",overflowX:"auto"}),ve=d.forwardRef(function(t,a){const s=T({props:t,name:"MuiTableContainer"}),{className:r,component:n="div",...i}=s,l={...s,component:n},c=he(l);return o.jsx(xe,{ref:a,as:n,className:h(c.root,r),ownerState:l,...i})});function fe(e){return x("MuiTableHead",e)}v("MuiTableHead",["root"]);const Ce=e=>{const{classes:t}=e;return f({root:["root"]},fe,t)},Pe=C("thead",{name:"MuiTableHead",slot:"Root"})({display:"table-header-group"}),we={variant:"head"},W="thead",Re=d.forwardRef(function(t,a){const s=T({props:t,name:"MuiTableHead"}),{className:r,component:n=W,...i}=s,l={...s,component:n},c=Ce(l);return o.jsx(z.Provider,{value:we,children:o.jsx(Pe,{as:n,className:h(c.root,r),ref:a,role:n===W?null:"rowgroup",ownerState:l,...i})})});function Be(e){return x("MuiTableRow",e)}const J=v("MuiTableRow",["root","selected","hover","head","footer"]),ke=e=>{const{classes:t,selected:a,hover:s,head:r,footer:n}=e;return f({root:["root",a&&"selected",s&&"hover",r&&"head",n&&"footer"]},Be,t)},je=C("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})(A(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${J.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${J.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`)}}}))),K="tr",X=d.forwardRef(function(t,a){const s=T({props:t,name:"MuiTableRow"}),{className:r,component:n=K,hover:i=!1,selected:l=!1,...c}=s,u=d.useContext(z),p={...s,component:n,hover:i,selected:l,head:u&&u.variant==="head",footer:u&&u.variant==="footer"},R=ke(p);return o.jsx(je,{as:n,ref:a,className:h(R.root,r),role:n===K?null:"row",ownerState:p,...c})}),De=[{id:1,name:"Item A",status:"Active",date:"2024-01-15"},{id:2,name:"Item B",status:"Pending",date:"2024-01-16"},{id:3,name:"Item C",status:"Active",date:"2024-01-17"}],V=()=>o.jsx(ve,{component:ae,elevation:0,children:o.jsxs(le,{size:"small",children:[o.jsx(Re,{children:o.jsxs(X,{children:[o.jsx(b,{children:"ID"}),o.jsx(b,{children:"Name"}),o.jsx(b,{children:"Status"}),o.jsx(b,{children:"Date"})]})}),o.jsx(ue,{children:De.map(e=>o.jsxs(X,{children:[o.jsx(b,{children:e.id}),o.jsx(b,{children:e.name}),o.jsx(b,{children:e.status}),o.jsx(b,{children:e.date})]},e.id))})]})});V.__docgenInfo={description:"",methods:[],displayName:"TablePlaceholder"};const{expect:g,userEvent:Y,within:He}=__STORYBOOK_MODULE_TEST__,P=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],w=[{id:"new",text:"Add"}],Se=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],ut={title:"Layouts/HeaderLayout",component:oe,decorators:[ee,te],parameters:{layout:"fullscreen"}},D={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:P,actions:w}},children:o.jsx(I,{})}},H={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:P,actions:w}},children:o.jsx(V,{})}},S={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:P,actions:w,tabs:Se,tabsMode:"panel"}},children:o.jsxs("div",{children:[o.jsx(U,{index:0,children:"Panel 1"}),o.jsx(U,{index:1,children:"Panel 2"}),o.jsx(U,{index:2,children:"Panel 3"})]})},play:async({canvasElement:e})=>{const t=He(e),a=t.getByRole("tab",{name:"Tab 1"}),s=t.getByRole("tab",{name:"Tab 2"}),r=t.getByRole("tab",{name:"Tab 3"});g(s).toHaveAttribute("aria-disabled","true"),g(t.getByText("Panel 1")).toBeInTheDocument(),g(t.queryByText("Panel 2")).not.toBeInTheDocument(),g(t.queryByText("Panel 3")).not.toBeInTheDocument(),await Y.click(r),g(t.queryByText("Panel 1")).not.toBeInTheDocument(),g(t.getByText("Panel 3")).toBeInTheDocument(),await Y.click(a),g(t.getByText("Panel 1")).toBeInTheDocument()}},M={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:P,actions:w}},children:o.jsx(I,{})}},$={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:P,actions:w}},children:o.jsx(I,{})}},L={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:P,actions:w}},children:o.jsx(I,{})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions
      }
    },
    children: <SkeletonGrid />
  }
}`,...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions
      }
    },
    children: <TablePlaceholder />
  }
}`,...H.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
        tabs,
        tabsMode: "panel"
      }
    },
    children: <div>
        <TabPanel index={0}>Panel 1</TabPanel>
        <TabPanel index={1}>Panel 2</TabPanel>
        <TabPanel index={2}>Panel 3</TabPanel>
      </div>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tab1 = canvas.getByRole("tab", {
      name: "Tab 1"
    });
    const tab2 = canvas.getByRole("tab", {
      name: "Tab 2"
    });
    const tab3 = canvas.getByRole("tab", {
      name: "Tab 3"
    });
    expect(tab2).toHaveAttribute("aria-disabled", "true");
    expect(canvas.getByText("Panel 1")).toBeInTheDocument();
    expect(canvas.queryByText("Panel 2")).not.toBeInTheDocument();
    expect(canvas.queryByText("Panel 3")).not.toBeInTheDocument();
    await userEvent.click(tab3);
    expect(canvas.queryByText("Panel 1")).not.toBeInTheDocument();
    expect(canvas.getByText("Panel 3")).toBeInTheDocument();
    await userEvent.click(tab1);
    expect(canvas.getByText("Panel 1")).toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions
      }
    },
    children: <SkeletonGrid />
  }
}`,...M.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: true,
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions
      }
    },
    children: <SkeletonGrid />
  }
}`,...$.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    error: {
      message: "There is no user with that id"
    },
    slotProps: {
      header: {
        breadcrumbs,
        actions
      }
    },
    children: <SkeletonGrid />
  }
}`,...L.parameters?.docs?.source}}};const mt=["Skeleton","DataTable","Tabs","Loading","Fetching","Error"];export{H as DataTable,L as Error,$ as Fetching,M as Loading,D as Skeleton,S as Tabs,mt as __namedExportsOrder,ut as default};
