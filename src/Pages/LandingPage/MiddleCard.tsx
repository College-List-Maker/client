import {
  Container,
  Stack,
  Heading,
  Button,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";

interface MiddleCardInputs {
  heading: string;
  description: string;
  button: string;
  children?: any;
  width?: string;
  hash: string;
  backgroundImg?: string;
}

export function MiddleCard({
  heading,
  description,
  button,
  children,
  width,
  hash,
  backgroundImg,
}: MiddleCardInputs) {
  const handleClick = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <>
      <Container
        boxShadow={"0px 4px 14px rgba(0, 0, 0, 0.25);"}
        p={"5"}
        rounded={"lg"}
        my={"5"}
        w={{ base: "100%", sm: width }}
      >
        <Flex alignItems={"flex-end"}>
          <Stack>
            <Heading
              as="h2"
              fontFamily={"Bakbak One"}
              color={"#627597"}
              size={"md"}
              fontWeight={"semibold"}
            >
              {heading}
            </Heading>
            <Text color={"#626262"}>{description}</Text>
            {children}
            <Button onClick={() => handleClick(hash)} variant={"secondary"}>
              {button}
            </Button>
          </Stack>
          {backgroundImg && (
            <Image
              display={{ base: "none", sm: "block" }}
              src={backgroundImg}
              objectFit={"contain"}
              width={"20"}
            />
          )}
        </Flex>
      </Container>
    </>
  );
}
