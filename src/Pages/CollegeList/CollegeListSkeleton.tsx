import { Stack } from "@chakra-ui/react";
import { CollegeSectionCard } from "./CollegeSectionCard";

export function CollegeListSkeleton() {
  let skeleData = [
    { name: "skeleton", unitid: "skeleton" },
    { name: "skeleton", unitid: "skeleton" },
    { name: "skeleton", unitid: "skeleton" },
  ];
  return (
    <Stack>
      <CollegeSectionCard
        heading="Reaches"
        colleges={skeleData}
        isSkeleton={true}
      />
      <CollegeSectionCard
        heading="Targets"
        colleges={skeleData}
        isSkeleton={true}
      />
      <CollegeSectionCard
        heading="Safeties"
        colleges={skeleData}
        isSkeleton={true}
      />
    </Stack>
  );
}
