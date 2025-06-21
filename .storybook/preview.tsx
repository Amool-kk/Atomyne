import type { Preview } from '@storybook/react-vite';
import React from 'react';
import "./preview.css";
import "@/index.css";

function getClassName(isDocs: boolean, isDark: boolean): string {
  if (isDocs) {
    return isDark
      ? "dark bg-[#333] text-white p-4"
      : "bg-white text-black p-4";
  } else {
    return isDark
      ? "dark bg-zinc-900 text-white min-h-screen w-full flex items-center justify-center p-8"
      : "bg-white text-black min-h-screen w-full flex items-center justify-center p-8";
  }
}


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    (Story, context) => {
      const isDark: boolean = context.globals.backgrounds?.value === "dark";
      const isDocs: boolean = context.viewMode === "docs";

      const className = getClassName(isDocs, isDark);

      return (
        <div className={className}>
          <Story />
        </div>
      )
    }
  ]
};

export default preview;