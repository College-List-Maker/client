import { useContext, useEffect } from "react";
import {
  Checkbox,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page4() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  function toggleFirstGenValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      adversity: {
        ...prevFormData["adversity"],
        fgen: !prevFormData["adversity"]["fgen"],
      },
    }));
  }
  function toggleInternationalValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      adversity: {
        ...prevFormData["adversity"],
        international: !prevFormData["adversity"]["international"],
      },
    }));
  }
  function toggleTransferValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      adversity: {
        ...prevFormData["adversity"],
        transfer: !prevFormData["adversity"]["transfer"],
      },
    }));
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
  }

  return (
    <>
      <Heading as="h4" size="md">
        Extra
      </Heading>
      <Heading as="h3" size="sm">
        Parents / Siblings
      </Heading>
      (leave blank if N/A)
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <InputGroup>
          <InputLeftAddon children="Mom" />
          <Input
            onChange={handleChange}
            name={"colleges.legacy1"}
            type="text"
            placeholder="University"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Dad" />
          <Input
            onChange={handleChange}
            name={"colleges.legacy2"}
            type="text"
            placeholder="University"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Other" />
          <Input
            onChange={handleChange}
            name={"colleges.legacy3"}
            type="text"
            placeholder="University"
          />
        </InputGroup>
      </Grid>
      <Heading as="h3" size="sm">
        Alumni
      </Heading>
      (leave blank if N/A)
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <InputGroup>
          <InputLeftAddon children="#1" />
          <Input
            onChange={handleChange}
            name={"colleges.alumni1"}
            type="text"
            placeholder="University"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="#2" />
          <Input
            onChange={handleChange}
            name={"colleges.alumni2"}
            type="text"
            placeholder="University"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="#3" />
          <Input
            onChange={handleChange}
            name={"colleges.alumni3"}
            type="text"
            placeholder="University"
          />
        </InputGroup>
      </Grid>
      <Heading as="h3" size="sm">
        Feeder
      </Heading>
      (leave blank if N/A)
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <InputGroup>
          <InputLeftAddon children="#1" />
          <Input
            onChange={handleChange}
            name={"colleges.feeder1"}
            type="text"
            placeholder="University"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="#2" />
          <Input
            onChange={handleChange}
            name={"colleges.feeder2"}
            type="text"
            placeholder="University"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="#3" />
          <Input
            onChange={handleChange}
            name={"colleges.feeder3"}
            type="text"
            placeholder="University"
          />
        </InputGroup>
      </Grid>
      <Heading as="h3" size="sm">
        Adversity
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <InputGroup>
          <Checkbox onChange={toggleFirstGenValue} name={"adversity.fgen"}>
            First Gen
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox
            onChange={toggleInternationalValue}
            name={"adversity.international"}
          >
            International
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox onChange={toggleTransferValue} name={"adversity.transfer"}>
            Transfer
          </Checkbox>
        </InputGroup>
      </Grid>
    </>
  );
}
