import React from "react";
import { Breadcrumbs, Typography, Container } from "@mui/material";
import { Link } from "../link";

export interface HeaderProps {
  title: string;
  breadcrumbs?: {
    id: string;
    text: string;
    link: string;
  }[];
}

export const Header = ({ title, breadcrumbs }: HeaderProps) => {
  return (
    <Container sx={{ paddingY: 3 }}>
      <Typography variant="h4">{title}</Typography>
      {breadcrumbs?.length && (
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ marginTop: 1 }}>
          {breadcrumbs.map(({ id, link, text }) => (
            <Link key={id} underline="hover" color="inherit" href={link} variant="body2">
              {text}
            </Link>
          ))}
        </Breadcrumbs>
      )}
    </Container>
  );
};
