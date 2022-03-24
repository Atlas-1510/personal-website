import styled from "styled-components";
import screens from "../styles/screens";
import { SectionTitle } from "./SectionTitle";
import SkillTile from "./SkillTile";
import skills from "../utils/skills";
import Section from "./Section";
import colours from "../styles/colours";

const SkillSection = styled.div``;

const SectionSubTitle = styled.h2`
  font-size: 2rem;
  margin: 0.5rem 0 0.5rem 0;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  gap: 1rem;

  @media screen and (min-width: ${screens.md}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

const frontEndSkills = [
  skills.react,
  skills.sass,
  skills.tailwindcss,
  skills.styledComponents,
  skills.framerMotion,
  skills.reactSpring,
];

const backEndSkills = [
  skills.nodejs,
  skills.express,
  skills.firebase,
  skills.mongoDB,
  skills.mongoose,
  skills.passportjs,
];

const otherSkills = [
  skills.typescript,
  skills.webpack,
  skills.heroku,
  skills.git,
  skills.gitHub,
  skills.jest,
  skills.npm,
];

const Skills = () => {
  return (
    <Section
      id="skills"
      lightBackground={colours.light.backgroundOne}
      darkBackground={colours.dark.backgroundOne}
    >
      <SectionTitle>Skills</SectionTitle>
      <SkillSection>
        <SectionSubTitle>front-end</SectionSubTitle>
        <SkillGrid>
          {frontEndSkills.map((skill) => (
            <SkillTile key={skill.title} skill={skill} />
          ))}
        </SkillGrid>
      </SkillSection>
      <SkillSection>
        <SectionSubTitle>back-end</SectionSubTitle>
        <SkillGrid>
          {backEndSkills.map((skill) => (
            <SkillTile key={skill.title} skill={skill} />
          ))}
        </SkillGrid>
      </SkillSection>
      <SkillSection>
        <SectionSubTitle>other</SectionSubTitle>
        <SkillGrid>
          {otherSkills.map((skill) => (
            <SkillTile key={skill.title} skill={skill} />
          ))}
        </SkillGrid>
      </SkillSection>
    </Section>
  );
};

export default Skills;
