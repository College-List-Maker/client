import { DefaultExplore } from "./DefaultExplore";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { SpecificExplore } from "./SpecificExplore";
import { toast } from "react-toastify";
import { SpecificExploreSkeleton } from "./SpecificExploreSkeleton";

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
            toast.error("Couldn't find the college.");
            console.log(err);
          });
      } else {
        setCollegeData(undefined);
      }
      setQuery(college);
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

  return (
    <Box bgColor={"#051027"}>
      {isLoading ? (
        <SpecificExploreSkeleton />
      ) : collegeData ? (
        <SpecificExplore collegeData={collegeData} />
      ) : (
        <DefaultExplore searchQuery={query} />
      )}
    </Box>
  );
}
