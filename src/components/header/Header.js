import React, { Component } from "react";
import styled from "styled-components";
import "../../styles/components/header/Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

/* ─── Desktop Outline Nav Styled Component ────────────────────────── */
const NavWrapper = styled.div`
  position: relative;
  width: 550px;
  height: 60px;
  border-radius: 40px;
  background: ${(props) =>
    props.themeColors.body === "#ffffff"
      ? "rgba(0, 0, 0, 0.02)"
      : "rgba(255, 255, 255, 0.02)"};
  border: 1px solid ${(props) => props.themeColors.secondaryText}22;
  display: flex;
  align-items: center;
  padding: 4px;

  .nav-container {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }

  .nav-btn {
    width: 110px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.themeColors.text};
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    font-family: "Google Sans Regular", "Inter", sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 30px;
    z-index: 2;
  }

  .nav-btn:hover {
    color: ${(props) => props.themeColors.body};
    background: ${(props) => props.themeColors.text};
  }

  .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .rect {
    stroke-dashoffset: 5;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s;
    stroke: ${(props) => props.themeColors.text};
    stroke-width: 2.5;
  }

  .nav-container:hover .outline .rect {
    transition: 999999s;
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
  }

  /* Button 1 Hover */
  .nav-btn:nth-child(1):hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 9.02 77.04 9.02 4.92;
  }

  /* Button 2 Hover */
  .nav-btn:nth-child(2):hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 9.02 9.02 59 9.02 13.94;
  }

  /* Button 3 Hover */
  .nav-btn:nth-child(3):hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 18.04 9.02 40.96 9.02 22.96;
  }

  /* Button 4 Hover */
  .nav-btn:nth-child(4):hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 27.06 9.02 22.92 9.02 31.98;
  }

  /* Button 5 Hover */
  .nav-btn:nth-child(5):hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 36.08 9.02 4.88 9.02 41;
  }

  .nav-btn:hover ~ .outline .rect {
    stroke-dashoffset: 0;
    transition: 0.5s !important;
  }
`;

/* ─── Responsive Menu Wrapper ────────────────────────────────────── */
const MenuWrapper = styled.ul`
  .desktop-nav-li {
    display: none;
  }
  .mobile-nav-li {
    display: block;
  }

  @media (min-width: 69em) {
    display: flex !important;
    align-items: center;
    margin-left: auto; /* Push menu to the right */
    order: 2;

    .desktop-nav-li {
      display: block;
    }
    .mobile-nav-li {
      display: none;
    }
  }
`;

/* ─── Always-Visible Theme Toggle Container ───────────────────────── */
const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 10px;
  z-index: 100;
  position: relative;

  @media (min-width: 69em) {
    height: auto;
    padding: 0;
    margin-left: 20px;
    order: 3;
  }
`;

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo" style={{ order: 1 }}>
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: "#FF6B35" }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />

            <label
              className="menu-icon"
              htmlFor="menu-btn"
              style={{ color: theme.text }}
            >
              <span className="navicon"></span>
            </label>

            {/* Always-visible Theme Toggle on Top Right */}
            <ThemeToggleContainer>
              <label htmlFor="theme" className="theme">
                <span className="theme__toggle-wrap">
                  <input
                    id="theme"
                    className="theme__toggle"
                    type="checkbox"
                    role="switch"
                    name="theme"
                    value="dark"
                    checked={
                      theme.body === "#263238" ||
                      theme.body === "#1d0c41" ||
                      theme.body === "#000000" ||
                      theme.body === "#21052C" ||
                      theme.body === "#031E26" ||
                      theme.body === "#1D2A30"
                    }
                    onChange={this.props.onToggle}
                  />
                  <span className="theme__icon">
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                  </span>
                </span>
              </label>
            </ThemeToggleContainer>

            <MenuWrapper
              className="menu"
              style={{ backgroundColor: theme.body }}
            >
              {/* Desktop Outline Nav */}
              <li className="desktop-nav-li">
                <NavWrapper themeColors={theme}>
                  <div className="nav-container">
                    <NavLink
                      to="/home"
                      tag={Link}
                      activeStyle={{ fontWeight: "bold" }}
                      className="nav-btn"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/education"
                      tag={Link}
                      activeStyle={{ fontWeight: "bold" }}
                      className="nav-btn"
                    >
                      Education
                    </NavLink>
                    <NavLink
                      to="/experience"
                      tag={Link}
                      activeStyle={{ fontWeight: "bold" }}
                      className="nav-btn"
                    >
                      Experience
                    </NavLink>
                    <NavLink
                      to="/projects"
                      tag={Link}
                      activeStyle={{ fontWeight: "bold" }}
                      className="nav-btn"
                    >
                      Projects
                    </NavLink>
                    <NavLink
                      to="/contact"
                      tag={Link}
                      activeStyle={{ fontWeight: "bold" }}
                      className="nav-btn"
                    >
                      Contact
                    </NavLink>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 550 60"
                      height="60"
                      width="550"
                      overflow="visible"
                      className="outline"
                    >
                      <rect
                        strokeWidth="3"
                        fill="transparent"
                        height="60"
                        width="550"
                        y="0"
                        x="0"
                        pathLength="100"
                        className="rect"
                      ></rect>
                    </svg>
                  </div>
                </NavWrapper>
              </li>

              {/* Mobile Nav Links */}
              <li className="mobile-nav-li">
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li className="mobile-nav-li">
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li className="mobile-nav-li">
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              <li className="mobile-nav-li">
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              <li className="mobile-nav-li">
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
            </MenuWrapper>
          </header>
        </div>
      </Fade>
    );
  }
}

export default Header;
