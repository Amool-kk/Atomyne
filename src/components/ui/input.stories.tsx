import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "@/components/ui/input"

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    eyeIconSize:{
    defaultValue: 20
    },
    type: {
      options: [
        "text",
        "email",
        "password",
        "number",
        "search",
        "url",
        "tel",
        "file",
        "date",
        "time",
      ],
      defaultValue: "text",
      control: {
        type: "select"
      }
    }
  },
  args: {
    style: {
      width: "400px"
    }
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Input>

// 1. Basic usage
export const Basic: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name",
  },
}

// 2. Email input
export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email",
  },
}

// 3. Password input
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
  },
}

// 4. Number input
export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number",
    min: 0,
    max: 100,
  },
}

// 5. File input
export const File: Story = {
  args: {
    type: "file",
  },
}

// 6. Search input
export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
}

// 7. Disabled input
export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "This is disabled",
    disabled: true,
  },
}

// 8. Read-only input
export const ReadOnly: Story = {
  args: {
    type: "text",
    value: "Read-only text",
    readOnly: true,
  },
}

// 9. Password input
export const PasswordWithIcon: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
    showEyeIcon: true
  },
}