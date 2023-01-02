import { Container } from "@chakra-ui/react";

interface DescriptionCardInt {
  text: string;
}

export function DescriptionCard({ text }: DescriptionCardInt) {
  return (
    <>
      <Container shadow={"lg"}>{text}</Container>
    </>
  );
}
