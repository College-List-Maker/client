import { DefaultExplore } from "./DefaultExplore";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "@chakra-ui/react";
import { SpecificExplore } from "./SpecificExplore";

export function ExploreCollege() {
  const [collegeData, setCollegeData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const handleCollegeData = () => {
    const hash = window.location.hash;
    const queryString = hash.substring(hash.indexOf("?") + 1);
    const urlParams = new URLSearchParams(queryString);
    const college = urlParams.get("college");
    if (!college) setIsLoading(false);
    else {
      console.log(college);
      axios
        .get(`https://collegy-server.herokuapp.com/college/info/${college}`)
        .then((res) => {
          const data = res.data.results[0];
          setCollegeData(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => setIsLoading(false));
    }
  };
  handleCollegeData();

  useEffect(() => {
    console.log("test");
    const handleHashChange = () => {
      handleCollegeData();
    };
    // re grab data on hash change
    window.onhashchange = handleHashChange;
    return () => {
      window.onhashchange = null;
    };
  }, []);

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
