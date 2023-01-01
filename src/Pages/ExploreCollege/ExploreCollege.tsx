import { DefaultExplore } from "./DefaultExplore";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "@chakra-ui/react";
import { SpecificExplore } from "./SpecificExplore";

export function ExploreCollege() {
  const [collegeData, setCollegeData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const updateCollegeData = () => {
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
      } else {
        setCollegeData(undefined);
      }
    }
    handleCollegeData().then(() => setIsLoading(false));
  };

  // update page for changing hash or init
  useEffect(updateCollegeData, []);
  window.addEventListener("hashchange", updateCollegeData);

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
