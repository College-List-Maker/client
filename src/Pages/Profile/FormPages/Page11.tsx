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
  Skeleton,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { Profile } from "../Profile";
import { LoadingContext } from "../Profile";
import { UserCollegeData } from "../../../types";
import axios from "axios";
import { getCookie } from "../../../Fetch";

export function Page11() {
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
      if (formData !== undefined) {
        setIsSuccessChecked(formData.successPrefs.successImportance);
      }
    }
  }, [fD, formData]);

  const gradRateRef = useRef<HTMLInputElement>(null);
  const retRateRef = useRef<HTMLInputElement>(null);
  const prefEarnRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const formValid = true;
  dispatch({ type: "SET_FORM_VALID", formValid });

  const [isSuccessChecked, setIsSuccessChecked] = useState(false);

  function toggleSuccessImportanceValue(event: any) {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      successPrefs: {
        ...prevFormData["successPrefs"],
        successImportance: !prevFormData["successPrefs"]["successImportance"],
      },
    }));
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
    return formValid;
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
        Success Preferences
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={1}>
        <InputGroup>
          <Checkbox
            onChange={toggleSuccessImportanceValue}
            name={"successPrefs.successImportance"}
            defaultChecked={
              formData.successPrefs.successImportance ? true : false
            }
          >
            Is success (ROI) important?
          </Checkbox>
        </InputGroup>

        <InputGroup>
          <Checkbox
            onChange={toggleAlumniCarreerImportanceValue}
            name={"successPrefs.alumniCarreerImportance"}
            defaultChecked={
              formData.successPrefs.alumniCarreerImportance ? true : false
            }
          >
            Is alumni network important?
          </Checkbox>
        </InputGroup>

        <InputGroup>
          <Checkbox
            onChange={toggleGraduationRateImportanceValue}
            name={"successPrefs.graduationRateImportance"}
            defaultChecked={
              formData.successPrefs.graduationRateImportance ? true : false
            }
          >
            Is grad rate important?
          </Checkbox>
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children="Pref Min Grad Rate" />
          <Input
            onChange={handleChange}
            name={"successPrefs.prefGraduationRate"}
            type="number"
            defaultValue={String(formData.successPrefs.prefGraduationRate)}
            required
            min={0}
            max={100}
            ref={gradRateRef}
          />
        </InputGroup>

        <InputGroup>
          <Checkbox
            onChange={toggleRetentionRateImportanceValue}
            name={"successPrefs.retentionRateImportance"}
            defaultChecked={
              formData.successPrefs.retentionRateImportance ? true : false
            }
          >
            Is retention rate important?
          </Checkbox>
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children="Min Retention Rate" />
          <Input
            onChange={handleChange}
            name={"successPrefs.prefRetentionRate"}
            type="number"
            defaultValue={String(formData.successPrefs.prefRetentionRate)}
            required
            min={0}
            max={100}
            ref={retRateRef}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children="Pref 6yr Earnings" />
          <Input
            onChange={handleChange}
            name={"successPrefs.desiredEarnings"}
            type="number"
            defaultValue={String(formData.successPrefs.desiredEarnings)}
            required
            min={0}
            ref={prefEarnRef}
          />
        </InputGroup>
      </Grid>
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
