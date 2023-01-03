import { Box, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { BeginYourSearch } from "../../Components/BeginYourSearch";
import { BounceBox, LeftBox, RightBox } from "../../Components/MotionBox";
import {
  formatAsCurrency,
  formatAsNumber,
  formatAsPercent,
} from "../../formatters";
import { StatCard } from "./StatCard";
import "./svg.css";
interface SpecificExploreInt {
  collegeData: any;
}
export function SpecificExplore({ collegeData }: SpecificExploreInt) {
  function findFlags(
    HBCU: number,
    PBI: number,
    ANNHI: number,
    TRIBAL: number,
    AANAPII: number,
    HSI: number,
    NANTI: number,
    MENONLY: number,
    WOMENONLY: number
  ): string {
    if (
      Number(HBCU) !== 0 ||
      Number(PBI) !== 0 ||
      Number(ANNHI) !== 0 ||
      Number(TRIBAL) !== 0 ||
      Number(AANAPII) !== 0 ||
      Number(HSI) !== 0 ||
      Number(NANTI) !== 0 ||
      Number(MENONLY) !== 0 ||
      Number(WOMENONLY) !== 0
    ) {
    }
    const flags: string[] = [];
    if (Number(HBCU) !== 0)
      flags.push("Historically Black College and University");
    if (Number(PBI) !== 0) flags.push("Predominantly Black Institution");
    if (Number(ANNHI) !== 0)
      flags.push("Alaska Native Native Hawaiian Serving Institution");
    if (Number(TRIBAL) !== 0) flags.push("Tribal College and University");
    if (Number(AANAPII) !== 0)
      flags.push(
        "Asian American Native American Pacific Islander-Serving Institution"
      );
    if (Number(HSI) !== 0) flags.push("Hispanic-Serving Institution");
    if (Number(NANTI) !== 0)
      flags.push("Native American Non-Tribal Institution");
    if (Number(MENONLY) !== 0) flags.push("Men-Only College");
    if (Number(WOMENONLY) !== 0) flags.push("Women-Only College");
    if (Number(flags.length) === 0) return "None";
    return flags.join(", ");
  }
  function findReligion(num: number): string {
    switch (num) {
      case 22:
        return "American Evangelical Lutheran Church";
      case 24:
        return "African Methodist Episcopal Zion Church";
      case 27:
        return "Assemblies of God Church";
      case 28:
        return "Brethren Church";
      case 30:
        return "Roman Catholic";
      case 33:
        return "Wisconsin Evangelical Lutheran Synod";
      case 34:
        return "Christ and Missionary Alliance Church";
      case 35:
        return "Christian Reformed Church";
      case 36:
        return "Evangelical Congregational Church";
      case 37:
        return "Evangelical Covenant Church of America";
      case 38:
        return "Evangelical Free Church of America";
      case 39:
        return "Evangelical Lutheran Church";
      case 40:
        return "International United Pentecostal Church";
      case 41:
        return "Free Will Baptist Church";
      case 42:
        return "Interdenominational";
      case 43:
        return "Mennonite Brethren Church";
      case 44:
        return "Moravian Church";
      case 45:
        return "North American Baptist";
      case 47:
        return "Pentecostal Holiness Church";
      case 48:
        return "Christian Churches and Churches of Christ";
      case 49:
        return "Reformed Church in America";
      case 50:
        return "Episcopal Church, Reformed";
      case 51:
        return "African Methodist Episcopal";
      case 52:
        return "American Baptist";
      case 53:
        return "American Lutheran";
      case 54:
        return "Baptist";
      case 55:
        return "Christian Methodist Episcopal";
      case 57:
        return "Church of God";
      case 58:
        return "Church of Brethren";
      case 59:
        return "Church of the Nazarene";
      case 60:
        return "Cumberland Presbyterian";
      case 61:
        return "Christian Church (Disciples of Christ)";
      case 64:
        return "Free Methodist";
      case 65:
        return "Friends";
      case 66:
        return "Presbyterian Church (USA)";
      case 67:
        return "Lutheran Church in America";
      case 68:
        return "Lutheran Church - Missouri Synod";
      case 69:
        return "Mennonite Church";
      case 71:
        return "United Methodist";
      case 73:
        return "Protestant Episcopal";
      case 74:
        return "Churches of Christ";
      case 75:
        return "Southern Baptist";
      case 76:
        return "United Church of Christ";
      case 77:
        return "Protestant, not specified";
      case 78:
        return "Multiple Protestant Denomination";
      case 79:
        return "Other Protestant";
      case 80:
        return "Jewish";
      case 81:
        return "Reformed Presbyterian Church";
      case 84:
        return "United Brethren Church";
      case 87:
        return "Missionary Church Inc";
      case 88:
        return "Undenominational";
      case 89:
        return "Wesleyan";
      case 91:
        return "Greek Orthodox";
      case 92:
        return "Russian Orthodox";
      case 93:
        return "Unitarian Universalist";
      case 94:
        return "Latter Day Saints (Mormon Church)";
      case 95:
        return "Seventh Day Adventists";
      case 97:
        return "The Presbyterian Church in America";
      case 99:
        return "Other (none of the above)";
      case 100:
        return "Original Free Will Baptist";
      case 101:
        return "Ecumenical Christian";
      case 102:
        return "Evangelical Christian";
      case 103:
        return "Presbyterian";
      case 105:
        return "General Baptist";
      case 106:
        return "Muslim";
      case 107:
        return "Plymouth Brethren";
      default:
        return "None";
    }
  }
  function getMajor(pcip: string) {
    switch (pcip) {
      case "PCIP01":
        return "Agriculture, Agriculture Operations, and Related Sciences";
      case "PCIP03":
        return "Natural Resources and Conservation";
      case "PCIP04":
        return "Architecture and Related Services";
      case "PCIP05":
        return "Area, Ethnic, Cultural, Gender, and Group Studies";
      case "PCIP09":
        return "Communication, Journalism, and Related Programs";
      case "PCIP10":
        return "Communications Technologies/Technicians and Support Services";
      case "PCIP11":
        return "Computer and Information Sciences and Support Services";
      case "PCIP12":
        return "Personal and Culinary Services";
      case "PCIP13":
        return "Education";
      case "PCIP14":
        return "Engineering";
      case "PCIP15":
        return "Engineering Technologies and Engineering-Related Fields";
      case "PCIP16":
        return "Foreign Languages, Literatures, and Linguistics";
      case "PCIP19":
        return "Family and Consumer Sciences/Human Sciences";
      case "PCIP22":
        return "Legal Professions and Studies";
      case "PCIP23":
        return "English Language and Literature/Letters";
      case "PCIP24":
        return "Liberal Arts and Sciences, General Studies and Humanities";
      case "PCIP25":
        return "Library Science";
      case "PCIP26":
        return "Biological and Biomedical Sciences";
      case "PCIP27":
        return "Mathematics and Statistics";
      case "PCIP29":
        return "Military Technologies and Applied Sciences";
      case "PCIP30":
        return "Multi/Interdisciplinary Studies";
      case "PCIP31":
        return "Parks, Recreation, Leisure, and Fitness Studies";
      case "PCIP38":
        return "Philosophy and Religious Studies";
      case "PCIP39":
        return "Theology and Religious Vocations";
      case "PCIP40":
        return "Physical Sciences";
      case "PCIP41":
        return "Science Technologies/Technicians";
      case "PCIP42":
        return "Psychology";
      case "PCIP43":
        return "Homeland Security, Law Enforcement, Firefighting and Related Protective Services";
      case "PCIP44":
        return "Public Administration and Social Service Professions";
      case "PCIP45":
        return "Social Sciences";
      case "PCIP46":
        return "Construction Trades";
      case "PCIP47":
        return "Mechanic and Repair Technologies/Technicians";
      case "PCIP48":
        return "Precision Production";
      case "PCIP49":
        return "Transportation and Materials Moving";
      case "PCIP50":
        return "Visual and Performing Arts";
      case "PCIP51":
        return "Health Professions and Related Programs";
      case "PCIP52":
        return "Business, Management, Marketing, and Related Support Services";
      case "PCIP54":
        return "History";
      default:
        return "";
    }
  }
  function getLargestValues(collegeData: { [key: string]: number }): string[] {
    let pcipNames: string[] = [];
    const pcipValues = Object.entries(collegeData).filter(
      ([key]) => key && key.startsWith("PCIP")
    );

    const sortedValues = pcipValues.sort(
      (a, b) => collegeData[b[0]] - collegeData[a[0]]
    );

    pcipNames = sortedValues.slice(0, 5).map(([name]) => name);

    const pcipFinal: string[] = [];
    for (const pcip in pcipNames) {
      const pcipString = getMajor(pcipNames[pcip]);
      pcipFinal.push(pcipString);
    }
    return pcipFinal;
  }
  return (
    <>
      <Box bgColor={"#051027"}>
        <Container>
          <Stack>
            <Stack color={"white"}>
              <Heading as="h1">{collegeData.INSTNM}</Heading>
              <Text>
                {collegeData.INSTNM} is a{" "}
                {collegeData.CONTROL === String(1)
                  ? "public"
                  : collegeData.CONTROL === String(2)
                  ? "private, nonprofit"
                  : collegeData.CONTROL === String(3)
                  ? "private, for-profit"
                  : ""}{" "}
                institution of higher education that predominantly offers{" "}
                {collegeData.ICLEVEL === String(1)
                  ? "4-year"
                  : collegeData.ICLEVEL === String(2)
                  ? "2-year"
                  : collegeData.ICLEVEL === String(3)
                  ? "less than 2-year"
                  : ""}{" "}
                programs. It is located in {collegeData.CITY},{" "}
                {collegeData.STABBR} and offers a variety of degree programs
                {collegeData.HIGHDEG === String(0)
                  ? ""
                  : collegeData.HIGHDEG === String(1)
                  ? " at the certificate level"
                  : collegeData.HIGHDEG === String(2)
                  ? " at the certificate and associate level"
                  : collegeData.HIGHDEG === String(3)
                  ? " at the associate and bachelor level"
                  : collegeData.HIGHDEG === String(4)
                  ? " at the associate, bachelor, and graduate level"
                  : ""}
                . {collegeData.INSTNM} is home to about{" "}
                {formatAsNumber(collegeData.UGDS)} college students, and with an
                acceptance rate of{" "}
                {formatAsPercent(Number(collegeData.ADM_RATE), true)}, is
                classified as{" "}
                {Number(collegeData.ADM_RATE) < 0.15
                  ? "a most selective"
                  : Number(collegeData.ADM_RATE) < 0.35
                  ? "an extremely selective"
                  : Number(collegeData.ADM_RATE) < 0.5
                  ? "a very selective"
                  : Number(collegeData.ADM_RATE) < 0.6
                  ? "a moderately selective"
                  : "a selective"}{" "}
                university. For more on {collegeData.INSTNM}, view the
                comprehesive statistics below or visit their website at{" "}
                <Link
                  href={
                    collegeData.INSTURL &&
                    collegeData.INSTURL.startsWith("http")
                      ? collegeData.INSTURL
                      : "https://" + collegeData.INSTURL
                  }
                  isExternal
                  color="teal.500"
                >
                  {collegeData.INSTURL}
                </Link>
                .
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
      <Container>
        <Stack>
          <BounceBox>
            <StatCard
              heading="General"
              stats={[
                { stat: collegeData.INSTNM, desc: "Name" },
                {
                  stat: `${collegeData.CITY}, ${collegeData.STABBR} ${collegeData.ZIP}`,
                  desc: "Location",
                },
                {
                  stat:
                    collegeData.CONTROL === String(1)
                      ? "Public"
                      : collegeData.CONTROL === String(2)
                      ? "Private, Nonprofit"
                      : collegeData.CONTROL === String(3)
                      ? "Private, For-profit"
                      : "",
                  desc: "Control",
                },
                {
                  stat:
                    collegeData.HIGHDEG === String(0)
                      ? ""
                      : collegeData.HIGHDEG === String(1)
                      ? "Certificate"
                      : collegeData.HIGHDEG === String(2)
                      ? "Certificate and Associate"
                      : collegeData.HIGHDEG === String(3)
                      ? "Associate and Bachelor"
                      : collegeData.HIGHDEG === String(4)
                      ? "Associate, Bachelor, and Graduate"
                      : "",
                  desc: "Offered Degrees",
                },
                {
                  stat:
                    collegeData.ICLEVEL === String(1)
                      ? "4-year Institution"
                      : collegeData.ICLEVEL === String(2)
                      ? "2-year Institution"
                      : collegeData.ICLEVEL === String(3)
                      ? "Less than 2-year Institution"
                      : "",
                  desc: "Institution Level",
                },
                {
                  stat: formatAsPercent(collegeData.COMP_ORIG_YR4_RT, true),
                  desc: "Graduation Rate (4yr)",
                },
                {
                  stat: formatAsPercent(
                    1 - collegeData.WDRAW_ORIG_YR4_RT,
                    true
                  ),
                  desc: "Retention Rate (4yr)",
                },
              ]}
            />
          </BounceBox>
          <LeftBox>
            <StatCard
              heading="Admission"
              stats={[
                {
                  stat: formatAsPercent(collegeData.ADM_RATE, true),
                  desc: "Acceptance Rate",
                },
                {
                  stat:
                    collegeData.ADMCON7 === String(1)
                      ? "Required"
                      : collegeData.ADMCON7 === String(2)
                      ? "Recommended"
                      : collegeData.ADMCON7 === String(3)
                      ? "Neither recommended nor required"
                      : collegeData.ADMCON7 === String(5)
                      ? "Considered but not required"
                      : "Do not know",
                  desc: "Test Score Requirements",
                },
                {
                  stat: collegeData.SAT_AVG,
                  desc: "Average SAT Score",
                },
                {
                  stat: collegeData.ACTCMMID,
                  desc: "Average ACT Score",
                },
              ]}
            />
          </LeftBox>
          <RightBox>
            <StatCard
              heading="Programs"
              stats={[
                {
                  stat: getLargestValues(collegeData)[0],
                  desc: "Top Major",
                },
                {
                  stat:
                    getLargestValues(collegeData)[0] +
                    ", " +
                    getLargestValues(collegeData)[1] +
                    ", " +
                    getLargestValues(collegeData)[2] +
                    ", " +
                    getLargestValues(collegeData)[3] +
                    ", " +
                    getLargestValues(collegeData)[4],
                  desc: "Top 5 Programs",
                },
              ]}
            />
          </RightBox>
          <LeftBox>
            <StatCard
              heading="Financials"
              stats={[
                {
                  stat: formatAsCurrency(collegeData.COSTT4_A),
                  desc: "Average COA",
                },
                {
                  stat:
                    formatAsCurrency(collegeData.TUITIONFEE_IN) +
                    " / " +
                    formatAsCurrency(collegeData.TUITIONFEE_OUT),
                  desc: "Instate vs Out of State Tuition",
                },
                {
                  stat: formatAsCurrency(collegeData.MD_EARN_WNE_P6),
                  desc: "Median 6yr Earnings",
                },
                {
                  stat: formatAsCurrency(collegeData.MEDIAN_HH_INC),
                  desc: "Student's Median Household Income",
                },
                {
                  stat: formatAsCurrency(collegeData.ENDOWBEGIN),
                  desc: "Endowment",
                },
                {
                  stat:
                    collegeData.NPCURL && collegeData.NPCURL.startsWith("http")
                      ? collegeData.NPCURL
                      : "https://" + collegeData.NPCURL,
                  desc: "Link to Net Price Calc",
                },
              ]}
            />
          </LeftBox>
        </Stack>
        <RightBox>
          <StatCard
            heading="Student Body"
            stats={[
              {
                stat: formatAsNumber(collegeData.UGDS),
                desc: "Student Body Size",
              },
              {
                stat: `${formatAsPercent(collegeData.FEMALE, true)} 
                Female /
                ${formatAsPercent(1 - collegeData.FEMALE, true)}
                Male`,
                desc: "Gender Diversity",
              },
              {
                stat: findReligion(collegeData.RELAFFIL),
                desc: "Primary Religion",
              },
              {
                stat: findFlags(
                  collegeData.HBCU,
                  collegeData.PBI,
                  collegeData.ANNHI,
                  collegeData.TRIBAL,
                  collegeData.AANAPII,
                  collegeData.HSI,
                  collegeData.NANTI,
                  collegeData.MENONLY,
                  collegeData.WOMENONLY
                ),
                desc: "Flags",
              },
            ]}
          />
        </RightBox>
        <BeginYourSearch />
      </Container>
    </>
  );
}
