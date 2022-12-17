import * as React from "react";
import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";

// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

export function Form() {
  return (
    <Center>
      <Container>
        <form>
          <Heading as="h4" size="md">
            Testing and GPA
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="SAT" />
              <Input type="text" placeholder="Out of 1600" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="ACT" />
              <Input type="text" placeholder="Out of 36" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="GPA" />
              <Input type="text" placeholder="Out of 4.00" />
            </InputGroup>
          </Grid>
          <Heading as="h4" size="md">
            Courseload
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <Select placeholder="Honors Courses">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select placeholder="AP/IB Courses">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select placeholder="Lang Courses">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select placeholder="CS Courses">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select placeholder="Core Courses">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select placeholder="Major Related">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </InputGroup>
          </Grid>
          <Heading as="h4" size="md">
            Confidence (Low - 1, High - 5)
          </Heading>
          <Grid>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Extracurriculars
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Essay
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Awards
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Recommendations
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Volunteering
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Work
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Talent
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Interviewing
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Character
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
            <RadioGroup>
              <Heading as="h3" size="sm">
                Interest
              </Heading>
              <Flex justifyContent={"space-evenly"}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
          </Grid>
          <Heading as="h4" size="md">
            Extra
          </Heading>
          <Heading as="h3" size="sm">
            Parents / Siblings
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="Mom" />
              <Input type="text" placeholder="University" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="Dad" />
              <Input type="text" placeholder="University" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="Other" />
              <Input type="text" placeholder="University" />
            </InputGroup>
          </Grid>
          <Heading as="h3" size="sm">
            Alumni
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="#1" />
              <Input type="text" placeholder="University" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="#2" />
              <Input type="text" placeholder="University" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="#3" />
              <Input type="text" placeholder="University" />
            </InputGroup>
          </Grid>
          <Heading as="h3" size="sm">
            Feeder
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="#1" />
              <Input type="text" placeholder="University" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="#2" />
              <Input type="text" placeholder="University" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="#3" />
              <Input type="text" placeholder="University" />
            </InputGroup>
          </Grid>
          <Heading as="h3" size="sm">
            Feeder
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="#1" />
              <Input type="text" placeholder="University" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="#2" />
              <Input type="text" placeholder="University" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="#3" />
              <Input type="text" placeholder="University" />
            </InputGroup>
          </Grid>
          <Heading as="h3" size="sm">
            Residency
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="ZIP" />
              <Input type="text" placeholder="14450" />
            </InputGroup>
            <InputGroup>
              <Select placeholder="State">
                <option value="NY">New York</option>
                <option value="WI">Wisconson</option>
                <option value="CA">California</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Select placeholder="Country">
                <option value="US">United States</option>
              </Select>
            </InputGroup>
          </Grid>
          <Heading as="h3" size="sm">
            Class
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={1}>
            <InputGroup>
              <InputLeftAddon children="Class Rank" />
              <Input type="text" placeholder="12" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="Class Size" />
              <Input type="text" placeholder="244" />
            </InputGroup>
          </Grid>
          <Heading as="h3" size="sm">
            Adversity
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            <InputGroup>
              <Checkbox>First Gen</Checkbox>
            </InputGroup>
            <InputGroup>
              <Checkbox>International</Checkbox>
            </InputGroup>
            <InputGroup>
              <Checkbox>Transfer</Checkbox>
            </InputGroup>
          </Grid>
          <Button colorScheme="teal">Submit</Button>
        </form>
      </Container>
    </Center>
  );
}
