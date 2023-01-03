import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

interface RepoStatsInt {
  stats: { stat: string; desc: string }[];
}
interface StatInt {
  stat: string;
  desc: string;
}

function Stat({ stat, desc }: StatInt) {
  return (
    <Stack alignItems={"center"}>
      <Heading
        fontWeight={"900"}
        color="#484848"
        pb="0"
        mb="0"
        textAlign={"center"}
      >
        {stat}
        <Text
          color="#828282"
          fontFamily={"actor"}
          fontSize={"sm"}
          fontWeight="100"
        >
          {desc}
        </Text>
      </Heading>
    </Stack>
  );
}

export function RepoStats({ stats }: RepoStatsInt) {
  return (
    <>
      <Container>
        <Flex
          w="100%"
          flexFlow={"row"}
          justifyContent="space-around"
          alignItems={"center"}
        >
          {stats.map(({ stat, desc }, index) => {
            return <Stat stat={stat} desc={desc} key={index} />;
          })}
        </Flex>
      </Container>
    </>
  );
}
