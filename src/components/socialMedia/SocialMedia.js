import React from "react";
import styled from "styled-components";
import { socialMediaLinks } from "../../portfolio";

/* ─── Tooltip Styled Component ───────────────────────────────────── */
const ToolTip = styled.span`
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  font-family: "Poppins", "Inter", "Segoe UI", sans-serif;
  font-weight: 500;
  white-space: nowrap;
  z-index: 10;
  /* Smooth bounce transition */
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

/* ─── Individual Social Link (Icon Circle) ────────────────────────── */
const SocialIcon = styled.a`
  position: relative;
  /* Light mode uses white/light-gray default bg, dark mode uses a soft highlight bg */
  background: ${(props) =>
    props.themeColors.body === "#ffffff" || props.themeColors.body === "#FFFEFD"
      ? "#ffffff"
      : props.themeColors.dark === "#000000" ||
        props.themeColors.body === "#263238"
      ? "#2d3748"
      : props.themeColors.highlight || "#ffffff"};
  color: ${(props) => props.themeColors.text || "#001C55"};
  border-radius: 50%;
  margin: 10px;
  width: 52px;
  height: 52px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  text-decoration: none;
  /* Bounce transition matching the aesthetic */
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  i {
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &:hover,
  &:active {
    background: ${(props) => props.brandColor};
    color: #ffffff;
    box-shadow: 0 10px 20px ${(props) => props.brandColor}55;
    transform: scale(1.1);

    i {
      transform: scale(1.15);
    }

    ${ToolTip} {
      top: -48px;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      background: ${(props) => props.brandColor};
      color: #ffffff;

      &::before {
        background: ${(props) => props.brandColor};
      }
    }
  }
`;

/* ─── Main Wrapper ───────────────────────────────────────────────── */
const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 0;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default function SocialMedia(props) {
  const theme = props.theme || {
    text: "#001C55",
    secondaryText: "#7F8DAA",
    body: "#EDF9FE",
    highlight: "#f9c0e4",
    imageHighlight: "#a6c8f0",
    jacketColor: "#0A2472",
  };

  if (!socialMediaLinks || socialMediaLinks.length === 0) {
    return null;
  }

  const getIconClass = (iconName) => {
    if (
      iconName.startsWith("fab ") ||
      iconName.startsWith("fas ") ||
      iconName.startsWith("far ")
    ) {
      return iconName;
    }
    return `fab ${iconName}`;
  };

  return (
    <StyledWrapper themeColors={theme}>
      {socialMediaLinks.map((media, i) => {
        if (!media.link) return null;
        return (
          <SocialIcon
            key={i}
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
            themeColors={theme}
            brandColor={media.backgroundColor || theme.text}
            aria-label={media.name}
          >
            <ToolTip themeColors={theme}>{media.name}</ToolTip>
            <i className={getIconClass(media.fontAwesomeIcon)}></i>
          </SocialIcon>
        );
      })}
    </StyledWrapper>
  );
}
