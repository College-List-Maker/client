import { useEffect, useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import setVisitorCookie from "./Cookie";
import { Home } from "./Components/Home";
import Navbar from "./Components/Navbar";
import { CollegeList } from "./Components/CollegeList";
import { SignIn } from "./Components/SignIn";

setVisitorCookie();
export const App = () => {
  /* 
    HANDLE APP DIRECTORY
  */
  const [hashtag, setHashtag] = useState(window.location.hash);
  useEffect(() => {
    const checkSignin = () => {
      if (localStorage.getItem("user_info")) {
        if (window.location.hash === "#sign-in") window.location.hash = "#";
      }
    };

    const handleHashChange = () => {
      checkSignin();
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
      {(hashtag === "" || hashtag === "#") && <Home />}
      {hashtag === "#college-list" && <CollegeList />}
      {hashtag === "#sign-in" && <SignIn />}
    </ChakraProvider>
  );
};
