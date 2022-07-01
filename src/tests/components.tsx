import React from 'react';
import { Typography,Container, Skeleton,Grid,Box } from "@mui/material"
import { loremIpsum } from "lorem-ipsum";
import { newArrayWithSize } from '../utils';

export const Placeholder = () => {

  return (
    <Typography variant="body1">
      {loremIpsum({
        count: 3,
        units: "paragraph",
      })}
    </Typography>
  )
}


interface  SkeletonCardProps {
  width?:number|string;
  animation?:'pulse' | 'wave' | false;
}

export const SkeletonCard = ({width="100%",animation=false}:SkeletonCardProps)=> {
  return (
    <Box width={width}>
      <Skeleton animation={animation} variant="rectangular" height={118}/>
      <Skeleton animation={animation} variant="rectangular" height={16} sx={{my:1}}/>
      <Skeleton animation={animation} variant="rectangular" width="80%" height={16} />
    </Box>
  );
}


export const ContentPlaceholder = ()=> {
  return (
    <Container component="main">
      <Grid container spacing={2}>
        {newArrayWithSize(20,0).map((_,i)=>(
          <Grid item key={i} xs={4}>
            <SkeletonCard width={1}/>
          </Grid>
        ))}
        </Grid>
    </Container>
  )
}