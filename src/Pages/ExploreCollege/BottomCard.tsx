import { Container, Stack, Heading, Button } from "@chakra-ui/react";

export function BottomCard() {
  return (
    <>
      <Container>
        <Stack>
          <Heading as="h2">Maximize your college search today.</Heading>
          <Button>Begin Mega Search</Button>
          <Button>Maximize College Acceptance</Button>
          <Button>Explore Colleges</Button>
          <Button>Learn More About Collegy</Button>
        </Stack>
      </Container>
    </>
  );
}
