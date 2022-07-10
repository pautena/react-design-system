import {useState} from 'react';
import React,{ PropsWithChildren } from "react"
import {DrawerContext} from "./drawer.context";

type Props = PropsWithChildren<{ 
  initialOpen?:boolean;
}>

export const DrawerProvider = ({children,initialOpen=false}:Props) => {
  const [open,setOpen] = useState(initialOpen);

  return (
    <DrawerContext.Provider value={{
      isOpen:open,
      close: ()=> setOpen(false),
      open: ()=> setOpen(true),
    }}>
      {children}
    </DrawerContext.Provider>
  );
}