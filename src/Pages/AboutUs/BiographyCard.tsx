import { Container, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface BiographyCardInt {
  picture: string;
  name: string;
  position: string;
  bio: string;
}

export function BiographyCard({
  picture,
  name,
  position,
  bio,
}: BiographyCardInt) {
  return (
    <>
      <Container>
        <Stack justifyContent={"center"} alignItems="center">
          <Image src={picture} alt="bio-picture" rounded="full" w={100} />
          <Heading
            fontFamily={"Bakbak One"}
            as="h4"
            size="lg"
            textAlign={"center"}
          >
            {name}
          </Heading>
          <Heading
            fontFamily={"Bakbak One"}
            as="h5"
            size="md"
            textAlign={"center"}
          >
            {position}
          </Heading>
          <Text fontFamily={"Actor"}>{bio}</Text>
        </Stack>
      </Container>
    </>
  );
}
