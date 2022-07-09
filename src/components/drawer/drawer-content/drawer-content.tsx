import React from 'react';
import { DrawerSection } from '../drawer-section';
import { Nav } from '../drawer.types';

export interface DrawerContentProps {
  nav: Nav;
  open:boolean;
}

export const DrawerContent = ({nav,open}:DrawerContentProps)=> {
  const {items} = nav;
  
  return (
    <>
    {items.map((item, i) => (<DrawerSection key={i} section={item} open={open}/>))}
    </>
  )
}