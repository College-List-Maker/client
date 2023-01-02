import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import { CollegeList } from "./Pages/CollegeList/CollegeList";
import { isLoggedIn, updateUserInfo } from "./Fetch";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import Footer from "./Components/Footer";
import theme from "./theme/index";
import "./theme/styles.css";
import { Form } from "./Pages/Form/Form";
import { Profile } from "./Pages/Profile/Profile";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { ExploreCollege } from "./Pages/ExploreCollege/ExploreCollege";

export const App = () => {
  /* 
    HANDLE APP DIRECTORY
  */
  const [hashtag, setHashtag] = useState(window.location.hash);
  useEffect(() => {
    updateUserInfo();

    const checkSigninPage = () => {
      if (isLoggedIn()) {
        if (window.location.hash === "#sign-in") window.location.hash = "#";
      }
    };

    const handleHashChange = () => {
      checkSigninPage();
      const hash = window.location.hash.split("?")[0];
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
      {hashtag === "#about-us" && <AboutUs />}
      {hashtag.startsWith("#explore-college") && <ExploreCollege />}
      <Footer />
    </ChakraProvider>
  );
};
