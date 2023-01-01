import { useContext, useEffect, useState } from "react";
import {
  Checkbox,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page11() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

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
  }
  return (
    <>
      <Heading as="h4" size="md">
        Success Preferences
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={1}>
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
            />
          </InputGroup>
        )}
      </Grid>
    </>
  );
}
