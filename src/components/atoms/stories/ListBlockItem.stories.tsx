import type { Meta, StoryObj } from "@storybook/react";

// components
import ListBlockItem from "../ListBlockItem";

const meta = {
  title: "Atoms/ListBlockItem",
  component: ListBlockItem,
  parameters: {
    docs: {
      autodocs: true,
      description: {
        component: `
                
                `,
      },
    },
  },
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "key設定用のID",
    },
    link: {
      control: {
        type: "text",
      },
      description: "リンク先のURL",
      defaultValue: "/",
    },
    text: {
      control: {
        type: "text",
      },
      description: "表示文字",
      defaultValue: "Contact",
    },
  },
} satisfies Meta<typeof ListBlockItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "about",
    link: "/",
    text: "About",
  },
};
