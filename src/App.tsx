import { useEffect, useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import setVisitorCookie from "./Cookie";
import { Home } from "./Components/Home";
import Navbar from "./Components/Navbar";
import { CollegeList } from "./Components/CollegeList";

setVisitorCookie("visitorId", 7);
export const App = () => {
  const [hashtag, setHashtag] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setHashtag(hash);
    };

    window.onhashchange = handleHashChange;

    return () => {
      window.onhashchange = null;
    };
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {hashtag === "" && <Home />}
      {hashtag === "#college-list" && <CollegeList />}
    </ChakraProvider>
  );
};
