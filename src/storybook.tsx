import React from "react";
import { ComponentStory } from "@storybook/react";
import { JSXElementConstructor } from "react";

export function createTemplate<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>,
>(C: T): ComponentStory<T> {
  // eslint-disable-next-line react/display-name
  return (args) => <C {...args} />;
}
