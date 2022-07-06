import { Box } from "@mui/material"
import React, { FunctionComponent } from "react"


export const withFullHeight = (Story:FunctionComponent)=> {
  return (
    <Box height="100vh">
      <Story/>
    </Box>
  )
}