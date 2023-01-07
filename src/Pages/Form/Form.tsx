import axios from "axios";
import {
  getCookie,
  isQuestionaireCompleted,
  updateUserInfo,
} from "../../Fetch";
import { UserCollegeData } from "../../types";
import { useEffect, createContext, useState } from "react";
import {
  Button,
  Center,
  Container,
  useToast,
  Flex,
  Heading,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Page0 } from "./FormPages/Page0";
import { Page1 } from "./FormPages/Page1";
import { Page2 } from "./FormPages/Page2";
import { Page3 } from "./FormPages/Page3";
import { Page4 } from "./FormPages/Page4";
import { Page5 } from "./FormPages/Page5";
import { Page6 } from "./FormPages/Page6";
import { Page7 } from "./FormPages/Page7";
import { Page8 } from "./FormPages/Page8";
import { Page9 } from "./FormPages/Page9";
import { Page10 } from "./FormPages/Page10";
import { Page11 } from "./FormPages/Page11";
import { Page12 } from "./FormPages/Page12";
import { useSelector, useDispatch } from "react-redux";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { BounceBox } from "../../Components/MotionBox";
import FloatMoji from "../../Components/FloatMoji";

const Icon = (text: string) => (props: any) => <span>{text}</span>;
const steps = [
  { label: "List Length", icon: Icon("📝") },
  { label: "Academics", icon: Icon("🤓") },
  { label: "Courseload", icon: Icon("📚") },
  { label: "Confidence", icon: Icon("😎") },
  { label: "People", icon: Icon("👨‍👩‍👦") },
  { label: "Residency", icon: Icon("📍") },
  { label: "College", icon: Icon("🏫") },
  { label: "Student Body", icon: Icon("👨‍🎓") },
  { label: "Major and Degree", icon: Icon("📜") },
  { label: "Cost", icon: Icon("💰") },
  { label: "Location", icon: Icon("🌎") },
  { label: "Success", icon: Icon("🙌") },
  { label: "Finishing Details", icon: Icon("🎉") },
];

const defaultData: UserCollegeData = {
  academic: {
    gpa: -1,
    sat: -1,
    act: -1,
  },
  courseload: {
    honors: -1,
    apib: -1,
    lang: -1,
    cs: "",
    core: "",
    major: -1,
  },
  confidence: {
    extracurriculars: -1,
    essay: -1,
    awards: -1,
    recommendations: -1,
    volunteering: -1,
    works: -1,
    talents: -1,
    interviewing: -1,
    character: -1,
    interest: -1,
  },
  colleges: {
    legacy1: "",
    legacy2: "",
    legacy3: "",
    alumni1: "",
    alumni2: "",
    alumni3: "",
    feeder1: "",
    feeder2: "",
    feeder3: "",
  },
  residency: {
    zipcode: -1,
    state: "",
    country: "",
  },
  class: {
    size: -1,
    rank: -1,
  },
  adversity: {
    fgen: false,
    international: false,
    transfer: false,
  },
  collegePrefs: {
    coedImportance: -1,
    academicResourcesImportance: -1,
    facilityImportance: false,
    gender: "",
    hbcuImportance: -1,
    internshipImportance: -1,
    majorProminenceImportance: false,
    pref4yr: false,
    prefCommittedFaculty: -1,
    prefHighestDegree: -1,
    prefMajor: "",
    prefPrivateControl: false,
    prefPublicControl: false,
    prefReligion: -1,
    prefReligious: false,
    prefSexRatioF: -1,
    prefSize: -1,
    prestiegeImportance: -1,
    researchImportance: -1,
    rigorImportance: -1,
    sameGenderImportance: -1,
    studyAbroadImportance: -1,
    workStudyImportance: -1,
  },
  costPrefs: {
    costImportance: false,
    federalAidImportance: false,
    income: -1,
    prefCOA: -1,
  },
  locationPrefs: {
    locationImportance: false,
    ZIP: -1,
    curState: "",
    prefCity: "",
    prefState: "",
    prefRegion: -1,
    livingAtHome: false,
    prefLocale: -1,
    prefSummerClimate: -1,
    prefWinterClimate: -1,
  },
  successPrefs: {
    successImportance: false,
    alumniCarreerImportance: false,
    desiredEarnings: -1,
    graduationRateImportance: false,
    prefGraduationRate: -1,
    prefRetentionRate: -1,
    retentionRateImportance: false,
  },
  weights: {
    collegeWeight: -1,
    costWeight: -1,
    locationWeight: -1,
    successWeight: -1,
  },
  listLengths: {
    reaches: -1,
    safeties: -1,
    targets: -1,
  },
};

export const FormDataContext = createContext<
  [UserCollegeData, React.Dispatch<React.SetStateAction<UserCollegeData>>]
>([defaultData, () => {}]);

export function Form() {
  type RootState = {
    form: {
      formValid: boolean;
    };
    // other state properties go here
  };
  const formValid = useSelector(
    (state: RootState) => state && state.form && state.form.formValid
  );
  const dispatch = useDispatch();
  const nextCheck = () => {
    if (formValid) {
      nextStep();
      dispatch({ type: "SET_FORM_VALID", formValid: false });
    } else {
      toast({
        title: "Can't proceed.",
        description: "Please fill out required questions.",
        status: "warning",
        duration: 2000,
        position: "bottom",
        isClosable: true,
      });
    }
  };
  const prevCheck = () => {
    prevStep();
    dispatch({ type: "SET_FORM_VALID", formValid: false });
  };
  const toast = useToast();

  useEffect(() => {
    if (isQuestionaireCompleted() && window.location.hash === "#form") {
      window.location.hash = "#college-list";
      toast({
        title: "You're all set!",
        description:
          "Navigate to your profile settings to edit your questionaire.",
        status: "info",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
  }, [toast]);

  const [formData, setFormData] = useState<UserCollegeData>(defaultData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    axios
      .post(
        "https://collegy-server.herokuapp.com/user/submit-questionaire/" +
          getCookie("visitorId="),
        formData
      )
      .then((res: any) => {
        toast({
          title: "Details submitted.",
          description: "Your colleges will appear soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        axios
          .get(
            "https://collegy-server.herokuapp.com/user/set-college-list/" +
              getCookie("visitorId=")
          )
          .then(() => {
            updateUserInfo().then(
              () => (window.location.hash = "#college-list")
            );
          });
      })
      .catch((err: any) => {
        console.error(err);
        toast({
          title: "Error",
          description: "Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setIsLoading(false);
      });
  };

  const [isLoading, setIsLoading] = useState(false);

  const contents = ({ index }: { index: number }) => {
    switch (index) {
      case 0:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page0 />
            </FormDataContext.Provider>
          </>
        );
      case 1:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page1 />
            </FormDataContext.Provider>
          </>
        );
      case 2:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page2 />
            </FormDataContext.Provider>
          </>
        );
      case 3:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page3 />
            </FormDataContext.Provider>
          </>
        );
      case 4:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page4 />
            </FormDataContext.Provider>
          </>
        );
      case 5:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page5 />
            </FormDataContext.Provider>
          </>
        );
      case 6:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page6 />
            </FormDataContext.Provider>
          </>
        );
      case 7:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page7 />
            </FormDataContext.Provider>
          </>
        );
      case 8:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page8 />
            </FormDataContext.Provider>
          </>
        );
      case 9:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page9 />
            </FormDataContext.Provider>
          </>
        );
      case 10:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page10 />
            </FormDataContext.Provider>
          </>
        );
      case 11:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page11 />
            </FormDataContext.Provider>
          </>
        );
      case 12:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page12 />
            </FormDataContext.Provider>
          </>
        );
    }
    return <></>;
  };
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <Box
      minH={"100vh"}
      py={"20"}
      bgColor={"#051027"}
      bgSize={"cover"}
      bgImage={process.env.PUBLIC_URL + "/img/bgfades.svg"}
      justifyContent={"center"}
    >
      <Heading textAlign={"center"} color={"#ffffff"} py={10}>
        Questionnaire
        <FloatMoji emoji={"📝"} top={0.5} right={0.4} rotate={-25} />
      </Heading>
      <Center>
        <BounceBox>
          <Container
            maxW={"container.lg"}
            bgColor={"#ffffff"}
            p={"10"}
            rounded={"md"}
            mb={"20"}
          >
            <form onSubmit={handleSubmit}>
              <Stack justify={"space-between"}>
                <Steps
                  display="flex"
                  flexWrap="wrap"
                  activeStep={activeStep}
                  orientation={"vertical"}
                  w="100%"
                >
                  {steps.map(({ label, icon }, index) => (
                    <Step icon={icon} key={label} label={label}>
                      <Container w={{ base: "75vw", md: "container.lg" }}>
                        {contents({ index })}
                        <Box pt={"5"}>
                          {activeStep === steps.length ? (
                            <Flex
                              px={4}
                              py={4}
                              width="100%"
                              flexDirection={"column"}
                            >
                              <Heading fontSize="xl" textAlign="center">
                                Woohoo! All steps completed!
                              </Heading>
                              <Button
                                mx="auto"
                                mt={6}
                                size="sm"
                                onClick={reset}
                              >
                                Reset
                              </Button>
                            </Flex>
                          ) : (
                            <Flex width="100%" justify="flex-end">
                              <Button
                                isDisabled={activeStep === 0}
                                mr={4}
                                onClick={prevCheck}
                                size="sm"
                                variant="ghost"
                              >
                                Prev
                              </Button>
                              {activeStep < steps.length - 1 && (
                                <Button
                                  type="button"
                                  size="sm"
                                  onClick={nextCheck}
                                >
                                  Next
                                </Button>
                              )}
                              {activeStep === steps.length - 1 && (
                                <Button
                                  isLoading={isLoading}
                                  type={"submit"}
                                  size="sm"
                                >
                                  Finish
                                </Button>
                              )}
                            </Flex>
                          )}
                        </Box>
                      </Container>
                    </Step>
                  ))}
                </Steps>
              </Stack>
            </form>
          </Container>
        </BounceBox>
      </Center>
    </Box>
  );
}
