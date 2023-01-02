import { Container, Heading, Image, Text } from "@chakra-ui/react";
import { SearchBar } from "../../Components/SearchBar";

interface DefaultExploreInt {
  searchQuery: string | null;
}

export function DefaultExplore({ searchQuery }: DefaultExploreInt) {
  return (
    <>
      <Container textAlign={"center"}>
        <Heading>Explore College</Heading>
        <SearchBar placeholder="Search a college or place" />
        {searchQuery ? (
          <Text>{`No results for UNITID "${searchQuery}".`}</Text>
        ) : (
          <Image src={process.env.PUBLIC_URL + "/img/globe.png"} alt="globe" />
        )}
      </Container>
    </>
  );
}
