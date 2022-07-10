import React from 'react';
import { DrawerSection } from '../drawer-section';
import { DrawerContentComponent } from '../drawer.types';

export const DrawerContent:DrawerContentComponent = ({nav,open})=> {
  const {items} = nav;
  
  return (
    <>
    {items.map((item, i) => (<DrawerSection key={i} section={item} open={open}/>))}
    </>
  )
}