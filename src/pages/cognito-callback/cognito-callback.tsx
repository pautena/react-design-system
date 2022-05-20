import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import{Box,Typography} from '@mui/material';
import { AppDispatch } from '../../store';
import { signInCallback } from '../../features';

export const CognitoCallback = ()=>{
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{
    dispatch(signInCallback());
  },[])

  return  (
    <Box>
      <Typography>Validating user...</Typography>
    </Box>

  )
}