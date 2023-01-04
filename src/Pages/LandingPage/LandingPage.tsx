import { Avatar, AvatarGroup, Box, Container, Stack } from "@chakra-ui/react";
import { BottomCard } from "./BottomCard";
import { MiddleCard } from "./MiddleCard";
import { TopCard } from "./TopCard";
import "./svg.css";
import { LeftBox, RightBox } from "../../Components/MotionBox";

export function LandingPage() {
  return (
    <>
      <Box bgColor={"#051027"} pt={"20"}>
        <TopCard />
      </Box>
      <Box bgColor={"#ffffff"}>
        <Container>
          <Stack>
            <LeftBox>
              <MiddleCard
                heading="Learn about 3000+ universities"
                description="The Collegy platform is designed and operated by a team of college students who are committed to helping you succeed in your educational journey. Our comprehensive search function allows you to easily explore and compare different colleges to find the best fit for your needs and goals."
                button="Explore College"
                hash="#explore-college"
                backgroundImg={process.env.PUBLIC_URL + "/img/collegeimg.png"}
              />
            </LeftBox>
            <RightBox>
              <MiddleCard
                heading="Maximize your acceptance"
                description="At Collegy, we understand that the college application process can be overwhelming and stressful. That's why we've developed a feature that provides in-depth information on specific colleges, including admissions requirements, financial aid options, and student life. With this feature, you can get a better sense of what each college is looking for in applicants and how you can increase your chances of being accepted to your dream school."
                button="Learn More"
                hash="#coming-soon"
                backgroundImg={process.env.PUBLIC_URL + "/img/maxaccept.png"}
              />
            </RightBox>
            <LeftBox>
              <MiddleCard
                heading="From college students, for high school students"
                description="The team at Collegy are all college students, wanting you to succeed and find your best fit."
                button="More About Us"
                width="50%"
                hash="#about-us"
              >
                <Stack>
                  <AvatarGroup size="sm">
                    <Avatar
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                    />
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />
                    <Avatar
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                    />
                    <Avatar
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Avatar
                      name="Christian Nwamba"
                      src="https://bit.ly/code-beast"
                    />
                    <Avatar
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Avatar
                      name="Christian Nwamba"
                      src="https://bit.ly/code-beast"
                    />
                  </AvatarGroup>
                </Stack>
              </MiddleCard>
            </LeftBox>
          </Stack>
        </Container>
      </Box>
      <Box
        bgImage={process.env.PUBLIC_URL + "/img/globebg.svg"}
        backgroundSize={"cover"}
        pb={"20"}
      >
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
