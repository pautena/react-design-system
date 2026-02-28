import{j as e}from"./iframe-pW5QL-bD.js";import{useMDXComponents as s}from"./index-CokrQfX8.js";import{M as i}from"./blocks-Cpbmgdr-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-TlASSgMk.js";import"./index-DfVoCZUp.js";import"./index-CqolCm2N.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(i,{title:"Usage"}),`
`,e.jsx(n.h1,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h2,{id:"basic-import",children:"Basic Import"}),`
`,e.jsx(n.p,{children:"Import components from the main package:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DrawerLayout, Header, Label, ValueCard } from "@pautena/react-design-system";
`})}),`
`,e.jsx(n.h2,{id:"setup-with-mui-themeprovider",children:"Setup with MUI ThemeProvider"}),`
`,e.jsx(n.p,{children:"All components require MUI's ThemeProvider:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "@pautena/react-design-system";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="My App" subtitle="Dashboard" />
      {/* Your components */}
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"component-examples",children:"Component Examples"}),`
`,e.jsx(n.h3,{id:"data-display",children:"Data Display"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Label, ValueText, ValueCard } from "@pautena/react-design-system";

function UserProfile() {
  return (
    <>
      <Label text="Active" preset="success" />
      <ValueText label="Email" value="user@example.com" />
      <ValueCard title="Revenue" value="$1,234" />
    </>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"layouts",children:"Layouts"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DrawerLayout } from "@pautena/react-design-system";

function Dashboard() {
  return (
    <DrawerLayout
      header={{ title: "Dashboard" }}
      menu={[
        { label: "Home", onClick: () => {} },
        { label: "Settings", onClick: () => {} },
      ]}
    >
      {/* Your page content */}
    </DrawerLayout>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"testing-utilities",children:"Testing Utilities"}),`
`,e.jsx(n.p,{children:"Import testing helpers for unit tests:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { render, screen } from "@pautena/react-design-system/testing";
import { Label } from "@pautena/react-design-system";

test("renders label", () => {
  render(<Label text="Active" />);
  expect(screen.getByText("Active")).toBeInTheDocument();
});
`})}),`
`,e.jsx(n.p,{children:"The testing export includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Pre-configured render with MUI ThemeProvider"}),`
`,e.jsxs(n.li,{children:["All exports from ",e.jsx(n.code,{children:"@testing-library/react"})]}),`
`,e.jsx(n.li,{children:"Custom testing utilities"}),`
`]}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next Steps"}),`
`,e.jsx(n.p,{children:"Explore the component library:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/components--docs",children:"Components"})," - Browse all available components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/layouts-layouts--docs",children:"Layouts"})," - Page layout components"]}),`
`]})]})}function p(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{p as default};
