import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export function BeginYourSearch() {
  const handleClick = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <Box bgColor={"#2E2E2E"} py="40">
      <Container textAlign={"center"} maxW={"container.md"}>
        <Heading color={"#FFFFFF"} size={"2xl"}>
          Begin Your Search
        </Heading>
        <Text color={"#BDBDBD"}>Begin for free today</Text>
        <Flex justifyContent={"center"} mt="10" flexWrap={"wrap"}>
          <Button
            rightIcon={<FaArrowRight size={"15"} />}
            variant={"gprimary"}
            onClick={() => handleClick("#form")}
            mx={"3"}
            mb={"3"}
          >
            Begin Mega Search
          </Button>
          <Button
            rightIcon={<FaArrowRight size={"15"} />}
            variant={"gprimary"}
            onClick={() => handleClick("#explore-college")}
            mx={"3"}
          >
            Explore College
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
