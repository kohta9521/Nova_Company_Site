import type { Meta, StoryObj } from "@storybook/react";

// components
import Header from "../Header";

const meta: Meta = {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    docs: {
      autodocs: true,
      description: {
        component: ``,
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
