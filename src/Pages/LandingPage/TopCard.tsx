import {
  Stack,
  Heading,
  Button,
  Text,
  Grid,
  GridItem,
  Image,
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { BounceBox, RightBox } from "../../Components/MotionBox";
import { isQuestionaireCompleted } from "../../Fetch";
import "./svg.css";

export function TopCard() {
  const questionaireComplete = isQuestionaireCompleted();

  const handleClick = () => {
    window.location.hash = questionaireComplete ? "#college-list" : "#form";
  };

  const { title, description, button } = {
    title: questionaireComplete
      ? `Welcome back!`
      : "Maximize your college search.",
    description: questionaireComplete
      ? "Let's continue your college search. Check your college list or view more colleges."
      : "Fill out a short questionnaire and find the best college matches for you based on more than a million data points and a dense, intricate algorithm.",
    button: questionaireComplete ? "Continue Search" : "Begin Mega Search",
  };

  interface StatLineStatInt {
    stat: string;
    desc: string;
  }
  function StatLineStat({ stat, desc }: StatLineStatInt) {
    return (
      <Stack spacing={0} px={4}>
        <Text color="#ffffff" fontSize={"xs"} fontFamily={"Anaheim"}>
          {stat}
        </Text>
        <Text color="#BBBBBB" fontSize={"2xs"} fontFamily={"Anaheim"}>
          {desc}
        </Text>
      </Stack>
    );
  }

  return (
    <Box>
      <Container>
        <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={3}>
            <Stack py="20">
              <Stack color="white">
                <Heading as="h1">{title}</Heading>
                <Text>{description}</Text>
              </Stack>
              <BounceBox>
                <Button
                  variant={"gprimary"}
                  onClick={handleClick}
                  rightIcon={<FaArrowRight size={"15"} />}
                >
                  {button}
                </Button>
              </BounceBox>
            </Stack>
          </GridItem>
          <GridItem colSpan={2} display={"flex"} alignItems={"flex-end"}>
            <RightBox>
              <Image
                src={process.env.PUBLIC_URL + "/img/owl.svg"}
                alt="globe"
              />
            </RightBox>
          </GridItem>
        </Grid>
      </Container>
      <Container maxW={"container.md"}>
        <Flex borderTop={"1px solid #313131"}>
          <Container display={"flex"}>
            <StatLineStat stat={"1 million+"} desc={"Datapoints"} />
            <StatLineStat stat={"6,000+"} desc={"Colleges"} />
            <StatLineStat stat={"100%"} desc={"Match Rate"} />
          </Container>
        </Flex>
      </Container>
      <div className="wave1">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Box>
  );
}
