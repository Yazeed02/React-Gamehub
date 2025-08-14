import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#0d0d0d",
    },
    // custom light mode colors
    lightGray: {
      50: "#ffffff",
      100: "#f7f7f7",
      200: "#e2e2e2",
      300: "#cfcfcf",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "light" ? "lightGray.50" : "gray.900",
        color: props.colorMode === "light" ? "gray.800" : "gray.50",
      },
    }),
  },
});

export default theme;
