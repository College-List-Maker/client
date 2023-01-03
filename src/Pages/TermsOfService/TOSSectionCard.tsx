import { Box, Heading, Text } from "@chakra-ui/react";

interface TOSSectionCardInt {
  title: string;
  text: string;
  index: number;
}

export function TOSSectionCard({ title, text, index }: TOSSectionCardInt) {
  return (
    <Box p={3}>
      <Heading
        as="h2"
        size="xs"
        fontFamily={"Bakbak One"}
      >{`${index}. ${title}`}</Heading>
      <Text>{text}</Text>
    </Box>
  );
}
