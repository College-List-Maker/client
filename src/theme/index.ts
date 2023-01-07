import { extendTheme, theme as base } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";

const CustomSteps = {
  ...StepsStyleConfig,
  baseStyle: (props: any) => {
    return {
      ...StepsStyleConfig.baseStyle(props),
      step: {
        ...StepsStyleConfig.baseStyle(props).step,
      },
      stepContiner: {
        ...StepsStyleConfig.baseStyle(props).stepContainer,
      },
      stepIconContainer: {
        ...StepsStyleConfig.baseStyle(props).stepIconContainer,
      },
      connector: {
        ...StepsStyleConfig.baseStyle(props).connector,
      },
      icon: {
        ...StepsStyleConfig.baseStyle(props).icon,
      },
    };
  },
};

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
    Steps: CustomSteps,
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
        signin: {
          color: "#ffffff",
          background: "rgba(256, 256, 256, .10)",
          fontFamily: "Actor",
          fontSize: "13px",
          maxWidth: "100%",
          py: "2",
          px: "4",
          _hover: {
            background: "rgba(256, 256, 256, .20)",
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
        searchResult: {
          color: "#cccccc",
          backgroundColor: "#202020",
          _hover: {
            background: "#272727",
          },
          fontSize: "xs",
          display: "flex",
          justifyContent: "flex-start",
          overflow: "hidden",
          p: "2",
          w: "100%",
          borderRadius: "0",
          position: "relative", // add this line
          "&::after": {
            // add this block
            content: "''",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0) 90%, #202020 95%)",
          },
        },
      },
    },
  },
});

export default theme;
