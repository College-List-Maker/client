import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

export function VisitRepoCard() {
  return (
    <>
      <Container>
        <Stack>
          <Heading as="h4" size="lg">
            View the algorithm code
          </Heading>
          <Text fontFamily={"Actor"}>
            {" "}
            Hi there! My name is Tyler and I am a computer science student at
            the Georgia Institute of Technology. In addition to my studies, I am
            also a developer at Collegy, where I have the opportunity to work on
            a variety.
          </Text>
          <Button>Visit GitHub Repo</Button>
        </Stack>
      </Container>
    </>
  );
}
