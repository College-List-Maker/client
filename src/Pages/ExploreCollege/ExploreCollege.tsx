import { DefaultExplore } from "./DefaultExplore";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@chakra-ui/react";
import { SpecificExplore } from "./SpecificExplore";

export function ExploreCollege() {
  const [query, setQuery] = useState<string | null>(null);
  const [collegeData, setCollegeData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const updateCollegeData = () => {
    async function handleCollegeData() {
      const hash = window.location.hash;
      const queryString = hash.substring(hash.indexOf("?") + 1);
      const urlParams = new URLSearchParams(queryString);
      const college = urlParams.get("college");
      setQuery(college);
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

  // anti spammer
  const hashChangeListener = useRef(() => {});
  useEffect(() => {
    hashChangeListener.current = updateCollegeData;
    window.addEventListener("hashchange", hashChangeListener.current);
    updateCollegeData();
    return () => {
      window.removeEventListener("hashchange", hashChangeListener.current);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton>Loading</Skeleton>
      ) : collegeData ? (
        <SpecificExplore collegeData={collegeData} />
      ) : (
        <DefaultExplore searchQuery={query} />
      )}
    </>
  );
}
