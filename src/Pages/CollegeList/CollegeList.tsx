import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, isQuestionaireCompleted } from "../../Fetch";
import { Container, Stack } from "@chakra-ui/react";
import { UserCollegeData } from "../../types";
import { CollegeSectionCard } from "./CollegeSectionCard";
import { CollegeListSkeleton } from "./CollegeListSkeleton";

export function CollegeList() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [collegeData, setCollegeData] = useState<UserCollegeData>();

    // gets data once per page load
    useEffect(() => {
        fetchSubmittedData();
    }, []);

    /* 
    TODO: ALSO REPLACE API CALL FOR A LOCAL STORAGE VARIABLE (like in navbar)
  */
    useEffect(() => {
        if (!isQuestionaireCompleted()) window.location.hash = "#college-list";
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
    <Container>
      {!collegeData || isLoading ? (
        <CollegeListSkeleton />
      ) : (
        <Stack>
          <CollegeSectionCard
            heading="Reaches"
            colleges={collegeData.finalReaches}
          />
          <CollegeSectionCard
            heading="Targets"
            colleges={collegeData.finalTargets}
          />
          <CollegeSectionCard
            heading="Safeties"
            colleges={collegeData.finalSafeties}
          />
        </Stack>
      )}
    </Container>
  );
}
