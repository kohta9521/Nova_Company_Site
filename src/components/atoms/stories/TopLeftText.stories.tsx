import type { Meta, StoryObj } from "@storybook/react";

// component
import TopLeftText from "../TopLeftText";

const meta = {
  title: "Atoms/TopLeftText",
  component: TopLeftText,
  parameters: {
    docs: {
      autodocs: true,
      description: {
        component: `
### 概要
各セクションの装飾タグ
2つのPropsを使い分けることによりデザインを変更可能
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
    textType: {
      control: {
        type: "boolean",
      },
      description:
        "grayのsection numberの設定かblueのセクションのプログラミング風テキストかの切り替え",
      defaultValue: "gray",
    },
    text: {
      control: {
        type: "text",
      },
      description: "表示内容のテキスト",
    },
  },
} satisfies Meta<typeof TopLeftText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Gray: Story = {
  args: {
    id: "hero",
    textType: "gray",
    text: "01",
  },
};
export const Blue: Story = {
  args: {
    id: "hero",
    textType: "blue",
    text: `<h1 class="message">`,
  },
};
