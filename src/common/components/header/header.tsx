import { Typography, Box, Button, ButtonGroup } from "@mui/material";
import React from "react";

export type HeaderAction = {
  id: string;
  text: string;
  onClick: () => void;
};

interface Props {
  title: string;
  actions?: HeaderAction[];
}

export const Header = ({ title, actions }: Props) => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" pt={4} pb={3}>
      <Typography variant="h4">{title}</Typography>
      {actions && (
        <Box>
          <ButtonGroup variant="contained" size="small">
            {actions.map(({ id, text, onClick }) => (
              <Button key={id} onClick={onClick}>
                {text}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      )}
    </Box>
  );
};
