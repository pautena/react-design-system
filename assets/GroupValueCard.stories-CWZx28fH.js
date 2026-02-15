import{j as e}from"./iframe-D9_KR-Vm.js";import{V as z,w as g}from"./ValueImage-DitrGeVw.js";import{g as f,a as k}from"./storybook-BiVruKJY.js";import{T}from"./TablePlaceholder-DDrkCvkU.js";import{V as o}from"./ValueBoolean-Lf_dXM0Z.js";import{V as w}from"./ValueContent-0kAdez6P.js";import{V as x}from"./ValueDatetime-DzH0g-sy.js";import{V as a}from"./ValueItem-g4x_xtys.js";import{V as c}from"./ValueRating-BhyEFfct.js";import{V as l}from"./ValueText-KiEA0_5M.js";import{u as D}from"./theme-UCSEkitU.js";import{u as C}from"./useTheme-I0hne2ge.js";import{P as E}from"./Paper-VO7GYAI2.js";import{B as H}from"./Box-Be92HNMn.js";import{T as V}from"./Typography-2wT6CWDx.js";import{G as L}from"./Grid-DI8BF5to.js";function p({title:I,subtitle:b,centered:y,children:h,dense:s}){const{typography:v}=C(),j=D({lightWeight:200,darkWeight:800});return e.jsxs(E,{sx:{paddingBottom:s?0:1},children:[e.jsxs(H,{bgcolor:j,px:s?1:2,py:s?.5:1,lineHeight:s?0:void 0,children:[e.jsx(V,{variant:s?"body1":"h6",role:"heading","aria-level":1,children:I}),b&&e.jsx(V,{variant:s?"caption":"body2",role:"heading","aria-level":2,lineHeight:s?v.pxToRem(15):void 0,children:b})]}),e.jsx(L,{container:!0,padding:1,rowSpacing:s?1:2,justifyContent:y?"center":"flex-start",children:h})]})}p.__docgenInfo={description:`GroupValueCard component renders a card with a title, subtitle, and children content.
It supports customization for dense layout and centered content.`,methods:[],displayName:"GroupValueCard",props:{title:{required:!0,tsType:{name:"string"},description:"The main title of the card."},subtitle:{required:!1,tsType:{name:"string"},description:"An optional subtitle for the card."},centered:{required:!1,tsType:{name:"boolean"},description:"If true, the content will be centered."},children:{required:!0,tsType:{name:"union",raw:"ValueItemElement | ValueItemElement[]",elements:[{name:"ReactElement",elements:[{name:"ValueItemProps"},{name:"FunctionComponent",elements:[{name:"ValueItemProps"}],raw:"FunctionComponent<ValueItemProps>"}],raw:"ReactElement<ValueItemProps, ValueItemComponent>"},{name:"Array",elements:[{name:"ReactElement",elements:[{name:"ValueItemProps"},{name:"FunctionComponent",elements:[{name:"ValueItemProps"}],raw:"FunctionComponent<ValueItemProps>"}],raw:"ReactElement<ValueItemProps, ValueItemComponent>"}],raw:"ValueItemElement[]"}]},description:"The children elements to be rendered inside the card."},dense:{required:!1,tsType:{name:"boolean"},description:"If true, the card will have a denser layout."}}};const R={title:"Data Display/GroupValueCard",component:p,decorators:[f(2),k],parameters:{layout:"fullscreen"}},t={args:{title:"Hello world",subtitle:"Lorem ipsum sit amet",children:[e.jsx(a,{size:{xs:12,sm:6,md:4},children:e.jsx(l,{label:"Hello world",value:"Lorem ipsum sit amet"})},"1"),e.jsx(a,{size:{xs:12,sm:6,md:2},children:e.jsx(o,{label:"Enabled",value:!0})},"2"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{label:"Quantity",value:"1200"})},"3"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{label:"Currency",value:"EUR"})},"4"),e.jsx(a,{size:{xs:12,sm:6,md:6},children:e.jsx(l,{label:"I am Batman",value:" Does it come in black? It's ends here. Hero can be anyone"})},"5"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{label:"Status",value:"Open"})},"6"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{label:"Level",value:"2144"})},"7"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(c,{label:"Rating",value:3})},"8"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(x,{label:"Created at",value:new Date(2022,5,1),format:"yyyy-MM-dd"})},"9")]}},r={args:{...t.args,dense:!0,children:[e.jsx(a,{size:{xs:12,sm:6,md:4},children:e.jsx(l,{dense:!0,label:"Hello world",value:"Lorem ipsum sit amet"})},"1"),e.jsx(a,{size:{xs:12,sm:6,md:2},children:e.jsx(o,{dense:!0,label:"Enabled",value:!0})},"2"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{dense:!0,label:"Quantity",value:"1200"})},"3"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{dense:!0,label:"Currency",value:"EUR"})},"4"),e.jsx(a,{size:{xs:12,sm:6,md:6},children:e.jsx(l,{dense:!0,label:"I am Batman",value:" Does it come in black? It's ends here. Hero can be anyone"})},"5"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{dense:!0,label:"Status",value:"Open"})},"6"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{dense:!0,label:"Level",value:"2144"})},"7"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(c,{dense:!0,label:"Rating",value:3})},"8"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(x,{dense:!0,label:"Created at",value:new Date(2022,5,1),format:"yyyy-MM-dd"})},"9")]}},m={args:{...r.args,children:[e.jsx(a,{size:{xs:12,sm:6,md:4},children:e.jsx(l,{editable:!0,dense:!0,label:"Hello world",value:"Lorem ipsum sit amet"})},"1"),e.jsx(a,{size:{xs:12,sm:6,md:2},children:e.jsx(o,{editable:!0,dense:!0,label:"Enabled",value:!0})},"2"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{editable:!0,dense:!0,label:"Quantity",value:"1200"})},"3"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{editable:!0,dense:!0,label:"Currency",value:"EUR"})},"4"),e.jsx(a,{size:{xs:12,sm:6,md:6},children:e.jsx(l,{editable:!0,dense:!0,label:"I am Batman",value:" Does it come in black? It's ends here. Hero can be anyone"})},"5"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{editable:!0,dense:!0,label:"Status",value:"Open"})},"6"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{editable:!0,dense:!0,label:"Level",value:"2144"})},"7"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(c,{editable:!0,dense:!0,label:"Rating",value:3})},"8"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(x,{editable:!0,dense:!0,label:"Created at",value:new Date(2022,5,1),format:"yyyy-MM-dd"})},"9")]}},u={args:{...t.args,children:[e.jsx(a,{size:{xs:12,sm:6,md:4},children:e.jsx(l,{editable:!0,label:"Hello world",value:"Lorem ipsum sit amet"})},"1"),e.jsx(a,{size:{xs:12,sm:6,md:2},children:e.jsx(o,{editable:!0,label:"Enabled",value:!0})},"2"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{editable:!0,label:"Quantity",value:"1200"})},"3"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{editable:!0,label:"Currency",value:"EUR"})},"4"),e.jsx(a,{size:{xs:12,sm:6,md:6},children:e.jsx(l,{editable:!0,label:"I am Batman",value:" Does it come in black? It's ends here. Hero can be anyone"})},"5"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{editable:!0,label:"Status",value:"Open"})},"6"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(l,{editable:!0,label:"Level",value:"2144"})},"7"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(c,{editable:!0,label:"Rating",value:3})},"8"),e.jsx(a,{size:{xs:12,sm:6,md:3},children:e.jsx(x,{editable:!0,label:"Created at",value:new Date(2022,5,1),format:"yyyy-MM-dd"})},"9")]}},n={args:{title:"Hello world",children:[e.jsx(a,{size:{xs:12,sm:6,md:4},children:e.jsx(l,{label:"Hello world",value:"Lorem ipsum sit amet"})},"1"),e.jsx(a,{size:{xs:12,sm:6,md:2},children:e.jsx(o,{label:"Enabled",value:!0})},"2")]}},i={args:{title:"Hello world",subtitle:"Lorem ipsum sit amet",centered:!0,children:e.jsx(a,{size:{xs:12},bordered:!1,children:e.jsx(z,{label:"Lorem ipsum",value:g})})}},d={args:{title:"Hello world",subtitle:"Lorem ipsum sit amet",children:e.jsx(a,{size:{xs:12},bordered:!1,children:e.jsx(w,{label:"lorem ipsum",children:e.jsx(T,{})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    ...Dense.args,
    children: [<ValueItem key="1" size={{
      xs: 12,
      sm: 6,
      md: 4
    }}>
        <ValueText editable dense label="Hello world" value="Lorem ipsum sit amet" />
      </ValueItem>, <ValueItem key="2" size={{
      xs: 12,
      sm: 6,
      md: 2
    }}>
        <ValueBoolean editable dense label="Enabled" value />
      </ValueItem>, <ValueItem key="3" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText editable dense label="Quantity" value="1200" />
      </ValueItem>, <ValueItem key="4" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText editable dense label="Currency" value="EUR" />
      </ValueItem>, <ValueItem key="5" size={{
      xs: 12,
      sm: 6,
      md: 6
    }}>
        <ValueText editable dense label="I am Batman" value=" Does it come in black? It's ends here. Hero can be anyone" />
      </ValueItem>, <ValueItem key="6" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText editable dense label="Status" value="Open" />
      </ValueItem>, <ValueItem key="7" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText editable dense label="Level" value="2144" />
      </ValueItem>, <ValueItem key="8" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueRating editable dense label="Rating" value={3} />
      </ValueItem>, <ValueItem key="9" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueDatetime editable dense label="Created at" value={new Date(2022, 5, 1)} format="yyyy-MM-dd" />
      </ValueItem>]
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: [<ValueItem key="1" size={{
      xs: 12,
      sm: 6,
      md: 4
    }}>
        <ValueText editable label="Hello world" value="Lorem ipsum sit amet" />
      </ValueItem>, <ValueItem key="2" size={{
      xs: 12,
      sm: 6,
      md: 2
    }}>
        <ValueBoolean editable label="Enabled" value />
      </ValueItem>, <ValueItem key="3" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText editable label="Quantity" value="1200" />
      </ValueItem>, <ValueItem key="4" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText editable label="Currency" value="EUR" />
      </ValueItem>, <ValueItem key="5" size={{
      xs: 12,
      sm: 6,
      md: 6
    }}>
        <ValueText editable label="I am Batman" value=" Does it come in black? It's ends here. Hero can be anyone" />
      </ValueItem>, <ValueItem key="6" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText editable label="Status" value="Open" />
      </ValueItem>, <ValueItem key="7" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueText editable label="Level" value="2144" />
      </ValueItem>, <ValueItem key="8" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueRating editable label="Rating" value={3} />
      </ValueItem>, <ValueItem key="9" size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <ValueDatetime editable label="Created at" value={new Date(2022, 5, 1)} format="yyyy-MM-dd" />
      </ValueItem>]
  }
}`,...u.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const S=["Default","Dense","EditableDense","Editable","WihtoutSubtitle","WithImage","WithDataTable"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Dense:r,Editable:u,EditableDense:m,WihtoutSubtitle:n,WithDataTable:d,WithImage:i,__namedExportsOrder:S,default:R},Symbol.toStringTag,{value:"Module"}));export{t as D,p as G,X as a};
