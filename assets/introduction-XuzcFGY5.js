import{r as h,h as p,n as m,R as u,j as e}from"./iframe-DoHxLgiQ.js";import{useMDXComponents as a}from"./index-BauYR0fs.js";import{M as x}from"./blocks-DQJFpOBn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bo9E3z2s.js";import"./index-BpLgNbkB.js";var j=0,f=n=>n.button===j&&!n.altKey&&!n.ctrlKey&&!n.metaKey&&!n.shiftKey,y=(n,t=s=>{})=>{f(n)&&(n.preventDefault(),t(n))},g=class extends h.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:n,title:t=n,story:s,name:i=s}=this.props;if(t&&i){let o=await p(t,i);this.setState({href:o})}},this.handleClick=()=>{let{kind:n,title:t=n,story:s,name:i=s}=this.props;t&&i&&m({title:t,name:i})}}componentDidMount(){this.updateHref()}componentDidUpdate(n){let{kind:t,title:s,story:i,name:o}=this.props;(n.kind!==t||n.story!==i||n.title!==s||n.name!==o)&&this.updateHref()}render(){let{kind:n,title:t=n,story:s,name:i=s,children:o,...c}=this.props,{href:l}=this.state;return u.createElement("a",{href:l,onClick:d=>y(d,this.handleClick),...c},o)}};g.defaultProps={children:void 0};function r(n){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(x,{title:"Introduction"}),`
`,e.jsx(t.h1,{id:"react-design-system",children:"React Design System"}),`
`,e.jsxs(t.p,{children:["My custom design system on top of ",e.jsx(t.a,{href:"https://mui.com/material-ui/",rel:"nofollow",children:"MUI"}),", with a bunch of components to be able to fast prototype new pages and products"]}),`
`,e.jsx(t.h2,{id:"️-important-notice",children:"⚠️ Important Notice"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"This is a personal design system"})," built for my own projects and experimentation."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Breaking changes are expected"})," and may occur at any time without notice"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Not recommended for production use"})," in external projects"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Best used as a reference"}),": Study the patterns, component structure, and testing approaches to build your own design system"]}),`
`,e.jsx(t.li,{children:"API stability is not guaranteed between versions"}),`
`]}),`
`,e.jsx(t.p,{children:"If you choose to use this library, I strongly recommend forking it or using it as inspiration for your own custom design system rather than depending on it directly."}),`
`,e.jsx(t.h2,{id:"start-now",children:"Start Now"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/installation--docs",children:"Installation"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/usage--docs",children:"Usage"})}),`
`]}),`
`,e.jsx(t.h2,{id:"components",children:"Components"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/components--docs",children:"Components"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/layouts-layouts--docs",children:"Layouts"})}),`
`]})]})}function I(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{I as default};
