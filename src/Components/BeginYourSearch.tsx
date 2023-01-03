import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

export function BeginYourSearch() {
  const handleClick = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <Box bgColor={"#2E2E2E"} py="40">
      <Container textAlign={"center"}>
        <Heading color={"#FFFFFF"} size={"2xl"}>
          Begin Your Search
        </Heading>
        <Text color={"#BDBDBD"}>Begin for free today</Text>
        <Flex justifyContent={"center"} mt="10">
          <Button onClick={() => handleClick("#form")} mx={"3"}>
            Begin Mega Search
          </Button>
          <Button onClick={() => handleClick("#explore-college")} mx={"3"}>
            Explore College
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
