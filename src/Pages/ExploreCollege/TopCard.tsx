import { Stack, Heading, Button, Text } from "@chakra-ui/react";

export function TopCard() {
  return (
    <>
      <Stack>
        <Stack>
          <Heading as="h1">Maximize your college search.</Heading>
          <Text>
            Fill out a short questionnaire and find the best college matches for
            you based on more than a million data points and a dense, intricate
            algorithm.
          </Text>
        </Stack>
        <Button>Begin Mega Search</Button>
      </Stack>
    </>
  );
}
