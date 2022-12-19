import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import setVisitorCookie from "./Cookie";
import { Home } from "./Components/Home";

setVisitorCookie("visitorId", 7);
export const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
);
