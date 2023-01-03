import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface BiographyCardInt {
  picture: string;
  name: string;
  position: string;
  bio: string;
  orange?: boolean;
}

export function BiographyCard({
  picture,
  name,
  position,
  bio,
  orange,
}: BiographyCardInt) {
  return (
    <>
      <Box
        boxShadow={"xl"}
        rounded={"lg"}
        background={
          orange
            ? "radial-gradient(73.48% 248.27% at 50% 50%, #DB5C40 0%, rgba(218, 80, 71, 0.940956) 38.87%, rgba(162, 98, 62, 0.77) 78.94%, rgba(134, 42, 13, 0.51) 100%), #FFFFFF"
            : "radial-gradient(73.48% 248.27% at 50% 50%, #9949FF 0%, rgba(136, 70, 231, 0.940956) 38.87%, rgba(88, 62, 162, 0.77) 78.94%, rgba(23, 13, 134, 0.51) 100%), #FFFFFF"
        }
        backgroundSize={"cover"}
        p={10}
        mb={10}
      >
        <Stack justifyContent={"center"} alignItems="center">
          <Image
            src={picture}
            alt="bio-picture"
            rounded="full"
            w={100}
            border="5px solid #ffffff"
          />
          <Heading
            fontFamily={"Bakbak One"}
            as="h4"
            size="lg"
            textAlign={"center"}
            color={"#FFFFFF"}
          >
            {name}
          </Heading>
          <Heading
            fontFamily={"Bakbak One"}
            as="h5"
            size="md"
            textAlign={"center"}
            color={"#CBCBCB"}
          >
            {position}
          </Heading>
          <Text fontFamily={"Actor"} color={"#E9E9E9"}>
            {bio}
          </Text>
        </Stack>
      </Box>
    </>
  );
}
