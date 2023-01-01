import { useContext, useEffect, useRef, useState } from "react";
import {
    Checkbox,
    Grid,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page1() {
    const [formData, setFormData] = useContext(FormDataContext);

    useEffect(() => {
        setFormData(formData);
    });

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

    const [isSATChecked, setSATChecked] = useState(false);
    const [isACTChecked, setACTChecked] = useState(false);
    const [isCRChecked, setCRChecked] = useState(false);
    const handleSATChange = (event: any) => {
        setSATChecked(event.target.checked);
    };
    const handleACTChange = (event: any) => {
        setACTChecked(event.target.checked);
    };
    const handleCRChange = (event: any) => {
        setCRChecked(event.target.checked);
    };

    const GPARef = useRef<HTMLInputElement>(null);

    // const handleP1Continue = () => {
    //     if (!GPARef.current?.value) {
    //         return;
    //     }
    //     setCurrentPage((prevPage) => prevPage + 1);
    // };
    return (
        <>
            <Heading as="h1" size="lg">
                Applicant
            </Heading>
            <Heading as="h4" size="md">
                Academics
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                <Checkbox onChange={handleSATChange}>SAT</Checkbox>
                {isSATChecked && (
                    <InputGroup>
                        <InputLeftAddon children="SAT" />

                        <Input
                            onChange={handleChange}
                            name={"academic.sat"}
                            type="number"
                            placeholder="Out of 1600"
                            required
                            min={400}
                            max={1600}
                            step={10}
                        />
                    </InputGroup>
                )}
                <Checkbox onChange={handleACTChange}>ACT</Checkbox>
                {isACTChecked && (
                    <InputGroup>
                        <InputLeftAddon children="ACT" />

                        <Input
                            onChange={handleChange}
                            name={"academic.act"}
                            type="number"
                            placeholder="Out of 36"
                            required
                            min={1}
                            max={36}
                            step={1}
                        />
                    </InputGroup>
                )}
                <InputGroup>
                    <InputLeftAddon children="GPA" />
                    <Input
                        onChange={handleChange}
                        name={"academic.gpa"}
                        type="number"
                        placeholder="Out of 4.00"
                        required
                        min={0}
                        max={4}
                        step={0.001}
                        ref={GPARef}
                    />
                </InputGroup>
            </Grid>
            <Heading as="h3" size="sm">
                Class
            </Heading>
            <Checkbox onChange={handleCRChange}>Class Rank</Checkbox>
            {isCRChecked && (
                <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                    <InputGroup>
                        <InputLeftAddon children="Class Rank" />
                        <Input
                            onChange={handleChange}
                            name={"class.rank"}
                            type="number"
                            placeholder="12"
                            required
                            min={1}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon children="Class Size" />
                        <Input
                            onChange={handleChange}
                            name={"class.size"}
                            type="number"
                            placeholder="244"
                            required
                            min={1}
                        />
                    </InputGroup>
                </Grid>
            )}
        </>
    );
}
