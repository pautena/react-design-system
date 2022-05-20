import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import{Box,Typography} from '@mui/material';
import {Auth} from 'aws-amplify'

export const CognitoCallback = ()=>{
  const navigate = useNavigate();

  useEffect(()=>{
    const redirectIfAuthenticated = async ()=> {
      console.log("redirectIfAuthenticated")
      const userInfo = await Auth.currentUserInfo();
      console.log("userInfo: ",userInfo);
      if(userInfo){
        navigate('/');
      }
    }
    redirectIfAuthenticated();
  },[])

  return  (
    <Box>
      <Typography>Validating user...</Typography>
    </Box>

  )
}