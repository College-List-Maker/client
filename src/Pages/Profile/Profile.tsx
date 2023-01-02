import { Button, Center, Container, Skeleton } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { getCookie } from "../../Cookie";
import { UserCollegeData } from "../../types";
import { DeleteAccountCard } from "./DeleteAccountCard";

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

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(
        "https://collegy-server.herokuapp.com/college/submit-data/" +
          getCookie("visitorId="),
        submissionData
      )
      .then((res: any) => {
        axios
          .get(
            "https://collegy-server.herokuapp.com/college/set-college-list/" +
              getCookie("visitorId=")
          )
          .then(() => {
            window.location.hash = "#college-list";
          });
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });

    window.location.hash = "#college-list";
  };

  return (
    <>
      {isLoading ? (
        <Skeleton>LOADING</Skeleton>
      ) : (
        <>
          <Center>
            <Container>
              {/* filled in form here */}
              <Button type={"submit"} colorScheme="teal">
                Save
              </Button>
            </Container>
          </Center>
          <Container>
            <DeleteAccountCard />
          </Container>
        </>
      )}
    </>
  );
}
