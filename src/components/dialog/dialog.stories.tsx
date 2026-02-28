import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { useState } from "react";
import Button from "@/components/button";
import Dialog from "./dialog";

const DialogDemo = (args: ComponentProps<typeof Dialog>) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog {...args} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default {
  title: "Dialogs/Dialog",
  component: DialogDemo,
  parameters: {
    layout: "centered",
  },
  render: (args) => <DialogDemo {...args} />,
} satisfies Meta<typeof DialogDemo>;

type Story = StoryObj<typeof DialogDemo>;

export const Default: Story = {
  args: {
    title: "Dialog title",
    description: "Short description for the dialog.",
    children: (
      <p className="text-sm text-muted-foreground">
        Dialog body content goes here.
      </p>
    ),
    footer: <Button>Confirm</Button>,
  },
};
