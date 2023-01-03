import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    Stack,
    StackDivider,
} from "@chakra-ui/react";
import { CollegeIndividualCard } from "./CollegeIndividualCard";

interface CollegeSectionCardInt {

export function CollegeSectionCard({
    heading,
    colleges,
}: CollegeSectionCardInt) {
    return (
        <Card>
            <CardHeader>
                <Heading size="md">{heading}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                    {colleges.map((college: any, index: number) => {
                        return (
                            <CollegeIndividualCard
                                college={{
                                    name: college.name,
                                    position: index + 1,
                                    unitid: college.unitid,
                                }}
                            />
                        );
                    })}
                </Stack>
            </CardBody>
        </Card>
    );
}
