import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "white",
      },
      {
        name: "dark",
        value: "black",
      },
    ],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        "Bar Card",
      ],
    },
  },
};
