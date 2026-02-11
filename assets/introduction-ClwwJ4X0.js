import{r as d,x as p,y as m,R as u,j as n}from"./iframe-EZlCblT_.js";import{useMDXComponents as a}from"./index-C57sIsCT.js";import{M as f}from"./blocks-hExnSyou.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bw2dNR8W.js";import"./index-BKuDT_6P.js";import"./index-C6jfLmKV.js";var x=0,j=e=>e.button===x&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,y=(e,t=s=>{})=>{j(e)&&(e.preventDefault(),t(e))},g=class extends d.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:e,title:t=e,story:s,name:o=s}=this.props;if(t&&o){let i=await p(t,o);this.setState({href:i})}},this.handleClick=()=>{let{kind:e,title:t=e,story:s,name:o=s}=this.props;t&&o&&m({title:t,name:o})}}componentDidMount(){this.updateHref()}componentDidUpdate(e){let{kind:t,title:s,story:o,name:i}=this.props;(e.kind!==t||e.story!==o||e.title!==s||e.name!==i)&&this.updateHref()}render(){let{kind:e,title:t=e,story:s,name:o=s,children:i,...l}=this.props,{href:c}=this.state;return u.createElement("a",{href:c,onClick:h=>y(h,this.handleClick),...l},i)}};g.defaultProps={children:void 0};function r(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...a(),...e.components};return n.jsxs(n.Fragment,{children:[`
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
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"?path=/docs/components--docs",children:"Components"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"?path=/docs/layouts-layouts--docs",children:"Layouts"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"?path=/docs/generators-generators--docs",children:"Generators"})}),`
`]})]})}function b(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{b as default};
