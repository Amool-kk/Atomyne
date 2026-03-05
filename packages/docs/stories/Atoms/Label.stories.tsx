import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@atomyne/ui-react";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    required: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const Required: Story = {
  args: {
    children: "Required Label",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Label",
    disabled: true,
  },
};
