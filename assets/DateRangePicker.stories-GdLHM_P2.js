import{f as d,a as w,w as v}from"./storybook-BSQM50tz.js";import{j as e,r as u}from"./iframe-CPJC-7_S.js";import{c as x}from"./createSvgIcon-BgPxQH2C.js";import{D as b}from"./DateRangeCalendar-BNnYk12i.js";import{T as k}from"./TextField-Cem1or0z.js";import{I as T}from"./InputAdornment-edAt4hDP.js";import{I as j}from"./IconButton-5Zbhdaoz.js";import{P}from"./Paper-BHj2CCUq.js";import{C as S}from"./Collapse-DLNoDxJD.js";const V=x(e.jsx("path",{d:"M17 12h-5v5h5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1zm3 18H5V8h14z"}));function m({defaultValue:o,format:r,label:c,fullWidth:p,onValueChange:f,size:h="medium"}){const[g,s]=u.useState(!1),[l,y]=u.useState(o),D=(n,i)=>{y(n),f(n,i),s(i<1)};return e.jsxs(e.Fragment,{children:[e.jsx(k,{label:c,fullWidth:p,size:h,value:`${d(l[0],r)} - ${l[1]?d(l[1],r):r.toUpperCase()}`,InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(j,{onClick:()=>s(n=>!n),"aria-label":"open calendar",children:e.jsx(V,{})})})}}),e.jsx(P,{children:e.jsx(S,{in:g,"aria-label":"calendar collapse",children:e.jsx(b,{defaultValue:o,onValueChange:D})})})]})}m.__docgenInfo={description:"DateRangePicker component allows users to select a date range.",methods:[],displayName:"DateRangePicker",props:{label:{required:!0,tsType:{name:"string"},description:"The label for the date range picker."},defaultValue:{required:!0,tsType:{name:"tuple",raw:"[Date, Date | undefined]",elements:[{name:"Date"},{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]}]},description:"The default value for the date range picker."},format:{required:!0,tsType:{name:"string"},description:"The format in which the date range should be displayed."},fullWidth:{required:!1,tsType:{name:"boolean"},description:`If true, the date range picker will take up the full width of its container.
@default false`},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:`The size of the date range picker.
@default "medium"`,defaultValue:{value:'"medium"',computed:!1}},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: DateRange, index: number) => void",signature:{arguments:[{type:{name:"tuple",raw:"[Date, Date | undefined]",elements:[{name:"Date"},{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]}]},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:`Callback function that is called when the value of the date range picker changes.
@param value - The new date range value.
@param index - The index of the date range picker.`}}};const I={title:"Inputs/DateRangePicker",component:m,decorators:[w,v({width:300})],parameters:{layout:"centered"}},a={args:{label:"Select your date range",defaultValue:[new Date(2023,4,9),new Date(2023,4,18)],format:"yyyy/MM/dd",fullWidth:!0}},t={args:{label:"Select your date range",defaultValue:[new Date(2023,4,9),new Date(2023,4,18)],format:"yyyy/MM/dd",fullWidth:!0,size:"small"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select your date range",
    defaultValue: [new Date(2023, 4, 9), new Date(2023, 4, 18)],
    format: "yyyy/MM/dd",
    fullWidth: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select your date range",
    defaultValue: [new Date(2023, 4, 9), new Date(2023, 4, 18)],
    format: "yyyy/MM/dd",
    fullWidth: true,
    size: "small"
  }
}`,...t.parameters?.docs?.source}}};const M=["Default","Small"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Small:t,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{m as D,a,$ as b};
