import React from "react";
import PropTypes from "prop-types";
import IndividualSkill from "./IndividualSkill";

const Skills = ({ skills, icons }) => {
  const {
    languageSkills,
    frameworkSkills,
    databaseSkills,
    toolSkills,
  } = skills;

  const languages = languageSkills.map((skill, i) => {
    return <IndividualSkill skill={skill} key={i} icon={icons[skill]} />;
  });

  const frameworks = frameworkSkills.map((skill, i) => {
    return <IndividualSkill skill={skill} key={i} icon={icons[skill]} />;
  });

  const database = databaseSkills.map((skill, i) => {
    return <IndividualSkill skill={skill} key={i} icon={icons[skill]} />;
  });

  const softwares = toolSkills.map((skill, i) => {
    return <IndividualSkill skill={skill} key={i} icon={icons[skill]} />;
  });

  return (
    <div id="skill">
      <div id="wrapper">
        <div className="container clearfix">
          <div id="skill-title" className="text-center">
            <h2>SKILLS</h2>
            <p>
              I have worked with a wide variety of programming languages. From
              C++ for Competitive Coding and Python for stand-alone applications
              and scripts to JavaScript, Java &amp; PHP for web applications.
            </p>
          </div>
          <div id="language-skills" className="text-center">
            <h4 className="skill-header">Languages</h4>
            <div className="row text-center">{languages}</div>
          </div>
          <div id="framework-skills" className="text-center">
            <h4 className="skill-header">Frameworks</h4>
            <div className="row text-center">{frameworks}</div>
          </div>
          <div id="database-skills" className="text-center">
            <h4 className="skill-header">Database</h4>
            <div className="row text-center">{database}</div>
          </div>
          <div id="database-skills" className="text-center">
            <h4 className="skill-header">Softwares &amp; Other Tools</h4>
            <div className="row text-center">{softwares}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.object.isRequired,
  icons: PropTypes.object.isRequired,
};

export default Skills;
