import { Container, Heading, Image } from "@chakra-ui/react";
import { SearchBar } from "../../Components/SearchBar";

export function DefaultExplore() {
  return (
    <>
      <Container textAlign={"center"}>
        <Heading>Explore College</Heading>
        <SearchBar placeholder="Search a college or place" />
        <Image src={process.env.PUBLIC_URL + "/img/globe.png"} alt="globe" />
      </Container>
    </>
  );
}
