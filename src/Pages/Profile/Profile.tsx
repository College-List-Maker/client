import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getCookie } from "../../Fetch";
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
        "https://collegy-server.herokuapp.com/user/get-questionaire/" +
          getCookie("visitorId=")
      )
      .then((res: any) => {
        setSubmissionData(res.data[0]);
        setIsLoading(false);
      })
      .catch((err: any) => {
        toast.error("An error occured.");
        console.error(err);
      });
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(
        "https://collegy-server.herokuapp.com/user/set-questionaire/" +
          getCookie("visitorId="),
        submissionData
      )
      .then((res: any) => {
        axios
          .get(
            "https://collegy-server.herokuapp.com/user/set-college-list/" +
              getCookie("visitorId=")
          )
          .then(() => {
            window.location.hash = "#college-list";
          });
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
        toast.error("An error occured.");
      });

    window.location.hash = "#college-list";
  };

  return (
    <Box pt={"20"} bgColor={"#E3E0E0"} minH={"100vh"}>
      {isLoading ? (
        <Skeleton>LOADING</Skeleton>
      ) : (
        <>
          <Center>
            <Container>
              <Heading as="h1" size="lg">
                Questionaire
              </Heading>
              {/* filled in form here */}
              <Button type={"submit"} colorScheme="teal">
                Save
              </Button>
            </Container>
          </Center>
          <Container>
            <Heading as="h1" size="lg">
              Account Settings
            </Heading>
            <DeleteAccountCard />
          </Container>
        </>
      )}
    </Box>
  );
}
