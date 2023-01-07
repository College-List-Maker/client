import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Checkbox,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page9() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  const incomeRef = useRef<HTMLInputElement>(null);
  const prefCOARef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const [isCostChecked, setCostChecked] = useState(false);

  function toggleCostImportanceValue(event: any) {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      costPrefs: {
        ...prevFormData["costPrefs"],
        costImportance: !prevFormData["costPrefs"]["costImportance"],
      },
    }));
    setCostChecked(event.target.checked);
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

  checkValid();
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
  }

  return (
    <>
      <Heading as="h4" size="md">
        Cost Preferences
      </Heading>
      <Text fontSize={"xs"} fontFamily={"Actor"} py={"2"}>
        <i>*required</i>
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={1}
      >
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
              ref={incomeRef}
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
              ref={prefCOARef}
            />
          </InputGroup>
        )}
      </Grid>
    </>
  );
}
