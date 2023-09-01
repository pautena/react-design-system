import { Box, LinearProgress } from "@mui/material";
import React from "react";
import { LoadingArea } from "~/Components/LoadingArea";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { HeaderElement } from "~/Components/Header";
import { ContentElement } from "~/Components/Content";
import { TabProvider } from "~/Providers/TabProvider";
import { Placeholder, PlaceholderIcon } from "~/Components/Placeholder";

export interface HeaderLayoutError {
  icon?: PlaceholderIcon;
  title?: string;
  message: string;
}

export interface HeaderLayoutProps {
  loading?: boolean;
  fetching?: boolean;
  error?: HeaderLayoutError;
  children: [HeaderElement, ContentElement];
}

const DefaultErrorIcon = () => <ReportProblemIcon color="error" sx={{ width: 200, height: 200 }} />;

export const HeaderLayout = ({ loading, children, fetching, error }: HeaderLayoutProps) => {
  const [headerElement, contentElement] = children;

  return (
    <TabProvider>
      <Box display="flex" flexDirection="column" height={1}>
        {headerElement}
        {fetching && (
          <Box width={1}>
            <LinearProgress />
          </Box>
        )}
        {loading && <LoadingArea />}
        {error && (
          <Box mt={4}>
            <Placeholder
              icon={error.icon || DefaultErrorIcon}
              title={error.title || "There has been an error"}
              subtitle={error.message}
            />
          </Box>
        )}
        {!loading && !error && contentElement}
      </Box>
    </TabProvider>
  );
};
