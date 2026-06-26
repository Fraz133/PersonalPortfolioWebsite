import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "../../styles/containers/experienceAccordion/ExperienceAccordion.css";
import { Fade } from "react-reveal";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <div key={section["title"]} style={{ marginBottom: "50px" }}>
              <Fade bottom duration={2000} distance="40px">
                <h2
                  style={{
                    color: theme.text,
                    fontFamily: "Google Sans Bold",
                    fontSize: "32px",
                    marginBottom: "30px",
                    borderBottom: `2px solid ${theme.headerColor}`,
                    paddingBottom: "10px",
                  }}
                >
                  {section["title"]}
                </h2>
              </Fade>
              {section["experiences"].map((experience, index) => {
                return (
                  <ExperienceCard
                    index={index}
                    totalCards={section["experiences"].length}
                    experience={experience}
                    theme={theme}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
