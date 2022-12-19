import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../Cookie";
import { Skeleton } from "@chakra-ui/react";

interface UserCollegeData {
  [key: string]: {
    [key: string]: any;
  };
  academic: {
    gpa: number;
    sat: number;
    act: number;
  };
  courseload: {
    honors: number;
    apib: number;
    lang: number;
    cs: string;
    core: string;
    major: number;
  };
  confidence: {
    extracurriculars: number;
    essay: number;
    awards: number;
    recommendations: number;
    volunteering: number;
    works: number;
    talents: number;
    interviewing: number;
    character: number;
    interest: number;
  };
  colleges: {
    legacy1: string;
    legacy2: string;
    legacy3: string;
    alumni1: string;
    alumni2: string;
    alumni3: string;
    feeder1: string;
    feeder2: string;
    feeder3: string;
  };
  residency: {
    zipcode: number;
    state: string;
    country: string;
  };
  class: {
    size: number;
    rank: number;
  };
  adversity: {
    fgen: boolean;
    international: boolean;
    transfer: boolean;
  };
}

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
        setFormData(res.data[0]);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <div>
      {isLoading ? <Skeleton>Test</Skeleton> : formData ? "is data" : "no data"}
    </div>
  );
}
