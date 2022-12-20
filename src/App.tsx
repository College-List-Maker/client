import { useEffect, useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import setVisitorCookie from "./Cookie";
import { Home } from "./Components/Home";
import Navbar from "./Components/Navbar";
import { CollegeList } from "./Components/CollegeList";
import jwt_decode from "jwt-decode";
import { SignIn } from "./Components/SignIn";

declare var google: any;
setVisitorCookie("visitorId", 7);
export const App = () => {
  /* 
    HANDLE GOOGLE AUTH
  */
  function handleCallbackResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    window.location.hash = "#";
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "336809998605-4oab4bn2o55ermsojoqbaipm6kqern4p.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

  /* 
    HANDLE APP DIRECTORY
  */
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
      {hashtag === "#sign-in" && <SignIn />}
    </ChakraProvider>
  );
};
