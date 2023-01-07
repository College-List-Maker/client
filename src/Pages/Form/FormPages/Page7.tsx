import { useContext, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Checkbox,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Flex,
  FormControl,
  Select,
  Text,
} from "@chakra-ui/react";
import "./Radio.css";

import { FormDataContext } from "../Form";

export function Page7() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  const prefSizeRef = useRef<HTMLInputElement>(null);
  const sexRatioRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const sameGenRef = useRef<HTMLInputElement>(null);
  const hbcuRef = useRef<HTMLInputElement>(null);
  const coedRef = useRef<HTMLInputElement>(null);
  const prefReligionRef = useRef<HTMLSelectElement>(null);
  const commitFacultyRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

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
      return;
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
      return;
    }
    const formValid = true;
    dispatch({ type: "SET_FORM_VALID", formValid });
  }

  return (
    <>
      <Heading as="h3" size="sm" py={2}>
        Student Body
      </Heading>
      <Text fontSize={"xs"} fontFamily={"Actor"} py={"2"}>
        <i>*required</i>
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={1}
      >
        <InputGroup>
          <InputLeftAddon children="Pref Size" />
          <Input
            onChange={handleChange}
            name={"collegePrefs.prefSize"}
            type="number"
            placeholder="10000"
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
            placeholder="40"
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
            placeholder="Gender"
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
        <RadioGroup ref={sameGenRef}>
          <Heading as="h3" size="sm" pt={"5"}>
            Same-Gender Importance (Ex. Female-Only)
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 0)
              }
              value="0"
            >
              <span className={"Radio-label"}>0</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 1)
              }
              value="1"
            >
              <span className={"Radio-label"}>1</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 2)
              }
              value="2"
            >
              <span className={"Radio-label"}>2</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 3)
              }
              value="3"
            >
              <span className={"Radio-label"}>3</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 4)
              }
              value="4"
            >
              <span className={"Radio-label"}>4</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("sameGenderImportance", 5)
              }
              value="5"
            >
              <span className={"Radio-label"}>5</span>
            </Radio>
          </Flex>
        </RadioGroup>
      </FormControl>
      <FormControl isRequired>
        <RadioGroup ref={hbcuRef}>
          <Heading as="h3" size="sm" pt={"5"}>
            HBCU Importance (Historically Black Colleges/Universities)
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("hbcuImportance", 0)}
              value="0"
            >
              <span className={"Radio-label"}>0</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("hbcuImportance", 1)}
              value="1"
            >
              <span className={"Radio-label"}>1</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("hbcuImportance", 2)}
              value="2"
            >
              <span className={"Radio-label"}>2</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("hbcuImportance", 3)}
              value="3"
            >
              <span className={"Radio-label"}>3</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("hbcuImportance", 4)}
              value="4"
            >
              <span className={"Radio-label"}>4</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("hbcuImportance", 5)}
              value="5"
            >
              <span className={"Radio-label"}>5</span>
            </Radio>
          </Flex>
        </RadioGroup>
      </FormControl>
      <FormControl isRequired>
        <RadioGroup ref={coedRef}>
          <Heading as="h3" size="sm" pt={"5"}>
            Coed Importance
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("coedImportance", 0)}
              value="0"
            >
              <span className={"Radio-label"}>0</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("coedImportance", 1)}
              value="1"
            >
              <span className={"Radio-label"}>1</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("coedImportance", 2)}
              value="2"
            >
              <span className={"Radio-label"}>2</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("coedImportance", 3)}
              value="3"
            >
              <span className={"Radio-label"}>3</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("coedImportance", 4)}
              value="4"
            >
              <span className={"Radio-label"}>4</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() => handleRadioClickCollege("coedImportance", 5)}
              value="5"
            >
              <span className={"Radio-label"}>5</span>
            </Radio>
          </Flex>
        </RadioGroup>
      </FormControl>
      <Heading as="h3" size="sm" pt={"5"}>
        Institution
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap={1}
      >
        <InputGroup>
          <Checkbox
            onChange={toggleFacilityImportanceValue}
            name={"collegePrefs.facilityImportance"}
          >
            Good Facilities
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox
            onChange={togglePublicControlImportanceValue}
            name={"collegePrefs.prefPublicControl"}
          >
            Pref Public
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox
            onChange={togglePrivateControlImportanceValue}
            name={"collegePrefs.prefPrivateControl"}
          >
            Pref Private
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox onChange={toggle4yrPrefValue} name={"collegePrefs.pref4yr"}>
            Pref 4yr
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox
            onChange={toggleReligiousPrefValue}
            name={"collegePrefs.prefReligious"}
          >
            Pref Religious
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"collegePrefs.prefReligion"}
            placeholder="Pref Religion"
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
        <RadioGroup ref={commitFacultyRef}>
          <Heading as="h3" size="sm" pt={"5"}>
            Committed Faculty Importance
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 0)
              }
              value="0"
            >
              <span className={"Radio-label"}>0</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 1)
              }
              value="1"
            >
              <span className={"Radio-label"}>1</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 2)
              }
              value="2"
            >
              <span className={"Radio-label"}>2</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 3)
              }
              value="3"
            >
              <span className={"Radio-label"}>3</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 4)
              }
              value="4"
            >
              <span className={"Radio-label"}>4</span>
            </Radio>
            <Radio
              className="Radio"
              onChange={() =>
                handleRadioClickCollege("prefCommittedFaculty", 5)
              }
              value="5"
            >
              <span className={"Radio-label"}>5</span>
            </Radio>
          </Flex>
        </RadioGroup>
      </FormControl>
    </>
  );
}
