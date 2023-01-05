import { extendTheme, theme as base } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const greenPrimary = defineStyle({
  color: "white",
});

export const buttonTheme = defineStyleConfig({
  variants: { greenPrimary },
});

const theme = extendTheme({
  fonts: {
    heading: `Inter, ${base.fonts.body}`,
    body: `Actor, ${base.fonts.body}`,
  },
  components: {
    Steps,
    Button: {
      variants: {
        gprimary: {
          color: "#ffffff",
          background: "#2EA44F",
          fontFamily: "Bakbak One",
          fontSize: "20px",
          maxWidth: "100%",
          py: "5",
          px: "10",
          _hover: {
            background: "#278943",
          },
          whiteSpace: "inherit",
          height: "fit-content",
        },
        secondary: {
          color: "#000000",
          background: "#ffffff",
          fontFamily: "Inter",
          border: "1px solid #BABABA",
          width: "fit-content",
          maxWidth: "100%",
          _hover: {
            background: "#EEEEEE",
          },
        },
      },
    },
  },
});

export default theme;
