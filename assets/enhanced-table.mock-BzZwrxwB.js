import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{E as m,T as o}from"./enhanced-table-BwWOcWBo.js";import{T as t}from"./TableCell-Bp-aYBSJ.js";const D=[{id:"name",numeric:!1,disablePadding:!1,label:"Name",sort:!0},{id:"id",numeric:!0,disablePadding:!1,label:"Garmin ID",sort:!0},{id:"startDate",numeric:!1,disablePadding:!1,label:"Date",sort:!0}],b=[{id:2,name:"HIIT",startDate:"11/04/2022"},{id:1,name:"on/off x 1",startDate:"05/04/2022"},{id:3,name:"EMOM 30'",startDate:"07/04/2022"},{id:4,name:"Tabata",startDate:"09/04/2022"},{id:5,name:"AMRAPx2",startDate:"10/04/2022"}],c=({data:r,columns:s,defaultOrder:n,defaultSort:i,loading:d})=>e.jsx(m,{search:!0,data:r,columns:s,defaultSort:i,defaultOrder:n,loading:d,children:l=>l.map(a=>e.jsxs(o,{children:[e.jsx(t,{children:a.name}),e.jsx(t,{children:a.id}),e.jsx(t,{children:a.startDate})]},a.id))});c.__docgenInfo={description:"",methods:[],displayName:"TestTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"Data"}],raw:"Data[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"HeadCell",elements:[{name:"Data"}],raw:"HeadCell<Data>"}],raw:"HeadCell<Data>[]"},description:""},defaultSort:{required:!0,tsType:{name:"Data"},description:""},defaultOrder:{required:!0,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""}}};export{c as T,D as c,b as d};
