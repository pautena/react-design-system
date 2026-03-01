import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Gyfd8-lq.js";import"./iframe-C_7bLouK.js";import"./preload-helper-PPVm8Dsz.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components},{Meta:t}=n;return t||i("Meta"),e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"shadcn/Introduction"}),`
`,e.jsx(n.h1,{id:"shadcnui-components",children:"shadcn/ui Components"}),`
`,e.jsxs(n.p,{children:["This library currently keeps only the base ",e.jsx(n.code,{children:"Button"})," and ",e.jsx(n.code,{children:"Badge"})," in ",e.jsx(n.code,{children:"src/components/ui/"}),"."]}),`
`,e.jsx(n.h2,{id:"available-components",children:"Available Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Button"})," - Action button with variants and sizes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Badge"})," - Compact status/tag element with variants."]}),`
`]}),`
`,e.jsx(n.h2,{id:"interactive-showcase",children:"Interactive Showcase"}),`
`,e.jsxs(n.p,{children:["Visit the ",e.jsx(n.strong,{children:"shadcn/Button"})," and ",e.jsx(n.strong,{children:"shadcn/Badge"})," stories to see the currently available components."]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.strong,{children:"shadcn/Button"})," and ",e.jsx(n.strong,{children:"shadcn/Badge"})," stories for variants."]}),`
`,e.jsx(n.h2,{id:"theme-system",children:"Theme System"}),`
`,e.jsxs(n.p,{children:["All components use CSS variables defined in ",e.jsx(n.code,{children:"src/styles/globals.css"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode values */
}
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Import components from ",e.jsx(n.code,{children:"@/components/ui/"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function MyComponent() {
  return (
    <div className="flex items-center gap-2">
      <Button>Save</Button>
      <Badge>New</Badge>
    </div>
  );
}
`})})]})}function h(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}function i(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
