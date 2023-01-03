import {
  Stack,
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  CardHeader,
  StackDivider,
  Link,
} from "@chakra-ui/react";

interface StatCardInt {
  heading: string;
  stats: { stat: string; desc: string }[];
}

export function StatCard({ heading, stats }: StatCardInt) {
  return (
    <>
      <Card my={"2"}>
        <CardHeader>
          <Heading size="md">{heading}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {stats.map(({ stat, desc }, index) => {
              return (
                <Box key={index}>
                  <Heading
                    size="xs"
                    textTransform="uppercase"
                    fontFamily={"Bakbak One"}
                  >
                    {desc}
                  </Heading>
                  {stat && stat.startsWith("https://") ? (
                    <Link href={stat} isExternal color="teal.500">
                      {stat}
                    </Link>
                  ) : (
                    <Text pt="2" fontSize="sm">
                      {stat}
                    </Text>
                  )}
                </Box>
              );
            })}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
