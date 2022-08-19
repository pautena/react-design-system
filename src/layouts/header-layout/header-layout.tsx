import { Box } from "@mui/material";
import React from "react";
import { ContentElement, HeaderElement } from "../../components";
import { LoadingArea } from "../../components/loading-area";
import { TabProvider } from "../../providers";

interface HeaderLayoutProps {
  loading?: boolean;
  children: [HeaderElement, ContentElement];
}

export const HeaderLayout = ({ loading, children }: HeaderLayoutProps) => {
  const [headerElement, contentElement] = children;

  return (
    <TabProvider>
      <Box display="flex" flexDirection="column" height={1}>
        {headerElement}
        {loading ? <LoadingArea /> : contentElement}
      </Box>
    </TabProvider>
  );
};
