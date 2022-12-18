import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Form } from "./Components/Form";
import setVisitorCookie from "./Cookie";
import { CollegeList } from "./Components/CollegeList";

setVisitorCookie("visitorId", 7);
export const App = () => (
  <ChakraProvider theme={theme}>
    <CollegeList />
    <Form />
  </ChakraProvider>
);
