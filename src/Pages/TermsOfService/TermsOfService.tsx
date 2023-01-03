import { Heading, Container } from "@chakra-ui/react";
import { TOSSectionCard } from "./TOSSectionCard";

export function TermsOfService() {
  const tos = [
    {
      title: "Disclaimer of Professional Advice",
      text: "Collegy is not a professional educational or career counseling service. The recommendations and information provided on our platform are intended for general informational purposes only and are not a substitute for professional advice.",
    },
    {
      title: "Intellectual Property",
      text: "All content and materials on Collegy, including but not limited to text, images, and software, are the property of Collegy and are protected by copyright and other intellectual property laws. You may not reuse any of the content or materials on our platform without our express written permission.",
    },
    {
      title: "No Liability",
      text: "Collegy will not be held responsible for any decisions or actions taken based on the information provided on our platform. Use of the platform is at your own risk.",
    },
    {
      title: "Governing Law",
      text: "These terms of service and your use of the Collegy platform will be governed by and construed in accordance with the laws of the United States.",
    },
    {
      title: "Acceptance of Terms",
      text: "By using Collegy, you acknowledge that you have read and understand these terms of service and agree to be bound by them. If you do not agree to these terms, please do not use our platform.",
    },
  ];
  return (
    <Container>
      <Heading textAlign={"center"} as="h1" size={"md"}>
        Collegy's Terms of Service
      </Heading>
      {tos.map(({ title, text }, index) => {
        return <TOSSectionCard title={title} text={text} index={index + 1} />;
      })}
    </Container>
  );
}
