import { useState } from "react";
import {
    Button,
    Center,
    Checkbox,
    Container,
    Flex,
    Grid,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Radio,
    RadioGroup,
    Select,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { getCookie } from "../Cookie";
import { UserCollegeData } from "../types";

export function Form() {
    const defaultData: UserCollegeData = {
        academic: {
            gpa: -1,
            sat: -1,
            act: -1,
        },
        courseload: {
            honors: -1,
            apib: -1,
            lang: -1,
            cs: "",
            core: "",
            major: -1,
        },
        confidence: {
            extracurriculars: -1,
            essay: -1,
            awards: -1,
            recommendations: -1,
            volunteering: -1,
            works: -1,
            talents: -1,
            interviewing: -1,
            character: -1,
            interest: -1,
        },
        colleges: {
            legacy1: "",
            legacy2: "",
            legacy3: "",
            alumni1: "",
            alumni2: "",
            alumni3: "",
            feeder1: "",
            feeder2: "",
            feeder3: "",
        },
        residency: {
            zipcode: -1,
            state: "",
            country: "",
        },
        class: {
            size: -1,
            rank: -1,
        },
        adversity: {
            fgen: false,
            international: false,
            transfer: false,
        },
        collegePrefs: {
            coedImportance: -1,
            academicResourcesImportance: -1,
            facilityImportance: false,
            gender: "",
            hbcuImportance: -1,
            internshipImportance: -1,
            majorProminenceImportance: false,
            pref4yr: false,
            prefCommittedFaculty: -1,
            prefHighestDegree: -1,
            prefMajor: "",
            prefPrivateControl: false,
            prefPublicControl: false,
            prefReligion: -1,
            prefReligious: false,
            prefSexRatioF: -1,
            prefSize: -1,
            prestiegeImportance: -1,
            researchImportance: -1,
            rigorImportance: -1,
            sameGenderImportance: -1,
            studyAbroadImportance: -1,
            workStudyImportance: -1,
        },
        costPrefs: {
            costImportance: false,
            federalAidImportance: false,
            income: -1,
            prefCOA: -1,
        },
        locationPrefs: {
            locationImportance: false,
            ZIP: -1,
            curState: "",
            prefCity: "",
            prefState: "",
            prefRegion: -1,
            livingAtHome: false,
            prefLocale: -1,
            prefSummerClimate: -1,
            prefWinterClimate: -1,
        },
        successPrefs: {
            successImportance: false,
            alumniCarreerImportance: false,
            desiredEarnings: -1,
            graduationRateImportance: false,
            prefGraduationRate: -1,
            prefRetentionRate: -1,
            retentionRateImportance: false,
        },
        weights: {
            collegeWeight: -1,
            costWeight: -1,
            locationWeight: -1,
            successWeight: -1,
        },
        listLengths: {
            reaches: -1,
            safeties: -1,
            targets: -1,
        },
    };

    const [formData, setFormData] = useState<UserCollegeData>(defaultData);

    const toast = useToast();

    function toggleFirstGenValue() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            adversity: {
                ...prevFormData["adversity"],
                fgen: !prevFormData["adversity"]["fgen"],
            },
        }));
    }
    function toggleInternationalValue() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            adversity: {
                ...prevFormData["adversity"],
                international: !prevFormData["adversity"]["international"],
            },
        }));
    }
    function toggleTransferValue() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            adversity: {
                ...prevFormData["adversity"],
                transfer: !prevFormData["adversity"]["transfer"],
            },
        }));
    }

    function handleRadioClickApplicant(name: string, value: number) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            confidence: {
                ...prevFormData["confidence"],
                [name]: value,
            },
        }));
    }

    function handleRadioClickCollege(name: string, value: number) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            collegePrefs: {
                ...prevFormData["collegePrefs"],
                [name]: value,
            },
        }));
    }

    function handleChange(event: any) {
        console.log(formData);
        const { name, value } = event.target;
        const [parent, child] = name.split(".");
        setFormData((prevFormData) => ({
            ...prevFormData,
            [parent]: {
                ...prevFormData[parent],
                [child]: value,
            },
        }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("submit");
        event.preventDefault();
        console.log(formData);

        axios
            .post(
                "http://localhost:4000/college/submit-data/" +
                    getCookie("visitorId="),
                formData
            )
            .then((res: any) => {
                console.log(res);
                toast({
                    title: "Details submitted.",
                    description: "Your colleges will appear soon.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            })
            .catch((err: any) => {
                console.error(err);
                toast({
                    title: "Error",
                    description: "Please try again.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            });

        window.location.hash = "#college-list";
    };

    return (
        <Center>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Heading as="h1" size="lg">
                        Applicant
                    </Heading>
                    <Heading as="h4" size="md">
                        Academics
                    </Heading>
                    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                        <InputGroup>
                            <InputLeftAddon children="SAT" />
                            <Input
                                onChange={handleChange}
                                name={"academic.sat"}
                                type="text"
                                placeholder="Out of 1600"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon children="ACT" />
                            <Input
                                onChange={handleChange}
                                name={"academic.act"}
                                type="text"
                                placeholder="Out of 36"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon children="GPA" />
                            <Input
                                onChange={handleChange}
                                name={"academic.gpa"}
                                type="text"
                                placeholder="Out of 4.00"
                            />
                        </InputGroup>
                    </Grid>
                    <Heading as="h4" size="md">
                        Courseload
                    </Heading>
                    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                        <InputGroup>
                            <Select
                                onChange={handleChange}
                                name={"courseload.honors"}
                                placeholder="Honors Courses"
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10+</option>
                            </Select>
                        </InputGroup>
                        <InputGroup>
                            <Select
                                onChange={handleChange}
                                name={"courseload.apib"}
                                placeholder="AP/IB Courses"
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10+</option>
                            </Select>
                        </InputGroup>
                        <InputGroup>
                            <Select
                                onChange={handleChange}
                                name={"courseload.lang"}
                                placeholder="Lang Courses"
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4+</option>
                            </Select>
                        </InputGroup>
                        <InputGroup>
                            <Select
                                onChange={handleChange}
                                name={"courseload.cs"}
                                placeholder="CS Courses"
                            >
                                <option value="Y">Yes</option>
                                <option value="N">No</option>
                            </Select>
                        </InputGroup>
                        <InputGroup>
                            <Select
                                onChange={handleChange}
                                name={"courseload.core"}
                                placeholder="Core Courses"
                            >
                                <option value="Y">Yes</option>
                                <option value="N">No</option>
                            </Select>
                        </InputGroup>
                        <InputGroup>
                            <Select
                                onChange={handleChange}
                                name={"courseload.major"}
                                placeholder="Major Related"
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4+</option>
                            </Select>
                        </InputGroup>
                    </Grid>
                    <Heading as="h4" size="md">
                        Confidence (Low - 0, High - 5)
                    </Heading>
                    <Grid>
                        <RadioGroup>
                            <Heading as="h3" size="sm">
                                Extracurriculars
                            </Heading>
                            <Flex justifyContent={"space-evenly"}>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "extracurriculars",
                                            0
                                        )
                                    }
                                    value="0"
                                >
                                    0
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "extracurriculars",
                                            1
                                        )
                                    }
                                    value="1"
                                >
                                    1
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "extracurriculars",
                                            2
                                        )
                                    }
                                    value="2"
                                >
                                    2
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "extracurriculars",
                                            3
                                        )
                                    }
                                    value="3"
                                >
                                    3
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "extracurriculars",
                                            4
                                        )
                                    }
                                    value="4"
                                >
                                    4
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "extracurriculars",
                                            5
                                        )
                                    }
                                    value="5"
                                >
                                    5
                                </Radio>
                            </Flex>
                        </RadioGroup>
                        <RadioGroup>
                            <Heading as="h3" size="sm">
                                Essay
                            </Heading>
                            <Flex justifyContent={"space-evenly"}>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("essay", 0)
                                    }
                                    value="0"
                                >
                                    0
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("essay", 1)
                                    }
                                    value="1"
                                >
                                    1
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("essay", 2)
                                    }
                                    value="2"
                                >
                                    2
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("essay", 3)
                                    }
                                    value="3"
                                >
                                    3
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("essay", 4)
                                    }
                                    value="4"
                                >
                                    4
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("essay", 5)
                                    }
                                    value="5"
                                >
                                    5
                                </Radio>
                            </Flex>
                        </RadioGroup>
                        <RadioGroup>
                            <Heading as="h3" size="sm">
                                Awards
                            </Heading>
                            <Flex justifyContent={"space-evenly"}>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("awards", 0)
                                    }
                                    value="0"
                                >
                                    0
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("awards", 1)
                                    }
                                    value="1"
                                >
                                    1
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("awards", 2)
                                    }
                                    value="2"
                                >
                                    2
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("awards", 3)
                                    }
                                    value="3"
                                >
                                    3
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("awards", 4)
                                    }
                                    value="4"
                                >
                                    4
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("awards", 5)
                                    }
                                    value="5"
                                >
                                    5
                                </Radio>
                            </Flex>
                        </RadioGroup>
                        <RadioGroup>
                            <Heading as="h3" size="sm">
                                Recommendations
                            </Heading>
                            <Flex justifyContent={"space-evenly"}>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "recommendations",
                                            0
                                        )
                                    }
                                    value="0"
                                >
                                    0
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "recommendations",
                                            1
                                        )
                                    }
                                    value="1"
                                >
                                    1
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "recommendations",
                                            2
                                        )
                                    }
                                    value="2"
                                >
                                    2
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "recommendations",
                                            3
                                        )
                                    }
                                    value="3"
                                >
                                    3
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "recommendations",
                                            4
                                        )
                                    }
                                    value="4"
                                >
                                    4
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "recommendations",
                                            5
                                        )
                                    }
                                    value="5"
                                >
                                    5
                                </Radio>
                            </Flex>
                        </RadioGroup>
                        <RadioGroup>
                            <Heading as="h3" size="sm">
                                Volunteering
                            </Heading>
                            <Flex justifyContent={"space-evenly"}>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "volunteering",
                                            0
                                        )
                                    }
                                    value="0"
                                >
                                    0
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "volunteering",
                                            1
                                        )
                                    }
                                    value="1"
                                >
                                    1
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "volunteering",
                                            2
                                        )
                                    }
                                    value="2"
                                >
                                    2
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "volunteering",
                                            3
                                        )
                                    }
                                    value="3"
                                >
                                    3
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "volunteering",
                                            4
                                        )
                                    }
                                    value="4"
                                >
                                    4
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "volunteering",
                                            5
                                        )
                                    }
                                    value="5"
                                >
                                    5
                                </Radio>
                            </Flex>
                        </RadioGroup>
                        <RadioGroup>
                            <Heading as="h3" size="sm">
                                Work
                            </Heading>
                            <Flex justifyContent={"space-evenly"}>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("works", 0)
                                    }
                                    value="0"
                                >
                                    0
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("works", 1)
                                    }
                                    value="1"
                                >
                                    1
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("works", 2)
                                    }
                                    value="2"
                                >
                                    2
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("works", 3)
                                    }
                                    value="3"
                                >
                                    3
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("works", 4)
                                    }
                                    value="4"
                                >
                                    4
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("works", 5)
                                    }
                                    value="5"
                                >
                                    5
                                </Radio>
                            </Flex>
                        </RadioGroup>
                        <RadioGroup>
                            <Heading as="h3" size="sm">
                                Talent
                            </Heading>
                            <Flex justifyContent={"space-evenly"}>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("talents", 0)
                                    }
                                    value="0"
                                >
                                    0
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("talents", 1)
                                    }
                                    value="1"
                                >
                                    1
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("talents", 2)
                                    }
                                    value="2"
                                >
                                    2
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("talents", 3)
                                    }
                                    value="3"
                                >
                                    3
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("talents", 4)
                                    }
                                    value="4"
                                >
                                    4
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("talents", 5)
                                    }
                                    value="5"
                                >
                                    5
                                </Radio>
                            </Flex>
                        </RadioGroup>
                        <RadioGroup>
                            <Heading as="h3" size="sm">
                                Interviewing
                            </Heading>
                            <Flex justifyContent={"space-evenly"}>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "interviewing",
                                            0
                                        )
                                    }
                                    value="0"
                                >
                                    0
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "interviewing",
                                            1
                                        )
                                    }
                                    value="1"
                                >
                                    1
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "interviewing",
                                            2
                                        )
                                    }
                                    value="2"
                                >
                                    2
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "interviewing",
                                            3
                                        )
                                    }
                                    value="3"
                                >
                                    3
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "interviewing",
                                            4
                                        )
                                    }
                                    value="4"
                                >
                                    4
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "interviewing",
                                            5
                                        )
                                    }
                                    value="5"
                                >
                                    5
                                </Radio>
                            </Flex>
                        </RadioGroup>
                        <RadioGroup>
                            <Heading as="h3" size="sm">
                                Character
                            </Heading>
                            <Flex justifyContent={"space-evenly"}>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "character",
                                            0
                                        )
                                    }
                                    value="0"
                                >
                                    0
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "character",
                                            1
                                        )
                                    }
                                    value="1"
                                >
                                    1
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "character",
                                            2
                                        )
                                    }
                                    value="2"
                                >
                                    2
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "character",
                                            3
                                        )
                                    }
                                    value="3"
                                >
                                    3
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "character",
                                            4
                                        )
                                    }
                                    value="4"
                                >
                                    4
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant(
                                            "character",
                                            5
                                        )
                                    }
                                    value="5"
                                >
                                    5
                                </Radio>
                            </Flex>
                        </RadioGroup>
                        <RadioGroup>
                            <Heading as="h3" size="sm">
                                Interest
                            </Heading>
                            <Flex justifyContent={"space-evenly"}>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("interest", 0)
                                    }
                                    value="0"
                                >
                                    0
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("interest", 1)
                                    }
                                    value="1"
                                >
                                    1
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("interest", 2)
                                    }
                                    value="2"
                                >
                                    2
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("interest", 3)
                                    }
                                    value="3"
                                >
                                    3
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("interest", 4)
                                    }
                                    value="4"
                                >
                                    4
                                </Radio>
                                <Radio
                                    onClick={() =>
                                        handleRadioClickApplicant("interest", 5)
                                    }
                                    value="5"
                                >
                                    5
                                </Radio>
                            </Flex>
                        </RadioGroup>
                    </Grid>
                    <Heading as="h4" size="md">
                        Extra
                    </Heading>
                    <Heading as="h3" size="sm">
                        Parents / Siblings
                    </Heading>
                    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                        <InputGroup>
                            <InputLeftAddon children="Mom" />
                            <Input
                                onChange={handleChange}
                                name={"colleges.legacy1"}
                                type="text"
                                placeholder="University"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon children="Dad" />
                            <Input
                                onChange={handleChange}
                                name={"colleges.legacy2"}
                                type="text"
                                placeholder="University"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon children="Other" />
                            <Input
                                onChange={handleChange}
                                name={"colleges.legacy3"}
                                type="text"
                                placeholder="University"
                            />
                        </InputGroup>
                    </Grid>
                    <Heading as="h3" size="sm">
                        Alumni
                    </Heading>
                    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                        <InputGroup>
                            <InputLeftAddon children="#1" />
                            <Input
                                onChange={handleChange}
                                name={"colleges.alumni1"}
                                type="text"
                                placeholder="University"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon children="#2" />
                            <Input
                                onChange={handleChange}
                                name={"colleges.alumni2"}
                                type="text"
                                placeholder="University"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon children="#3" />
                            <Input
                                onChange={handleChange}
                                name={"colleges.alumni3"}
                                type="text"
                                placeholder="University"
                            />
                        </InputGroup>
                    </Grid>
                    <Heading as="h3" size="sm">
                        Feeder
                    </Heading>
                    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                        <InputGroup>
                            <InputLeftAddon children="#1" />
                            <Input
                                onChange={handleChange}
                                name={"colleges.feeder1"}
                                type="text"
                                placeholder="University"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon children="#2" />
                            <Input
                                onChange={handleChange}
                                name={"colleges.feeder2"}
                                type="text"
                                placeholder="University"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon children="#3" />
                            <Input
                                onChange={handleChange}
                                name={"colleges.feeder3"}
                                type="text"
                                placeholder="University"
                            />
                        </InputGroup>
                    </Grid>
                    <Heading as="h3" size="sm">
                        Residency
                    </Heading>
                    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                        <InputGroup>
                            <InputLeftAddon children="ZIP" />
                            <Input
                                onChange={handleChange}
                                name={"residency.zipcode"}
                                type="text"
                                placeholder="14450"
                            />
                        </InputGroup>
                        <InputGroup>
                            <Select
                                onChange={handleChange}
                                name={"residency.state"}
                                placeholder="State"
                            >
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                <option value="">N/A</option>
                            </Select>
                        </InputGroup>
                        <InputGroup>
                            <Select
                                onChange={handleChange}
                                name={"residency.country"}
                                placeholder="Country"
                            >
                                <option value="US">United States</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Åland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">
                                    Antigua and Barbuda
                                </option>{" "}
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">
                                    Bolivia, Plurinational State of
                                </option>
                                <option value="BQ">
                                    Bonaire, Sint Eustatius and Saba
                                </option>
                                <option value="BA">
                                    Bosnia and Herzegovina
                                </option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">
                                    British Indian Ocean Territory
                                </option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">
                                    Central African Republic
                                </option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">
                                    Cocos (Keeling) Islands
                                </option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo</option>
                                <option value="CD">
                                    Congo, the Democratic Republic of the
                                </option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Côte d'Ivoire</option>
                                <option value="HR">Croatia</option>
                                <option value="CU">Cuba</option>
                                <option value="CW">Curaçao</option>
                                <option value="CY">Cyprus</option>{" "}
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">
                                    Falkland Islands (Malvinas)
                                </option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="TF">
                                    French Southern Territories
                                </option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GG">Guernsey</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">
                                    Heard Island and McDonald Islands
                                </option>
                                <option value="VA">
                                    Holy See (Vatican City State)
                                </option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">
                                    Iran, Islamic Republic of
                                </option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IM">Isle of Man</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>{" "}
                                <option value="JP">Japan</option>
                                <option value="JE">Jersey</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KP">
                                    Korea, Democratic People's Republic of
                                </option>
                                <option value="KR">Korea, Republic of</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">
                                    Lao People's Democratic Republic
                                </option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macao</option>
                                <option value="MK">
                                    Macedonia, the former Yugoslav Republic of
                                </option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">
                                    Micronesia, Federated States of
                                </option>
                                <option value="MD">Moldova, Republic of</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>{" "}
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">
                                    Northern Mariana Islands
                                </option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PS">
                                    Palestinian Territory, Occupied
                                </option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Réunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="BL">Saint Barthélemy</option>
                                <option value="SH">
                                    Saint Helena, Ascension and Tristan da Cunha
                                </option>
                                <option value="KN">
                                    Saint Kitts and Nevis
                                </option>
                                <option value="LC">Saint Lucia</option>
                                <option value="MF">
                                    Saint Martin (French part)
                                </option>
                                <option value="PM">
                                    Saint Pierre and Miquelon
                                </option>
                                <option value="VC">
                                    Saint Vincent and the Grenadines
                                </option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">
                                    Sao Tome and Principe
                                </option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SX">
                                    Sint Maarten (Dutch part)
                                </option>
                                <option value="SK">Slovakia</option>{" "}
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">
                                    South Georgia and the South Sandwich Islands
                                </option>
                                <option value="SS">South Sudan</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">
                                    Svalbard and Jan Mayen
                                </option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">
                                    Taiwan, Province of China
                                </option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">
                                    Tanzania, United Republic of
                                </option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">
                                    Turks and Caicos Islands
                                </option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom</option>
                                <option value="UM">
                                    United States Minor Outlying Islands
                                </option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VE">
                                    Venezuela, Bolivarian Republic of
                                </option>
                                <option value="VN">Viet Nam</option>
                                <option value="VG">
                                    Virgin Islands, British
                                </option>
                                <option value="VI">Virgin Islands, U.S.</option>
                                <option value="WF">Wallis and Futuna</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                                <option value="">N/A</option>
                            </Select>
                        </InputGroup>
                    </Grid>
                    <Heading as="h3" size="sm">
                        Class
                    </Heading>
                    <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                        <InputGroup>
                            <InputLeftAddon children="Class Rank" />
                            <Input
                                onChange={handleChange}
                                name={"class.rank"}
                                type="text"
                                placeholder="12"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon children="Class Size" />
                            <Input
                                onChange={handleChange}
                                name={"class.size"}
                                type="text"
                                placeholder="244"
                            />
                        </InputGroup>
                    </Grid>
                    <Heading as="h3" size="sm">
                        Adversity
                    </Heading>
                    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                        <InputGroup>
                            <Checkbox
                                onChange={toggleFirstGenValue}
                                name={"adversity.fgen"}
                            >
                                First Gen
                            </Checkbox>
                        </InputGroup>
                        <InputGroup>
                            <Checkbox
                                onChange={toggleInternationalValue}
                                name={"adversity.international"}
                            >
                                International
                            </Checkbox>
                        </InputGroup>
                        <InputGroup>
                            <Checkbox
                                onChange={toggleTransferValue}
                                name={"adversity.transfer"}
                            >
                                Transfer
                            </Checkbox>
                        </InputGroup>
                    </Grid>
                    <Heading as="h1" size="lg">
                        Rank
                    </Heading>
                    <Heading as="h4" size="md">
                        College
                    </Heading>
                    <Button type={"submit"} colorScheme="teal">
                        Submit
                    </Button>
                </form>
            </Container>
        </Center>
    );
}
