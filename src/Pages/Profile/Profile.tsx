import { Skeleton } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { getCookie } from "../../Cookie";
import { UserCollegeData } from "../../types";

export function Profile() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [submissionData, setSubmissionData] = useState<UserCollegeData>();
  useEffect(() => {
    fetchSubmittedData();
  }, []);

  const fetchSubmittedData = () => {
    axios
      .get(
        "https://collegy-server.herokuapp.com/college/get-submit-data/" +
          getCookie("visitorId=")
      )
      .then((res: any) => {
        setSubmissionData(res.data[0]);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <>
      {isLoading ? (
        <Skeleton>LOADING</Skeleton>
      ) : (
        JSON.stringify(submissionData)
      )}
    </>
  );
}
