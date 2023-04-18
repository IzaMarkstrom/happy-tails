import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: "#baa4a6",
    dark: "#2c2014",
    beige: "#a78c7c",
    green: "#93846b",
  },
};

const theme = extendTheme({
  colors,
});

export default theme;
