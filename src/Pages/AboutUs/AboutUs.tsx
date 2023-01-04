import { Box, Container } from "@chakra-ui/react";
import { BeginYourSearch } from "../../Components/BeginYourSearch";
import { BounceBox, RightBox } from "../../Components/MotionBox";
import { AboutUsHeading } from "./AboutUsHeading";
import { BiographyCard } from "./BiographyCard";
import { DescriptionCard } from "./DescriptionCard";
import { RepoStats } from "./RepoStats";
import { VisitRepoCard } from "./VisitRepoCard";

export function AboutUs() {
  return (
    <>
      <Box bgColor={"#F8F8F8"} w={"100%"} pb={"10"} pt={"20"}>
        <Container minW={"70%"}>
          <BounceBox>
            <AboutUsHeading
              h1={"About Us"}
              h2={"More About Collegy"}
              emoji={{ emoji: "✨", right: true }}
            />
            <DescriptionCard
              paragraphs={[
                "Collegy is a platform that helps high school students find their perfect college match. It was created by college students who wanted to make the process of finding a college easier and more efficient. The platform uses an algorithm that sources data from open source databases to provide a list of colleges that are most suitable for each individual student.",
                "One of the key features of Collegy is its ability to take into account a student's specific interests and goals. The algorithm looks at factors such as a student's academic record, extracurricular activities, and career aspirations in order to identify colleges that are likely to be the best fit. This means that students can find colleges that offer the programs and opportunities that are most relevant to their interests, rather than having to sift through a long list of colleges that may not be as well-suited to their needs.",
                "Overall, Collegy is a valuable resource for high school students who are trying to navigate the often overwhelming process of finding the right college. By using the platform's sophisticated algorithm, students can quickly and easily find colleges that are most likely to help them achieve their academic and professional goals.",
              ]}
            />
          </BounceBox>
        </Container>
      </Box>
      <Box bgColor={"#E3E0E0"} pb={"10"}>
        <Container minW={"60%"}>
          <BounceBox>
            <AboutUsHeading
              h1={"Team Biographies"}
              h2={"Meet our Team"}
              emoji={{ emoji: "👋", right: false }}
            />
            <BiographyCard
              picture="https://media.licdn.com/dms/image/D4E03AQFkYwurI7k4xw/profile-displayphoto-shrink_400_400/0/1666456660962?e=1678320000&v=beta&t=oEauCFl1R3xMGEVy6RwdtwGBiDPopwy4ezhGfh0ZGxY"
              name="John Farrell"
              position="Software Engineer, Co-Founder"
              bio="Hi there! My name is John and I am a computer science student at Brown University. I am currently earning my ScB degree with concentrations in Artificial Intelligence/Machine Learning, Software Principles, Data, and Design. I am also certified in Data Fluency, and I have strong proficiencies in a variety of programming languages, including Python, Java, JavaScript, TypeScript, ReasonML, and Racket. In my work as a developer at Collegy, I have experience with a variety of web application frameworks, database management systems, and other systems and applications. I am especially passionate about artificial intelligence, software engineering, and data science, and I am always looking for new opportunities to learn and grow in these fields. I hope we can work together to build something amazing!"
              linkedin="https://www.linkedin.com/in/johnsfarrell/"
              github="https://github.com/johnsfarrell"
            />
          </BounceBox>
          <BounceBox>
            <BiographyCard
              picture="https://media.licdn.com/dms/image/C5603AQHTB2qvlimbBw/profile-displayphoto-shrink_400_400/0/1634852696133?e=1678320000&v=beta&t=p1tlTFLG2_56Uc7HNxGchzMNlJJ4JOCBwQYCH0xDEBs"
              name="Tyler Cady"
              position="Software Engineer, Co-Founder"
              bio="Hello! My name is Tyler and I am a computer science student at the Georgia Institute of Technology. In addition to my studies, I am also a developer at Collegy, where I have the opportunity to work on a variety of projects and gain valuable experience in the field. I am currently developing my proficiency in Java, HTML, CSS, JavaScript, and database management, and I am eager to concentrate my learning around information/internetworks and modeling/simulation. My professional ambition is to become well adapted to a full-stack environment and advance myself with competence in high-demand software development. I am committed to continuing to learn and grow as a developer, and I am excited to use my skills and expertise to make a positive impact in the world of technology."
              orange={true}
              linkedin="https://www.linkedin.com/in/tyler-cady-0a641321a/"
              github="https://github.com/tylerrcady"
            />
          </BounceBox>
        </Container>
      </Box>
      <Box bgColor={"#F8F8F8"} w={"100%"} pb={"10"}>
        <Container minW={"70%"}>
          <AboutUsHeading
            h1={"Algorithms"}
            h2={"Open-Source Algorithms"}
            emoji={{ emoji: "🤖", right: true, tilt: true }}
          />
          <DescriptionCard
            paragraphs={[
              "An open source algorithm for finding the best colleges for you could be a useful tool for students and their families as they navigate the college search and application process. This type of algorithm could take into account a variety of factors that are important to students, such as location, size of the school, cost, and academic programs.",
              "One of the key benefits of an open source algorithm is that it is transparent and can be reviewed and improved upon by anyone who has the expertise and interest in doing so. This can help to ensure that the algorithm is fair and unbiased, and that it takes into account the needs and preferences of a diverse range of students.",
              "It is also important to consider how your data will be used when using an open source algorithm for finding the best colleges for you. It is essential that any personal information you provide is handled with care and that your privacy is protected. It is also important to understand how your data will be used in the algorithm and to ensure that it is being used in a way that is ethical and beneficial to you.",
            ]}
          />
          <BounceBox>
            <VisitRepoCard />
          </BounceBox>
          <RightBox>
            <RepoStats
              stats={[
                { stat: "1.2M+", desc: "data points" },
                { stat: "40K+", desc: "lines of code" },
                { stat: "1", desc: "repository" },
              ]}
            />
          </RightBox>
        </Container>
      </Box>
      <BeginYourSearch />
    </>
  );
}
