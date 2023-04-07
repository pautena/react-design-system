import { ComponentMeta } from "@storybook/react";
import { createTemplate, withContainer, withMemoryRouter } from "../../../storybook";
import { LinkCard } from "./link-card";

export default {
  title: "Components/Data Display/LinkCard",
  component: LinkCard,
  decorators: [withContainer({ width: 400 }), withMemoryRouter()],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof LinkCard>;

const Template = createTemplate(LinkCard);

export const Primary = Template.bind({});
Primary.args = {
  title: "Lorem ipsum",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  linkText: "Learn more",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
};

export const Info = Template.bind({});
Info.args = {
  ...Primary.args,
  variant: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Primary.args,
  variant: "warning",
};

export const Error = Template.bind({});
Error.args = {
  ...Primary.args,
  variant: "error",
};

export const WithoutLinkButton = Template.bind({});
WithoutLinkButton.args = {
  title: "Lorem ipsum",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};
