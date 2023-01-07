import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Checkbox,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  FormControl,
  Select,
  Skeleton,
  useToast,
  Flex,
} from "@chakra-ui/react";

import { Profile } from "../Profile";
import { LoadingContext } from "../Profile";
import { UserCollegeData } from "../../../types";
import axios from "axios";
import { getCookie } from "../../../Fetch";

export function Page7() {
  const { context: FormDataContext } = Profile();
  const [fD] = useContext(FormDataContext);
  const [formData, setFormData] = useState<UserCollegeData>();
  const [isLoading, setIsLoading] = useContext(LoadingContext);
  const toast = useToast();

  useEffect(() => {
    if (
      fD === undefined ||
      formData === undefined ||
      fD.academic.gpa === -1 ||
      formData.academic.gpa === -1
    ) {
      setFormData(fD);
    }
  }, [fD, formData]);

  const prefSizeRef = useRef<HTMLInputElement>(null);
  const sexRatioRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const sameGenRef = useRef<HTMLInputElement>(null);
  const hbcuRef = useRef<HTMLInputElement>(null);
  const coedRef = useRef<HTMLInputElement>(null);
  const prefReligionRef = useRef<HTMLSelectElement>(null);
  const commitFacultyRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const formValid = true;
  dispatch({ type: "SET_FORM_VALID", formValid });

  function toggleReligiousPrefValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      collegePrefs: {
        ...prevFormData["collegePrefs"],
        prefReligious: !prevFormData["collegePrefs"]["prefReligious"],
      },
    }));
    checkValid();
  }

  function togglePrivateControlImportanceValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      collegePrefs: {
        ...prevFormData["collegePrefs"],
        prefPrivateControl: !prevFormData["collegePrefs"]["prefPrivateControl"],
      },
    }));
    checkValid();
  }

  function togglePublicControlImportanceValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      collegePrefs: {
        ...prevFormData["collegePrefs"],
        prefPublicControl: !prevFormData["collegePrefs"]["prefPublicControl"],
      },
    }));
    checkValid();
  }

  function toggleFacilityImportanceValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      collegePrefs: {
        ...prevFormData["collegePrefs"],
        facilityImportance: !prevFormData["collegePrefs"]["facilityImportance"],
      },
    }));
    checkValid();
  }

  function toggle4yrPrefValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      collegePrefs: {
        ...prevFormData["collegePrefs"],
        pref4yr: !prevFormData["collegePrefs"]["pref4yr"],
      },
    }));
    checkValid();
  }

  function handleRadioClickCollege(name: string, value: number) {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      collegePrefs: {
        ...prevFormData["collegePrefs"],
        [name]: value,
      },
    }));
    checkValid();
  }

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
      !sameGenRef.current ||
      !hbcuRef.current ||
      !coedRef.current ||
      !commitFacultyRef.current
    ) {
      return false;
    }
    const radioElements1 = sameGenRef.current.querySelectorAll(
      "input[type='radio']"
    ) as NodeListOf<HTMLInputElement>;
    const anySelected1 = Array.from(radioElements1).some(
      (radio) => radio.checked
    );

    const radioElements2 = hbcuRef.current.querySelectorAll(
      "input[type='radio']"
    ) as NodeListOf<HTMLInputElement>;
    const anySelected2 = Array.from(radioElements2).some(
      (radio) => radio.checked
    );

    const radioElements3 = coedRef.current.querySelectorAll(
      "input[type='radio']"
    ) as NodeListOf<HTMLInputElement>;
    const anySelected3 = Array.from(radioElements3).some(
      (radio) => radio.checked
    );

    const radioElements4 = commitFacultyRef.current.querySelectorAll(
      "input[type='radio']"
    ) as NodeListOf<HTMLInputElement>;
    const anySelected4 = Array.from(radioElements4).some(
      (radio) => radio.checked
    );

    if (
      !prefSizeRef.current?.value ||
      Number(prefSizeRef.current?.value) < 1 ||
      !sexRatioRef.current?.value ||
      Number(sexRatioRef.current?.value) < 0 ||
      Number(sexRatioRef.current?.value) > 100 ||
      !genderRef.current?.value ||
      !prefReligionRef.current?.value ||
      !anySelected1 ||
      !anySelected2 ||
      !anySelected3 ||
      !anySelected4
    ) {
      return false;
    }
    const formValid = true;
    dispatch({ type: "SET_FORM_VALID", formValid });
    return true;
  }

  const HandleSave = (event: any) => {
    setIsLoading(true);
    checkValid();
    if (formValid) {
      event.preventDefault();
      axios
        .post(
          "https://collegy-server.herokuapp.com/user/submit-questionaire/" +
            getCookie("visitorId="),
          formData
        )
        .then((res: any) => {
          axios
            .get(
              "https://collegy-server.herokuapp.com/user/set-college-list/" +
                getCookie("visitorId=")
            )
            .then(() => {
              setIsLoading(false);
              toast({
                title: "Saved!",
                description: "Your college list has been updated.",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            });
        })
        .catch((err: any) => {
          console.error(err);
          setIsLoading(false);
          toast({
            title: "Oops...",
            description: "Something went wrong saving.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    }
  };

  return formData && formData.academic.gpa !== -1 ? (
    <>
      <Heading as="h4" size="md">
        College Preferences
      </Heading>
      <Heading as="h3" size="sm">
        Student Body
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={1}>
        <InputGroup>
          <InputLeftAddon children="Pref Size" />
          <Input
            onChange={handleChange}
            name={"collegePrefs.prefSize"}
            type="number"
            defaultValue={String(formData.collegePrefs.prefSize)}
            required
            min={1}
            ref={prefSizeRef}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Sex Ratio (% women)" />
          <Input
            onChange={handleChange}
            name={"collegePrefs.prefSexRatioF"}
            type="number"
            defaultValue={String(formData.collegePrefs.prefSexRatioF)}
            required
            min={0}
            max={100}
            step={0.001}
            ref={sexRatioRef}
          />
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"collegePrefs.gender"}
            defaultValue={
              String(formData.collegePrefs.gender) === "M"
                ? "Male"
                : String(formData.collegePrefs.gender) === "F"
                ? "Female"
                : ""
            }
            required
            ref={genderRef}
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="">Other</option>
          </Select>
        </InputGroup>
      </Grid>
      <FormControl isRequired>
        <RadioGroup
          ref={sameGenRef}
          defaultValue={String(formData.collegePrefs.sameGenderImportance)}
        >
          <Heading as="h3" size="sm">
            Same-Gender Importance (Ex. Female-Only)
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 0)
              }
              value="0"
            >
              0
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 1)
              }
              value="1"
            >
              1
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 2)
              }
              value="2"
            >
              2
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 3)
              }
              value="3"
            >
              3
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 4)
              }
              value="4"
            >
              4
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 5)
              }
              value="5"
            >
              5
            </Radio>
          </Flex>
        </RadioGroup>
      </FormControl>
      <FormControl isRequired>
        <RadioGroup
          ref={hbcuRef}
          defaultValue={String(formData.collegePrefs.hbcuImportance)}
        >
          <Heading as="h3" size="sm">
            HBCU Importance (Historically Black Colleges/Universities)
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              onChange={() => handleRadioClickCollege("hbcuImportance", 0)}
              value="0"
            >
              0
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("hbcuImportance", 1)}
              value="1"
            >
              1
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("hbcuImportance", 2)}
              value="2"
            >
              2
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("hbcuImportance", 3)}
              value="3"
            >
              3
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("hbcuImportance", 4)}
              value="4"
            >
              4
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("hbcuImportance", 5)}
              value="5"
            >
              5
            </Radio>
          </Flex>
        </RadioGroup>
      </FormControl>
      <FormControl isRequired>
        <RadioGroup
          ref={coedRef}
          defaultValue={String(formData.collegePrefs.coedImportance)}
        >
          <Heading as="h3" size="sm">
            Coed Importance
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              onChange={() => handleRadioClickCollege("coedImportance", 0)}
              value="0"
            >
              0
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("coedImportance", 1)}
              value="1"
            >
              1
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("coedImportance", 2)}
              value="2"
            >
              2
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("coedImportance", 3)}
              value="3"
            >
              3
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("coedImportance", 4)}
              value="4"
            >
              4
            </Radio>
            <Radio
              onChange={() => handleRadioClickCollege("coedImportance", 5)}
              value="5"
            >
              5
            </Radio>
          </Flex>
        </RadioGroup>
      </FormControl>
      <Heading as="h3" size="sm">
        Institution
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <InputGroup>
          <Checkbox
            onChange={toggleFacilityImportanceValue}
            name={"collegePrefs.facilityImportance"}
            defaultChecked={
              formData.collegePrefs.facilityImportance ? true : false
            }
          >
            Good Facilities
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox
            onChange={togglePublicControlImportanceValue}
            name={"collegePrefs.prefPublicControl"}
            defaultChecked={
              formData.collegePrefs.prefPublicControl ? true : false
            }
          >
            Pref Public
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox
            onChange={togglePrivateControlImportanceValue}
            name={"collegePrefs.prefPrivateControl"}
            defaultChecked={
              formData.collegePrefs.prefPrivateControl ? true : false
            }
          >
            Pref Private
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox
            onChange={toggle4yrPrefValue}
            name={"collegePrefs.pref4yr"}
            defaultChecked={formData.collegePrefs.pref4yr ? true : false}
          >
            Pref 4yr
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox
            onChange={toggleReligiousPrefValue}
            name={"collegePrefs.prefReligious"}
            defaultChecked={formData.collegePrefs.prefReligious ? true : false}
          >
            Pref Religious
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"collegePrefs.prefReligion"}
            defaultValue={String(formData.collegePrefs.prefReligion)}
            required
            ref={prefReligionRef}
          >
            <option value="0">N/A</option>
            <option value="22">American Evangelical Lutheran Church</option>
            <option value="24">African Methodist Episcopal Zion Church</option>
            <option value="27">Assemblies of God Church</option>
            <option value="28">Brethren Church</option>
            <option value="30">Roman Catholic</option>
            <option value="33">Wisconsin Evangelical Lutheran Synod</option>
            <option value="34">Christ and Missionary Alliance Church</option>
            <option value="35">Christian Reformed Church</option>
            <option value="36">Evangelical Congregational Church</option>
            <option value="37">Evangelical Covenant Church of America</option>
            <option value="38">Evangelical Free Church of America</option>
            <option value="39">Evangelical Lutheran Church</option>
            <option value="40">International United Pentecostal Church</option>
            <option value="41">Free Will Baptist Church</option>
            <option value="42">Interdenominational</option>
            <option value="43">Mennonite Brethren Church</option>
            <option value="44">Moravian Church</option>
            <option value="45">North American Baptist</option>
            <option value="47">Pentecostal Holiness Church</option>
            <option value="48">
              Christian Churches and Churches of Christ
            </option>
            <option value="49">Reformed Church in America</option>
            <option value="50">Episcopal Church, Reformed</option>
            <option value="51">African Methodist Episcopal</option>
            <option value="52">American Baptist</option>
            <option value="53">American Lutheran</option>
            <option value="54">Baptist</option>
            <option value="55">Christian Methodist Episcopal</option>
            <option value="57">Church of God</option>
            <option value="58">Church of Brethren</option>
            <option value="59">Church of the Nazarene</option>
            <option value="60">Cumberland Presbyterian</option>
            <option value="61">Christian Church (Disciples of Christ)</option>
            <option value="64">Free Methodist</option>
            <option value="65">Friends</option>
            <option value="66">Presbyterian Church (USA)</option>
            <option value="67">Lutheran Church in America</option>
            <option value="68">Lutheran Church - Missouri Synod</option>
            <option value="69">Mennonite Church</option>
            <option value="71">United Methodist</option>
            <option value="73">Protestant Episcopal</option>
            <option value="74">Churches of Christ</option>
            <option value="75">Southern Baptist</option>
            <option value="76">United Church of Christ</option>
            <option value="77">Protestant, not specified</option>
            <option value="78">Multiple Protestant Denomination</option>
            <option value="79">Other Protestant</option>
            <option value="80">Jewish</option>
            <option value="81">Reformed Presbyterian Church</option>
            <option value="84">United Brethren Church</option>
            <option value="87">Missionary Church Inc</option>
            <option value="88">Undenominational</option>
            <option value="89">Wesleyan</option>
            <option value="91">Greek Orthodox</option>
            <option value="92">Russian Orthodox</option>
            <option value="93">Unitarian Universalist</option>
            <option value="94">Latter Day Saints (Mormon Church)</option>
            <option value="95">Seventh Day Adventists</option>
            <option value="97">The Presbyterian Church in America</option>
            <option value="99">Other (none of the above)</option>
            <option value="100">Original Free Will Baptist</option>
            <option value="101">Ecumenical Christian</option>
            <option value="102">Evangelical Christian</option>
            <option value="103">Presbyterian</option>
            <option value="105">General Baptist</option>
            <option value="106">Muslim</option>
            <option value="107">Plymouth Brethren</option>
          </Select>
        </InputGroup>
      </Grid>
      <FormControl isRequired>
        <RadioGroup
          ref={commitFacultyRef}
          defaultValue={String(formData.collegePrefs.prefCommittedFaculty)}
        >
          <Heading as="h3" size="sm">
            Committed Faculty Importance
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 0)
              }
              value="0"
            >
              0
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 1)
              }
              value="1"
            >
              1
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 2)
              }
              value="2"
            >
              2
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 3)
              }
              value="3"
            >
              3
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 4)
              }
              value="4"
            >
              4
            </Radio>
            <Radio
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 5)
              }
              value="5"
            >
              5
            </Radio>
          </Flex>
        </RadioGroup>
      </FormControl>
      <Flex mt={5} justifyContent={"right"}>
        <Button
          variant={"secondary"}
          onClick={HandleSave}
          size="sm"
          isLoading={isLoading}
        >
          Save*
        </Button>
      </Flex>
    </>
  ) : (
    <Skeleton>LOADING</Skeleton>
  );
}
