import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../Cookie";
import { Skeleton } from "@chakra-ui/react";
import { UserCollegeData } from "../types";

export function CollegeList() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<UserCollegeData>();

  useEffect(() => {
    fetchSubmittedData();
  }, []);

  const fetchSubmittedData = () => {
    axios
      .get(
        "http://localhost:4000/college/get-submit-data/" +
          getCookie("visitorId=")
      )
      .then((res: any) => {
        if (res.data[0]) {
          setFormData(res.data[0]);
          setIsLoading(false);
        } else {
          window.location.hash = "#";
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <div>
      {isLoading ? <Skeleton>Test</Skeleton> : "display college list here"}
    </div>
  );
}
