import { useContext, useEffect, useRef } from "react";
import { Grid, Heading, InputGroup, Select, Text } from "@chakra-ui/react";
import { FormDataContext } from "../Form";
import { useDispatch } from "react-redux";

export function Page2() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  const honorsRef = useRef<HTMLSelectElement>(null);
  const apibRef = useRef<HTMLSelectElement>(null);
  const langRef = useRef<HTMLSelectElement>(null);
  const csRef = useRef<HTMLSelectElement>(null);
  const coreRef = useRef<HTMLSelectElement>(null);
  const majorRef = useRef<HTMLSelectElement>(null);
  const dispatch = useDispatch();

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
    if (
      !honorsRef.current?.value ||
      !apibRef.current?.value ||
      !langRef.current?.value ||
      !csRef.current?.value ||
      !coreRef.current?.value ||
      !majorRef.current?.value
    ) {
      return;
    }
    const formValid = true;
    dispatch({ type: "SET_FORM_VALID", formValid });
  }

  return (
    <>
      <Heading as="h4" size="md">
        Courseload
      </Heading>
      <Text fontSize={"xs"} fontFamily={"Actor"} py={"2"}>
        <i>*required</i>
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={1}
      >
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.honors"}
            placeholder="Honors Courses*"
            required
            ref={honorsRef}
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
            placeholder="AP/IB Courses*"
            required
            ref={apibRef}
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
            placeholder="Lang Courses*"
            required
            ref={langRef}
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
            placeholder="CS Course?*"
            required
            ref={csRef}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.core"}
            placeholder="Core Course?*"
            required
            ref={coreRef}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.major"}
            placeholder="Major Related*"
            required
            ref={majorRef}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </Select>
        </InputGroup>
      </Grid>
    </>
  );
}
