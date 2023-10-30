import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

export interface TestRouterIdProps {
  param?: string;
}

export const TestRouterId = ({ param = "id" }: TestRouterIdProps) => {
  const params = useParams();
  return <Typography>Router ID: {params[param]}</Typography>;
};
