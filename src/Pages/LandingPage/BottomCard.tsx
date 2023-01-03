import { Container, Stack, Heading, Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { BounceBox } from "../../Components/MotionBox";

export function BottomCard() {
  const handleClick = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <>
      <Container py="40">
        <Stack>
          <Heading as="h2">Maximize your college search today.</Heading>
          <BounceBox>
            <Button
              rightIcon={<FaArrowRight size={"15"} />}
              variant={"gprimary"}
              onClick={() => handleClick("#form")}
            >
              Begin Mega Search
            </Button>
          </BounceBox>
          <BounceBox>
            <Button
              rightIcon={<FaArrowRight size={"15"} />}
              variant={"gprimary"}
              onClick={() => handleClick("#coming-soon")}
            >
              Maximize College Acceptance
            </Button>
          </BounceBox>
          <BounceBox>
            <Button
              rightIcon={<FaArrowRight size={"15"} />}
              variant={"gprimary"}
              onClick={() => handleClick("#explore-college")}
            >
              Explore Colleges
            </Button>
          </BounceBox>
          <BounceBox>
            <Button
              rightIcon={<FaArrowRight size={"15"} />}
              variant={"gprimary"}
              onClick={() => handleClick("#about-us")}
            >
              Learn More About Collegy
            </Button>
          </BounceBox>
        </Stack>
      </Container>
    </>
  );
}
