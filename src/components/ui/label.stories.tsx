import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from './label';

const meta = {
  title: "Atoms/Label",
  tags: ["autodocs"],
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "terms",
    children: "testing"
  }
};