import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  args: {
    label: "Click me",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
