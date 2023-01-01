import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

export function BeginYourSearch() {
  return (
    <>
      <Container textAlign={"center"}>
        <Heading>Begin Your Search</Heading>
        <Text>Begin for free today</Text>
        <Flex justifyContent={"center"}>
          <Button>Begin Mega Search</Button>
          <Button>Explore College</Button>
        </Flex>
      </Container>
    </>
  );
}
