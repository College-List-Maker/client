import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import { CollegeList } from "./Pages/CollegeList/CollegeList";
import { isLoggedIn } from "./Cookie";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import Footer from "./Components/Footer";
import theme from "./theme/index";
import "./theme/styles.css";
import { Form } from "./Pages/Form/Form";
import { Profile } from "./Pages/Profile/Profile";

export const App = () => {
  /* 
    HANDLE APP DIRECTORY
  */
  const [hashtag, setHashtag] = useState(window.location.hash);
  useEffect(() => {
    const checkSigninPage = () => {
      if (isLoggedIn()) {
        if (window.location.hash === "#sign-in") window.location.hash = "#";
      }
    };

    const handleHashChange = () => {
      checkSigninPage();
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
      {(hashtag === "" || hashtag === "#") && <LandingPage />}
      {hashtag === "#college-list" && <CollegeList />}
      {hashtag === "#form" && <Form />}
      {hashtag === "#profile" && <Profile />}
      <Footer />
    </ChakraProvider>
  );
};