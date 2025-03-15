import type { Preview } from "@storybook/react";

// グローバルCSS
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      // backgrounds: {
      //   default: 'gray',
      //   values: [
      //     {
      //       name: 'gray',
      //       value: '#F3F5FB',
      //     },
      //     {
      //       name: 'white',
      //       value: '#FFFFFF',
      //     },
      //     {
      //       name: 'black',
      //       value: '#000000',
      //     },
      //     {
      //       name: 'blue',
      //       value: '#2E48A0',
      //     },
      //   ],
      // },
    },
  },
  tags: ["autodocs"],
};

export default preview;
