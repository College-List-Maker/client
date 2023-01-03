import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, isQuestionaireCompleted } from "../../Fetch";
import { Box, Container, Stack } from "@chakra-ui/react";
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

  useEffect(() => {
    if (!isQuestionaireCompleted()) window.location.hash = "#form";
  }, []);

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
