import React from "react";
import { ComponentMeta } from "@storybook/react";
import { SignIn } from "./sign-in";
import { createTemplate } from "../../storybook";
import { SignInCenterContainer } from "./sign-in-container";

export default {
  title: "Components/Sign In",
  component: SignIn,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SignIn>;

const Template = createTemplate(SignIn);

export const Default = Template.bind({});
Default.args = {
  title: "Sign in into Garmin Workouts",
  subtitle: "Enter your details below",
};

export const Error = Template.bind({});
Error.args = {
  title: "Sign in into Garmin Workouts",
  subtitle: "Enter your details below",
  error: {
    name: "InvalidCredentials",
    message: "Invalid user credentials",
  },
};

export const Loading = Template.bind({});
Loading.args = {
  title: "Sign in into Garmin Workouts",
  subtitle: "Enter your details below",
  loading: true,
};

const ContainerTemplate = createTemplate((args) => (
  <SignInCenterContainer>
    <SignIn {...args} />
  </SignInCenterContainer>
));
export const CenteredContainer = ContainerTemplate.bind({});
ContainerTemplate.args = {
  title: "Sign in into Garmin Workouts",
  subtitle: "Enter your details below",
};