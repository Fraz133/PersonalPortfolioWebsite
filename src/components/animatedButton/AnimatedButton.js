import React from "react";
import styled from "styled-components";

/* ─── Styled Link/Button ────────────────────────────────────────── */
const ButtonLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 36px;
  border: 4px solid transparent;
  font-size: 16px;
  font-family: "Poppins", "Inter", "Segoe UI", sans-serif;
  background-color: transparent;
  border-radius: 100px;
  font-weight: 600;
  color: ${(props) => props.themeColors.text};
  box-shadow: 0 0 0 2px ${(props) => props.themeColors.text};
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  /* Hover circle background */
  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.themeColors.text};
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 0;
  }

  .text {
    position: relative;
    z-index: 1;
    transform: translateX(-10px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  /* SVGs representing arrow icons */
  svg {
    position: absolute;
    width: 18px;
    height: 18px;
    fill: ${(props) => props.themeColors.text};
    z-index: 1;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .arr-1 {
    right: 16px;
  }

  .arr-2 {
    left: -25%;
  }

  /* Hover & Active states */
  &:hover,
  &:active {
    box-shadow: 0 0 0 12px transparent;
    color: ${(props) => props.themeColors.body};
    border-radius: 12px;

    .circle {
      width: 280px;
      height: 280px;
      opacity: 1;
    }

    .arr-1 {
      right: -25%;
    }

    .arr-2 {
      left: 16px;
    }

    .text {
      transform: translateX(10px);
    }

    svg {
      fill: ${(props) => props.themeColors.body};
    }
  }

  /* Tap scale feedback */
  &:active {
    transform: scale(0.95);
  }
`;

export default function AnimatedButton({ text, href, newTab, theme }) {
  return (
    <ButtonLink
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      themeColors={theme}
    >
      {/* Left arrow: hidden, slides in on hover */}
      <svg
        viewBox="0 0 24 24"
        className="arr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>

      <span className="text">{text}</span>
      <span className="circle" />

      {/* Right arrow: visible, slides out on hover */}
      <svg
        viewBox="0 0 24 24"
        className="arr-1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </ButtonLink>
  );
}
