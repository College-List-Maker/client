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
    collegePrefs: {
        coedImportance: number;
        academicResourcesImportance: number;
        facilityImportance: boolean;
        gender: string;
        internshipImportance: number;
        majorProminenceImportance: boolean;
        pref4yr: boolean;
        prefCommittedFaculty: number;
        prefHighestDegree: number;
        prefMajor: string;
        prefPrivateControl: boolean;
        prefPublicControl: boolean;
        prefReligion: number;
        prefReligious: boolean;
        prefSexRatioF: number;
        prefSize: number;
        prestiegeImportance: number;
        researchImportance: number;
        rigorImportance: number;
        sameGenderImportance: number;
        hbcuImportance: number;
        studyAbroadImportance: number;
        workStudyImportance: number;
    };
    costPrefs: {
        costImportance: boolean;
        federalAidImportance: boolean;
        income: number;
        prefCOA: number;
    };
    locationPrefs: {
        locationImportance: boolean;
        ZIP: number;
        curState: string;
        prefCity: string;
        prefState: string;
        prefRegion: number;
        livingAtHome: boolean;
        prefLocale: number;
        prefSummerClimate: number;
        prefWinterClimate: number;
    };
    successPrefs: {
        successImportance: boolean;
        alumniCarreerImportance: boolean;
        desiredEarnings: number;
        graduationRateImportance: boolean;
        prefGraduationRate: number;
        prefRetentionRate: number;
        retentionRateImportance: boolean;
    };
    weights: {
        collegeWeight: number;
        costWeight: number;
        locationWeight: number;
        successWeight: number;
    };
    listLengths: {
        reaches: number;
        safeties: number;
        targets: number;
    };
}
