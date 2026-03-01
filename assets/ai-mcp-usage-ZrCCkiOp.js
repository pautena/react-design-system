import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Co7slKt7.js";import{M as o}from"./blocks-BDx0zwxg.js";import"./iframe-CDZYyCF6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-K13l1vKj.js";import"./index-BZnMwcPh.js";import"./index-DXENcVt8.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Examples/AI MCP Usage"}),`
`,e.jsx(n.h1,{id:"ai-mcp-usage",children:"AI MCP Usage"}),`
`,e.jsx(n.p,{children:"The design system publishes a registry for MCP-enabled tools."}),`
`,e.jsx(n.h2,{id:"discover-components",children:"Discover components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Registry manifest: ",e.jsx(n.code,{children:"https://react-design-system.pautena.com/registry/index.json"})]}),`
`,e.jsxs(n.li,{children:["Component JSON: ",e.jsx(n.code,{children:"https://react-design-system.pautena.com/registry/value-card.json"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-ai-workflow",children:"Example AI workflow"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Search the registry for ",e.jsx(n.code,{children:"remote-data-table"}),"."]}),`
`,e.jsx(n.li,{children:"Install the component via your MCP client."}),`
`,e.jsx(n.li,{children:"Generate code using the exported types and usage metadata."}),`
`]}),`
`,e.jsx(n.h2,{id:"example-prompts",children:"Example prompts"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"Show available components for data display in @pautena registry"
"Install @pautena/remote-data-table and add it to a dashboard"
"Generate a form wizard with TextField, Select, Autocomplete, and ConfirmDialog"
`})}),`
`,e.jsx(n.h2,{id:"recommended-prompts-for-code-generation",children:"Recommended prompts for code generation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Create a dashboard using @pautena components with:
- DrawerLayout navigation
- Header with actions
- ValueCard metrics
- RemoteDataTable with query filters
`})}),`
`,e.jsx(n.h2,{id:"mcp-integration-checklist",children:"MCP integration checklist"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Registry JSON available in ",e.jsx(n.code,{children:"public/r/"})]}),`
`,e.jsx(n.li,{children:"Storybook addon-mcp configured"}),`
`,e.jsx(n.li,{children:"Components annotated with registry metadata"}),`
`]})]})}function x(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{x as default};
