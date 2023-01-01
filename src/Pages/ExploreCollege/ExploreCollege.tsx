import { DefaultExplore } from "./DefaultExplore";
import axios from "axios";
import { useState } from "react";
import { Skeleton } from "@chakra-ui/react";
import { SpecificExplore } from "./SpecificExplore";

export function ExploreCollege() {
  const [collegeData, setCollegeData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  async function handleCollegeData() {
    const hash = window.location.hash;
    const queryString = hash.substring(hash.indexOf("?") + 1);
    const urlParams = new URLSearchParams(queryString);
    const college = urlParams.get("college");
    if (college) {
      await axios
        .get(
          `https://collegy-server.herokuapp.com/college/get-college-data/${college}`
        )
        .then((res) => {
          const data = res.data;
          setCollegeData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  handleCollegeData().then(() => setIsLoading(false));

  return (
    <>
      {isLoading ? (
        <Skeleton>Loading</Skeleton>
      ) : collegeData ? (
        <SpecificExplore collegeData={collegeData} />
      ) : (
        <DefaultExplore />
      )}
    </>
  );
}
