import { Box, Container, Flex, Link, Stack, Text } from "@chakra-ui/react";

interface FooterInt {
  dark?: boolean;
}

export default function Footer({ dark }: FooterInt) {
  return (
    <Box
      bgColor={dark ? "#2E2E2E" : "transparent"}
      color={dark ? "#ffffff" : "#000000"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "top", md: "top" }}
        fontSize={"sm"}
      >
        <Text w="170px" fontFamily="Bakbak One">
          Collegy
        </Text>
        <Stack>
          <Flex w={"100%"} justifyContent={"space-around"}>
            <Link href="#form">Find Your College</Link>
            <Link href="#explore-college" px={"5"}>
              Explore Colleges
            </Link>
            <Link href="#coming-soon">Maximize Acceptance</Link>
          </Flex>
          <Flex
            w={"100%"}
            justifyContent={"space-around"}
            fontSize={"xs"}
            color={dark ? "#CBC9C9" : "#5E5E5E"}
          >
            <Link href="#about-us">About Us</Link>
            <Link href="#tos">Terms of Service</Link>
            <Link href="mailto:hey@collegy.net">hey@collegy.net</Link>
          </Flex>
        </Stack>
        <Text>©2022, All rights reserved.</Text>
      </Container>
    </Box>
  );
}
