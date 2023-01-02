import { useContext, useEffect } from "react";
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
} from "@chakra-ui/react";

import { FormDataContext } from "../Form";

export function Page7() {
    const [formData, setFormData] = useContext(FormDataContext);

    useEffect(() => {
        setFormData(formData);
    });

    function toggleReligiousPrefValue() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            collegePrefs: {
                ...prevFormData["collegePrefs"],
                prefReligious: !prevFormData["collegePrefs"]["prefReligious"],
            },
        }));
    }
    function togglePrivateControlImportanceValue() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            collegePrefs: {
                ...prevFormData["collegePrefs"],
                prefPrivateControl:
                    !prevFormData["collegePrefs"]["prefPrivateControl"],
            },
        }));
    }
    function togglePublicControlImportanceValue() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            collegePrefs: {
                ...prevFormData["collegePrefs"],
                prefPublicControl:
                    !prevFormData["collegePrefs"]["prefPublicControl"],
            },
        }));
    }
    function toggleFacilityImportanceValue() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            collegePrefs: {
                ...prevFormData["collegePrefs"],
                facilityImportance:
                    !prevFormData["collegePrefs"]["facilityImportance"],
            },
        }));
    }
    function toggle4yrPrefValue() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            collegePrefs: {
                ...prevFormData["collegePrefs"],
                pref4yr: !prevFormData["collegePrefs"]["pref4yr"],
            },
        }));
    }

    function handleRadioClickCollege(name: string, value: number) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            collegePrefs: {
                ...prevFormData["collegePrefs"],
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
    return (
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
                        placeholder="10000"
                        required
                        min={1}
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
                    />
                </InputGroup>
                <InputGroup>
                    <Select
                        onChange={handleChange}
                        name={"collegePrefs.gender"}
                        placeholder="Gender"
                        required
                    >
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="">Other</option>
                    </Select>
                </InputGroup>
            </Grid>
            <FormControl isRequired>
                <RadioGroup>
                    <Heading as="h3" size="sm">
                        Same-Gender Importance (Ex. Female-Only)
                    </Heading>
                    <Flex justifyContent={"space-evenly"}>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "sameGenderImportance",
                                    0
                                )
                            }
                            value="0"
                        >
                            0
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "sameGenderImportance",
                                    1
                                )
                            }
                            value="1"
                        >
                            1
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "sameGenderImportance",
                                    2
                                )
                            }
                            value="2"
                        >
                            2
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "sameGenderImportance",
                                    3
                                )
                            }
                            value="3"
                        >
                            3
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "sameGenderImportance",
                                    4
                                )
                            }
                            value="4"
                        >
                            4
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "sameGenderImportance",
                                    5
                                )
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
                        HBCU Importance (Historically Black
                        Colleges/Universities)
                    </Heading>
                    <Flex justifyContent={"space-evenly"}>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("hbcuImportance", 0)
                            }
                            value="0"
                        >
                            0
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("hbcuImportance", 1)
                            }
                            value="1"
                        >
                            1
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("hbcuImportance", 2)
                            }
                            value="2"
                        >
                            2
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("hbcuImportance", 3)
                            }
                            value="3"
                        >
                            3
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("hbcuImportance", 4)
                            }
                            value="4"
                        >
                            4
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("hbcuImportance", 5)
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
                        Coed Importance
                    </Heading>
                    <Flex justifyContent={"space-evenly"}>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("coedImportance", 0)
                            }
                            value="0"
                        >
                            0
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("coedImportance", 1)
                            }
                            value="1"
                        >
                            1
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("coedImportance", 2)
                            }
                            value="2"
                        >
                            2
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("coedImportance", 3)
                            }
                            value="3"
                        >
                            3
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("coedImportance", 4)
                            }
                            value="4"
                        >
                            4
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege("coedImportance", 5)
                            }
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
                    <Checkbox
                        onChange={toggle4yrPrefValue}
                        name={"collegePrefs.pref4yr"}
                    >
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
                    >
                        <option value="0">N/A</option>
                        <option value="22">
                            American Evangelical Lutheran Church
                        </option>
                        <option value="24">
                            African Methodist Episcopal Zion Church
                        </option>
                        <option value="27">Assemblies of God Church</option>
                        <option value="28">Brethren Church</option>
                        <option value="30">Roman Catholic</option>
                        <option value="33">
                            Wisconsin Evangelical Lutheran Synod
                        </option>
                        <option value="34">
                            Christ and Missionary Alliance Church
                        </option>
                        <option value="35">Christian Reformed Church</option>
                        <option value="36">
                            Evangelical Congregational Church
                        </option>
                        <option value="37">
                            Evangelical Covenant Church of America
                        </option>
                        <option value="38">
                            Evangelical Free Church of America
                        </option>
                        <option value="39">Evangelical Lutheran Church</option>
                        <option value="40">
                            International United Pentecostal Church
                        </option>
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
                        <option value="55">
                            Christian Methodist Episcopal
                        </option>
                        <option value="57">Church of God</option>
                        <option value="58">Church of Brethren</option>
                        <option value="59">Church of the Nazarene</option>
                        <option value="60">Cumberland Presbyterian</option>
                        <option value="61">
                            Christian Church (Disciples of Christ)
                        </option>
                        <option value="64">Free Methodist</option>
                        <option value="65">Friends</option>
                        <option value="66">Presbyterian Church (USA)</option>
                        <option value="67">Lutheran Church in America</option>
                        <option value="68">
                            Lutheran Church - Missouri Synod
                        </option>
                        <option value="69">Mennonite Church</option>
                        <option value="71">United Methodist</option>
                        <option value="73">Protestant Episcopal</option>
                        <option value="74">Churches of Christ</option>
                        <option value="75">Southern Baptist</option>
                        <option value="76">United Church of Christ</option>
                        <option value="77">Protestant, not specified</option>
                        <option value="78">
                            Multiple Protestant Denomination
                        </option>
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
                        <option value="94">
                            Latter Day Saints (Mormon Church)
                        </option>
                        <option value="95">Seventh Day Adventists</option>
                        <option value="97">
                            The Presbyterian Church in America
                        </option>
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
                <RadioGroup>
                    <Heading as="h3" size="sm">
                        Committed Faculty Importance
                    </Heading>
                    <Flex justifyContent={"space-evenly"}>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prefCommittedFaculty",
                                    0
                                )
                            }
                            value="0"
                        >
                            0
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prefCommittedFaculty",
                                    1
                                )
                            }
                            value="1"
                        >
                            1
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prefCommittedFaculty",
                                    2
                                )
                            }
                            value="2"
                        >
                            2
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prefCommittedFaculty",
                                    3
                                )
                            }
                            value="3"
                        >
                            3
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prefCommittedFaculty",
                                    4
                                )
                            }
                            value="4"
                        >
                            4
                        </Radio>
                        <Radio
                            onChange={() =>
                                handleRadioClickCollege(
                                    "prefCommittedFaculty",
                                    5
                                )
                            }
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
