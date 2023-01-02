import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { BeginYourSearch } from "../../Components/BeginYourSearch";
import { formatAsCurrency } from "../../formatters";
import { StatCard } from "./StatCard";
import "./svg.css";
interface SpecificExploreInt {
  collegeData: any;
}
export function SpecificExplore({ collegeData }: SpecificExploreInt) {
  return (
    <>
      <Box bgColor={"#051027"}>
        <Container>
          <Stack>
            <Stack color={"white"}>
              <Heading as="h1">{collegeData.INSTNM}</Heading>
              <Text>
                Amridge University is a private, non-profit institution of
                higher education that was founded in 1967. It is located in
                Montgomery, Alabama and offers a variety of degree programs at
                the undergraduate, graduate, and doctoral levels. The university
                is accredited by the Southern Association of Colleges and
                Schools Commission on Colleges (SACSCOC) and has a number of
                additional programmatic accreditations. Amridge University is
                committed to providing students with a quality education that is
                both academically challenging and rooted in Christian values.
                The university offers a range of on-campus and online programs
                that are designed to meet the needs of a diverse student body.
              </Text>
            </Stack>
          </Stack>
        </Container>
        <div className="wave1">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Box>
      {/* {JSON.stringify(collegeData)} */}
      <Container>
        <Stack>
          <StatCard
            heading="General"
            stats={[
              { stat: collegeData.INSTNM, desc: "name" },
              {
                stat: `${collegeData.CITY}, ${collegeData.STABBR} ${collegeData.ZIP}`,
                desc: "location",
              },
            ]}
          />
          <StatCard
            heading="Financials"
            stats={[
              {
                stat: formatAsCurrency(collegeData.TUITIONFEE_IN),
                desc: "tuition fee in",
              },
              {
                stat: formatAsCurrency(collegeData.TUITIONFEE_OUT),
                desc: "tuition fee out",
              },
              {
                stat: formatAsCurrency(collegeData.AVGFACSAL),
                desc: "average facsal",
              },
              {
                stat: formatAsCurrency(collegeData.MEDIAN_HH_INC),
                desc: "median house hold income",
              },
            ]}
          />
        </Stack>
        <BeginYourSearch />
      </Container>
    </>
  );
}
