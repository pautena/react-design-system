import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-v82YO9zQ.js";import{M as a}from"./blocks-9o3peB1u.js";import"./iframe-BUoLcRFZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Czfq41qP.js";import"./index-Dn6J4qQc.js";import"./index-BvTyi-sf.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(a,{title:"Usage"}),`
`,e.jsx(n.h1,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h2,{id:"basic-import",children:"Basic Import"}),`
`,e.jsx(n.p,{children:"Import components from the main package:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DrawerLayout, Header, Label, ValueCard } from "@pautena/react-design-system";
`})}),`
`,e.jsx(n.h2,{id:"styles",children:"Styles"}),`
`,e.jsx(n.p,{children:"Import the shared stylesheet once in your app entrypoint:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import "@pautena/react-design-system/global.css";
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
`,e.jsx(n.li,{children:"Pre-configured render for design system components"}),`
`,e.jsxs(n.li,{children:["All exports from ",e.jsx(n.code,{children:"@testing-library/react"})]}),`
`,e.jsx(n.li,{children:"Custom testing utilities"}),`
`]}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next Steps"}),`
`,e.jsx(n.p,{children:"Explore the component library:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/components--docs",children:"Components"})," - Browse all available components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/layouts-layouts--docs",children:"Layouts"})," - Page layout components"]}),`
`]})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
