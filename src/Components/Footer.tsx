import {
  Box,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
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
            color={"#5E5E5E"}
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
