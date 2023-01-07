import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
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

export function Page12() {
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

  const colWRef = useRef<HTMLSelectElement>(null);
  const costWRef = useRef<HTMLSelectElement>(null);
  const locWRef = useRef<HTMLSelectElement>(null);
  const sucWRef = useRef<HTMLSelectElement>(null);
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
      !colWRef.current?.value ||
      !costWRef.current?.value ||
      !locWRef.current?.value ||
      !sucWRef.current?.value
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
        Weighting Preferences
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={1}
      >
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"weights.collegeWeight"}
            defaultValue={String(formData.weights.collegeWeight)}
            required
            ref={colWRef}
          >
            <option value="1">Not Important</option>
            <option value="2">Neutral</option>
            <option value="3">Important</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"weights.costWeight"}
            defaultValue={String(formData.weights.costWeight)}
            required
            ref={costWRef}
          >
            <option value="1">Not Important</option>
            <option value="2">Neutral</option>
            <option value="3">Important</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"weights.locationWeight"}
            defaultValue={String(formData.weights.locationWeight)}
            required
            ref={locWRef}
          >
            <option value="1">Not Important</option>
            <option value="2">Neutral</option>
            <option value="3">Important</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleChange}
            name={"weights.successWeight"}
            defaultValue={String(formData.weights.successWeight)}
            required
            ref={sucWRef}
          >
            <option value="1">Not Important</option>
            <option value="2">Neutral</option>
            <option value="3">Important</option>
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
