import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "ui";
import createCache from "@emotion/cache";

const cache = createCache({ prepend: true, key: "twin" });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <CacheProvider value={cache}>
      <ThemeProvider>
        <Story {...context} />
      </ThemeProvider>
    </CacheProvider>
  ),
];