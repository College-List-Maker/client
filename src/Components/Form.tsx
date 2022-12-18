import { useState } from "react";
import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";

interface UserCollegeData {
  [key: string]: {
    [key: string]: any;
  };
  academic: {
    gpa: number;
    sat: number;
    act: number;
  };
  courseload: {
    honors: number;
    apib: number;
    lang: number;
    cs: number;
    core: number;
    major: number;
  };
  confidence: {
    extracurriculars: number;
    essay: number;
    rewards: number;
    recommendations: number;
    volunteering: number;
    work: number;
    talent: number;
    interviewing: number;
    character: number;
    interest: number;
  };
  colleges: {
    legacy: string[];
    alumni: string[];
    feeder: string[];
  };
  residency: {
    zipcode: number;
    state: string;
    country: string;
  };
  class: {
    size: number;
    rank: number;
  };
  adversity: {
    fgen: boolean;
    international: boolean;
    transfer: boolean;
  };
}

export function Form() {
  const [formData, setFormData] = useState<UserCollegeData>({
    academic: {
      gpa: -1,
      sat: -1,
      act: -1,
    },
    courseload: {
      honors: -1,
      apib: -1,
      lang: -1,
      cs: -1,
      core: -1,
      major: -1,
    },
    confidence: {
      extracurriculars: -1,
      essay: -1,
      rewards: -1,
      recommendations: -1,
      volunteering: -1,
      work: -1,
      talent: -1,
      interviewing: -1,
      character: -1,
      interest: -1,
    },
    colleges: {
      legacy: [],
      alumni: [],
      feeder: [],
    },
    residency: {
      zipcode: -1,
      state: "",
      country: "",
    },
    class: {
      size: -1,
      rank: -1,
    },
    adversity: {
      fgen: false,
      international: false,
      transfer: false,
    },
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
    event.preventDefault();
    console.log(formData);
    // Make an API call to the endpoint with the form data
    // setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Center>
      <Container>
        <form onSubmit={handleSubmit}>
          <Heading as="h4" size="md">
            Testing and GPA
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="SAT" />
              <Input
                onChange={handleChange}
                name={"academic.sat"}
                type="text"
                placeholder="Out of 1600"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="ACT" />
              <Input
                onChange={handleChange}
                name={"academic.act"}
                type="text"
                placeholder="Out of 36"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="GPA" />
              <Input
                onChange={handleChange}
                name={"academic.gpa"}
                type="text"
                placeholder="Out of 4.00"
              />
            </InputGroup>
          </Grid>
          <Heading as="h4" size="md">
            Courseload
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <Select
                onChange={handleChange}
                name={"courseload.honors"}
                placeholder="Honors Courses"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select
                onChange={handleChange}
                name={"courseload.apib"}
                placeholder="AP/IB Courses"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select
                onChange={handleChange}
                name={"courseload.lang"}
                placeholder="Lang Courses"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select
                onChange={handleChange}
                name={"courseload.cs"}
                placeholder="CS Courses"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select
                onChange={handleChange}
                name={"courseload.core"}
                placeholder="Core Courses"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select
                onChange={handleChange}
                name={"courseload.major"}
                placeholder="Major Related"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
          </Grid>
          <Heading as="h4" size="md">
            Confidence (Low - 1, High - 5)
          </Heading>
          <Grid>
            <RadioGroup
              onChange={handleChange}
              name={"confidence.extracurriculars"}
            >
              <Heading as="h3" size="sm">
                Extracurriculars
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup onChange={handleChange} name={"confidence.essay"}>
              <Heading as="h3" size="sm">
                Essay
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup onChange={handleChange} name={"confidence.awards"}>
              <Heading as="h3" size="sm">
                Awards
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup
              onChange={handleChange}
              name={"confidence.recommendations"}
            >
              <Heading as="h3" size="sm">
                Recommendations
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup
              onChange={handleChange}
              name={"confidence.volunteering"}
            >
              <Heading as="h3" size="sm">
                Volunteering
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup onChange={handleChange} name={"confidence.work"}>
              <Heading as="h3" size="sm">
                Work
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup onChange={handleChange} name={"confidence.talent"}>
              <Heading as="h3" size="sm">
                Talent
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup
              onChange={handleChange}
              name={"confidence.interviewing"}
            >
              <Heading as="h3" size="sm">
                Interviewing
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup onChange={handleChange} name={"confidence.character"}>
              <Heading as="h3" size="sm">
                Character
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup onChange={handleChange} name={"confidence.interest"}>
              <Heading as="h3" size="sm">
                Interest
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
          </Grid>
          <Heading as="h4" size="md">
            Extra
          </Heading>
          <Heading as="h3" size="sm">
            Parents / Siblings
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="Mom" />
              <Input
                onChange={handleChange}
                name={"colleges.legacy"}
                type="text"
                placeholder="University"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="Dad" />
              <Input
                onChange={handleChange}
                name={"colleges.legacy"}
                type="text"
                placeholder="University"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="Other" />
              <Input
                onChange={handleChange}
                name={"colleges.legacy"}
                type="text"
                placeholder="University"
              />
            </InputGroup>
          </Grid>
          <Heading as="h3" size="sm">
            Alumni
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="#1" />
              <Input
                onChange={handleChange}
                name={"colleges.alumni"}
                type="text"
                placeholder="University"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="#2" />
              <Input
                onChange={handleChange}
                name={"colleges.alumni"}
                type="text"
                placeholder="University"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="#3" />
              <Input
                onChange={handleChange}
                name={"colleges.alumni"}
                type="text"
                placeholder="University"
              />
            </InputGroup>
          </Grid>
          <Heading as="h3" size="sm">
            Feeder
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="#1" />
              <Input
                onChange={handleChange}
                name={"colleges.feeder"}
                type="text"
                placeholder="University"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="#2" />
              <Input
                onChange={handleChange}
                name={"colleges.feeder"}
                type="text"
                placeholder="University"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="#3" />
              <Input
                onChange={handleChange}
                name={"colleges.feeder"}
                type="text"
                placeholder="University"
              />
            </InputGroup>
          </Grid>
          <Heading as="h3" size="sm">
            Residency
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="ZIP" />
              <Input
                onChange={handleChange}
                name={"residency.zipcode"}
                type="text"
                placeholder="14450"
              />
            </InputGroup>
            <InputGroup>
              <Select
                onChange={handleChange}
                name={"residency.state"}
                placeholder="State"
              >
                <option value="NY">New York</option>
                <option value="WI">Wisconson</option>
                <option value="CA">California</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select
                onChange={handleChange}
                name={"residency.country"}
                placeholder="Country"
              >
                <option value="US">United States</option>
              </Select>
            </InputGroup>
          </Grid>
          <Heading as="h3" size="sm">
            Class
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="Class Rank" />
              <Input
                onChange={handleChange}
                name={"class.rank"}
                type="text"
                placeholder="12"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="Class Size" />
              <Input
                onChange={handleChange}
                name={"class.size"}
                type="text"
                placeholder="244"
              />
            </InputGroup>
          </Grid>
          <Heading as="h3" size="sm">
            Adversity
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <Checkbox onChange={handleChange} name={"adversity.fgen"}>
                First Gen
              </Checkbox>
            </InputGroup>
            <InputGroup>
              <Checkbox
                onChange={handleChange}
                name={"adversity.international"}
              >
                International
              </Checkbox>
            </InputGroup>
            <InputGroup>
              <Checkbox onChange={handleChange} name={"adversity.transfer"}>
                Transfer
              </Checkbox>
            </InputGroup>
          </Grid>
          <Button type={"submit"} colorScheme="teal">
            Submit
          </Button>
        </form>
      </Container>
    </Center>
  );
}
