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
          <GridItem colSpan={2} display={"flex"} alignItems={"center"}>
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
            <StatLineStat stat={"1+ million"} desc={"Datapoints"} />
            <StatLineStat stat={"6,000+"} desc={"Colleges"} />
            <StatLineStat stat={"100%"} desc={"Match Rate"} />
          </Container>
        </Flex>
      </Container>
    </Box>
  );
}
