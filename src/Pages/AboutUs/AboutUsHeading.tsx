import { Box, Heading } from "@chakra-ui/react";

interface AboutUsHeadingInt {
  h1: string;
  h2: string;
}

export function AboutUsHeading({ h1, h2 }: AboutUsHeadingInt) {
  return (
    <Box py={"10"}>
      <Heading
        as="h1"
        size={"xs"}
        fontWeight={100}
        color={"#828282"}
        textAlign={"center"}
        fontFamily="Actor"
      >
        {h1.toUpperCase()}
      </Heading>
      <Heading
        as="h2"
        size={"2xl"}
        color={"#484848"}
        textAlign={"center"}
        fontFamily="Inter"
        fontWeight={"900"}
      >
        {h2}
      </Heading>
    </Box>
  );
}
