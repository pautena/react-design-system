import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-CFahbR6w.js";import{D,P as y}from"./DateCalendar-ofOVHG2t.js";import{i as p,b as g,c as u,s as x,e as R,f as b}from"./storybook-BExNV_A2.js";import{s as h}from"./memoTheme-kZCwlU27.js";import{B as k}from"./Box-CLV6Ujku.js";const v=h(k,{shouldForwardProp:n=>n!=="dayIsBetween"&&n!=="isFirstDay"&&n!=="isLastDay"&&n!=="isStartOfWeek"&&n!=="isEndOfWeek"})(({theme:n,dayIsBetween:e,isFirstDay:t,isLastDay:d})=>({...(t||d||e)&&{borderRadius:0,backgroundColor:`${n.palette.primary.light}40`,margin:0},...t&&{borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%"},...d&&{borderTopRightRadius:"50%",borderBottomRightRadius:"50%"}})),B=n=>{const{day:e,dateRange:t,...d}=n;if(t==null)return m.jsx(y,{day:e,...d});const[r,i]=t,s=!!i&&p(e,r)&&g(e,i),o=u(e,r),a=!!i&&u(e,i),l=u(e,x(e)),c=u(e,R(e));return m.jsx(v,{dayIsBetween:s,isFirstDay:o||s&&l,isLastDay:a||s&&c,"aria-label":b(e,"yyyy-MM-dd"),"aria-selected":s||o||a,role:"gridcell",children:m.jsx(y,{...d,day:e,selected:o||a})})},C=({defaultValue:n,onValueChange:e})=>{const[t,d]=f.useState(n),[r,i]=f.useState(0),s=(a,l,c)=>{d(a),e(a,l),i(c)},o=a=>{if(a){if(r===1&&a<t[0])return s([a,void 0],0,1);if(r===0&&t[1]&&a>t[1])return s([a,void 0],0,1);s([r===0?a:t[0],r===1?a:t[1]],r,r===0?1:0)}};return m.jsx(D,{value:null,onChange:o,slots:{day:B},slotProps:{day:{dateRange:t}},"aria-label":"calendar range picker"})};C.__docgenInfo={description:"",methods:[],displayName:"DateRangeCalendar",props:{defaultValue:{required:!0,tsType:{name:"tuple",raw:"[Date, Date | undefined]",elements:[{name:"Date"},{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]}]},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: DateRange, updatedIndex: number) => void",signature:{arguments:[{type:{name:"tuple",raw:"[Date, Date | undefined]",elements:[{name:"Date"},{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]}]},name:"value"},{type:{name:"number"},name:"updatedIndex"}],return:{name:"void"}}},description:""}}};export{C as D};
