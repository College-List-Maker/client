import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Skeleton,
} from "@chakra-ui/react";
import { Profile } from "../Profile";
import { LoadingContext } from "../Profile";
import { UserCollegeData } from "../../../types";
import axios from "axios";
import { getCookie } from "../../../Fetch";

export function Page1() {
  const { context: FormDataContext } = Profile();
  const [fD] = useContext(FormDataContext);
  const [formData, setFormData] = useState<UserCollegeData>();
  const [isLoading, setIsLoading] = useContext(LoadingContext);

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

  const GPARef = useRef<HTMLInputElement>(null);
  const SATRef = useRef<HTMLInputElement>(null);
  const ACTRef = useRef<HTMLInputElement>(null);
  const SizeRef = useRef<HTMLInputElement>(null);
  const RankRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const formValid = true;
  dispatch({ type: "SET_FORM_VALID", formValid });

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

  const [isSATChecked, setSATChecked] = useState(false);
  const [isACTChecked, setACTChecked] = useState(false);
  const [isCRChecked, setCRChecked] = useState(false);

  const handleSATChange = (event: any) => {
    setSATChecked(event.target.checked);
  };
  const handleACTChange = (event: any) => {
    setACTChecked(event.target.checked);
  };
  const handleCRChange = (event: any) => {
    setCRChecked(event.target.checked);
  };

  function checkValid() {
    if (
      !GPARef.current?.value ||
      Number(GPARef.current?.value) < 0 ||
      Number(GPARef.current?.value) > 4
    ) {
      return false;
    }
    if (
      isSATChecked &&
      (!SATRef.current?.value ||
        Number(SATRef.current?.value) < 400 ||
        Number(SATRef.current?.value) > 1600)
    ) {
      return false;
    }
    if (
      isACTChecked &&
      (!ACTRef.current?.value ||
        Number(ACTRef.current?.value) < 1 ||
        Number(ACTRef.current?.value) > 36)
    ) {
      return false;
    }
    if (
      isCRChecked &&
      (!RankRef.current?.value ||
        !SizeRef.current?.value ||
        Number(RankRef.current?.value) < 1 ||
        Number(SizeRef.current?.value) < 1)
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
      console.log(formData);
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
              window.location.hash = "#college-list";
            });
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
  };

  return formData && formData.academic.gpa !== -1 ? (
    <>
      <Heading as="h4" size="md">
        Academics
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <Checkbox onChange={handleSATChange}>SAT</Checkbox>
        {isSATChecked && (
          <InputGroup>
            <InputLeftAddon children="SAT" />

            <Input
              onChange={handleChange}
              name={"academic.sat"}
              type="number"
              defaultValue={String(formData.academic.sat)}
              required
              min={400}
              max={1600}
              step={10}
              ref={SATRef}
            />
          </InputGroup>
        )}
        <Checkbox onChange={handleACTChange}>ACT</Checkbox>
        {isACTChecked && (
          <InputGroup>
            <InputLeftAddon children="ACT" />

            <Input
              onChange={handleChange}
              name={"academic.act"}
              type="number"
              defaultValue={String(formData.academic.act)}
              required
              min={1}
              max={36}
              step={1}
              ref={ACTRef}
            />
          </InputGroup>
        )}
        <InputGroup>
          <InputLeftAddon children="GPA" />
          <Input
            onChange={handleChange}
            name={"academic.gpa"}
            type="number"
            defaultValue={String(formData.academic.gpa)}
            required
            min={0}
            max={4}
            step={0.001}
            ref={GPARef}
          />
        </InputGroup>
      </Grid>
      <Heading as="h3" size="sm">
        Class
      </Heading>
      <Checkbox onChange={handleCRChange}>Class Rank</Checkbox>
      {isCRChecked && (
        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
          <InputGroup>
            <InputLeftAddon children="Class Rank" />
            <Input
              onChange={handleChange}
              defaultValue={String(formData.class.rank)}
              type="number"
              required
              min={1}
              ref={RankRef}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Class Size" />
            <Input
              onChange={handleChange}
              defaultValue={String(formData.class.size)}
              type="number"
              required
              min={1}
              ref={SizeRef}
            />
          </InputGroup>
        </Grid>
      )}
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
