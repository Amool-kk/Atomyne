import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@atomyne/ui-react";
import { Input } from "@atomyne/ui-react";

const meta: Meta = {
  title: "Molecules/LabeledInput",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="username">Username</Label>
      <Input type="text" id="username" placeholder="Enter username" />
    </div>
  ),
};

export const WithRequiredInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label required htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter email" />
    </div>
  ),
};

export const WithDisabledInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="disabled">Disabled Input</Label>
      <Input type="text" id="disabled" placeholder="Disabled" disabled />
    </div>
  ),
};

export const WithErrorState: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="error">Invalid Input</Label>
      <Input type="email" id="error" placeholder="Enter email" defaultValue="invalid@email" variant="destructive" />
    </div>
  ),
};

export const WithSuccessState: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="success">Valid Input</Label>
      <Input type="email" id="success" placeholder="Enter email" defaultValue="valid@email.com" variant="success" />
    </div>
  ),
};
