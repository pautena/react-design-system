import{j as t,G as _,r as p,f as ae,i as ne}from"./iframe-Bf5-ajDf.js";import{u as re}from"./theme-CNz4RbzJ.js";import{u as P}from"./useTheme-BkpYa0dr.js";import{C as $}from"./CircularProgress-CAtrJVii.js";import{T as V}from"./Typography-CAHfUSwG.js";import{B as H}from"./Box-Dh__eHRG.js";import{C as oe}from"./Container-HJW5YxB0.js";import{B as W}from"./Button-n-T55MPp.js";import{s as w,m as ie,g as se,a as le,b as de}from"./memoTheme-rYOwdVL2.js";import{c as ce}from"./createSvgIcon-BTC8lzaD.js";import{B as ue}from"./ButtonBase-DOY-mQq5.js";import{u as pe}from"./useSlotProps-DGtWjtOa.js";import{L as I}from"./Link-7DJSvBYe.js";import{T as me,a as be}from"./Tabs-GJ1QQX60.js";const fe=ce(t.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),he=w(ue,{name:"MuiBreadcrumbCollapsed"})(ie(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:_(e.palette.grey[200],.12)}:{backgroundColor:_(e.palette.grey[600],.12)}}}))),ge=w(fe)({width:24,height:16});function ye(e){const{slots:a={},slotProps:o={},...d}=e,i=e;return t.jsx("li",{children:t.jsx(he,{focusRipple:!0,...d,ownerState:i,children:t.jsx(ge,{as:a.CollapsedIcon,ownerState:i,...o.collapsedIcon})})})}function xe(e){return se("MuiBreadcrumbs",e)}const Ce=le("MuiBreadcrumbs",["root","ol","li","separator"]),ve=e=>{const{classes:a}=e;return de({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},xe,a)},Te=w(V,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,a)=>[{[`& .${Ce.li}`]:a.li},a.root]})({}),Be=w("ol",{name:"MuiBreadcrumbs",slot:"Ol"})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),we=w("li",{name:"MuiBreadcrumbs",slot:"Separator"})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function je(e,a,o,d){return e.reduce((i,h,c)=>(c<e.length-1?i=i.concat(h,t.jsx(we,{"aria-hidden":!0,className:a,ownerState:d,children:o},`separator-${c}`)):i.push(h),i),[])}const Se=p.forwardRef(function(a,o){const d=ae({props:a,name:"MuiBreadcrumbs"}),{children:i,className:h,component:c="nav",slots:g={},slotProps:j={},expandText:C="Show path",itemsAfterCollapse:u=1,itemsBeforeCollapse:v=1,maxItems:n=8,separator:r="/",...l}=d,[S,N]=p.useState(!1),m={...d,component:c,expanded:S,expandText:C,itemsAfterCollapse:u,itemsBeforeCollapse:v,maxItems:n,separator:r},y=ve(m),A=pe({elementType:g.CollapsedIcon,externalSlotProps:j.collapsedIcon,ownerState:m}),k=p.useRef(null),z=s=>{const B=()=>{N(!0);const q=k.current.querySelector("a[href],button,[tabindex]");q&&q.focus()};return v+u>=s.length?s:[...s.slice(0,v),t.jsx(ye,{"aria-label":C,slots:{CollapsedIcon:g.CollapsedIcon},slotProps:{collapsedIcon:A},onClick:B},"ellipsis"),...s.slice(s.length-u,s.length)]},T=p.Children.toArray(i).filter(s=>p.isValidElement(s)).map((s,B)=>t.jsx("li",{className:y.li,children:s},`child-${B}`));return t.jsx(Te,{ref:o,component:c,color:"textSecondary",className:ne(y.root,h),ownerState:m,...l,children:t.jsx(Be,{className:y.ol,ref:k,ownerState:m,children:je(S||n&&T.length<=n?T:z(T),y.separator,r,m)})})}),D=p.createContext([0,()=>null]),ke=D.Provider,qe=()=>p.useContext(D),Re=({children:e,initialValue:a=0})=>{const o=p.useState(a);return t.jsx(ke,{value:o,children:e})};Re.__docgenInfo={description:"",methods:[],displayName:"TabProvider",props:{initialValue:{defaultValue:{value:"0",computed:!1},required:!1}}};function O({loading:e,children:a}){const{typography:o}=P();return e?t.jsx($,{color:"inherit",size:o.h4.fontSize,"aria-label":"title loading"}):typeof a=="string"?t.jsx(V,{variant:"h4",role:"heading","aria-level":1,children:a}):t.jsx(t.Fragment,{children:a})}function F({loading:e,children:a}){const{typography:o}=P();return e?t.jsx($,{color:"inherit",size:o.body1.fontSize,"aria-label":"subtitle loading"}):typeof a=="string"?t.jsx(V,{variant:"body1",role:"heading","aria-level":2,children:a}):t.jsx(t.Fragment,{children:a})}O.__docgenInfo={description:"Header title component with optional loading state",methods:[],displayName:"HeaderTitle",props:{loading:{required:!1,tsType:{name:"boolean"},description:"Whether to show a loading indicator"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The title content to display"}}};F.__docgenInfo={description:"Header subtitle component with optional loading state",methods:[],displayName:"HeaderSubtitle",props:{loading:{required:!1,tsType:{name:"boolean"},description:"Whether to show a loading indicator"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The subtitle content to display"}}};function He({title:e="",loadingTitle:a,subtitle:o,loadingSubtitle:d,preset:i="default",actionsVariant:h="outlined",breadcrumbs:c,actions:g,tabs:j,tabsMode:C="navigation",navigationButton:u,border:v=!1,slots:n,slotProps:r}){const{palette:l}=P(),S=re(),[N,m]=qe(),y=n?.root??H,A=n?.container??oe,k=n?.contentContainer??H,z=n?.titleContainer??H,T=n?.navigationButton??W,s=n?.breadcrumbs??Se,B=n?.breadcrumbLink??I,q=n?.title??O,G=n?.subtitle??F,J=n?.actionsContainer??H,K=n?.actionButton??W,Q=n?.tabs??me,M=n?.tab??be,U={default:S,primary:l.primary.main,secondary:l.secondary.main,inherit:"inherit",transparent:"transparent",paper:l.background.paper},X=U[i],Y={default:l.getContrastText(U.default),primary:l.primary.contrastText,secondary:l.secondary.contrastText,inherit:"inherit",transparent:l.text.primary,paper:l.text.primary}[i],Z=N;return t.jsx(y,{bgcolor:X,color:Y,sx:v?{borderBottom:1,borderColor:"divider"}:void 0,...r?.root,children:t.jsxs(A,{...r?.container,children:[t.jsxs(k,{sx:{py:3,display:"flex",flexDirection:"row",justifyContent:"space-between"},...r?.contentContainer,children:[t.jsxs(z,{...r?.titleContainer,children:[u&&t.jsx(T,{href:u.href,size:"small",color:"inherit",LinkComponent:I,startIcon:u.icon,sx:{mb:1},...r?.navigationButton,children:u.text}),c?.length&&t.jsx(s,{color:"inherit",separator:"›","aria-label":"breadcrumb",sx:{marginTop:1},...r?.breadcrumbs,children:c.map(({id:b,link:f,text:x})=>t.jsx(B,{underline:"hover",color:"inherit",href:f,variant:"body2",role:"link",...r?.breadcrumbLink,children:x},b))}),t.jsx(q,{loading:a,...r?.title,children:e}),(o||d)&&t.jsx(G,{loading:d,...r?.subtitle,children:o})]}),g&&t.jsx(J,{display:"flex",alignItems:"center",...r?.actionsContainer,children:g.map(({disabled:b,id:f,href:x,onClick:L,text:E,variant:R,color:ee},te)=>t.jsx(K,{component:x?I:"button",role:"button",color:ee??"inherit",disabled:b,variant:R??h,size:"small",href:x,onClick:L,sx:{mr:te!==g.length-1?1:0},...r?.actionButton,children:E},f))})]}),j&&t.jsx(Q,{value:Z,textColor:"inherit",onChange:C==="panel"?(b,f)=>m(f):void 0,...r?.tabs,children:j.map(({id:b,label:f,disabled:x,path:L,href:E})=>{const R={label:f,disabled:x};return C==="panel"?t.jsx(M,{...R,...r?.tab},b):t.jsx(M,{...R,component:I,href:E,value:L,...r?.tab},b)})})]})})}He.__docgenInfo={description:`Section used to provide basic information about the page
and display main actions

Supports extensive customization through slots and slotProps.
Each internal element (breadcrumbs, title, actions, tabs) can be
customized or replaced.

@example
\`\`\`tsx
// Basic usage
<Header
  title="Dashboard"
  subtitle="Welcome back"
  breadcrumbs={[{id: '1', text: 'Home', link: '/'}]}
  actions={[{id: 'add', text: 'Add', onClick: handleAdd}]}
/>

// Custom breadcrumb separator
<Header
  title="Settings"
  breadcrumbs={breadcrumbs}
  slotProps={{
    breadcrumbs: { separator: '/' }
  }}
/>

// Custom action button styling
<Header
  title="Users"
  actions={actions}
  slotProps={{
    actionButton: { size: 'large', variant: 'contained' }
  }}
/>
\`\`\``,methods:[],displayName:"Header",props:{title:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:"Title of the header",defaultValue:{value:'""',computed:!1}},loadingTitle:{required:!1,tsType:{name:"boolean"},description:"Show a loading indicator in the title position"},subtitle:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:"Subtitle of the header"},loadingSubtitle:{required:!1,tsType:{name:"boolean"},description:"Show a loading indicator in the subtitle position"},preset:{required:!1,tsType:{name:"union",raw:'PropTypes.Color | "transparent" | "paper"',elements:[{name:"PropTypes.Color"},{name:"literal",value:'"transparent"'},{name:"literal",value:'"paper"'}]},description:"Color palete used to render the component",defaultValue:{value:'"default"',computed:!1}},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"HeaderBreadcrumb"}],raw:"HeaderBreadcrumb[]"},description:`List of breadcumbs to represent the path to reach
the page that we are`},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier
   */
  id: string;
  /**
   * Button text label
   */
  text: string;
  /**
   * Whether the action is disabled
   */
  disabled?: boolean;
  /**
   * Navigation URL when clicked
   */
  href?: string;
  /**
   * Click handler function
   */
  onClick?: () => void;
  /**
   * Button style variant
   * @default "contained"
   */
  variant?: HeaderActionVariant;
  /**
   * Button color theme
   * @default "primary"
   */
  color?: HeaderActionColor;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier"},{key:"text",value:{name:"string",required:!0},description:"Button text label"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether the action is disabled"},{key:"href",value:{name:"string",required:!1},description:"Navigation URL when clicked"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Click handler function"},{key:"variant",value:{name:"union",raw:'"text" | "outlined" | "contained"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"contained"'}],required:!1},description:`Button style variant
@default "contained"`},{key:"color",value:{name:"union",raw:`| "inherit"
| "primary"
| "secondary"
| "success"
| "error"
| "info"
| "warning"`,elements:[{name:"literal",value:'"inherit"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'}],required:!1},description:`Button color theme
@default "primary"`}]}}],raw:"HeaderAction[]"},description:`List of actions that can be performed by the user.
Each action will be a button in the header.`},actionsVariant:{required:!1,tsType:{name:"union",raw:'"text" | "outlined" | "contained"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"contained"'}]},description:"Variant used to render the actions",defaultValue:{value:'"outlined"',computed:!1}},tabs:{required:!1,tsType:{name:"Array",elements:[{name:"HeaderTab"}],raw:"HeaderTab[]"},description:"If is set, a list of tabs is dispayed at the bottom"},tabsMode:{required:!1,tsType:{name:"union",raw:'"panel" | "navigation"',elements:[{name:"literal",value:'"panel"'},{name:"literal",value:'"navigation"'}]},description:`The tabs will work using
- a panel container (panel)
- using a the navigation system (navigation).`,defaultValue:{value:'"navigation"',computed:!1}},navigationButton:{required:!1,tsType:{name:"HeaderNavigationButton"},description:`A single button that helps the user to navigate to
a screen related to the current screen`},border:{required:!1,tsType:{name:"boolean"},description:"Whether to display a border at the bottom of the header",defaultValue:{value:"false",computed:!1}},slots:{required:!1,tsType:{name:"HeaderSlots"},description:"Optional slots for custom rendering within the header"},slotProps:{required:!1,tsType:{name:"HeaderSlotProps"},description:"Optional props for the slots"}}};export{He as H,Re as T,qe as u};
