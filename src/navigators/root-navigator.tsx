import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import {Box} from '@mui/material';
import {useSelector,useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import { Home, SignIn,CognitoSignInCallback, CognitoSignOutCallback } from '../pages';
import { AppBar } from '../components';
import { signOut } from '../features';

const  AuthenticatedNavigator = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <AppBar onClickSignOut={()=> dispatch(signOut())}/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="callback/cognito" element={<CognitoSignInCallback />} />
          <Route path="logout" element={<CognitoSignOutCallback />} />
        </Routes>
      </Box>
    </div>
  );
}


export const RootNavigator = ()=> {
  const navigate = useNavigate();
  const isAuthenticated = useSelector<RootState, boolean>((state) => state.auth.isAuthenticated);
  const signInInProgress = useSelector<RootState, boolean>((state) => state.auth.signInInProgress);
  const signOutInProgress = useSelector<RootState, boolean>((state) => state.auth.signOutInProgress);

  useEffect(()=>{
    if(!signInInProgress && !signOutInProgress){
      if(isAuthenticated){
        navigate('/')
      }else{
        navigate("/sign-in")
      }
    }
  },[isAuthenticated,signInInProgress,signOutInProgress]);
  return (
    <Routes>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="/*" element={<AuthenticatedNavigator />} />
    </Routes>
  )
}