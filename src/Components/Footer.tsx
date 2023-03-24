import { Box, Container, Flex, Link, Stack, Text } from "@chakra-ui/react";

interface FooterInt {
  dark?: boolean;
}

export default function Footer({ dark }: FooterInt) {
  return (
    <Box
      position={"absolute"}
      bottom={"0"}
      width={"100%"}
      bgColor={"#transparent"}
      color={dark ? "#ffffff" : "#000000"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "top" }}
        fontSize={"sm"}
        alignItems={{ md: "flex-start" }}
      >
        <Text
          visibility={{ base: "hidden", md: "visible" }}
          w="225px"
          fontFamily="Bakbak One"
        >
          <Link href="#">Collegy</Link>
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
            <Link href="mailto:hey@collegy.org">hey@collegy.org</Link>
          </Flex>
        </Stack>
        <Flex>
          <Text
            visibility={{ base: "visible", md: "hidden" }}
            fontFamily="Bakbak One"
            pr={"10"}
          >
            <Link href="#">Collegy</Link>
          </Text>
          ©2022, All rights reserved.
        </Flex>
      </Container>
    </Box>
  );
}
