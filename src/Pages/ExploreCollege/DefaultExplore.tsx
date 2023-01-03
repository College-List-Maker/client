import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import {
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
    <Box py={"20"} backgroundColor={"#051027"} color={"#ffffff"}>
      <Container textAlign={"center"}>
        <FadeBox>
          <Heading py={"10"}>Explore College</Heading>
          <SearchBar placeholder="Search a college or place" />
          {searchQuery && (
            <RightBox>
              <Text
                pt={"5vw"}
              >{`No results for UNITID "${searchQuery}".`}</Text>
            </RightBox>
          )}
          <UpBox>
            <RotationBox>
              <Image
                src={process.env.PUBLIC_URL + "/img/globe.svg"}
                alt="globe"
              />
            </RotationBox>
          </UpBox>
        </FadeBox>
      </Container>
    </Box>
  );
}
