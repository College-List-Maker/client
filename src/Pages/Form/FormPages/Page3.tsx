import { useContext, useEffect } from "react";
import {
  Flex,
  FormControl,
  Grid,
  Heading,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page3() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  function handleRadioClickApplicant(name: string, value: number) {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      confidence: {
        ...prevFormData["confidence"],
        [name]: value,
      },
    }));
  }

  return (
    <>
      <Heading as="h4" size="md">
        Confidence (Low - 0, High - 5)
      </Heading>
      <Grid>
        <FormControl isRequired>
          <RadioGroup>
            <Heading as="h3" size="sm">
              Extracurriculars
            </Heading>
            <Flex justifyContent={"space-evenly"}>
              <Radio
                onChange={() =>
                  handleRadioClickApplicant("extracurriculars", 0)
                }
                value="0"
              >
                0
              </Radio>
              <Radio
                onChange={() =>
                  handleRadioClickApplicant("extracurriculars", 1)
                }
                value="1"
              >
                1
              </Radio>
              <Radio
                onChange={() =>
                  handleRadioClickApplicant("extracurriculars", 2)
                }
                value="2"
              >
                2
              </Radio>
              <Radio
                onChange={() =>
                  handleRadioClickApplicant("extracurriculars", 3)
                }
                value="3"
              >
                3
              </Radio>
              <Radio
                onChange={() =>
                  handleRadioClickApplicant("extracurriculars", 4)
                }
                value="4"
              >
                4
              </Radio>
              <Radio
                onChange={() =>
                  handleRadioClickApplicant("extracurriculars", 5)
                }
                value="5"
              >
                5
              </Radio>
            </Flex>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <RadioGroup>
            <Heading as="h3" size="sm">
              Essay
            </Heading>
            <Flex justifyContent={"space-evenly"}>
              <Radio
                onChange={() => handleRadioClickApplicant("essay", 0)}
                value="0"
              >
                0
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("essay", 1)}
                value="1"
              >
                1
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("essay", 2)}
                value="2"
              >
                2
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("essay", 3)}
                value="3"
              >
                3
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("essay", 4)}
                value="4"
              >
                4
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("essay", 5)}
                value="5"
              >
                5
              </Radio>
            </Flex>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <RadioGroup>
            <Heading as="h3" size="sm">
              Awards
            </Heading>
            <Flex justifyContent={"space-evenly"}>
              <Radio
                onChange={() => handleRadioClickApplicant("awards", 0)}
                value="0"
              >
                0
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("awards", 1)}
                value="1"
              >
                1
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("awards", 2)}
                value="2"
              >
                2
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("awards", 3)}
                value="3"
              >
                3
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("awards", 4)}
                value="4"
              >
                4
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("awards", 5)}
                value="5"
              >
                5
              </Radio>
            </Flex>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <RadioGroup>
            <Heading as="h3" size="sm">
              Recommendations
            </Heading>
            <Flex justifyContent={"space-evenly"}>
              <Radio
                onChange={() => handleRadioClickApplicant("recommendations", 0)}
                value="0"
              >
                0
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("recommendations", 1)}
                value="1"
              >
                1
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("recommendations", 2)}
                value="2"
              >
                2
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("recommendations", 3)}
                value="3"
              >
                3
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("recommendations", 4)}
                value="4"
              >
                4
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("recommendations", 5)}
                value="5"
              >
                5
              </Radio>
            </Flex>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <RadioGroup>
            <Heading as="h3" size="sm">
              Volunteering
            </Heading>
            <Flex justifyContent={"space-evenly"}>
              <Radio
                onChange={() => handleRadioClickApplicant("volunteering", 0)}
                value="0"
              >
                0
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("volunteering", 1)}
                value="1"
              >
                1
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("volunteering", 2)}
                value="2"
              >
                2
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("volunteering", 3)}
                value="3"
              >
                3
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("volunteering", 4)}
                value="4"
              >
                4
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("volunteering", 5)}
                value="5"
              >
                5
              </Radio>
            </Flex>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <RadioGroup>
            <Heading as="h3" size="sm">
              Work
            </Heading>
            <Flex justifyContent={"space-evenly"}>
              <Radio
                onChange={() => handleRadioClickApplicant("works", 0)}
                value="0"
              >
                0
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("works", 1)}
                value="1"
              >
                1
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("works", 2)}
                value="2"
              >
                2
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("works", 3)}
                value="3"
              >
                3
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("works", 4)}
                value="4"
              >
                4
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("works", 5)}
                value="5"
              >
                5
              </Radio>
            </Flex>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <RadioGroup>
            <Heading as="h3" size="sm">
              Talent
            </Heading>
            <Flex justifyContent={"space-evenly"}>
              <Radio
                onChange={() => handleRadioClickApplicant("talents", 0)}
                value="0"
              >
                0
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("talents", 1)}
                value="1"
              >
                1
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("talents", 2)}
                value="2"
              >
                2
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("talents", 3)}
                value="3"
              >
                3
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("talents", 4)}
                value="4"
              >
                4
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("talents", 5)}
                value="5"
              >
                5
              </Radio>
            </Flex>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <RadioGroup>
            <Heading as="h3" size="sm">
              Interviewing
            </Heading>
            <Flex justifyContent={"space-evenly"}>
              <Radio
                onChange={() => handleRadioClickApplicant("interviewing", 0)}
                value="0"
              >
                0
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("interviewing", 1)}
                value="1"
              >
                1
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("interviewing", 2)}
                value="2"
              >
                2
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("interviewing", 3)}
                value="3"
              >
                3
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("interviewing", 4)}
                value="4"
              >
                4
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("interviewing", 5)}
                value="5"
              >
                5
              </Radio>
            </Flex>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <RadioGroup>
            <Heading as="h3" size="sm">
              Character
            </Heading>
            <Flex justifyContent={"space-evenly"}>
              <Radio
                onChange={() => handleRadioClickApplicant("character", 0)}
                value="0"
              >
                0
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("character", 1)}
                value="1"
              >
                1
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("character", 2)}
                value="2"
              >
                2
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("character", 3)}
                value="3"
              >
                3
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("character", 4)}
                value="4"
              >
                4
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("character", 5)}
                value="5"
              >
                5
              </Radio>
            </Flex>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <RadioGroup>
            <Heading as="h3" size="sm">
              Interest
            </Heading>
            <Flex justifyContent={"space-evenly"}>
              <Radio
                onChange={() => handleRadioClickApplicant("interest", 0)}
                value="0"
              >
                0
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("interest", 1)}
                value="1"
              >
                1
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("interest", 2)}
                value="2"
              >
                2
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("interest", 3)}
                value="3"
              >
                3
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("interest", 4)}
                value="4"
              >
                4
              </Radio>
              <Radio
                onChange={() => handleRadioClickApplicant("interest", 5)}
                value="5"
              >
                5
              </Radio>
            </Flex>
          </RadioGroup>
        </FormControl>
      </Grid>
    </>
  );
}
