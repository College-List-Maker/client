import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import FloatMoji from "../../Components/FloatMoji";
import {
  BackgroundSpanBox,
  FadeBox,
  RightBox,
  RotationBox,
  UpBox,
} from "../../Components/MotionBox";
import { SearchBar } from "../../Components/SearchBar";

interface DefaultExploreInt {
  searchQuery: string | null;
}

export function DefaultExplore({ searchQuery }: DefaultExploreInt) {
  return (
    <Box minH={"100vh"} py={"20"} backgroundColor={"#051027"} color={"#ffffff"}>
      <Container textAlign={"center"}>
        <FadeBox>
          <Heading py={"10"} as="h1" zIndex={2}>
            Explore College
            <FloatMoji emoji="🔍" top={0.5} right={0.3} shadow={true} />
          </Heading>
          <SearchBar placeholder="Search a college or place" />
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
                />
              </RotationBox>
            </BackgroundSpanBox>
          </Box>
          <UpBox>
            <RotationBox>
              <Image
                w={"sm"}
                src={process.env.PUBLIC_URL + "/img/globe.svg"}
                alt="globe"
                m={"auto"}
                py={"20"}
              />
            </RotationBox>
          </UpBox>
        </FadeBox>
      </Container>
    </Box>
  );
}
