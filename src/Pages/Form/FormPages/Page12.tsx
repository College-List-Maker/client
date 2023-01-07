import { useContext, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Grid, Heading, InputGroup, Select, Text } from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page12() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  const colWRef = useRef<HTMLSelectElement>(null);
  const costWRef = useRef<HTMLSelectElement>(null);
  const locWRef = useRef<HTMLSelectElement>(null);
  const sucWRef = useRef<HTMLSelectElement>(null);
  const dispatch = useDispatch();

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

  function checkValid() {
    if (
      !colWRef.current?.value ||
      !costWRef.current?.value ||
      !locWRef.current?.value ||
      !sucWRef.current?.value
    ) {
      return;
    }
    const formValid = true;
    dispatch({ type: "SET_FORM_VALID", formValid });
  }

  return (
    <>
      <Heading as="h4" size="md">
        Weighting Preferences
      </Heading>
      <Text fontSize={"xs"} fontFamily={"Actor"} py={"2"}>
        <i>*required</i>
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={1}
      >
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"weights.collegeWeight"}
            placeholder="College Weight"
            required
            ref={colWRef}
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
            ref={costWRef}
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
            ref={locWRef}
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
            ref={sucWRef}
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
