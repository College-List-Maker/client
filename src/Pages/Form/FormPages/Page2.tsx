import { useContext, useEffect } from "react";
import { Grid, Heading, InputGroup, Select } from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page2() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

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
  }

  return (
    <>
      <Heading as="h4" size="md">
        Courseload
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.honors"}
            placeholder="Honors Courses"
            required
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
            placeholder="AP/IB Courses"
            required
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
            placeholder="Lang Courses"
            required
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
            placeholder="CS Courses"
            required
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.core"}
            placeholder="Core Courses"
            required
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.major"}
            placeholder="Major Related"
            required
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
