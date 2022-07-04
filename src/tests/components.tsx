import React, { PropsWithChildren } from 'react';
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

interface SkeletonGridProps {
  size?:number;
}

export const SkeletonGrid = ({size=20}:SkeletonGridProps)=> {
  return (
    <Grid container spacing={2}>
      {newArrayWithSize(size,0).map((_,i)=>(
        <Grid item key={i} xs={4}>
          <SkeletonCard width={1}/>
        </Grid>
      ))}
    </Grid>
  )
}

type ContentPlaceholderProps = PropsWithChildren<{
  size?:number;
  p?:number;
}>

export const ContentPlaceholder = ({size=20,children,p}:ContentPlaceholderProps)=> {
  return (
    <Container component="main" sx={{p}}>
      {children}
      <SkeletonGrid size={size}/>
    </Container>
  )
}