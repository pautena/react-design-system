import{j as e}from"./iframe-CP7Wc6pw.js";import{V as j,w as v}from"./ValueImage-Ba65U3Go.js";import{a as g,c as z}from"./storybook-1EOoAo-1.js";import{T as f}from"./TablePlaceholder-BpuCNJoo.js";import{V as i}from"./ValueBoolean-BYzILL5D.js";import{V as w}from"./ValueContent-CQjNptDz.js";import{V as c}from"./ValueDatetime-CDaFBPEl.js";import{V as a}from"./ValueItem--7gfc45g.js";import{V as x}from"./ValueRating-2JEbpzBr.js";import{V as l}from"./ValueText-BQMlDBwU.js";import{u as T}from"./theme-C6Z7D9H_.js";import{u as k}from"./useTheme-CUXq88LR.js";import{P as C}from"./Paper-CnH1HhRt.js";import{B as D}from"./Box-BNYW9fHR.js";import{T as d}from"./Typography-D9aj5x0O.js";import{G as H}from"./Grid-C_earOP1.js";function p({title:V,subtitle:u,centered:b,children:I,dense:s}){const{typography:h}=k(),y=T({lightWeight:200,darkWeight:800});return e.jsxs(C,{sx:{paddingBottom:s?0:1},children:[e.jsxs(D,{bgcolor:y,px:s?1:2,py:s?.5:1,lineHeight:s?0:void 0,children:[e.jsx(d,{variant:s?"body1":"h6",role:"heading","aria-level":1,children:V}),u&&e.jsx(d,{variant:s?"caption":"body2",role:"heading","aria-level":2,lineHeight:s?h.pxToRem(15):void 0,children:u})]}),e.jsx(H,{container:!0,padding:1,rowSpacing:s?1:2,justifyContent:b?"center":"flex-start",children:I})]})}p.__docgenInfo={description:`GroupValueCard component renders a card with a title, subtitle, and children content.
It supports customization for dense layout and centered content.`,methods:[],displayName:"GroupValueCard",props:{title:{required:!0,tsType:{name:"string"},description:"The main title of the card."},subtitle:{required:!1,tsType:{name:"string"},description:"An optional subtitle for the card."},centered:{required:!1,tsType:{name:"boolean"},description:"If true, the content will be centered."},children:{required:!0,tsType:{name:"union",raw:"ValueItemElement | ValueItemElement[]",elements:[{name:"ReactElement",elements:[{name:"ValueItemProps"},{name:"FunctionComponent",elements:[{name:"ValueItemProps"}],raw:"FunctionComponent<ValueItemProps>"}],raw:"ReactElement<ValueItemProps, ValueItemComponent>"},{name:"Array",elements:[{name:"ReactElement",elements:[{name:"ValueItemProps"},{name:"FunctionComponent",elements:[{name:"ValueItemProps"}],raw:"FunctionComponent<ValueItemProps>"}],raw:"ReactElement<ValueItemProps, ValueItemComponent>"}],raw:"ValueItemElement[]"}]},description:"The children elements to be rendered inside the card."},dense:{required:!1,tsType:{name:"boolean"},description:"If true, the card will have a denser layout."}}};const E={title:"Data Display/GroupValueCard",component:p,decorators:[z(2),g],parameters:{layout:"fullscreen"}},t={args:{title:"Hello world",subtitle:"Lorem ipsum sit amet",children:[e.jsx(a,{size:{xs:12,sm:6,md:4},children:e.jsx(l,{label:"Hello world",value:"Lorem ipsum sit amet"})},"1"),e.jsx(a,{size:{xs:12,sm:6,md:2},children:e.jsx(i,{label:"Enabled",value:!0})},"2"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{label:"Quantity",value:"1200"})},"3"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{label:"Currency",value:"EUR"})},"4"),e.jsx(a,{size:{xs:12,sm:6,md:6},children:e.jsx(l,{label:"I am Batman",value:" Does it come in black? It's ends here. Hero can be anyone"})},"5"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{label:"Status",value:"Open"})},"6"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{label:"Level",value:"2144"})},"7"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(x,{label:"Rating",value:3})},"8"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(c,{label:"Created at",value:new Date(2022,5,1),format:"yyyy-MM-dd"})},"9")]}},r={args:{...t.args,dense:!0,children:[e.jsx(a,{size:{xs:12,sm:6,md:4},children:e.jsx(l,{dense:!0,label:"Hello world",value:"Lorem ipsum sit amet"})},"1"),e.jsx(a,{size:{xs:12,sm:6,md:2},children:e.jsx(i,{dense:!0,label:"Enabled",value:!0})},"2"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{dense:!0,label:"Quantity",value:"1200"})},"3"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{dense:!0,label:"Currency",value:"EUR"})},"4"),e.jsx(a,{size:{xs:12,sm:6,md:6},children:e.jsx(l,{dense:!0,label:"I am Batman",value:" Does it come in black? It's ends here. Hero can be anyone"})},"5"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{dense:!0,label:"Status",value:"Open"})},"6"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{dense:!0,label:"Level",value:"2144"})},"7"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(x,{dense:!0,label:"Rating",value:3})},"8"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(c,{dense:!0,label:"Created at",value:new Date(2022,5,1),format:"yyyy-MM-dd"})},"9")]}},m={args:{title:"Hello world",children:[e.jsx(a,{size:{xs:12,sm:6,md:4},children:e.jsx(l,{label:"Hello world",value:"Lorem ipsum sit amet"})},"1"),e.jsx(a,{size:{xs:12,sm:6,md:2},children:e.jsx(i,{label:"Enabled",value:!0})},"2")]}},n={args:{title:"Hello world",subtitle:"Lorem ipsum sit amet",centered:!0,children:e.jsx(a,{size:{xs:12},bordered:!1,children:e.jsx(j,{label:"Lorem ipsum",value:v})})}},o={args:{title:"Hello world",subtitle:"Lorem ipsum sit amet",children:e.jsx(a,{size:{xs:12},bordered:!1,children:e.jsx(w,{label:"lorem ipsum",children:e.jsx(f,{})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
    children: [<ValueItem key="1" size={{
      xs: 12,
      sm: 6,
      md: 4
    }}>
        <ValueText label="Hello world" value="Lorem ipsum sit amet" />
      </ValueItem>, <ValueItem key="2" size={{
      xs: 12,
      sm: 6,
      md: 2
    }}>
        <ValueBoolean label="Enabled" value />
      </ValueItem>, <ValueItem key="3" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText label="Quantity" value="1200" />
      </ValueItem>, <ValueItem key="4" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText label="Currency" value="EUR" />
      </ValueItem>, <ValueItem key="5" size={{
      xs: 12,
      sm: 6,
      md: 6
    }}>
        <ValueText label="I am Batman" value=" Does it come in black? It's ends here. Hero can be anyone" />
      </ValueItem>, <ValueItem key="6" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText label="Status" value="Open" />
      </ValueItem>, <ValueItem key="7" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText label="Level" value="2144" />
      </ValueItem>, <ValueItem key="8" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueRating label="Rating" value={3} />
      </ValueItem>, <ValueItem key="9" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueDatetime label="Created at" value={new Date(2022, 5, 1)} format="yyyy-MM-dd" />
      </ValueItem>]
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dense: true,
    children: [<ValueItem key="1" size={{
      xs: 12,
      sm: 6,
      md: 4
    }}>
        <ValueText dense label="Hello world" value="Lorem ipsum sit amet" />
      </ValueItem>, <ValueItem key="2" size={{
      xs: 12,
      sm: 6,
      md: 2
    }}>
        <ValueBoolean dense label="Enabled" value />
      </ValueItem>, <ValueItem key="3" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText dense label="Quantity" value="1200" />
      </ValueItem>, <ValueItem key="4" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText dense label="Currency" value="EUR" />
      </ValueItem>, <ValueItem key="5" size={{
      xs: 12,
      sm: 6,
      md: 6
    }}>
        <ValueText dense label="I am Batman" value=" Does it come in black? It's ends here. Hero can be anyone" />
      </ValueItem>, <ValueItem key="6" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText dense label="Status" value="Open" />
      </ValueItem>, <ValueItem key="7" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText dense label="Level" value="2144" />
      </ValueItem>, <ValueItem key="8" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueRating dense label="Rating" value={3} />
      </ValueItem>, <ValueItem key="9" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueDatetime dense label="Created at" value={new Date(2022, 5, 1)} format="yyyy-MM-dd" />
      </ValueItem>]
  }
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Hello world",
    children: [<ValueItem key="1" size={{
      xs: 12,
      sm: 6,
      md: 4
    }}>
        <ValueText label="Hello world" value="Lorem ipsum sit amet" />
      </ValueItem>, <ValueItem key="2" size={{
      xs: 12,
      sm: 6,
      md: 2
    }}>
        <ValueBoolean label="Enabled" value />
      </ValueItem>]
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
    centered: true,
    children: <ValueItem size={{
      xs: 12
    }} bordered={false}>
        <ValueImage label="Lorem ipsum" value={workInProgressImg} />
      </ValueItem>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
    children: <ValueItem size={{
      xs: 12
    }} bordered={false}>
        <ValueContent label="lorem ipsum">
          <TablePlaceholder />
        </ValueContent>
      </ValueItem>
  }
}`,...o.parameters?.docs?.source}}};const L=["Default","Dense","WihtoutSubtitle","WithImage","WithDataTable"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Dense:r,WihtoutSubtitle:m,WithDataTable:o,WithImage:n,__namedExportsOrder:L,default:E},Symbol.toStringTag,{value:"Module"}));export{t as D,p as G,J as a};
