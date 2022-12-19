import { UserCollegeData } from "../types";

interface DashboardInt {
  data: UserCollegeData;
}

export function Dashboard({ data }: DashboardInt) {
  return <>{JSON.stringify(data)}</>;
}
