import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Form } from "./Components/Form";
import setVisitorCookie from "./Cookie";

setVisitorCookie("visitorId", 7);
export const App = () => (
  <ChakraProvider theme={theme}>
    <Form />
  </ChakraProvider>
);
