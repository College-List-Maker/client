import { Box, Center, Container, Heading, Image, Text } from "@chakra-ui/react";
import FloatMoji from "../../Components/FloatMoji";
import {
  BackgroundSpanBox,
  FadeBox,
  RightBox,
  RotationBox,
  UpBox,
} from "../../Components/MotionBox";
import { SearchBar } from "../../Components/SearchBar/SearchBar";

interface DefaultExploreInt {
  searchQuery: string | null;
}

export function DefaultExplore({ searchQuery }: DefaultExploreInt) {
  return (
    <Box
      minH={"100vh"}
      py={"20"}
      backgroundColor={"#051027"}
      color={"#ffffff"}
      bgSize={"cover"}
      bgImage={process.env.PUBLIC_URL + "/img/bgfades.svg"}
    >
      <Container textAlign={"center"}>
        <FadeBox>
          <Heading py={"10"} as="h1" zIndex={2}>
            Explore College
            <FloatMoji emoji="🔍" top={0.5} right={0.3} shadow={true} />
          </Heading>
          <Center>
            <SearchBar
              placeholder="Search a college or city"
              width="md"
              limit={30}
            />
          </Center>
          {searchQuery && (
            <RightBox>
              <Text
                pt={"5vw"}
              >{`No results for UNITID "${searchQuery}".`}</Text>
            </RightBox>
          )}
          <Box h={0}>
            <BackgroundSpanBox>
              <RotationBox>
                <Image
                  w={"75px"}
                  src={process.env.PUBLIC_URL + "/img/owl.svg"}
                  alt="globe"
                  margin="auto"
                  m={0}
                  p={0}
                  display={"inline"}
                />
              </RotationBox>
            </BackgroundSpanBox>
          </Box>
          <Box py={20}>
            <UpBox>
              <RotationBox>
                <Image
                  w={"sm"}
                  src={process.env.PUBLIC_URL + "/img/globe.svg"}
                  alt="globe"
                  m={"auto"}
                  display={"inline"}
                />
              </RotationBox>
            </UpBox>
          </Box>
        </FadeBox>
      </Container>
    </Box>
  );
}
