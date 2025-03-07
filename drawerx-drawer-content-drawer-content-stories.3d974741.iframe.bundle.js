"use strict";(self.webpackChunk_pautena_react_design_system=self.webpackChunk_pautena_react_design_system||[]).push([[616],{"./src/drawerx/drawer-content/drawer-content.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Collapsed:()=>Collapsed,Default:()=>Default,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _drawer_content__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/drawerx/drawer-content/drawer-content.tsx"),_drawer_drawer_mock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/drawerx/drawer/drawer.mock.tsx"),_drawer_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/drawerx/drawer-context/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Drawers/DrawerContent",component:_drawer_content__WEBPACK_IMPORTED_MODULE_0__.s,render:({initialState="open",size="medium",selectedItemId,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_drawer_context__WEBPACK_IMPORTED_MODULE_2__.DQ,{initialState,selectedItemId,size,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_drawer_content__WEBPACK_IMPORTED_MODULE_0__.s,{...args})}),parameters:{layout:"centered"}},Default={args:{selectedItemId:"item2.3.2",navigation:_drawer_drawer_mock__WEBPACK_IMPORTED_MODULE_1__.sO}},Small={args:{...Default.args,size:"small"}},Collapsed={args:{...Default.args,initialState:"collapse"}},__namedExportsOrder=["Default","Small","Collapsed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    selectedItemId: "item2.3.2",\n    navigation: mockDrawerNavigation\n  }\n}',...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    size: "small"\n  }\n}',...Small.parameters?.docs?.source}}},Collapsed.parameters={...Collapsed.parameters,docs:{...Collapsed.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    initialState: "collapse"\n  }\n}',...Collapsed.parameters?.docs?.source}}}},"./src/drawerx/drawer-content/drawer-content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>DrawerContent});var useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),List=__webpack_require__("./node_modules/@mui/material/List/List.js"),drawer_context=__webpack_require__("./src/drawerx/drawer-context/index.ts"),drawer_item=(__webpack_require__("./src/drawerx/drawer-item/drawer-menu-item.tsx"),__webpack_require__("./src/drawerx/drawer-item/drawer-item.tsx")),jsx_runtime=(__webpack_require__("./src/drawerx/drawer-item/drawer-item-link.tsx"),__webpack_require__("./node_modules/react/jsx-runtime.js")),DrawerContent=function DrawerContent(_ref){var navigation=_ref.navigation,_useDrawer=(0,drawer_context.yT)(),size=(_useDrawer.state,_useDrawer.size),spacing=(0,useTheme.Z)().spacing;return(0,jsx_runtime.jsx)(List.Z,{sx:{paddingTop:"small"===size?spacing(0):void 0,paddingX:spacing("small"===size?.5:1)},children:navigation.map((function(item){return(0,jsx_runtime.jsx)(drawer_item.r,{item},item.id)}))})};try{DrawerContent.displayName="DrawerContent",DrawerContent.__docgenInfo={description:"Content to be shown inside a navigation",displayName:"DrawerContent",props:{navigation:{defaultValue:null,description:"Object with the content that has to be rendered",name:"navigation",required:!0,type:{name:"DrawerNavigation"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/drawerx/drawer-content/drawer-content.tsx#DrawerContent"]={docgenInfo:DrawerContent.__docgenInfo,name:"DrawerContent",path:"src/drawerx/drawer-content/drawer-content.tsx#DrawerContent"})}catch(__react_docgen_typescript_loader_error){}}}]);