import { useContext, useEffect } from "react";
import {
  FormControl,
  Heading,
  Radio,
  RadioGroup,
  Flex,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page6() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  function handleRadioClickCollege(name: string, value: number) {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      collegePrefs: {
        ...prevFormData["collegePrefs"],
        [name]: value,
      },
    }));
  }

  return (
    <>
      <Heading as="h1" size="lg">
        Rank
      </Heading>
      <Heading as="h4" size="md">
        College Importance
      </Heading>
      <FormControl isRequired>
        <RadioGroup>
          <Heading as="h3" size="sm">
            Prestiege Importance
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              onChange={() => handleRadioClickCollege("prestiegeImportance", 0)}
              value="0"
            >
              0
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("prestiegeImportance", 1)}
              value="1"
            >
              1
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("prestiegeImportance", 2)}
              value="2"
            >
              2
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("prestiegeImportance", 3)}
              value="3"
            >
              3
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("prestiegeImportance", 4)}
              value="4"
            >
              4
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("prestiegeImportance", 5)}
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
            Internship Importance
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              onChange={() =>
                handleRadioClickCollege("internshipImportance", 0)
              }
              value="0"
            >
              0
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("internshipImportance", 1)
              }
              value="1"
            >
              1
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("internshipImportance", 2)
              }
              value="2"
            >
              2
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("internshipImportance", 3)
              }
              value="3"
            >
              3
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("internshipImportance", 4)
              }
              value="4"
            >
              4
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("internshipImportance", 5)
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
            Study Abroad Importance
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              onChange={() =>
                handleRadioClickCollege("studyAbroadImportance", 0)
              }
              value="0"
            >
              0
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("studyAbroadImportance", 1)
              }
              value="1"
            >
              1
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("studyAbroadImportance", 2)
              }
              value="2"
            >
              2
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("studyAbroadImportance", 3)
              }
              value="3"
            >
              3
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("studyAbroadImportance", 4)
              }
              value="4"
            >
              4
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("studyAbroadImportance", 5)
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
            Rigor Importance
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              onChange={() => handleRadioClickCollege("rigorImportance", 0)}
              value="0"
            >
              0
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("rigorImportance", 1)}
              value="1"
            >
              1
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("rigorImportance", 2)}
              value="2"
            >
              2
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("rigorImportance", 3)}
              value="3"
            >
              3
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("rigorImportance", 4)}
              value="4"
            >
              4
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("rigorImportance", 5)}
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
            Work Study Importance
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              onChange={() => handleRadioClickCollege("workStudyImportance", 0)}
              value="0"
            >
              0
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("workStudyImportance", 1)}
              value="1"
            >
              1
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("workStudyImportance", 2)}
              value="2"
            >
              2
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("workStudyImportance", 3)}
              value="3"
            >
              3
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("workStudyImportance", 4)}
              value="4"
            >
              4
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("workStudyImportance", 5)}
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
            Academic Resources Importance
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              onChange={() =>
                handleRadioClickCollege("academicResourcesImportance", 0)
              }
              value="0"
            >
              0
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("academicResourcesImportance", 1)
              }
              value="1"
            >
              1
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("academicResourcesImportance", 2)
              }
              value="2"
            >
              2
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("academicResourcesImportance", 3)
              }
              value="3"
            >
              3
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("academicResourcesImportance", 4)
              }
              value="4"
            >
              4
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("academicResourcesImportance", 5)
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
            Research Importance
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              onChange={() => handleRadioClickCollege("researchImportance", 0)}
              value="0"
            >
              0
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("researchImportance", 1)}
              value="1"
            >
              1
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("researchImportance", 2)}
              value="2"
            >
              2
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("researchImportance", 3)}
              value="3"
            >
              3
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("researchImportance", 4)}
              value="4"
            >
              4
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("researchImportance", 5)}
              value="5"
            >
              5
            </Radio>
          </Flex>
        </RadioGroup>
      </FormControl>
    </>
  );
}
