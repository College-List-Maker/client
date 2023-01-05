import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

interface CollegeIndividualCardInt {
  college: { name: string; position: number; unitid: string };
}

export function CollegeIndividualCard({
  college: { name, position, unitid },
}: CollegeIndividualCardInt) {
  const handleClick = () => {
    window.location.hash = `#explore-college?college=${unitid}`;
  };

  return (
    <Flex justifyContent={"space-between"} alignItems="center">
      <Text size="xs" textTransform="uppercase" fontFamily={"Bakbak One"}>
        {`#${position}`}
      </Text>
      <Heading size="xs" textTransform="uppercase" fontFamily={"Bakbak One"}>
        {`${name}`}
      </Heading>
      <Button background={"transparent"} onClick={handleClick}>
        <FaArrowRight />
      </Button>
    </Flex>
  );
}
