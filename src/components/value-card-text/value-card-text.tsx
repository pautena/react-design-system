import { Paper, Typography } from "@mui/material"

export interface ValueCardProps {
  /**
   * Name of the displayed value
   */
  label:string;
  /**
   * Value displayed
   */
  value:string;
}

/**
 * Card to display a labeled value
 */
export const ValueCardText = ({label,value}:ValueCardProps)=>{

  return (
    <Paper sx={{px:3,py:2}}>
      <Typography variant="h5" role="label">{label}</Typography>
      <Typography variant="h3">{value}</Typography>
    </Paper>
  )
}