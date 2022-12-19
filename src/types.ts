export interface UserCollegeData {
  [key: string]: {
    [key: string]: any;
  };
  academic: {
    gpa: number;
    sat: number;
    act: number;
  };
  courseload: {
    honors: number;
    apib: number;
    lang: number;
    cs: string;
    core: string;
    major: number;
  };
  confidence: {
    extracurriculars: number;
    essay: number;
    awards: number;
    recommendations: number;
    volunteering: number;
    works: number;
    talents: number;
    interviewing: number;
    character: number;
    interest: number;
  };
  colleges: {
    legacy1: string;
    legacy2: string;
    legacy3: string;
    alumni1: string;
    alumni2: string;
    alumni3: string;
    feeder1: string;
    feeder2: string;
    feeder3: string;
  };
  residency: {
    zipcode: number;
    state: string;
    country: string;
  };
  class: {
    size: number;
    rank: number;
  };
  adversity: {
    fgen: boolean;
    international: boolean;
    transfer: boolean;
  };
}
