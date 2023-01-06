import {
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

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
            One of the resources offered by Collegy is an open source college
            list algorithm, which uses data such as academic interests,
            location, and cost to generate a customized list of colleges for
            each student.
          </Text>
          <Link href="https://github.com/Collegy/algorithm" isExternal>
            <Button variant={"secondary"}>Visit GitHub Repo</Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
}
