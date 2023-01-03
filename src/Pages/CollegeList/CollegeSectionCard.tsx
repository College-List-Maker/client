import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Skeleton,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { CollegeIndividualCard } from "./CollegeIndividualCard";

interface CollegeSectionCardInt {
  heading: string;
  colleges: any;
  isSkeleton?: boolean;
}

export function CollegeSectionCard({
  heading,
  colleges,
  isSkeleton,
}: CollegeSectionCardInt) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{heading}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {colleges.map((college: any, index: number) => {
            return isSkeleton ? (
              <Skeleton key={index}>
                <CollegeIndividualCard
                  college={{
                    name: college.name,
                    position: index + 1,
                    unitid: college.unitid,
                  }}
                />
              </Skeleton>
            ) : (
              <CollegeIndividualCard
                college={{
                  name: college.name,
                  position: index + 1,
                  unitid: college.unitid,
                }}
                key={index}
              />
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
}
