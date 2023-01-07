import { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Grid,
  Heading,
  InputGroup,
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
import { useDispatch } from "react-redux";

export function Page2() {
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

  const honorsRef = useRef<HTMLSelectElement>(null);
  const apibRef = useRef<HTMLSelectElement>(null);
  const langRef = useRef<HTMLSelectElement>(null);
  const csRef = useRef<HTMLSelectElement>(null);
  const coreRef = useRef<HTMLSelectElement>(null);
  const majorRef = useRef<HTMLSelectElement>(null);
  const dispatch = useDispatch();

  const formValid = true;
  dispatch({ type: "SET_FORM_VALID", formValid });

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
      !honorsRef.current?.value ||
      !apibRef.current?.value ||
      !langRef.current?.value ||
      !csRef.current?.value ||
      !coreRef.current?.value ||
      !majorRef.current?.value
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
        Courseload
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.honors"}
            defaultValue={String(formData.courseload.honors)}
            required
            ref={honorsRef}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10+</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.apib"}
            defaultValue={String(formData.courseload.apib)}
            required
            ref={apibRef}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10+</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.lang"}
            defaultValue={String(formData.courseload.lang)}
            required
            ref={langRef}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.cs"}
            defaultValue={String(formData.courseload.cs) === "Y" ? "Yes" : "No"}
            required
            ref={csRef}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.core"}
            defaultValue={
              String(formData.courseload.core) === "Y" ? "Yes" : "No"
            }
            required
            ref={coreRef}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"courseload.major"}
            defaultValue={String(formData.courseload.major)}
            required
            ref={majorRef}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </Select>
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
