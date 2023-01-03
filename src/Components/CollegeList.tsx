import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../Fetch";
import { Skeleton, OrderedList, ListItem, Box } from "@chakra-ui/react";
import { UserCollegeData } from "../types";

export function CollegeList() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [collegeData, setCollegeData] = useState<UserCollegeData>();

  useEffect(() => {
    fetchSubmittedData();
  }, []);

  const fetchSubmittedData = () => {
    axios
      .get(
        "http://localhost:4000/college/set-college-list/" +
          getCookie("visitorId=")
      )
      .then((res: any) => {
        if (res.data) {
          setCollegeData(res.data);
          setIsLoading(false);
        }
      })
      .catch((err: any) => {
        console.error(err);
        window.location.hash = "#";
      });
  };

  return (
    <div>
      {collegeData ? (
        isLoading ? (
          <Skeleton>Test</Skeleton>
        ) : (
          <>
            <Box display="flex" justifyContent="center">
              <Box my={4}>
                <Box my={4}>
                  Safeties
                  <OrderedList>
                    {collegeData.finalSafeties.map((col: any) => {
                      return <ListItem>{col}</ListItem>;
                    })}
                  </OrderedList>
                </Box>
                Targets
                <OrderedList>
                  {collegeData.finalTargets.map((col: any) => {
                    return <ListItem>{col}</ListItem>;
                  })}
                </OrderedList>
                <Box my={4}>
                  Reaches
                  <OrderedList>
                    {collegeData.finalReaches.map((col: any) => {
                      return <ListItem>{col}</ListItem>;
                    })}
                  </OrderedList>
                </Box>
              </Box>
            </Box>
          </>
        )
      ) : (
        <Skeleton>Test</Skeleton>
      )}
    </div>
  );
}
