import { Avatar, AvatarGroup, Box, Container, Stack } from "@chakra-ui/react";
import { BottomCard } from "./BottomCard";
import { MiddleCard } from "./MiddleCard";
import { TopCard } from "./TopCard";
import "./svg.css";
import { LeftBox, RightBox } from "../../Components/MotionBox";

export function LandingPage() {
  return (
    <>
      <Box bgColor={"#051027"} pt={"20"} pb={"1"}>
        <TopCard />
      </Box>
      <Box w="100%" h={"10"} bgColor={"#ffffff"} borderTopRadius={"100%"} />
      <Box bgColor={"#ffffff"}>
        <Container
          borderLeft={"2px solid #EFEFEF"}
          borderRight={"2px solid #EFEFEF"}
          maxW={"container.md"}
          px={0}
          bgColor={"#ffffff"}
          backgroundSize="cover"
          bgImage={process.env.PUBLIC_URL + "/img/pattern.svg"}
        >
          <Container
            maxW={"container.md"}
            px={0}
            bgGradient={
              "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.97) 10%, rgba(255,255,255,.99) 30%, rgba(255,255,255,.99) 70%, rgba(255,255,255,0.97) 90%, rgba(255,255,255,0.95) 100%);"
            }
            pb={"5"}
          >
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
                        name="Tyler Cady"
                        src="https://media.licdn.com/dms/image/C5603AQHTB2qvlimbBw/profile-displayphoto-shrink_400_400/0/1634852696133?e=1678320000&v=beta&t=p1tlTFLG2_56Uc7HNxGchzMNlJJ4JOCBwQYCH0xDEBs"
                      />
                      <Avatar
                        name="John Farrell"
                        src="https://media.licdn.com/dms/image/D4E03AQFkYwurI7k4xw/profile-displayphoto-shrink_400_400/0/1666456660962?e=1678320000&v=beta&t=oEauCFl1R3xMGEVy6RwdtwGBiDPopwy4ezhGfh0ZGxY"
                      />
                    </AvatarGroup>
                  </Stack>
                </MiddleCard>
              </LeftBox>
            </Stack>
          </Container>
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
