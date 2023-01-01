import { extendTheme, theme as base } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

const theme = extendTheme({
  fonts: {
    heading: `Inter, ${base.fonts.body}`,
    body: `Actor, ${base.fonts.body}`,
  },
  components: {
    Steps,
  },
});

export default theme;
