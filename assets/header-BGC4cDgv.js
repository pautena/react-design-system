import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B}from"./breadcrumbs-DKD8iAu_.js";import{B as c}from"./button-D4VIYb2m.js";import{T as C,a as V,b as A}from"./tabs-CvsfqMsb.js";import{a as m}from"./utils-DDt1maD9.js";import{u as L}from"./tab-provider.provider-CGA9V91d.js";import{L as p}from"./loader-circle-CkoGHPVG.js";function f({loading:t,children:a,...n}){return t?e.jsx(p,{role:"progressbar","aria-label":"title loading",className:"h-8 w-8 animate-spin"}):typeof a=="string"?e.jsx("h1",{className:"text-3xl font-semibold",...n,children:a}):e.jsx(e.Fragment,{children:a})}function b({loading:t,children:a,...n}){return t?e.jsx(p,{role:"progressbar","aria-label":"subtitle loading",className:"h-4 w-4 animate-spin"}):typeof a=="string"?e.jsx("h2",{className:"text-base text-muted-foreground",...n,children:a}):e.jsx(e.Fragment,{children:a})}f.__docgenInfo={description:"Header title component with optional loading state.",methods:[],displayName:"HeaderTitle",props:{loading:{required:!1,tsType:{name:"boolean"},description:"Whether to show a loading indicator."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The title content to display."}},composes:["HTMLAttributes"]};b.__docgenInfo={description:"Header subtitle component with optional loading state.",methods:[],displayName:"HeaderSubtitle",props:{loading:{required:!1,tsType:{name:"boolean"},description:"Whether to show a loading indicator."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The subtitle content to display."}},composes:["HTMLAttributes"]};const S={default:"bg-muted",primary:"bg-primary",secondary:"bg-secondary",inherit:"bg-inherit",transparent:"bg-transparent",paper:"bg-card"},I={default:"text-foreground",primary:"text-primary-foreground",secondary:"text-secondary-foreground",inherit:"text-inherit",transparent:"text-foreground",paper:"text-foreground"},_={inherit:"default",primary:"primary",secondary:"secondary",success:"success",error:"error",info:"info",warning:"warning"};function E(t,a){return t==="outlined"?"outline":t==="text"?"ghost":_[a??"primary"]}function W({title:t="",subtitle:a,preset:n="default",actionsVariant:g="outlined",breadcrumbs:h,breadcrumbSeparator:y,actions:d,tabs:s,tabsMode:x="navigation",navigationButton:l,border:v=!1}){const[T,w]=L(),q=s?.[T]?.id??s?.[0]?.id;return e.jsx("section",{className:m(S[n],I[n],v&&"border-b"),children:e.jsxs("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-row justify-between py-6",children:[e.jsxs("div",{children:[l?e.jsxs(c,{variant:"link",size:"sm",className:"mb-2 h-auto p-0 text-sm",onClick:()=>{window.location.assign(l.href)},children:[l.icon,l.text]}):null,e.jsx(B,{items:h,className:"mt-0.5",separator:y}),e.jsx(f,{children:t}),a?e.jsx(b,{children:a}):null]}),d?e.jsx("div",{className:"flex items-center gap-2",children:d.map(({color:r,disabled:i,id:o,href:u,onClick:N,text:j,variant:H},k)=>{const R=H??g;return e.jsx(c,{type:"button",size:"sm",variant:E(R,r),disabled:i,onClick:()=>{N?.(),u&&window.location.assign(u)},className:m(k!==d.length-1&&"mr-1"),children:j},o)})}):null]}),s?e.jsx(C,{value:q,onValueChange:r=>{const i=s.findIndex(o=>o.id===r);x==="panel"&&i>=0&&w(i)},className:"py-2",children:e.jsx(V,{className:"mx-auto h-auto",children:s.map(({id:r,label:i,disabled:o})=>e.jsx(A,{value:r,disabled:o,className:"px-2.5 py-1 text-sm data-active:font-semibold",children:i},r))})}):null]})})}W.__docgenInfo={description:"Section used to provide basic information about the page and display main actions.",methods:[],displayName:"Header",props:{title:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:"Title of the header.",defaultValue:{value:'""',computed:!1}},subtitle:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:"Subtitle of the header."},preset:{required:!1,tsType:{name:"union",raw:`| "default"
| "inherit"
| "primary"
| "secondary"
| "transparent"
| "paper"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"inherit"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"paper"'}]},description:"Color preset used by the component.",defaultValue:{value:'"default"',computed:!1}},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"HeaderBreadcrumb"}],raw:"HeaderBreadcrumb[]"},description:"List of breadcrumbs."},breadcrumbSeparator:{required:!1,tsType:{name:"string"},description:"Separator rendered between breadcrumb items."},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier.
   */
  id: string;
  /**
   * Button text label.
   */
  text: string;
  /**
   * Whether the action is disabled.
   */
  disabled?: boolean;
  /**
   * Navigation URL when clicked.
   */
  href?: string;
  /**
   * Click handler function.
   */
  onClick?: () => void;
  /**
   * Button style variant.
   */
  variant?: HeaderActionVariant;
  /**
   * Button color theme.
   */
  color?: HeaderActionColor;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier."},{key:"text",value:{name:"string",required:!0},description:"Button text label."},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether the action is disabled."},{key:"href",value:{name:"string",required:!1},description:"Navigation URL when clicked."},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Click handler function."},{key:"variant",value:{name:"union",raw:'"text" | "outlined" | "contained"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"contained"'}],required:!1},description:"Button style variant."},{key:"color",value:{name:"union",raw:`| "inherit"
| "primary"
| "secondary"
| "success"
| "error"
| "info"
| "warning"`,elements:[{name:"literal",value:'"inherit"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'}],required:!1},description:"Button color theme."}]}}],raw:"HeaderAction[]"},description:"List of actions that can be performed by the user."},actionsVariant:{required:!1,tsType:{name:"union",raw:'"text" | "outlined" | "contained"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"contained"'}]},description:`Variant used to render actions.
@default "outlined"`,defaultValue:{value:'"outlined"',computed:!1}},tabs:{required:!1,tsType:{name:"Array",elements:[{name:"HeaderTab"}],raw:"HeaderTab[]"},description:"Tabs rendered at the bottom."},tabsMode:{required:!1,tsType:{name:"union",raw:'"panel" | "navigation"',elements:[{name:"literal",value:'"panel"'},{name:"literal",value:'"navigation"'}]},description:"Tabs mode.",defaultValue:{value:'"navigation"',computed:!1}},navigationButton:{required:!1,tsType:{name:"HeaderNavigationButton"},description:"Optional navigation button."},border:{required:!1,tsType:{name:"boolean"},description:"Whether to display a border at the bottom.",defaultValue:{value:"false",computed:!1}}}};export{W as H};
