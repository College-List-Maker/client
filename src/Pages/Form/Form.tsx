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
    honors: 3,
    apib: 4,
    lang: 3,
    cs: "Y",
    core: "Y",
    major: 3,
  },
  confidence: {
    extracurriculars: 3,
    essay: 3,
    awards: 4,
    recommendations: 4,
    volunteering: 3,
    works: 4,
    talents: 3,
    interviewing: 3,
    character: 4,
    interest: 4,
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
    zipcode: 12345,
    state: "IA",
    country: "US",
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
    coedImportance: 4,
    academicResourcesImportance: 4,
    facilityImportance: false,
    gender: "M",
    hbcuImportance: 4,
    internshipImportance: 4,
    majorProminenceImportance: false,
    pref4yr: false,
    prefCommittedFaculty: 4,
    prefHighestDegree: 3,
    prefMajor: "PCIP11",
    prefPrivateControl: false,
    prefPublicControl: false,
    prefReligion: 1,
    prefReligious: false,
    prefSexRatioF: 50,
    prefSize: 25000,
    prestiegeImportance: 4,
    researchImportance: 4,
    rigorImportance: 4,
    sameGenderImportance: 4,
    studyAbroadImportance: 4,
    workStudyImportance: 4,
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
    console.log(formData);
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
              <Page9 />
            </FormDataContext.Provider>
          </>
        );
      case 3:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page10 />
            </FormDataContext.Provider>
          </>
        );
      case 4:
        return (
          <>
            <FormDataContext.Provider value={[formData, setFormData]}>
              <Page11 />
            </FormDataContext.Provider>
          </>
        );
      case 5:
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
