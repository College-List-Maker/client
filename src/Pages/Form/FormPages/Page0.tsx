import { useContext, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  FormControl,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { FormDataContext } from "../Form";

export function Page0() {
  const [formData, setFormData] = useContext(FormDataContext);

  useEffect(() => {
    setFormData(formData);
  });

  const SRef = useRef<HTMLInputElement>(null);
  const TRef = useRef<HTMLInputElement>(null);
  const RRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  function checkValid() {
    if (!SRef.current?.value || Number(SRef.current?.value) <= 0) {
      return;
    }
    if (!TRef.current?.value || Number(TRef.current?.value) <= 0) {
      return;
    }
    if (!RRef.current?.value || Number(RRef.current?.value) <= 0) {
      return;
    }
    const formValid = true;
    dispatch({ type: "SET_FORM_VALID", formValid });
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

  return (
    <Box>
      <Heading as="h4" size="md">
        Preferred List Length
      </Heading>
      <Text fontSize={"xs"} fontFamily={"Actor"} py={"2"}>
        <i>*required</i>
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 3fr)", md: "repeat(3, 1fr)" }}
        gap={1}
      >
        <FormControl>
          <InputGroup>
            <InputLeftAddon children="# Safeties*" />
            <Input
              onChange={handleChange}
              name={"listLengths.safeties"}
              type="number"
              placeholder="3"
              required
              min={1}
              ref={SRef}
            />
          </InputGroup>
        </FormControl>
        <InputGroup>
          <InputLeftAddon children="# Targets*" />
          <Input
            onChange={handleChange}
            name={"listLengths.targets"}
            type="number"
            placeholder="4"
            required
            min={1}
            ref={TRef}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="# Reaches*" />
          <Input
            onChange={handleChange}
            name={"listLengths.reaches"}
            type="number"
            placeholder="2"
            required
            min={1}
            ref={RRef}
          />
        </InputGroup>
      </Grid>
    </Box>
  );
}
