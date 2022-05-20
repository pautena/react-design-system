import React from 'react';
import {Box,Typography,Button} from '@mui/material';
import {Auth} from 'aws-amplify';
import { CognitoIdentityProvider } from '../../configs/aws';

export const SignIn = ()=>{
  const handleClickSignIn = ()=> {
    Auth.federatedSignIn({customProvider:CognitoIdentityProvider});
  };

  return(
    <Box>
      <Typography>SignIn screen</Typography>
      <Button onClick={handleClickSignIn}>Sign in</Button>
    </Box>
  )
}