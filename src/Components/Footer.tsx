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
            <Link>Find Your College</Link>
            <Link px={"5"}>Explore Colleges</Link>
            <Link>Maximize Acceptance</Link>
          </Flex>
          <Flex
            w={"100%"}
            justifyContent={"space-around"}
            fontSize={"xs"}
            color={"#5E5E5E"}
          >
            <Link>About Us</Link>
            <Link>Terms of Service</Link>
            <Link>hey@collegy.net</Link>
          </Flex>
        </Stack>
        <Text>©2022, All rights reserved.</Text>
      </Container>
    </Box>
  );
}
