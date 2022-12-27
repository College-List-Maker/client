import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../Cookie";
import { Skeleton } from "@chakra-ui/react";
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
      {isLoading ? (
        <Skeleton>Test</Skeleton>
      ) : (
        <>{JSON.stringify(collegeData)}</>
      )}
    </div>
  );
}
