import { Box, Heading } from "@chakra-ui/react";
import FloatMoji from "../../Components/FloatMoji";

interface AboutUsHeadingInt {
  h1: string;
  h2: string;
  emoji?: { emoji: string; right: boolean; tilt?: boolean };
}

export function AboutUsHeading({ h1, h2, emoji }: AboutUsHeadingInt) {
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
        {emoji && !emoji.right && (
          <FloatMoji
            emoji={emoji.emoji}
            top={1}
            right={-1.25}
            rotate={emoji.tilt ? -11 : 0}
          />
        )}
        {h2}
        {emoji && emoji.right && (
          <FloatMoji
            emoji={emoji.emoji}
            top={0.8}
            right={0.15}
            rotate={emoji.tilt ? 11 : 0}
          />
        )}
      </Heading>
    </Box>
  );
}
