import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Checkbox,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page11() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  const gradRateRef = useRef<HTMLInputElement>(null);
  const retRateRef = useRef<HTMLInputElement>(null);
  const prefEarnRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const [isSuccessChecked, setSuccessChecked] = useState(false);

  function toggleSuccessImportanceValue(event: any) {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      successPrefs: {
        ...prevFormData["successPrefs"],
        successImportance: !prevFormData["successPrefs"]["successImportance"],
      },
    }));
    setSuccessChecked(event.target.checked);
    checkValid();
  }

  function toggleAlumniCarreerImportanceValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      successPrefs: {
        ...prevFormData["successPrefs"],
        alumniCarreerImportance:
          !prevFormData["successPrefs"]["alumniCarreerImportance"],
      },
    }));
    checkValid();
  }

  const [isGradRChecked, setGradRChecked] = useState(false);

  function toggleGraduationRateImportanceValue(event: any) {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      successPrefs: {
        ...prevFormData["successPrefs"],
        graduationRateImportance:
          !prevFormData["successPrefs"]["graduationRateImportance"],
      },
    }));
    setGradRChecked(event.target.checked);
    checkValid();
  }

  const [isRetentionRChecked, setRetentionRChecked] = useState(false);

  function toggleRetentionRateImportanceValue(event: any) {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      successPrefs: {
        ...prevFormData["successPrefs"],
        retentionRateImportance:
          !prevFormData["successPrefs"]["retentionRateImportance"],
      },
    }));
    setRetentionRChecked(event.target.checked);
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

  checkValid();
  function checkValid() {
    let formValid;

    if (isSuccessChecked) {
      if (
        !prefEarnRef.current?.value ||
        Number(prefEarnRef.current?.value) < 0
      ) {
        formValid = false;
      } else {
        formValid = true;
      }
      if (isGradRChecked) {
        if (
          !gradRateRef.current?.value ||
          Number(gradRateRef.current?.value) < 0 ||
          Number(gradRateRef.current?.value) > 100
        ) {
          formValid = false;
        }
      }
      if (isRetentionRChecked) {
        if (
          !retRateRef.current?.value ||
          Number(retRateRef.current?.value) < 0 ||
          Number(retRateRef.current?.value) > 100
        ) {
          formValid = false;
        }
      }
    } else {
      formValid = true;
    }
    dispatch({ type: "SET_FORM_VALID", formValid });
  }

  return (
    <>
      <Heading as="h4" size="md">
        Success Preferences
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
            onChange={toggleSuccessImportanceValue}
            name={"successPrefs.successImportance"}
          >
            Is success (ROI) important?
          </Checkbox>
        </InputGroup>
        {isSuccessChecked && (
          <InputGroup>
            <Checkbox
              onChange={toggleAlumniCarreerImportanceValue}
              name={"successPrefs.alumniCarreerImportance"}
            >
              Is alumni network important?
            </Checkbox>
          </InputGroup>
        )}
        {isSuccessChecked && (
          <InputGroup>
            <Checkbox
              onChange={toggleGraduationRateImportanceValue}
              name={"successPrefs.graduationRateImportance"}
            >
              Is grad rate important?
            </Checkbox>
          </InputGroup>
        )}
        {isSuccessChecked && isGradRChecked && (
          <InputGroup>
            <InputLeftAddon children="Pref Min Grad Rate" />
            <Input
              onChange={handleChange}
              name={"successPrefs.prefGraduationRate"}
              type="number"
              placeholder="50"
              required
              min={0}
              max={100}
              ref={gradRateRef}
            />
          </InputGroup>
        )}
        {isSuccessChecked && (
          <InputGroup>
            <Checkbox
              onChange={toggleRetentionRateImportanceValue}
              name={"successPrefs.retentionRateImportance"}
            >
              Is retention rate important?
            </Checkbox>
          </InputGroup>
        )}
        {isSuccessChecked && isRetentionRChecked && (
          <InputGroup>
            <InputLeftAddon children="Min Retention Rate" />
            <Input
              onChange={handleChange}
              name={"successPrefs.prefRetentionRate"}
              type="number"
              placeholder="50"
              required
              min={0}
              max={100}
              ref={retRateRef}
            />
          </InputGroup>
        )}
        {isSuccessChecked && (
          <InputGroup>
            <InputLeftAddon children="Pref 6yr Earnings" />
            <Input
              onChange={handleChange}
              name={"successPrefs.desiredEarnings"}
              type="number"
              placeholder="60000"
              required
              min={0}
              ref={prefEarnRef}
            />
          </InputGroup>
        )}
      </Grid>
    </>
  );
}
