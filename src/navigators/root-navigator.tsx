import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home, SignIn } from '../pages';


export const RootNavigator = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="sign-in" element={<SignIn />} />
    </Routes>
  )
}