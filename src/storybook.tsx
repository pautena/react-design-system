import React from "react";
import { ComponentStory } from "@storybook/react";
import { JSXElementConstructor } from "react";

export function createTemplate<P>(
  C: JSXElementConstructor<P>,
): ComponentStory<JSXElementConstructor<P>> {
  return (args) => <C {...args} />;
}
