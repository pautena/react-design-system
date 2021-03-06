/* eslint-disable react/display-name */
import React, { FunctionComponent } from "react";
import { ComponentStory } from "@storybook/react";
import { JSXElementConstructor } from "react";
import { Box } from "@mui/material";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DetailValue } from "./generators/object-details/object-details";

export function createTemplate<P>(
  C: JSXElementConstructor<P>,
): ComponentStory<JSXElementConstructor<P>> {
  return (args) => <C {...args} />;
}

export const withFullHeight = (Story: FunctionComponent) => {
  return (
    <Box height="100vh">
      <Story />
    </Box>
  );
};

export const withContainer =
  ({ width, height, bordered }: { width?: number; height?: number; bordered?: boolean }) =>
  (Story: FunctionComponent) => {
    let sx = {};
    if (bordered) {
      sx = {
        ...sx,
        border: "solid 1px black",
      };
    }
    return (
      <Box width={width} height={height} sx={sx}>
        <Story />
      </Box>
    );
  };

export const withPadding =
  (padding = 2) =>
  (Story: FunctionComponent) => {
    return (
      <Box padding={padding}>
        <Story />
      </Box>
    );
  };

declare type DataSet = 'Commodity' | 'Employee';
export const useDemoDataObject = ({maxColumns,dataSet="Commodity"}:{maxColumns:number,dataSet?:DataSet})=> {

  const { data:{rows:[row],columns},loading } = useDemoData({
    dataSet,
    rowLength: 1,
    maxColumns: maxColumns,
  });

  let object:DetailValue[] = [];
  row && columns.forEach(({field,headerName,description,type})=>{
    object.push({
      field,
      type:type||"",
      description:description||"",
      name:headerName||"",
      value:row[field],
    });
  })


  return {object,loading}
  

}
