import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Checkbox,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page10() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  const zipRef = useRef<HTMLInputElement>(null);
  const curStateRef = useRef<HTMLSelectElement>(null);
  const prefCityRef = useRef<HTMLInputElement>(null);
  const prefStateRef = useRef<HTMLSelectElement>(null);
  const prefRegionRef = useRef<HTMLSelectElement>(null);
  const prefLocaleRef = useRef<HTMLSelectElement>(null);
  const prefSumTempRef = useRef<HTMLInputElement>(null);
  const prefWinTempRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const [isLocationChecked, setLocationChecked] = useState(false);

  function toggleLocationImportanceValue(event: any) {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      locationPrefs: {
        ...prevFormData["locationPrefs"],
        locationImportance:
          !prevFormData["locationPrefs"]["locationImportance"],
      },
    }));
    setLocationChecked(event.target.checked);
    checkValid();
  }

  function toggleLivingAtHomePrefValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      locationPrefs: {
        ...prevFormData["locationPrefs"],
        livingAtHome: !prevFormData["locationPrefs"]["livingAtHome"],
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

  checkValid();
  function checkValid() {
    let formValid;

    if (isLocationChecked) {
      if (
        !zipRef.current?.value ||
        !(zipRef.current.value.length === 5) ||
        !/^[0-9]+$/.test(zipRef.current.value) ||
        !curStateRef.current?.value ||
        !prefCityRef.current?.value ||
        !prefStateRef.current?.value ||
        !prefRegionRef.current?.value ||
        !prefLocaleRef.current?.value ||
        !prefSumTempRef.current?.value ||
        !prefWinTempRef.current?.value
      ) {
        formValid = false;
      } else {
        formValid = true;
      }
    } else {
      formValid = true;
    }
    dispatch({ type: "SET_FORM_VALID", formValid });
  }

  return (
    <>
      <Heading as="h4" size="md">
        Location Preferences
      </Heading>
      <Text fontSize={"xs"} fontFamily={"Actor"} py={"2"}>
        <i>*required</i>
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={1}
      >
        <InputGroup>
          <Checkbox
            onChange={toggleLocationImportanceValue}
            name={"locationPrefs.locationImportance"}
          >
            Is Location Important?
          </Checkbox>
        </InputGroup>
        {isLocationChecked && (
          <InputGroup>
            <Checkbox
              onChange={toggleLivingAtHomePrefValue}
              name={"locationPrefs.livingAtHome"}
            >
              Will you 100% live at home (in-state)?
            </Checkbox>
          </InputGroup>
        )}
        {isLocationChecked && (
          <InputGroup>
            <InputLeftAddon children="ZIP" />
            <Input
              onChange={handleChange}
              name={"locationPrefs.ZIP"}
              type="text"
              placeholder="14450"
              required
              pattern="^[0-9]+$"
              minLength={5}
              maxLength={5}
              ref={zipRef}
            />
          </InputGroup>
        )}
        {isLocationChecked && (
          <InputGroup>
            <Select
              onChange={handleChange}
              name={"locationPrefs.curState"}
              placeholder="Current State"
              required
              ref={curStateRef}
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
              <option value="">N/A</option>
            </Select>
          </InputGroup>
        )}
        {isLocationChecked && (
          <InputGroup>
            <InputLeftAddon children="Pref City" />
            <Input
              onChange={handleChange}
              name={"locationPrefs.prefCity"}
              type="text"
              placeholder="Rochester"
              required
              ref={prefCityRef}
            />
          </InputGroup>
        )}
        {isLocationChecked && (
          <InputGroup>
            <Select
              onChange={handleChange}
              name={"locationPrefs.prefState"}
              placeholder="Pref State"
              required
              ref={prefStateRef}
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
              <option value="">N/A</option>
            </Select>
          </InputGroup>
        )}
      </Grid>
      {isLocationChecked && (
        <Grid templateColumns="repeat(1, 1fr)" gap={1}>
          <InputGroup>
            <Select
              onChange={handleChange}
              name={"locationPrefs.prefRegion"}
              placeholder="Pref Region"
              required
              ref={prefRegionRef}
            >
              <option value="0">U.S. Service Schools</option>
              <option value="1">New England (CT, ME, MA, NH, RI, VT)</option>
              <option value="2">Mid East (DE, DC, MD, NJ, NY, PA)</option>
              <option value="3">Great Lakes (IL, IN, MI, OH, WI)</option>
              <option value="4">Plains (IA, KS, MN, MO, NE, ND, SD)</option>
              <option value="5">
                Southeast (AL, AR, FL, GA, KY, LA, MS, NC, SC, TN, VA, WV)
              </option>
              <option value="6">Southwest (AZ, NM, OK, TX)</option>
              <option value="7">Rocky Mountains (CO, ID, MT, UT, WY)</option>
              <option value="8">Far West (AK, CA, HI, NV, OR, WA)</option>
              <option value="9">
                Outlying Areas (AS, FM, GU, MH, MP, PR, PW, VI)
              </option>
              <option value="-1">N/A</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Select
              onChange={handleChange}
              name={"locationPrefs.prefLocale"}
              placeholder="Pref Locale"
              required
              ref={prefLocaleRef}
            >
              <option value="11">
                City: Large (population of 250,000 or more)
              </option>
              <option value="12">
                City: Midsize (population of at least 100,000 but less than
                250,000)
              </option>
              <option value="13">
                City: Small (population less than 100,000)
              </option>
              <option value="21">
                Suburb: Large (outside principal city, in urbanized area with
                population of 250,000 or more)
              </option>
              <option value="22">
                Suburb: Midsize (outside principal city, in urbanized area with
                population of at least 100,000 but less than 250,000)
              </option>
              <option value="23">
                Suburb: Small (outside principal city, in urbanized area with
                population less than 100,000)
              </option>
              <option value="31">
                Town: Fringe (in urban cluster up to 10 miles from an urbanized
                area)
              </option>
              <option value="32">
                Town: Distant (in urban cluster more than 10 miles and up to 35
                miles from an urbanized area)
              </option>
              <option value="33">
                Town: Remote (in urban cluster more than 35 miles from an
                urbanized area)
              </option>
              <option value="41">
                Rural: Fringe (rural territory up to 5 miles from an urbanized
                area or up to 2.5 miles from an urban cluster)
              </option>
              <option value="42">
                Rural: Distant (rural territory more than 5 miles but up to 25
                miles from an urbanized area or more than 2.5 and up to 10 miles
                from an urban cluster)
              </option>
              <option value="43">
                Rural: Remote (rural territory more than 25 miles from an
                urbanized area and more than 10 miles from an urban cluster)
              </option>
            </Select>
          </InputGroup>
        </Grid>
      )}
      {isLocationChecked && (
        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
          <InputGroup>
            <InputLeftAddon children="Pref Summer Temp ('F)" />
            <Input
              onChange={handleChange}
              name={"locationPrefs.prefSummerClimate"}
              type="number"
              placeholder="65"
              required
              ref={prefSumTempRef}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Pref Winter Temp ('F)" />
            <Input
              onChange={handleChange}
              name={"locationPrefs.prefWinterClimate"}
              type="number"
              placeholder="30"
              required
              ref={prefWinTempRef}
            />
          </InputGroup>
        </Grid>
      )}
    </>
  );
}
