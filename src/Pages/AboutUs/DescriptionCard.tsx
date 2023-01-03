import { Box, Text } from "@chakra-ui/react";

interface DescriptionCardInt {
  paragraphs: string[];
}

export function DescriptionCard({ paragraphs }: DescriptionCardInt) {
  return (
    <>
      <Box shadow={"lg"} p={"10"} rounded={"xl"} bgColor={"white"}>
        {paragraphs.map((paragraph, index) => {
          return (
            <Text key={index}>
              {paragraph}
              <br />
              <br />
            </Text>
          );
        })}
      </Box>
    </>
  );
}
