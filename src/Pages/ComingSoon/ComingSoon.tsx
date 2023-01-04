import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { BounceBox, LeftBox, RightBox } from "../../Components/MotionBox";

export default function ComingSoon() {
  return (
    <Box py={"20"} bgColor={"#051027"} minH={"100vh"} color={"#cccccc"}>
      <Container>
        <BounceBox>
          <LeftBox>
            <Heading py="10" textAlign={"center"}>
              Coming Soon!
            </Heading>
          </LeftBox>
          <RightBox>
            <Text>
              We are excited to announce a new feature on our website that is
              coming soon: "Maximize Your Acceptance" This feature will help
              students increase their chances of getting accepted to their dream
              college. It will provide personalized recommendations on how to
              improve their application, such as taking certain classes or
              extracurricular activities, and give tips on writing a standout
              personal statement. We understand that the college application
              process can be stressful, so we hope this feature will make it a
              little easier for students to achieve their goals. Stay tuned for
              more information on the launch date!
            </Text>
          </RightBox>
        </BounceBox>
      </Container>
    </Box>
  );
}
