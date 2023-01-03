import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

export function VisitRepoCard() {
  return (
    <>
      <Container
        my={"10"}
        bg={"linear-gradient(253.75deg, #D63D3D 0%, #9867FF 100%);"}
        py="5"
        px="10"
        rounded={"xl"}
        boxShadow={"xl"}
      >
        <Stack>
          <Heading as="h4" size="lg" color="white">
            View the algorithm code
          </Heading>
          <Text fontFamily={"Actor"} color="#E9E9E9">
            Hi there! My name is Tyler and I am a computer science student at
            the Georgia Institute of Technology. In addition to my studies, I am
            also a developer at Collegy, where I have the opportunity to work on
            a variety.
          </Text>
          <Button variant={"secondary"}>Visit GitHub Repo</Button>
        </Stack>
      </Container>
    </>
  );
}
