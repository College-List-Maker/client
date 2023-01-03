import { Container, Stack, Heading, Button } from "@chakra-ui/react";

export function BottomCard() {
  const handleClick = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <>
      <Container>
        <Stack>
          <Heading as="h2">Maximize your college search today.</Heading>
          <Button onClick={() => handleClick("#form")}>
            Begin Mega Search
          </Button>
          <Button onClick={() => handleClick("#coming-soon")}>
            Maximize College Acceptance
          </Button>
          <Button onClick={() => handleClick("#explore-college")}>
            Explore Colleges
          </Button>
          <Button onClick={() => handleClick("#about-us")}>
            Learn More About Collegy
          </Button>
        </Stack>
      </Container>
    </>
  );
}
