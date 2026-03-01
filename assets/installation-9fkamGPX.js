import{j as e}from"./iframe-lRwKKAeA.js";import{useMDXComponents as a}from"./index-DYO3zhMT.js";import{M as r}from"./blocks-R_ftx0qN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-aCLD_6gc.js";import"./index-so3LO3Cr.js";import"./index-Ozf5NBs-.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(r,{title:"Installation"}),`
`,e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsxs(n.p,{children:["This project is available as an npm package ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@pautena/react-design-system",rel:"nofollow",children:"@pautena/react-design-system"}),"."]}),`
`,e.jsx(n.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Node.js"}),": v18+ recommended"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"React"}),": v17+, v18+, or v19+"]}),`
`]}),`
`,e.jsx(n.h2,{id:"install-package",children:"Install Package"}),`
`,e.jsx(n.p,{children:"Using npm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @pautena/react-design-system
`})}),`
`,e.jsx(n.p,{children:"Using yarn:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @pautena/react-design-system
`})}),`
`,e.jsx(n.h2,{id:"install-peer-dependencies",children:"Install Peer Dependencies"}),`
`,e.jsx(n.p,{children:"This library requires MUI and its dependencies:"}),`
`,e.jsx(n.p,{children:"Using npm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @emotion/react @emotion/styled @mui/material @mui/icons-material @mui/x-date-pickers date-fns
`})}),`
`,e.jsx(n.p,{children:"Using yarn:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @emotion/react @emotion/styled @mui/material @mui/icons-material @mui/x-date-pickers date-fns
`})}),`
`,e.jsx(n.h3,{id:"optional-dependencies",children:"Optional Dependencies"}),`
`,e.jsx(n.p,{children:"If you plan to use data grid components:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @mui/x-data-grid
# or
yarn add @mui/x-data-grid
`})}),`
`,e.jsx(n.h2,{id:"setup-mui-theme",children:"Setup MUI Theme"}),`
`,e.jsxs(n.p,{children:["Wrap your app with MUI's ",e.jsx(n.code,{children:"ThemeProvider"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  // Your theme customization
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Your app */}
    </ThemeProvider>
  );
}
`})}),`
`,e.jsxs(n.p,{children:["For more MUI theme configuration, see ",e.jsx(n.a,{href:"https://mui.com/material-ui/customization/theming/",rel:"nofollow",children:"MUI theming docs"}),"."]})]})}function p(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{p as default};
