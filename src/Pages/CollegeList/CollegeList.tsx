import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, isQuestionaireCompleted } from "../../Fetch";
import { Box, Container, Stack, useToast } from "@chakra-ui/react";
import { UserCollegeData } from "../../types";
import { CollegeSectionCard } from "./CollegeSectionCard";
import { CollegeListSkeleton } from "./CollegeListSkeleton";
import { BounceBox } from "../../Components/MotionBox";

export function CollegeList() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [collegeData, setCollegeData] = useState<UserCollegeData>();

  // gets data once per page load
  useEffect(() => {
    fetchSubmittedData();
  }, []);

  const toast = useToast();
  useEffect(() => {
    if (
      !isQuestionaireCompleted() &&
      window.location.hash === "#college-list"
    ) {
      window.location.hash = "#form";
      toast({
        title: "You haven't filled out the questionaire.",
        description:
          "If you believe this is a mistake, check your profile settings.",
        status: "warning",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
  }, [toast]);

  const fetchSubmittedData = () => {
    axios
      .get(
        "https://collegy-server.herokuapp.com/user/get-college-list/" +
          getCookie("visitorId=")
      )
      .then((res: any) => {
        if (res.data) {
          setCollegeData(res.data[0]);
          setIsLoading(false);
        }
      })
      .catch((err: any) => {
        console.error(err);
        window.location.hash = "#";
      });
  };

  return (
    <Box pt={"20"} pb={"40"} bgColor={"#051027"}>
      <Container>
        {!collegeData || isLoading ? (
          <CollegeListSkeleton />
        ) : (
          <Stack>
            <BounceBox>
              <CollegeSectionCard
                heading="Reaches"
                colleges={collegeData.finalReaches}
              />
            </BounceBox>
            <BounceBox>
              <CollegeSectionCard
                heading="Targets"
                colleges={collegeData.finalTargets}
              />
            </BounceBox>
            <BounceBox>
              <CollegeSectionCard
                heading="Safeties"
                colleges={collegeData.finalSafeties}
              />
            </BounceBox>
          </Stack>
        )}
      </Container>
    </Box>
  );
}
