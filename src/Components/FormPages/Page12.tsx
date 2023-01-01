import { useContext, useEffect } from "react";
import { Grid, Heading, InputGroup, Select } from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page12() {
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
    return (
        <>
            <Heading as="h4" size="md">
                Weighting Preferences
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <InputGroup>
                    <Select
                        onChange={handleChange}
                        name={"weights.collegeWeight"}
                        placeholder="College Weight"
                        required
                    >
                        <option value="1">Not Important</option>
                        <option value="2">Neutral</option>
                        <option value="3">Important</option>
                    </Select>
                </InputGroup>
                <InputGroup>
                    <Select
                        onChange={handleChange}
                        name={"weights.costWeight"}
                        placeholder="Cost Weight"
                        required
                    >
                        <option value="1">Not Important</option>
                        <option value="2">Neutral</option>
                        <option value="3">Important</option>
                    </Select>
                </InputGroup>
                <InputGroup>
                    <Select
                        onChange={handleChange}
                        name={"weights.locationWeight"}
                        placeholder="Location Weight"
                        required
                    >
                        <option value="1">Not Important</option>
                        <option value="2">Neutral</option>
                        <option value="3">Important</option>
                    </Select>
                </InputGroup>
                <InputGroup>
                    <Select
                        onChange={handleChange}
                        name={"weights.successWeight"}
                        placeholder="Success Weight"
                        required
                    >
                        <option value="1">Not Important</option>
                        <option value="2">Neutral</option>
                        <option value="3">Important</option>
                    </Select>
                </InputGroup>
            </Grid>
        </>
    );
}
