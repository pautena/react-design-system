import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as l}from"./loading-area-Bz7QugPc.js";import{T as d}from"./tab-provider.provider-Dk3QnvZS.js";import{R as u}from"./ReportProblem-BxW_9OXn.js";import{P as m}from"./placeholder-BLeJ8SXY.js";import{B as t}from"./Box-CohR-H6x.js";import{L as c}from"./LinearProgress-8-13sGHv.js";const p=()=>e.jsx(u,{color:"error",sx:{width:200,height:200}}),h=({loading:a,children:r,fetching:i,error:n})=>{const[o,s]=r;return e.jsx(d,{children:e.jsxs(t,{display:"flex",flexDirection:"column",height:1,children:[o,i&&e.jsx(t,{width:1,children:e.jsx(c,{})}),a&&e.jsx(l,{}),n&&e.jsx(t,{mt:4,children:e.jsx(m,{icon:n.icon||p,title:n.title||"There has been an error",subtitle:n.message})}),!a&&!n&&s]})})};h.__docgenInfo={description:"A layout component that provides a header and content area with optional loading, fetching, and error states.",methods:[],displayName:"HeaderLayout",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},fetching:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"HeaderLayoutError"},description:""},children:{required:!0,tsType:{name:"tuple",raw:"[HeaderElement, ContentElement]",elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Title of the header
   */
  title?: string | ReactElement;
  /**
   * Show a loading indicator in the title position
   */
  loadingTitle?: boolean;
  /**
   * Subtitle of the header
   */
  subtitle?: string | ReactElement;
  /**
   * Show a loading indicator in the subtitle position
   */
  loadingSubtitle?: boolean;
  /**
   * Color palete used to render the component
   */
  preset?: HeaderPreset;
  /**
   * List of breadcumbs to represent the path to reach
   * the page that we are
   */
  breadcrumbs?: HeaderBreadcrumb[];
  /**
   * List of actions that can be performed by the user.
   * Each action will be a button in the header.
   */
  actions?: HeaderAction[];
  /**
   * Variant used to render the actions
   */
  actionsVariant?: HeaderActionVariant;
  /**
   * If is set, a list of tabs is dispayed at the bottom
   */
  tabs?: HeaderTab[];
  /**
   * The tabs will work using
   * - a panel container (panel)
   * - using a the navigation system (navigation).
   */
  tabsMode?: "panel" | "navigation";
  /**
   * A single button that helps the user to navigate to
   * a screen related to the current screen
   */
  navigationButton?: HeaderNavigationButton;
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}],required:!1},description:"Title of the header"},{key:"loadingTitle",value:{name:"boolean",required:!1},description:"Show a loading indicator in the title position"},{key:"subtitle",value:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}],required:!1},description:"Subtitle of the header"},{key:"loadingSubtitle",value:{name:"boolean",required:!1},description:"Show a loading indicator in the subtitle position"},{key:"preset",value:{name:"union",raw:'PropTypes.Color | "transparent"',elements:[{name:"PropTypes.Color"},{name:"literal",value:'"transparent"'}],required:!1},description:"Color palete used to render the component"},{key:"breadcrumbs",value:{name:"Array",elements:[{name:"HeaderBreadcrumb"}],raw:"HeaderBreadcrumb[]",required:!1},description:`List of breadcumbs to represent the path to reach
the page that we are`},{key:"actions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  text: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"HeaderAction[]",required:!1},description:`List of actions that can be performed by the user.
Each action will be a button in the header.`},{key:"actionsVariant",value:{name:"union",raw:'"text" | "outlined" | "contained"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"contained"'}],required:!1},description:"Variant used to render the actions"},{key:"tabs",value:{name:"Array",elements:[{name:"HeaderTab"}],raw:"HeaderTab[]",required:!1},description:"If is set, a list of tabs is dispayed at the bottom"},{key:"tabsMode",value:{name:"union",raw:'"panel" | "navigation"',elements:[{name:"literal",value:'"panel"'},{name:"literal",value:'"navigation"'}],required:!1},description:`The tabs will work using
- a panel container (panel)
- using a the navigation system (navigation).`},{key:"navigationButton",value:{name:"HeaderNavigationButton",required:!1},description:`A single button that helps the user to navigate to
a screen related to the current screen`}]}},{name:"FunctionComponent",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Title of the header
   */
  title?: string | ReactElement;
  /**
   * Show a loading indicator in the title position
   */
  loadingTitle?: boolean;
  /**
   * Subtitle of the header
   */
  subtitle?: string | ReactElement;
  /**
   * Show a loading indicator in the subtitle position
   */
  loadingSubtitle?: boolean;
  /**
   * Color palete used to render the component
   */
  preset?: HeaderPreset;
  /**
   * List of breadcumbs to represent the path to reach
   * the page that we are
   */
  breadcrumbs?: HeaderBreadcrumb[];
  /**
   * List of actions that can be performed by the user.
   * Each action will be a button in the header.
   */
  actions?: HeaderAction[];
  /**
   * Variant used to render the actions
   */
  actionsVariant?: HeaderActionVariant;
  /**
   * If is set, a list of tabs is dispayed at the bottom
   */
  tabs?: HeaderTab[];
  /**
   * The tabs will work using
   * - a panel container (panel)
   * - using a the navigation system (navigation).
   */
  tabsMode?: "panel" | "navigation";
  /**
   * A single button that helps the user to navigate to
   * a screen related to the current screen
   */
  navigationButton?: HeaderNavigationButton;
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}],required:!1},description:"Title of the header"},{key:"loadingTitle",value:{name:"boolean",required:!1},description:"Show a loading indicator in the title position"},{key:"subtitle",value:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}],required:!1},description:"Subtitle of the header"},{key:"loadingSubtitle",value:{name:"boolean",required:!1},description:"Show a loading indicator in the subtitle position"},{key:"preset",value:{name:"union",raw:'PropTypes.Color | "transparent"',elements:[{name:"PropTypes.Color"},{name:"literal",value:'"transparent"'}],required:!1},description:"Color palete used to render the component"},{key:"breadcrumbs",value:{name:"Array",elements:[{name:"HeaderBreadcrumb"}],raw:"HeaderBreadcrumb[]",required:!1},description:`List of breadcumbs to represent the path to reach
the page that we are`},{key:"actions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  text: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"HeaderAction[]",required:!1},description:`List of actions that can be performed by the user.
Each action will be a button in the header.`},{key:"actionsVariant",value:{name:"union",raw:'"text" | "outlined" | "contained"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"contained"'}],required:!1},description:"Variant used to render the actions"},{key:"tabs",value:{name:"Array",elements:[{name:"HeaderTab"}],raw:"HeaderTab[]",required:!1},description:"If is set, a list of tabs is dispayed at the bottom"},{key:"tabsMode",value:{name:"union",raw:'"panel" | "navigation"',elements:[{name:"literal",value:'"panel"'},{name:"literal",value:'"navigation"'}],required:!1},description:`The tabs will work using
- a panel container (panel)
- using a the navigation system (navigation).`},{key:"navigationButton",value:{name:"HeaderNavigationButton",required:!1},description:`A single button that helps the user to navigate to
a screen related to the current screen`}]}}],raw:"FunctionComponent<HeaderProps>"}],raw:"ReactElement<HeaderProps, HeaderComponent>"},{name:"ReactElement",elements:[{name:"ContentElement"},{name:"FunctionComponent",elements:[{name:"PropsWithChildren"}],raw:"FunctionComponent<ContentProps>"}],raw:"ReactElement<ContentElement, ContentComponent>"}]},description:""}}};export{h as H};
