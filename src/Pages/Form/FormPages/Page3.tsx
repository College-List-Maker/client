import { useContext, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
    Flex,
    FormControl,
    Grid,
    Heading,
    Radio,
    RadioGroup,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page3() {
    const [formData, setFormData] = useContext(FormDataContext);

    useEffect(() => {
        setFormData(formData);
    });

    const ecRef = useRef<HTMLInputElement>(null);
    const essayRef = useRef<HTMLInputElement>(null);
    const awardRef = useRef<HTMLInputElement>(null);
    const recRef = useRef<HTMLInputElement>(null);
    const volRef = useRef<HTMLInputElement>(null);
    const workRef = useRef<HTMLInputElement>(null);
    const talentRef = useRef<HTMLInputElement>(null);
    const interviewRef = useRef<HTMLInputElement>(null);
    const charRef = useRef<HTMLInputElement>(null);
    const interestRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    function handleRadioClickApplicant(name: string, value: number) {
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            confidence: {
                ...prevFormData["confidence"],
                [name]: value,
            },
        }));
        checkValid();
    }

    function checkValid() {
        if (
            !ecRef.current ||
            !essayRef.current ||
            !awardRef.current ||
            !recRef.current ||
            !volRef.current ||
            !workRef.current ||
            !talentRef.current ||
            !interviewRef.current ||
            !charRef.current ||
            !interestRef.current
        ) {
            return;
        }
        const radioElements1 = ecRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected1 = Array.from(radioElements1).some(
            (radio) => radio.checked
        );

        const radioElements2 = essayRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected2 = Array.from(radioElements2).some(
            (radio) => radio.checked
        );

        const radioElements3 = awardRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected3 = Array.from(radioElements3).some(
            (radio) => radio.checked
        );

        const radioElements4 = recRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected4 = Array.from(radioElements4).some(
            (radio) => radio.checked
        );

        const radioElements5 = volRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected5 = Array.from(radioElements5).some(
            (radio) => radio.checked
        );

        const radioElements6 = workRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected6 = Array.from(radioElements6).some(
            (radio) => radio.checked
        );

        const radioElements7 = talentRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected7 = Array.from(radioElements7).some(
            (radio) => radio.checked
        );

        const radioElements8 = interviewRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected8 = Array.from(radioElements8).some(
            (radio) => radio.checked
        );

        const radioElements9 = charRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected9 = Array.from(radioElements9).some(
            (radio) => radio.checked
        );

        const radioElements10 = interestRef.current.querySelectorAll(
            "input[type='radio']"
        ) as NodeListOf<HTMLInputElement>;
        const anySelected10 = Array.from(radioElements10).some(
            (radio) => radio.checked
        );

        if (
            !anySelected1 ||
            !anySelected2 ||
            !anySelected3 ||
            !anySelected4 ||
            !anySelected5 ||
            !anySelected6 ||
            !anySelected7 ||
            !anySelected8 ||
            !anySelected9 ||
            !anySelected10
        ) {
            return;
        }

        const formValid = true;
        dispatch({ type: "SET_FORM_VALID", formValid });
    }

    return (
        <>
            <Heading as="h4" size="md">
                Confidence (Low - 0, High - 5)
            </Heading>
            <Grid>
                <FormControl isRequired>
                    <RadioGroup ref={ecRef}>
                        <Heading as="h3" size="sm">
                            Extracurriculars
                        </Heading>
                        <Flex justifyContent={"space-evenly"}>
                            <Radio
                                onChange={() =>
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
                                onChange={() =>
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
                                onChange={() =>
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
                                onChange={() =>
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
                                onChange={() =>
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
                                onChange={() =>
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
                </FormControl>
                <FormControl isRequired>
                    <RadioGroup ref={essayRef}>
                        <Heading as="h3" size="sm">
                            Essay
                        </Heading>
                        <Flex justifyContent={"space-evenly"}>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("essay", 0)
                                }
                                value="0"
                            >
                                0
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("essay", 1)
                                }
                                value="1"
                            >
                                1
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("essay", 2)
                                }
                                value="2"
                            >
                                2
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("essay", 3)
                                }
                                value="3"
                            >
                                3
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("essay", 4)
                                }
                                value="4"
                            >
                                4
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("essay", 5)
                                }
                                value="5"
                            >
                                5
                            </Radio>
                        </Flex>
                    </RadioGroup>
                </FormControl>
                <FormControl isRequired>
                    <RadioGroup ref={awardRef}>
                        <Heading as="h3" size="sm">
                            Awards
                        </Heading>
                        <Flex justifyContent={"space-evenly"}>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("awards", 0)
                                }
                                value="0"
                            >
                                0
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("awards", 1)
                                }
                                value="1"
                            >
                                1
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("awards", 2)
                                }
                                value="2"
                            >
                                2
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("awards", 3)
                                }
                                value="3"
                            >
                                3
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("awards", 4)
                                }
                                value="4"
                            >
                                4
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("awards", 5)
                                }
                                value="5"
                            >
                                5
                            </Radio>
                        </Flex>
                    </RadioGroup>
                </FormControl>
                <FormControl isRequired>
                    <RadioGroup ref={recRef}>
                        <Heading as="h3" size="sm">
                            Recommendations
                        </Heading>
                        <Flex justifyContent={"space-evenly"}>
                            <Radio
                                onChange={() =>
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
                                onChange={() =>
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
                                onChange={() =>
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
                                onChange={() =>
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
                                onChange={() =>
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
                                onChange={() =>
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
                </FormControl>
                <FormControl isRequired>
                    <RadioGroup ref={volRef}>
                        <Heading as="h3" size="sm">
                            Volunteering
                        </Heading>
                        <Flex justifyContent={"space-evenly"}>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("volunteering", 0)
                                }
                                value="0"
                            >
                                0
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("volunteering", 1)
                                }
                                value="1"
                            >
                                1
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("volunteering", 2)
                                }
                                value="2"
                            >
                                2
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("volunteering", 3)
                                }
                                value="3"
                            >
                                3
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("volunteering", 4)
                                }
                                value="4"
                            >
                                4
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("volunteering", 5)
                                }
                                value="5"
                            >
                                5
                            </Radio>
                        </Flex>
                    </RadioGroup>
                </FormControl>
                <FormControl isRequired>
                    <RadioGroup ref={workRef}>
                        <Heading as="h3" size="sm">
                            Work
                        </Heading>
                        <Flex justifyContent={"space-evenly"}>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("works", 0)
                                }
                                value="0"
                            >
                                0
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("works", 1)
                                }
                                value="1"
                            >
                                1
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("works", 2)
                                }
                                value="2"
                            >
                                2
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("works", 3)
                                }
                                value="3"
                            >
                                3
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("works", 4)
                                }
                                value="4"
                            >
                                4
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("works", 5)
                                }
                                value="5"
                            >
                                5
                            </Radio>
                        </Flex>
                    </RadioGroup>
                </FormControl>
                <FormControl isRequired>
                    <RadioGroup ref={talentRef}>
                        <Heading as="h3" size="sm">
                            Talent
                        </Heading>
                        <Flex justifyContent={"space-evenly"}>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("talents", 0)
                                }
                                value="0"
                            >
                                0
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("talents", 1)
                                }
                                value="1"
                            >
                                1
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("talents", 2)
                                }
                                value="2"
                            >
                                2
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("talents", 3)
                                }
                                value="3"
                            >
                                3
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("talents", 4)
                                }
                                value="4"
                            >
                                4
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("talents", 5)
                                }
                                value="5"
                            >
                                5
                            </Radio>
                        </Flex>
                    </RadioGroup>
                </FormControl>
                <FormControl isRequired>
                    <RadioGroup ref={interviewRef}>
                        <Heading as="h3" size="sm">
                            Interviewing
                        </Heading>
                        <Flex justifyContent={"space-evenly"}>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interviewing", 0)
                                }
                                value="0"
                            >
                                0
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interviewing", 1)
                                }
                                value="1"
                            >
                                1
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interviewing", 2)
                                }
                                value="2"
                            >
                                2
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interviewing", 3)
                                }
                                value="3"
                            >
                                3
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interviewing", 4)
                                }
                                value="4"
                            >
                                4
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interviewing", 5)
                                }
                                value="5"
                            >
                                5
                            </Radio>
                        </Flex>
                    </RadioGroup>
                </FormControl>
                <FormControl isRequired>
                    <RadioGroup ref={charRef}>
                        <Heading as="h3" size="sm">
                            Character
                        </Heading>
                        <Flex justifyContent={"space-evenly"}>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("character", 0)
                                }
                                value="0"
                            >
                                0
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("character", 1)
                                }
                                value="1"
                            >
                                1
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("character", 2)
                                }
                                value="2"
                            >
                                2
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("character", 3)
                                }
                                value="3"
                            >
                                3
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("character", 4)
                                }
                                value="4"
                            >
                                4
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("character", 5)
                                }
                                value="5"
                            >
                                5
                            </Radio>
                        </Flex>
                    </RadioGroup>
                </FormControl>
                <FormControl isRequired>
                    <RadioGroup ref={interestRef}>
                        <Heading as="h3" size="sm">
                            Interest
                        </Heading>
                        <Flex justifyContent={"space-evenly"}>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interest", 0)
                                }
                                value="0"
                            >
                                0
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interest", 1)
                                }
                                value="1"
                            >
                                1
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interest", 2)
                                }
                                value="2"
                            >
                                2
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interest", 3)
                                }
                                value="3"
                            >
                                3
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interest", 4)
                                }
                                value="4"
                            >
                                4
                            </Radio>
                            <Radio
                                onChange={() =>
                                    handleRadioClickApplicant("interest", 5)
                                }
                                value="5"
                            >
                                5
                            </Radio>
                        </Flex>
                    </RadioGroup>
                </FormControl>
            </Grid>
        </>
    );
}
