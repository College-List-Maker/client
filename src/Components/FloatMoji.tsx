import { Text } from "@chakra-ui/react";

interface FloatMojiInt {
  emoji: string;
  top: number;
  right: number;
  shadow?: boolean;
  rotate?: number;
}

export default function FloatMoji({
  emoji,
  top,
  right,
  shadow,
  rotate,
}: FloatMojiInt) {
  return (
    <Text
      display="inline-block"
      position="relative"
      top={`${top * -1}em`}
      right={`${right * -1}em`}
      transform={rotate ? `rotate(${rotate}deg)` : undefined}
      filter={shadow ? "drop-shadow(0px 0px 5px #000000)" : undefined}
      w={0}
      fontSize="3xl"
    >
      {emoji}
    </Text>
  );
}
