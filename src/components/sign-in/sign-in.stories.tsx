import { ComponentMeta } from "@storybook/react";
import { SignIn } from "./sign-in";
import { createTemplate } from "../../storybook";

export default {
  title: "Forms/Sign In",
  component: SignIn,
  parameters: {
    layout: "centered",
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
