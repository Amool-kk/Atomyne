import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "./checkbox";

const meta = {
  title: "Atoms/Checkbox",
  tags: ["autodocs"],
  component: Checkbox,
  argTypes: {
    size: {
      control: { type: "select" },
      options: [4, 5, 6, 7, 8, 9, 10],
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "terms",
    size: "default",
  },
};
