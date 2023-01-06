import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
    Button,
    Checkbox,
    Grid,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Skeleton,
} from "@chakra-ui/react";
import { Profile } from "../Profile";
import { LoadingContext } from "../Profile";
import { UserCollegeData } from "../../../types";
import axios from "axios";
import { getCookie } from "../../../Fetch";

export function Page9() {
    const { context: FormDataContext } = Profile();
    const [fD] = useContext(FormDataContext);
    const [formData, setFormData] = useState<UserCollegeData>();
    const [, setIsLoading] = useContext(LoadingContext);

    useEffect(() => {
        if (
            fD === undefined ||
            formData === undefined ||
            fD.academic.gpa === -1 ||
            formData.academic.gpa === -1
        ) {
            setFormData(fD);
            if (formData !== undefined) {
                setCostChecked(formData.costPrefs.costImportance);
            }
        }
    }, [fD, formData]);

    const incomeRef = useRef<HTMLInputElement>(null);
    const prefCOARef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const formValid = true;
    dispatch({ type: "SET_FORM_VALID", formValid });

    const [isCostChecked, setCostChecked] = useState(false);

    function toggleCostImportanceValue(event: any) {
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            costPrefs: {
                ...prevFormData["costPrefs"],
                costImportance: !prevFormData["costPrefs"]["costImportance"],
            },
        }));
        checkValid();
    }

    function toggleFederalAidImportanceValue() {
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            costPrefs: {
                ...prevFormData["costPrefs"],
                federalAidImportance:
                    !prevFormData["costPrefs"]["federalAidImportance"],
            },
        }));
        checkValid();
    }

    function handleChange(event: any) {
        console.log(formData);
        const { name, value } = event.target;
        const [parent, child] = name.split(".");
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            [parent]: {
                ...prevFormData[parent],
                [child]: value,
            },
        }));
        checkValid();
    }

    function checkValid() {
        let formValid;
        if (isCostChecked) {
            if (
                !incomeRef.current?.value ||
                Number(incomeRef.current?.value) < 0 ||
                !prefCOARef.current?.value ||
                Number(prefCOARef.current?.value) < 0
            ) {
                formValid = false;
            } else {
                formValid = true;
            }
        } else {
            formValid = true;
        }
        dispatch({ type: "SET_FORM_VALID", formValid });
        return formValid;
    }

    const HandleSave = (event: any) => {
        setIsLoading(true);
        checkValid();
        if (formValid) {
            event.preventDefault();
            console.log(formData);
            axios
                .post(
                    "https://collegy-server.herokuapp.com/user/submit-questionaire/" +
                        getCookie("visitorId="),
                    formData
                )
                .then((res: any) => {
                    axios
                        .get(
                            "https://collegy-server.herokuapp.com/user/set-college-list/" +
                                getCookie("visitorId=")
                        )
                        .then(() => {
                            setIsLoading(false);
                            window.location.hash = "#college-list";
                        });
                })
                .catch((err: any) => {
                    console.error(err);
                });
        }
    };

    return formData && formData.academic.gpa !== -1 ? (
        <>
            <Heading as="h4" size="md">
                Cost Preferences
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <InputGroup>
                    <Checkbox
                        onChange={toggleCostImportanceValue}
                        name={"costPrefs.costImportance"}
                        defaultChecked={
                            formData.costPrefs.costImportance ? true : false
                        }
                    >
                        Is Cost Important?
                    </Checkbox>
                </InputGroup>

                <>
                    <InputGroup>
                        <Checkbox
                            onChange={toggleFederalAidImportanceValue}
                            name={"costPrefs.federalAidImportance"}
                            defaultChecked={
                                formData.costPrefs.federalAidImportance
                                    ? true
                                    : false
                            }
                        >
                            Is Federal Aid Important?
                        </Checkbox>
                    </InputGroup>

                    <InputGroup>
                        <InputLeftAddon children="Income" />
                        <Input
                            onChange={handleChange}
                            name={"costPrefs.income"}
                            type="number"
                            defaultValue={String(formData.costPrefs.income)}
                            required
                            min={0}
                            ref={incomeRef}
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftAddon children="Pref COA" />
                        <Input
                            onChange={handleChange}
                            name={"costPrefs.prefCOA"}
                            type="number"
                            defaultValue={String(formData.costPrefs.prefCOA)}
                            required
                            min={0}
                            ref={prefCOARef}
                        />
                    </InputGroup>
                </>
            </Grid>
            <Button onClick={HandleSave} size="sm">
                Save*
            </Button>
        </>
    ) : (
        <Skeleton>LOADING</Skeleton>
    );
}
