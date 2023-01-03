import { Container, Heading, Image, Text } from "@chakra-ui/react";
import { FadeBox, UpBox } from "../../Components/MotionBox";
import { SearchBar } from "../../Components/SearchBar";

interface DefaultExploreInt {
  searchQuery: string | null;
}

export function DefaultExplore({ searchQuery }: DefaultExploreInt) {
  return (
    <Container textAlign={"center"}>
      <FadeBox>
        <Heading>Explore College</Heading>
        <SearchBar placeholder="Search a college or place" />
        {searchQuery ? (
          <Text>{`No results for UNITID "${searchQuery}".`}</Text>
        ) : (
          <UpBox>
            <Image
              src={process.env.PUBLIC_URL + "/img/globe.png"}
              alt="globe"
            />
          </UpBox>
        )}
      </FadeBox>
    </Container>
  );
}
