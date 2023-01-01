import { Box, Container, Stack } from "@chakra-ui/react";
import { BottomCard } from "./BottomCard";
import { MiddleCard } from "./MiddleCard";
import { TopCard } from "./TopCard";
import "./svg.css";

export function LandingPage() {
  return (
    <>
      <Box bgColor={"#051027"}>
        <Container>
          <TopCard />
        </Container>
        <div className="wave1">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Box>
      <Container>
        <Stack>
          <MiddleCard
            heading="Heading Text"
            description="Fill out a short questionnaire and find the best college matches
              for you based on more than a million data points and a dense,
              intricate algorithm."
            button="Button Text"
          />
          <MiddleCard
            heading="Heading Text"
            description="Fill out a short questionnaire and find the best college matches
              for you based on more than a million data points and a dense,
              intricate algorithm."
            button="Button Text"
          />
          <MiddleCard
            heading="Heading Text"
            description="Fill out a short questionnaire and find the best college matches
              for you based on more than a million data points and a dense,
              intricate algorithm."
            button="Button Text"
          />
        </Stack>
      </Container>
      <Box bgGradient={"linear(to-br, #31B5FF, #FF87C8, #FF87C8)"}>
        <div className="wave2">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Container>
          <BottomCard />
        </Container>
      </Box>
    </>
  );
}
