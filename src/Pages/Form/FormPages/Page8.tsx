import { useContext, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Checkbox,
  Grid,
  Heading,
  Select,
  InputGroup,
  Text,
} from "@chakra-ui/react";

import { FormDataContext } from "../Form";

export function Page8() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  const majorRef = useRef<HTMLSelectElement>(null);
  const degreeRef = useRef<HTMLSelectElement>(null);
  const dispatch = useDispatch();

  function toggleMajorProminenceImportanceValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      collegePrefs: {
        ...prevFormData["collegePrefs"],
        majorProminenceImportance:
          !prevFormData["collegePrefs"]["majorProminenceImportance"],
      },
    }));
    checkValid();
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
    checkValid();
  }

  function checkValid() {
    if (!majorRef.current?.value || !degreeRef.current?.value) {
      return;
    }
    const formValid = true;
    dispatch({ type: "SET_FORM_VALID", formValid });
  }

  return (
    <>
      <Heading as="h3" size="sm">
        Major/Degree
      </Heading>
      <Text fontSize={"xs"} fontFamily={"Actor"} py={"2"}>
        <i>*required</i>
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={1}
      >
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"collegePrefs.prefMajor"}
            placeholder="Major Type"
            required
            ref={majorRef}
          >
            <option value="">Other/Undecided</option>
            <option value="PCIP01">
              Agriculture, Agriculture Operations, and Related Sciences
            </option>
            <option value="PCIP03">Natural Resources and Conservation</option>
            <option value="PCIP04">Architecture and Related Services</option>
            <option value="PCIP05">
              Area, Ethnic, Cultural, Gender, and Group Studies
            </option>
            <option value="PCIP09">
              Communication, Journalism, and Related Programs
            </option>
            <option value="PCIP10">
              Communications Technologies/Technicians and Support Services
            </option>
            <option value="PCIP11">
              Computer and Information Sciences and Support Services
            </option>
            <option value="PCIP12">Personal and Culinary Services</option>
            <option value="PCIP13">Education</option>
            <option value="PCIP14">Engineering</option>
            <option value="PCIP15">
              Engineering Technologies and Engineering-Related Fields
            </option>
            <option value="PCIP16">
              Foreign Languages, Literatures, and Linguistics
            </option>
            <option value="PCIP19">
              Family and Consumer Sciences/Human Sciences
            </option>
            <option value="PCIP22">Legal Professions and Studies</option>
            <option value="PCIP23">
              English Language and Literature/Letters
            </option>
            <option value="PCIP24">
              Liberal Arts and Sciences, General Studies and Humanities
            </option>
            <option value="PCIP25">Library Science</option>
            <option value="PCIP26">Biological and Biomedical Sciences</option>
            <option value="PCIP27">Mathematics and Statistics</option>
            <option value="PCIP29">
              Military Technologies and Applied Sciences
            </option>
            <option value="PCIP30">Multi/Interdisciplinary Studies</option>
            <option value="PCIP31">
              Parks, Recreation, Leisure, and Fitness Studies
            </option>
            <option value="PCIP38">Philosophy and Religious Studies</option>
            <option value="PCIP39">Theology and Religious Vocations</option>
            <option value="PCIP40">Physical Sciences</option>
            <option value="PCIP41">Science Technologies/Technicians</option>
            <option value="PCIP42">Psychology</option>
            <option value="PCIP43">
              Homeland Security, Law Enforcement, Firefighting and Related
              Protective Services
            </option>
            <option value="PCIP44">
              Public Administration and Social Service Professions
            </option>
            <option value="PCIP45">Social Sciences</option>
            <option value="PCIP46">Construction Trades</option>
            <option value="PCIP47">
              Mechanic and Repair Technologies/Technicians
            </option>
            <option value="PCIP48">Precision Production</option>
            <option value="PCIP49">Transportation and Materials Moving</option>
            <option value="PCIP50">Visual and Performing Arts</option>
            <option value="PCIP51">
              Health Professions and Related Programs
            </option>
            <option value="PCIP52">
              Business, Management, Marketing, and Related Support Services
            </option>
            <option value="PCIP54">History</option>
          </Select>
        </InputGroup>
        <InputGroup py={2}>
          <Checkbox
            onChange={toggleMajorProminenceImportanceValue}
            name={"collegePrefs.majorProminenceImportance"}
          >
            Major Prominence
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"collegePrefs.prefHighestDegree"}
            placeholder="Highest Pref Degree"
            required
            ref={degreeRef}
          >
            <option value="0">Non-degree-granting</option>
            <option value="1">Certificate degree</option>
            <option value="2">Associate degree</option>
            <option value="3">Bachelor's degree</option>
            <option value="4">Graduate degree</option>
          </Select>
        </InputGroup>
      </Grid>
    </>
  );
}
