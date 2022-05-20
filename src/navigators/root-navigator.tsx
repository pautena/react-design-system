import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import { Home, SignIn,CognitoCallback } from '../pages';


export const RootNavigator = ()=> {
  const navigate = useNavigate();
  const isAuthenticated = useSelector<RootState, boolean>((state) => state.auth.isAuthenticated);

  useEffect(()=>{
    if(isAuthenticated){
      navigate('/')
    }else{
      navigate("/sign-in")
    }
  },[isAuthenticated]);
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="callback/cognito" element={<CognitoCallback />} />
    </Routes>
  )
}