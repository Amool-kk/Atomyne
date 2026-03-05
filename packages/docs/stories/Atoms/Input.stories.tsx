import type { Meta, StoryObj } from "@storybook/react";
import type { InputProps } from "@atomyne/ui-react";
import { Input } from "@atomyne/ui-react";

const meta: Meta<InputProps> = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "destructive", "success"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    variant: "primary",
    size: "md",
  },
};

export const Destructive: Story = {
  args: {
    placeholder: "Error input...",
    variant: "destructive",
    defaultValue: "Invalid input",
  },
};

export const Success: Story = {
  args: {
    placeholder: "Success input...",
    variant: "success",
    defaultValue: "Valid input",
  },
};

export const Small: Story = {
  args: {
    placeholder: "Small input",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    placeholder: "Large input",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};
