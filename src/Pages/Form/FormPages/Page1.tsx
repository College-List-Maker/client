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

export function Page1() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  const GPARef = useRef<HTMLInputElement>(null);
  const SATRef = useRef<HTMLInputElement>(null);
  const ACTRef = useRef<HTMLInputElement>(null);
  const SizeRef = useRef<HTMLInputElement>(null);
  const RankRef = useRef<HTMLInputElement>(null);
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

  function checkValid() {
    if (
      !GPARef.current?.value ||
      Number(GPARef.current?.value) < 0 ||
      Number(GPARef.current?.value) > 4
    ) {
      return;
    }
    if (
      isSATChecked &&
      (!SATRef.current?.value ||
        Number(SATRef.current?.value) < 400 ||
        Number(SATRef.current?.value) > 1600)
    ) {
      return;
    }
    if (
      isACTChecked &&
      (!ACTRef.current?.value ||
        Number(ACTRef.current?.value) < 1 ||
        Number(ACTRef.current?.value) > 36)
    ) {
      return;
    }
    if (
      isCRChecked &&
      (!RankRef.current?.value ||
        !SizeRef.current?.value ||
        Number(RankRef.current?.value) < 1 ||
        Number(SizeRef.current?.value) < 1)
    ) {
      return;
    }
    const formValid = true;
    dispatch({ type: "SET_FORM_VALID", formValid });
  }

  return (
    <>
      <Heading as="h2" size="md">
        Academics
      </Heading>
      <Text fontSize={"xs"} fontFamily={"Actor"} py={"2"}>
        <i>*required</i>
      </Text>
      <Grid templateColumns="repeat(1, 3fr)" gap={1}>
        <InputGroup>
          <InputLeftAddon children="GPA*" />
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
        <Checkbox onChange={handleSATChange}>SAT</Checkbox>
        {isSATChecked && (
          <InputGroup>
            <InputLeftAddon children="SAT*" />

            <Input
              onChange={handleChange}
              name={"academic.sat"}
              type="number"
              placeholder="Out of 1600"
              required
              min={400}
              max={1600}
              step={10}
              ref={SATRef}
            />
          </InputGroup>
        )}
        <Checkbox onChange={handleACTChange}>ACT</Checkbox>
        {isACTChecked && (
          <InputGroup>
            <InputLeftAddon children="ACT*" />

            <Input
              onChange={handleChange}
              name={"academic.act"}
              type="number"
              placeholder="Out of 36"
              required
              min={1}
              max={36}
              step={1}
              ref={ACTRef}
            />
          </InputGroup>
        )}
      </Grid>
      <Heading as="h3" size="sm">
        Class
      </Heading>
      <Checkbox onChange={handleCRChange}>Class Rank</Checkbox>
      {isCRChecked && (
        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
          <InputGroup>
            <InputLeftAddon children="Class Rank*" />
            <Input
              onChange={handleChange}
              name={"class.rank"}
              type="number"
              placeholder="12"
              required
              min={1}
              ref={RankRef}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Class Size*" />
            <Input
              onChange={handleChange}
              name={"class.size"}
              type="number"
              placeholder="244"
              required
              min={1}
              ref={SizeRef}
            />
          </InputGroup>
        </Grid>
      )}
    </>
  );
}
