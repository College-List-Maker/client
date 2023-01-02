import { Heading } from "@chakra-ui/react";

interface AboutUsHeadingInt {
  h1: string;
  h2: string;
}

export function AboutUsHeading({ h1, h2 }: AboutUsHeadingInt) {
  return (
    <>
      <Heading as="h1" size={"xs"} textAlign={"center"} fontFamily="Actor">
        {h1.toUpperCase()}
      </Heading>
      <Heading
        as="h2"
        size={"2xl"}
        textAlign={"center"}
        fontFamily="Inter"
        fontWeight={"900"}
      >
        {h2}
      </Heading>
    </>
  );
}
