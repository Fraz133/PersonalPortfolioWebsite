import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import styled from "styled-components";
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

/* ─── Glow Button (Uiverse by csemszepp, theme-aware) ─────────── */
const GlowBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 20px;

  .btn {
    position: relative;
    width: 220px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    padding: 10px 24px;
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    color: ${(props) => (props.theme ? props.theme.text : "#001C55")};
    font-weight: 600;
    font-family: "Poppins", "Inter", "Segoe UI", sans-serif;
    font-size: 15px;
    z-index: 1;
    transition: 0.5s;
    backdrop-filter: blur(15px);
  }

  .btn:hover a {
    letter-spacing: 3px;
  }

  /* Sheen sweep on hover */
  .btn a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transform: skewX(45deg) translate(0);
    transition: 0.5s;
    filter: blur(0px);
  }

  .btn:hover a::before {
    transform: skewX(45deg) translate(200px);
  }

  /* Bottom glow */
  .btn::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    width: 30px;
    height: 10px;
    background: ${(props) =>
      props.theme ? props.theme.imageHighlight : "#0E6BA8"};
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0.5s;
  }

  .btn:hover::before {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
  }

  /* Top glow */
  .btn::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -5px;
    width: 30px;
    height: 10px;
    background: ${(props) =>
      props.theme ? props.theme.imageHighlight : "#0E6BA8"};
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0.5s;
  }

  .btn:hover::after {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
  }
`;

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} onToggle={this.props.onToggle} />
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
        <GlowBtnWrap theme={theme}>
          <div className="btn">
            <a
              href={greeting.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              More Projects
            </a>
          </div>
        </GlowBtnWrap>

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
