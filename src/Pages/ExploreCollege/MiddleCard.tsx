import { Container, Stack, Heading, Button, Text } from "@chakra-ui/react";

interface MiddleCardInputs {
  heading: string;
  description: string;
  button: string;
}

export function MiddleCard({ heading, description, button }: MiddleCardInputs) {
  return (
    <>
      <Container>
        <Stack>
          <Heading as="h2" fontFamily={"Bakbak One"}>
            {heading}
          </Heading>
          <Text>{description}</Text>
          <Button fontFamily={"Inter"}>{button}</Button>
        </Stack>
      </Container>
    </>
  );
}
