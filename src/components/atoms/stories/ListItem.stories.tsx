import type { Meta, StoryObj } from "@storybook/react";

// components
import ListItem from "../ListItem";

const meta = {
  title: "Atoms/ListItem",
  component: ListItem,
  parameters: {
    docs: {
      autodocs: true,
      description: {
        component: `
### 概要
HeaderやFooterで再利用可能なList内のコンポーネントです。

### 特徴
- 3種類のサイズバリエーション
- リンク機能つきのリストアイテム
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
    size: {
      control: {
        type: "select",
      },
      description: "要素のサイズ",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
    },
    text: {
      control: {
        type: "text",
      },
      description: "記載文字",
      defaultValue: "About",
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "about",
    link: "/",
    size: "medium",
    text: "About",
  },
};
export const Small: Story = {
  args: {
    id: "about",
    link: "/",
    size: "small",
    text: "About",
  },
};
export const Large: Story = {
  args: {
    id: "about",
    link: "/",
    size: "large",
    text: "About",
  },
};
