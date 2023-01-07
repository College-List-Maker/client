import axios from "axios";
import { useState, createContext, useEffect } from "react";
import { UserCollegeData } from "../../types";
import { DeleteAccountCard } from "./DeleteAccountCard";
import { getCookie } from "../../Fetch";
import { Center, Container, useToast, Heading, Box } from "@chakra-ui/react";
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
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FadeBox } from "../../Components/MotionBox";
import { isQuestionaireCompleted } from "../../Fetch";
import { ResetQuestionnaire } from "./ResetQuestionnaire";

export const LoadingContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([true, () => {}]);

export function Profile(): {
  component: JSX.Element;
  context: React.Context<
    [UserCollegeData, React.Dispatch<React.SetStateAction<UserCollegeData>>]
  >;
} {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [submissionData, setSubmissionData] = useState<UserCollegeData>();

  // useEffect below checks if user has already filled out form
  //    if has college list, redirects to college list
  /* 
        TODO: ALSO REPLACE API CALL FOR A LOCAL STORAGE VARIABLE (like in navbar)
      */

  const defaultData = {
    academic: {
      gpa: submissionData?.academic.gpa ? submissionData?.academic.gpa : -1,
      sat: submissionData?.academic.sat ? submissionData?.academic.sat : -1,
      act: submissionData?.academic.act ? submissionData?.academic.act : -1,
    },
    courseload: {
      honors: submissionData?.courseload.honors
        ? submissionData?.courseload.honors
        : -1,
      apib: submissionData?.courseload.apib
        ? submissionData?.courseload.apib
        : -1,
      lang: submissionData?.courseload.lang
        ? submissionData?.courseload.lang
        : -1,
      cs: submissionData?.courseload.cs ? submissionData?.courseload.cs : "",
      core: submissionData?.courseload.core
        ? submissionData?.courseload.core
        : "",
      major: submissionData?.courseload.major
        ? submissionData?.courseload.major
        : -1,
    },
    confidence: {
      extracurriculars: submissionData?.confidence.extracurriculars
        ? submissionData?.confidence.extracurriculars
        : -1,
      essay: submissionData?.confidence.essay
        ? submissionData?.confidence.essay
        : -1,
      awards: submissionData?.confidence.awards
        ? submissionData?.confidence.awards
        : -1,
      recommendations: submissionData?.confidence.recommendations
        ? submissionData?.confidence.recommendations
        : -1,
      volunteering: submissionData?.confidence.volunteering
        ? submissionData?.confidence.volunteering
        : -1,
      works: submissionData?.confidence.works
        ? submissionData?.confidence.works
        : -1,
      talents: submissionData?.confidence.talents
        ? submissionData?.confidence.talents
        : -1,
      interviewing: submissionData?.confidence.interviewing
        ? submissionData?.confidence.interviewing
        : -1,
      character: submissionData?.confidence.character
        ? submissionData?.confidence.character
        : -1,
      interest: submissionData?.confidence.interest
        ? submissionData?.confidence.interest
        : -1,
    },
    colleges: {
      legacy1: submissionData?.colleges.legacy1
        ? submissionData?.colleges.legacy1
        : "",
      legacy2: submissionData?.colleges.legacy2
        ? submissionData?.colleges.legacy2
        : "",
      legacy3: submissionData?.colleges.legacy3
        ? submissionData?.colleges.legacy3
        : "",
      alumni1: submissionData?.colleges.alumni1
        ? submissionData?.colleges.alumni1
        : "",
      alumni2: submissionData?.colleges.alumni2
        ? submissionData?.colleges.alumni2
        : "",
      alumni3: submissionData?.colleges.alumni3
        ? submissionData?.colleges.alumni3
        : "",
      feeder1: submissionData?.colleges.feeder1
        ? submissionData?.colleges.feeder1
        : "",
      feeder2: submissionData?.colleges.feeder2
        ? submissionData.colleges.feeder2
        : "",
      feeder3: submissionData?.colleges.feeder3
        ? submissionData.colleges.feeder3
        : "",
    },
    residency: {
      zipcode: submissionData?.residency.zipcode
        ? submissionData.residency.zipcode
        : -1,
      state: submissionData?.residency.state
        ? submissionData.residency.state
        : "",
      country: submissionData?.residency.country
        ? submissionData.residency.country
        : "",
    },
    class: {
      size: submissionData?.class.size ? submissionData.class.size : -1,
      rank: submissionData?.class.rank ? submissionData.class.rank : -1,
    },
    adversity: {
      fgen: submissionData?.adversity.fgen
        ? submissionData.adversity.fgen
        : false,
      international: submissionData?.adversity.international
        ? submissionData.adversity.international
        : false,
      transfer: submissionData?.adversity.transfer
        ? submissionData.adversity.transfer
        : false,
    },
    collegePrefs: {
      coedImportance: submissionData?.collegePrefs.coedImportance
        ? submissionData.collegePrefs.coedImportance
        : -1,
      academicResourcesImportance: submissionData?.collegePrefs
        .academicResourcesImportance
        ? submissionData.collegePrefs.academicResourcesImportance
        : -1,
      facilityImportance: submissionData?.collegePrefs.facilityImportance
        ? submissionData.collegePrefs.facilityImportance
        : false,
      gender: submissionData?.collegePrefs.gender
        ? submissionData.collegePrefs.gender
        : "",
      hbcuImportance: submissionData?.collegePrefs.hbcuImportance
        ? submissionData.collegePrefs.hbcuImportance
        : -1,
      internshipImportance: submissionData?.collegePrefs.internshipImportance
        ? submissionData.collegePrefs.internshipImportance
        : -1,
      majorProminenceImportance: submissionData?.collegePrefs
        .majorProminenceImportance
        ? submissionData.collegePrefs.majorProminenceImportance
        : false,
      pref4yr: submissionData?.collegePrefs.pref4yr
        ? submissionData.collegePrefs.pref4yr
        : false,
      prefCommittedFaculty: submissionData?.collegePrefs.prefCommittedFaculty
        ? submissionData.collegePrefs.prefCommittedFaculty
        : -1,
      prefHighestDegree: submissionData?.collegePrefs.prefHighestDegree
        ? submissionData.collegePrefs.prefHighestDegree
        : -1,
      prefMajor: submissionData?.collegePrefs.prefMajor
        ? submissionData.collegePrefs.prefMajor
        : "",
      prefPrivateControl: submissionData?.collegePrefs.prefPrivateControl
        ? submissionData.collegePrefs.prefPrivateControl
        : false,
      prefPublicControl: submissionData?.collegePrefs.prefPublicControl
        ? submissionData.collegePrefs.prefPublicControl
        : false,
      prefReligion: submissionData?.collegePrefs.prefReligion
        ? submissionData.collegePrefs.prefReligion
        : -1,
      prefReligious: submissionData?.collegePrefs.prefReligious
        ? submissionData.collegePrefs.prefReligious
        : false,
      prefSexRatioF: submissionData?.collegePrefs.prefSexRatioF
        ? submissionData.collegePrefs.prefSexRatioF
        : -1,
      prefSize: submissionData?.collegePrefs.prefSize
        ? submissionData.collegePrefs.prefSize
        : -1,
      prestiegeImportance: submissionData?.collegePrefs.prestiegeImportance
        ? submissionData.collegePrefs.prestiegeImportance
        : -1,
      researchImportance: submissionData?.collegePrefs.researchImportance
        ? submissionData.collegePrefs.researchImportance
        : -1,
      rigorImportance: submissionData?.collegePrefs.rigorImportance
        ? submissionData.collegePrefs.rigorImportance
        : -1,
      sameGenderImportance: submissionData?.collegePrefs.sameGenderImportance
        ? submissionData.collegePrefs.sameGenderImportance
        : -1,
      studyAbroadImportance: submissionData?.collegePrefs.studyAbroadImportance
        ? submissionData.collegePrefs.studyAbroadImportance
        : -1,
      workStudyImportance: submissionData?.collegePrefs.workStudyImportance
        ? submissionData.collegePrefs.workStudyImportance
        : -1,
    },
    costPrefs: {
      costImportance: submissionData?.costPrefs.costImportance
        ? submissionData.costPrefs.costImportance
        : false,
      federalAidImportance: submissionData?.costPrefs.federalAidImportance
        ? submissionData.costPrefs.federalAidImportance
        : false,
      income: submissionData?.costPrefs.income
        ? submissionData.costPrefs.income
        : -1,
      prefCOA: submissionData?.costPrefs.prefCOA
        ? submissionData.costPrefs.prefCOA
        : -1,
    },
    locationPrefs: {
      locationImportance: submissionData?.locationPrefs.locationImportance
        ? submissionData.locationPrefs.locationImportance
        : false,
      ZIP: submissionData?.locationPrefs.ZIP
        ? submissionData.locationPrefs.ZIP
        : -1,
      curState: submissionData?.locationPrefs.curState
        ? submissionData.locationPrefs.curState
        : "",
      prefCity: submissionData?.locationPrefs.prefCity
        ? submissionData.locationPrefs.prefCity
        : "",
      prefState: submissionData?.locationPrefs.prefState
        ? submissionData.locationPrefs.prefState
        : "",
      prefRegion: submissionData?.locationPrefs.prefRegion
        ? submissionData.locationPrefs.prefRegion
        : -1,
      livingAtHome: submissionData?.locationPrefs.livingAtHome
        ? submissionData.locationPrefs.livingAtHome
        : false,
      prefLocale: submissionData?.locationPrefs.prefLocale
        ? submissionData.locationPrefs.prefLocale
        : -1,
      prefSummerClimate: submissionData?.locationPrefs.prefSummerClimate
        ? submissionData.locationPrefs.prefSummerClimate
        : -1,
      prefWinterClimate: submissionData?.locationPrefs.prefWinterClimate
        ? submissionData?.locationPrefs.prefWinterClimate
        : -1,
    },
    successPrefs: {
      successImportance: submissionData?.successPrefs.successImportance
        ? submissionData?.successPrefs.successImportance
        : false,
      alumniCarreerImportance: submissionData?.successPrefs
        .alumniCarreerImportance
        ? submissionData?.successPrefs.alumniCarreerImportance
        : false,
      desiredEarnings: submissionData?.successPrefs.desiredEarnings
        ? submissionData?.successPrefs.desiredEarnings
        : -1,
      graduationRateImportance: submissionData?.successPrefs
        .graduationRateImportance
        ? submissionData?.successPrefs.graduationRateImportance
        : false,
      prefGraduationRate: submissionData?.successPrefs.prefGraduationRate
        ? submissionData?.successPrefs.prefGraduationRate
        : -1,
      prefRetentionRate: submissionData?.successPrefs.prefRetentionRate
        ? submissionData?.successPrefs.prefRetentionRate
        : -1,
      retentionRateImportance: submissionData?.successPrefs
        .retentionRateImportance
        ? submissionData?.successPrefs.retentionRateImportance
        : false,
    },
    weights: {
      collegeWeight: submissionData?.weights.collegeWeight
        ? submissionData?.weights.collegeWeight
        : -1,
      costWeight: submissionData?.weights.costWeight
        ? submissionData?.weights.costWeight
        : -1,
      locationWeight: submissionData?.weights.locationWeight
        ? submissionData?.weights.locationWeight
        : -1,
      successWeight: submissionData?.weights.successWeight
        ? submissionData?.weights.successWeight
        : -1,
    },
    listLengths: {
      reaches: submissionData?.listLengths?.reaches
        ? submissionData?.listLengths.reaches
        : -1,
      safeties: submissionData?.listLengths.safeties
        ? submissionData?.listLengths.safeties
        : -1,
      targets: submissionData?.listLengths.targets
        ? submissionData?.listLengths.targets
        : -1,
    },
  };

  const FormDataContext = createContext<
    [UserCollegeData, React.Dispatch<React.SetStateAction<UserCollegeData>>]
  >([defaultData, () => {}]);

  const [formData, setFormData] = useState<UserCollegeData>(defaultData);

  const fetchSubmittedData = () => {
    setIsLoading(true);
    axios
      .get(
        "https://collegy-server.herokuapp.com/user/get-questionaire/" +
          getCookie("visitorId=")
      )
      .then((res: any) => {
        setSubmissionData(res.data[0]);
        setFormData(res.data[0]);
        setIsLoading(false);
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
      });
  };

  useEffect(() => {
    fetchSubmittedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toast = useToast();

  return {
    component: (
      <Box bgColor={"#ffffff"} py={"20"} minH={"100vh"}>
        <FadeBox>
          <>
            {isQuestionaireCompleted() && (
              <Accordion defaultIndex={[0]}>
                <Center>
                  <Container>
                    <Heading>Questionaire</Heading>
                    Save at each step*
                    <Center>
                      <Container>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Preferred List Length</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page0 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Applicant Academics</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page1 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Applicant Courseload</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page2 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Applicant Confidence</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              {" "}
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page3 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Applicant Extras</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              {" "}
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page4 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Residency</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              {" "}
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page5 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>College Importance</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              {" "}
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page6 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>College Preferences</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              {" "}
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page7 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>College Major</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              {" "}
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page8 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Cost Preferences</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              {" "}
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page9 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Location Preferences</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              {" "}
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page10 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Success Preferences</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              {" "}
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page11 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Weighting Preferences</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <LoadingContext.Provider
                              value={[isLoading, setIsLoading]}
                            >
                              {" "}
                              <FormDataContext.Provider
                                value={[formData, setFormData]}
                              >
                                <Page12 />
                              </FormDataContext.Provider>
                            </LoadingContext.Provider>
                          </AccordionPanel>
                        </AccordionItem>
                      </Container>
                    </Center>
                  </Container>
                </Center>
              </Accordion>
            )}
            <Container
              py="10"
              display="flex"
              alignItems={"center"}
              flexDir="column"
            >
              <Heading as="h1" size="sm" p={"1"}>
                Manage Questionnaire
              </Heading>
              <ResetQuestionnaire />
              <Heading as="h1" size="sm" p={"1"} pt={"5"}>
                Manage Account
              </Heading>
              <DeleteAccountCard />
            </Container>
          </>
        </FadeBox>
      </Box>
    ),
    context: FormDataContext,
  };
}
