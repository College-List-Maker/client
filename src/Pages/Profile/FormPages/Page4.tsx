import { useContext, useEffect, useState } from "react";
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

export function Page4() {
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

  function toggleFirstGenValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      adversity: {
        ...prevFormData["adversity"],
        fgen: !prevFormData["adversity"]["fgen"],
      },
    }));
  }

  function toggleInternationalValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      adversity: {
        ...prevFormData["adversity"],
        international: !prevFormData["adversity"]["international"],
      },
    }));
  }

  function toggleTransferValue() {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      adversity: {
        ...prevFormData["adversity"],
        transfer: !prevFormData["adversity"]["transfer"],
      },
    }));
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
  }

  const toast = useToast();
  const HandleSave = (event: any) => {
    setIsLoading(true);
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
  };

  return formData && formData.academic.gpa !== -1 ? (
    <>
      <Heading as="h4" size="md">
        Extra
      </Heading>
      <Heading as="h3" size="sm">
        Parents / Siblings
      </Heading>
      (leave blank if N/A)
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <InputGroup>
          <InputLeftAddon children="Mom" />
          <Input
            onChange={handleChange}
            name={"colleges.legacy1"}
            type="text"
            defaultValue={String(formData.colleges.legacy1)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Dad" />
          <Input
            onChange={handleChange}
            name={"colleges.legacy2"}
            type="text"
            defaultValue={String(formData.colleges.legacy2)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Other" />
          <Input
            onChange={handleChange}
            name={"colleges.legacy3"}
            type="text"
            defaultValue={String(formData.colleges.legacy3)}
          />
        </InputGroup>
      </Grid>
      <Heading as="h3" size="sm">
        Alumni
      </Heading>
      (leave blank if N/A)
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <InputGroup>
          <InputLeftAddon children="#1" />
          <Input
            onChange={handleChange}
            name={"colleges.alumni1"}
            type="text"
            defaultValue={String(formData.colleges.alumni1)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="#2" />
          <Input
            onChange={handleChange}
            name={"colleges.alumni2"}
            type="text"
            defaultValue={String(formData.colleges.alumni2)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="#3" />
          <Input
            onChange={handleChange}
            name={"colleges.alumni3"}
            type="text"
            defaultValue={String(formData.colleges.alumni3)}
          />
        </InputGroup>
      </Grid>
      <Heading as="h3" size="sm">
        Feeder
      </Heading>
      (leave blank if N/A)
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <InputGroup>
          <InputLeftAddon children="#1" />
          <Input
            onChange={handleChange}
            name={"colleges.feeder1"}
            type="text"
            defaultValue={String(formData.colleges.feeder1)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="#2" />
          <Input
            onChange={handleChange}
            name={"colleges.feeder2"}
            type="text"
            defaultValue={String(formData.colleges.feeder2)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="#3" />
          <Input
            onChange={handleChange}
            name={"colleges.feeder3"}
            type="text"
            defaultValue={String(formData.colleges.feeder3)}
          />
        </InputGroup>
      </Grid>
      <Heading as="h3" size="sm">
        Adversity
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <InputGroup>
          <Checkbox
            onChange={toggleFirstGenValue}
            name={"adversity.fgen"}
            defaultChecked={formData.adversity.fgen ? true : false}
          >
            First Gen
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox
            onChange={toggleInternationalValue}
            name={"adversity.international"}
            defaultChecked={formData.adversity.international ? true : false}
          >
            International
          </Checkbox>
        </InputGroup>
        <InputGroup>
          <Checkbox
            onChange={toggleTransferValue}
            name={"adversity.transfer"}
            defaultChecked={formData.adversity.transfer ? true : false}
          >
            Transfer
          </Checkbox>
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
