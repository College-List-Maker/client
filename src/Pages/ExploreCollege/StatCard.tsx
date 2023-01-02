import {
  Stack,
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  CardHeader,
  StackDivider,
} from "@chakra-ui/react";

interface StatCardInt {
  heading: string;
  stats: { stat: string; desc: string }[];
}

export function StatCard({ heading, stats }: StatCardInt) {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">{heading}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {stats.map(({ stat, desc }) => {
              return (
                <Box>
                  <Heading
                    size="xs"
                    textTransform="uppercase"
                    fontFamily={"Bakbak One"}
                  >
                    {desc}
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {stat}
                  </Text>
                </Box>
              );
            })}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
