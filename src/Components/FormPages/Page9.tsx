import { useContext, useEffect, useState } from "react";
import {
    Checkbox,
    Grid,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page9() {
    const [formData, setFormData] = useContext(FormDataContext);

    useEffect(() => {
        setFormData(formData);
    });

    const [isCostChecked, setCostChecked] = useState(false);
    function toggleCostImportanceValue(event: any) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            costPrefs: {
                ...prevFormData["costPrefs"],
                costImportance: !prevFormData["costPrefs"]["costImportance"],
            },
        }));
        setCostChecked(event.target.checked);
    }
    function toggleFederalAidImportanceValue() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            costPrefs: {
                ...prevFormData["costPrefs"],
                federalAidImportance:
                    !prevFormData["costPrefs"]["federalAidImportance"],
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
    return (
        <>
            <Heading as="h4" size="md">
                Cost Preferences
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <InputGroup>
                    <Checkbox
                        onChange={toggleCostImportanceValue}
                        name={"costPrefs.costImportance"}
                    >
                        Is Cost Important?
                    </Checkbox>
                </InputGroup>
                {isCostChecked && (
                    <InputGroup>
                        <Checkbox
                            onChange={toggleFederalAidImportanceValue}
                            name={"costPrefs.federalAidImportance"}
                        >
                            Is Federal Aid Important?
                        </Checkbox>
                    </InputGroup>
                )}
                {isCostChecked && (
                    <InputGroup>
                        <InputLeftAddon children="Income" />
                        <Input
                            onChange={handleChange}
                            name={"costPrefs.income"}
                            type="number"
                            placeholder="100000"
                            required
                            min={0}
                        />
                    </InputGroup>
                )}
                {isCostChecked && (
                    <InputGroup>
                        <InputLeftAddon children="Pref COA" />
                        <Input
                            onChange={handleChange}
                            name={"costPrefs.prefCOA"}
                            type="number"
                            placeholder="50000"
                            required
                            min={0}
                        />
                    </InputGroup>
                )}
            </Grid>
        </>
    );
}