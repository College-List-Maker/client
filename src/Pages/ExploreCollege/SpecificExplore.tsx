interface SpecificExploreInt {
  collegeData: any;
}

export function SpecificExplore({ collegeData }: SpecificExploreInt) {
  return <>{JSON.stringify(collegeData)}</>;
}
