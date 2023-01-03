import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CollegeList } from "./Pages/CollegeList/CollegeList";
import { isLoggedIn, updateUserInfo } from "./Fetch";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import theme from "./theme/index";
import "./theme/styles.css";
import { Form } from "./Pages/Form/Form";
import { Profile } from "./Pages/Profile/Profile";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { ExploreCollege } from "./Pages/ExploreCollege/ExploreCollege";
import { TermsOfService } from "./Pages/TermsOfService/TermsOfService";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";

export const App = () => {
  /* 
    HANDLE APP DIRECTORY
  */
  const isDarkNavbar = ["#about-us", "#profile"].includes(window.location.hash);
  const isDarkFooter =
    ["#about-us", "#college-list", "#coming-soon", "#form"].includes(
      window.location.hash
    ) || window.location.hash.startsWith("#explore-college");
  const [hashtag, setHashtag] = useState(window.location.hash);
  useEffect(() => {
    updateUserInfo();

    const checkSigninPage = () => {
      if (isLoggedIn()) {
        if (window.location.hash === "#sign-in") window.location.hash = "#";
      }
    };
    const handleHashChange = () => {
      window.scrollTo(0, 0);
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
      <ToastContainer />
      <Navbar dark={isDarkNavbar} />
      {(hashtag === "" || hashtag === "#") && <LandingPage />}
      {hashtag === "#college-list" && <CollegeList />}
      {hashtag === "#form" && <Form />}
      {hashtag === "#profile" && <Profile />}
      {hashtag === "#about-us" && <AboutUs />}
      {hashtag === "#tos" && <TermsOfService />}
      {hashtag === "#coming-soon" && <ComingSoon />}
      {hashtag.startsWith("#explore-college") && <ExploreCollege />}
      <Footer dark={isDarkFooter} />
    </ChakraProvider>
  );
};
