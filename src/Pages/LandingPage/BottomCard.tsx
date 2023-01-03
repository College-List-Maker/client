import { Container, Stack, Heading, Button } from "@chakra-ui/react";
import { BounceBox } from "../../Components/MotionBox";

export function BottomCard() {
  const handleClick = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <>
      <Container>
        <Stack>
          <Heading as="h2">Maximize your college search today.</Heading>
          <BounceBox>
            <Button onClick={() => handleClick("#form")}>
              Begin Mega Search
            </Button>
          </BounceBox>
          <BounceBox>
            <Button onClick={() => handleClick("#coming-soon")}>
              Maximize College Acceptance
            </Button>
          </BounceBox>
          <BounceBox>
            <Button onClick={() => handleClick("#explore-college")}>
              Explore Colleges
            </Button>
          </BounceBox>
          <BounceBox>
            <Button onClick={() => handleClick("#about-us")}>
              Learn More About Collegy
            </Button>
          </BounceBox>
        </Stack>
      </Container>
    </>
  );
}
