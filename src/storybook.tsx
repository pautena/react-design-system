import React from "react";
import { ComponentStory } from "@storybook/react";
import { JSXElementConstructor } from "react";

export function createTemplate<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>(
  C: T,
): ComponentStory<T> {
  return (args) => <C {...args} />;
}
