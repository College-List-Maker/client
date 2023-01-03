import { Container, Stack, Heading, Button, Text } from "@chakra-ui/react";

interface MiddleCardInputs {
  heading: string;
  description: string;
  button: string;
  children?: any;
}

export function MiddleCard({
  heading,
  description,
  button,
  children,
}: MiddleCardInputs) {
  return (
    <>
      <Container>
        <Stack>
          <Heading as="h2" fontFamily={"Bakbak One"}>
            {heading}
          </Heading>
          <Text>{description}</Text>
          {children}
          <Button fontFamily={"Inter"}>{button}</Button>
        </Stack>
      </Container>
    </>
  );
}
