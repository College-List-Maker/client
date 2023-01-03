import { Stack, Heading, Button, Text } from "@chakra-ui/react";
import { isQuestionaireCompleted } from "../../Fetch";

export function TopCard() {
  const questionaireComplete = isQuestionaireCompleted();

  const handleClick = () => {
    window.location.hash = questionaireComplete ? "#form" : "#college-list";
  };

  const { title, description, button } = {
    title: questionaireComplete
      ? `Welcome back!`
      : "Maximize your college search.",
    description: questionaireComplete
      ? "Let's continue your college search. Check your college list or view more colleges."
      : "Fill out a short questionnaire and find the best college matches for you based on more than a million data points and a dense, intricate algorithm.",
    button: questionaireComplete ? "Continue Search" : "Begin Mega Search",
  };

  return (
    <Stack>
      <Stack color="white">
        <Heading as="h1">{title}</Heading>
        <Text>{description}</Text>
      </Stack>
      <Button onClick={handleClick}>{button}</Button>
    </Stack>
  );
}
