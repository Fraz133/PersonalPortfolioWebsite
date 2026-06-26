import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  competitiveProjects,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "../../styles/pages/projects/Projects.css";
import ProjectsImg from "./ProjectsImg";
import HackathonCard from "../../components/hackathonCard/HackathonCard";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img loading="lazy"
											src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* Competitions & Hackathons Section */}
        {competitiveProjects.hackathons &&
          competitiveProjects.hackathons.length > 0 && (
            <div className="basic-projects" style={{ marginTop: "80px" }}>
              <Fade bottom duration={2000} distance="40px">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {competitiveProjects.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText, marginBottom: "40px" }}
                >
                  {competitiveProjects.subtitle}
                </p>
              </Fade>
              <div className="hackathons-container">
                {competitiveProjects.hackathons.map((hackathon, index) => (
                  <HackathonCard
                    key={index}
                    hackathon={hackathon}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          )}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
