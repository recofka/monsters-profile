import { ChakraProvider } from "@chakra-ui/react";
import { addDecorator } from "@storybook/react";
import theme from "../src/theme/theme";

addDecorator(story => (
  <ChakraProvider theme={theme}>{story()}</ChakraProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
}


