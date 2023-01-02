import { useContext, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
    FormControl,
    Heading,
    Radio,
    RadioGroup,
    Flex,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page6() {
    const [formData, setFormData] = useContext(FormDataContext);

    useEffect(() => {
        setFormData(formData);
    });

    const prestRef = useRef<HTMLInputElement>(null);
    const internRef = useRef<HTMLInputElement>(null);
    const studyAbrRef = useRef<HTMLInputElement>(null);
    const rigorRef = useRef<HTMLInputElement>(null);
    const workStudyRef = useRef<HTMLInputElement>(null);
    const academResRef = useRef<HTMLInputElement>(null);
    const resRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    function handleRadioClickCollege(name: string, value: number) {
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            collegePrefs: {
                ...prevFormData["collegePrefs"],
                [name]: value,
            },
        }));
        checkValid();
    }

    function checkValid() {
        if (
            !prestRef.current ||
            !internRef.current ||
            !studyAbrRef.current ||
            !rigorRef.current ||
            !workStudyRef.current ||
            !academResRef.current ||
            !resRef.current
        ) {
            return;
        }
        const radioElements1 = prestRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected1 = Array.from(radioElements1).some(
            (radio) => radio.checked
        );

        const radioElements2 = internRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected2 = Array.from(radioElements2).some(
            (radio) => radio.checked
        );

        const radioElements3 = studyAbrRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected3 = Array.from(radioElements3).some(
            (radio) => radio.checked
        );

        const radioElements4 = rigorRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected4 = Array.from(radioElements4).some(
            (radio) => radio.checked
        );

        const radioElements5 = workStudyRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected5 = Array.from(radioElements5).some(
            (radio) => radio.checked
        );

        const radioElements6 = academResRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected6 = Array.from(radioElements6).some(
            (radio) => radio.checked
        );

        const radioElements7 = resRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected7 = Array.from(radioElements7).some(
            (radio) => radio.checked
        );
        if (
            !anySelected1 ||
            !anySelected2 ||
            !anySelected3 ||
            !anySelected4 ||
            !anySelected5 ||
            !anySelected6 ||
            !anySelected7
        ) {
            return;
        }
        const formValid = true;
        dispatch({ type: "SET_FORM_VALID", formValid });
    }

    return (
        <>
            <Heading as="h1" size="lg">
                Rank
            </Heading>
            <Heading as="h4" size="md">
                College Importance
            </Heading>
            <FormControl isRequired>
                <RadioGroup ref={prestRef}>
                    <Heading as="h3" size="sm">
                        Prestiege Importance
                    </Heading>
                    <Flex justifyContent={"space-evenly"}>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prestiegeImportance",
                                    0
                                )
                            }
                            value="0"
                        >
                            0
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prestiegeImportance",
                                    1
                                )
                            }
                            value="1"
                        >
                            1
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prestiegeImportance",
                                    2
                                )
                            }
                            value="2"
                        >
                            2
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prestiegeImportance",
                                    3
                                )
                            }
                            value="3"
                        >
                            3
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prestiegeImportance",
                                    4
                                )
                            }
                            value="4"
                        >
                            4
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prestiegeImportance",
                                    5
                                )
                            }
                            value="5"
                        >
                            5
                        </Radio>
                    </Flex>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired>
                <RadioGroup ref={internRef}>
                    <Heading as="h3" size="sm">
                        Internship Importance
                    </Heading>
                    <Flex justifyContent={"space-evenly"}>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "internshipImportance",
                                    0
                                )
                            }
                            value="0"
                        >
                            0
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "internshipImportance",
                                    1
                                )
                            }
                            value="1"
                        >
                            1
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "internshipImportance",
                                    2
                                )
                            }
                            value="2"
                        >
                            2
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "internshipImportance",
                                    3
                                )
                            }
                            value="3"
                        >
                            3
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "internshipImportance",
                                    4
                                )
                            }
                            value="4"
                        >
                            4
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "internshipImportance",
                                    5
                                )
                            }
                            value="5"
                        >
                            5
                        </Radio>
                    </Flex>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired>
                <RadioGroup ref={studyAbrRef}>
                    <Heading as="h3" size="sm">
                        Study Abroad Importance
                    </Heading>
                    <Flex justifyContent={"space-evenly"}>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "studyAbroadImportance",
                                    0
                                )
                            }
                            value="0"
                        >
                            0
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "studyAbroadImportance",
                                    1
                                )
                            }
                            value="1"
                        >
                            1
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "studyAbroadImportance",
                                    2
                                )
                            }
                            value="2"
                        >
                            2
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "studyAbroadImportance",
                                    3
                                )
                            }
                            value="3"
                        >
                            3
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "studyAbroadImportance",
                                    4
                                )
                            }
                            value="4"
                        >
                            4
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "studyAbroadImportance",
                                    5
                                )
                            }
                            value="5"
                        >
                            5
                        </Radio>
                    </Flex>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired>
                <RadioGroup ref={rigorRef}>
                    <Heading as="h3" size="sm">
                        Rigor Importance
                    </Heading>
                    <Flex justifyContent={"space-evenly"}>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("rigorImportance", 0)
                            }
                            value="0"
                        >
                            0
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("rigorImportance", 1)
                            }
                            value="1"
                        >
                            1
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("rigorImportance", 2)
                            }
                            value="2"
                        >
                            2
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("rigorImportance", 3)
                            }
                            value="3"
                        >
                            3
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("rigorImportance", 4)
                            }
                            value="4"
                        >
                            4
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("rigorImportance", 5)
                            }
                            value="5"
                        >
                            5
                        </Radio>
                    </Flex>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired>
                <RadioGroup ref={workStudyRef}>
                    <Heading as="h3" size="sm">
                        Work Study Importance
                    </Heading>
                    <Flex justifyContent={"space-evenly"}>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "workStudyImportance",
                                    0
                                )
                            }
                            value="0"
                        >
                            0
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "workStudyImportance",
                                    1
                                )
                            }
                            value="1"
                        >
                            1
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "workStudyImportance",
                                    2
                                )
                            }
                            value="2"
                        >
                            2
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "workStudyImportance",
                                    3
                                )
                            }
                            value="3"
                        >
                            3
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "workStudyImportance",
                                    4
                                )
                            }
                            value="4"
                        >
                            4
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "workStudyImportance",
                                    5
                                )
                            }
                            value="5"
                        >
                            5
                        </Radio>
                    </Flex>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired>
                <RadioGroup ref={academResRef}>
                    <Heading as="h3" size="sm">
                        Academic Resources Importance
                    </Heading>
                    <Flex justifyContent={"space-evenly"}>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "academicResourcesImportance",
                                    0
                                )
                            }
                            value="0"
                        >
                            0
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "academicResourcesImportance",
                                    1
                                )
                            }
                            value="1"
                        >
                            1
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "academicResourcesImportance",
                                    2
                                )
                            }
                            value="2"
                        >
                            2
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "academicResourcesImportance",
                                    3
                                )
                            }
                            value="3"
                        >
                            3
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "academicResourcesImportance",
                                    4
                                )
                            }
                            value="4"
                        >
                            4
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "academicResourcesImportance",
                                    5
                                )
                            }
                            value="5"
                        >
                            5
                        </Radio>
                    </Flex>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired>
                <RadioGroup ref={resRef}>
                    <Heading as="h3" size="sm">
                        Research Importance
                    </Heading>
                    <Flex justifyContent={"space-evenly"}>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("researchImportance", 0)
                            }
                            value="0"
                        >
                            0
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("researchImportance", 1)
                            }
                            value="1"
                        >
                            1
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("researchImportance", 2)
                            }
                            value="2"
                        >
                            2
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("researchImportance", 3)
                            }
                            value="3"
                        >
                            3
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("researchImportance", 4)
                            }
                            value="4"
                        >
                            4
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("researchImportance", 5)
                            }
                            value="5"
                        >
                            5
                        </Radio>
                    </Flex>
                </RadioGroup>
            </FormControl>
        </>
    );
}
