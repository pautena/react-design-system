import{r as d,i as p,n as m,R as u,j as n}from"./iframe-D9_KR-Vm.js";import{useMDXComponents as r}from"./index-DR3i2sFP.js";import{M as f}from"./blocks-BRopPwPW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DC4ANDc3.js";import"./index-DJQ4Myga.js";var x=0,j=e=>e.button===x&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,y=(e,t=s=>{})=>{j(e)&&(e.preventDefault(),t(e))},k=class extends d.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:e,title:t=e,story:s,name:i=s}=this.props;if(t&&i){let o=await p(t,i);this.setState({href:o})}},this.handleClick=()=>{let{kind:e,title:t=e,story:s,name:i=s}=this.props;t&&i&&m({title:t,name:i})}}componentDidMount(){this.updateHref()}componentDidUpdate(e){let{kind:t,title:s,story:i,name:o}=this.props;(e.kind!==t||e.story!==i||e.title!==s||e.name!==o)&&this.updateHref()}render(){let{kind:e,title:t=e,story:s,name:i=s,children:o,...l}=this.props,{href:c}=this.state;return u.createElement("a",{href:c,onClick:h=>y(h,this.handleClick),...l},o)}};k.defaultProps={children:void 0};function a(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[`
`,n.jsx(f,{title:"Introduction"}),`
`,n.jsx(t.h1,{id:"react-design-system",children:"React Design System"}),`
`,n.jsxs(t.p,{children:["My custom design system on top of ",n.jsx(t.a,{href:"https://mui.com/material-ui/",rel:"nofollow",children:"MUI"}),", with a bunch of components to be able to fast prototype new pages and products"]}),`
`,n.jsx(t.h2,{id:"start-now",children:"Start Now"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"?path=/docs/installation--docs",children:"Installation"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"?path=/docs/usage--docs",children:"Usage"})}),`
`]}),`
`,n.jsx(t.h2,{id:"components",children:"Components"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"?path=/docs/-docs",children:"Components"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"?path=/docs/layouts-layouts--docs",children:"Layouts"})}),`
`]})]})}function T(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a(e)}export{T as default};
