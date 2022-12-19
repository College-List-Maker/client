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
import axios from "axios";
import { getCookie } from "../Cookie";
import { UserCollegeData } from "../types";

export function Form() {
  const defaultData: UserCollegeData = {
    academic: {
      gpa: -1,
      sat: -1,
      act: -1,
    },
    courseload: {
      honors: -1,
      apib: -1,
      lang: -1,
      cs: "",
      core: "",
      major: -1,
    },
    confidence: {
      extracurriculars: -1,
      essay: -1,
      awards: -1,
      recommendations: -1,
      volunteering: -1,
      works: -1,
      talents: -1,
      interviewing: -1,
      character: -1,
      interest: -1,
    },
    colleges: {
      legacy1: "",
      legacy2: "",
      legacy3: "",
      alumni1: "",
      alumni2: "",
      alumni3: "",
      feeder1: "",
      feeder2: "",
      feeder3: "",
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
  };

  const [formData, setFormData] = useState<UserCollegeData>(defaultData);

  function toggleFirstGenValue() {
    setFormData((prevFormData) => ({
      ...prevFormData,
      adversity: {
        ...prevFormData["adversity"],
        fgen: !prevFormData["adversity"]["fgen"],
      },
    }));
  }
  function toggleInternationalValue() {
    setFormData((prevFormData) => ({
      ...prevFormData,
      adversity: {
        ...prevFormData["adversity"],
        international: !prevFormData["adversity"]["international"],
      },
    }));
  }
  function toggleTransferValue() {
    setFormData((prevFormData) => ({
      ...prevFormData,
      adversity: {
        ...prevFormData["adversity"],
        transfer: !prevFormData["adversity"]["transfer"],
      },
    }));
  }

  function handleRadioClick(name: string, value: number) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      confidence: {
        ...prevFormData["confidence"],
        [name]: value,
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
    event.preventDefault();
    console.log(formData);

    axios
      .post(
        "http://localhost:4000/college/submit-data/" + getCookie("visitorId="),
        formData
      )
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });

    window.location.hash = "#college-list";
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
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select
                onChange={handleChange}
                name={"courseload.core"}
                placeholder="Core Courses"
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
            <RadioGroup>
              <Heading as="h3" size="sm">
                Extracurriculars
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio
                  onClick={() => handleRadioClick("extracurriculars", 1)}
                  value="1"
                >
                  1
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("extracurriculars", 2)}
                  value="2"
                >
                  2
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("extracurriculars", 3)}
                  value="3"
                >
                  3
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("extracurriculars", 4)}
                  value="4"
                >
                  4
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("extracurriculars", 5)}
                  value="5"
                >
                  5
                </Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Essay
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio onClick={() => handleRadioClick("essay", 1)} value="1">
                  1
                </Radio>
                <Radio onClick={() => handleRadioClick("essay", 2)} value="2">
                  2
                </Radio>
                <Radio onClick={() => handleRadioClick("essay", 3)} value="3">
                  3
                </Radio>
                <Radio onClick={() => handleRadioClick("essay", 4)} value="4">
                  4
                </Radio>
                <Radio onClick={() => handleRadioClick("essay", 5)} value="5">
                  5
                </Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Awards
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio onClick={() => handleRadioClick("awards", 1)} value="1">
                  1
                </Radio>
                <Radio onClick={() => handleRadioClick("awards", 2)} value="2">
                  2
                </Radio>
                <Radio onClick={() => handleRadioClick("awards", 3)} value="3">
                  3
                </Radio>
                <Radio onClick={() => handleRadioClick("awards", 4)} value="4">
                  4
                </Radio>
                <Radio onClick={() => handleRadioClick("awards", 5)} value="5">
                  5
                </Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Recommendations
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio
                  onClick={() => handleRadioClick("recommendations", 1)}
                  value="1"
                >
                  1
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("recommendations", 2)}
                  value="2"
                >
                  2
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("recommendations", 3)}
                  value="3"
                >
                  3
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("recommendations", 4)}
                  value="4"
                >
                  4
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("recommendations", 5)}
                  value="5"
                >
                  5
                </Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Volunteering
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio
                  onClick={() => handleRadioClick("volunteering", 1)}
                  value="1"
                >
                  1
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("volunteering", 2)}
                  value="2"
                >
                  2
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("volunteering", 3)}
                  value="3"
                >
                  3
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("volunteering", 4)}
                  value="4"
                >
                  4
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("volunteering", 5)}
                  value="5"
                >
                  5
                </Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Work
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio onClick={() => handleRadioClick("works", 1)} value="1">
                  1
                </Radio>
                <Radio onClick={() => handleRadioClick("works", 2)} value="2">
                  2
                </Radio>
                <Radio onClick={() => handleRadioClick("works", 3)} value="3">
                  3
                </Radio>
                <Radio onClick={() => handleRadioClick("works", 4)} value="4">
                  4
                </Radio>
                <Radio onClick={() => handleRadioClick("works", 5)} value="5">
                  5
                </Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Talent
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio onClick={() => handleRadioClick("talents", 1)} value="1">
                  1
                </Radio>
                <Radio onClick={() => handleRadioClick("talents", 2)} value="2">
                  2
                </Radio>
                <Radio onClick={() => handleRadioClick("talents", 3)} value="3">
                  3
                </Radio>
                <Radio onClick={() => handleRadioClick("talents", 4)} value="4">
                  4
                </Radio>
                <Radio onClick={() => handleRadioClick("talents", 5)} value="5">
                  5
                </Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Interviewing
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio
                  onClick={() => handleRadioClick("interviewing", 1)}
                  value="1"
                >
                  1
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("interviewing", 2)}
                  value="2"
                >
                  2
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("interviewing", 3)}
                  value="3"
                >
                  3
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("interviewing", 4)}
                  value="4"
                >
                  4
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("interviewing", 5)}
                  value="5"
                >
                  5
                </Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Character
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio
                  onClick={() => handleRadioClick("character", 1)}
                  value="1"
                >
                  1
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("character", 2)}
                  value="2"
                >
                  2
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("character", 3)}
                  value="3"
                >
                  3
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("character", 4)}
                  value="4"
                >
                  4
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("character", 5)}
                  value="5"
                >
                  5
                </Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Interest
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio
                  onClick={() => handleRadioClick("interest", 1)}
                  value="1"
                >
                  1
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("interest", 2)}
                  value="2"
                >
                  2
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("interest", 3)}
                  value="3"
                >
                  3
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("interest", 4)}
                  value="4"
                >
                  4
                </Radio>
                <Radio
                  onClick={() => handleRadioClick("interest", 5)}
                  value="5"
                >
                  5
                </Radio>
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
              <Checkbox
                onChange={toggleTransferValue}
                name={"adversity.transfer"}
              >
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
