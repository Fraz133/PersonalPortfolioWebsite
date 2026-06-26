import React, { useRef, useEffect, useState } from "react";
import "./HackathonCard.css";
import { Fade } from "react-reveal";

export default function HackathonCard({ hackathon, theme }) {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const handlePlayClick = () => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (video && wrapper && !isFullscreen) {
      // 1. Change source to the full demo video
      video.src = hackathon.videoUrl;
      video.muted = false;
      video.controls = true;
      video.loop = false;

      // 2. Play and request fullscreen
      video
        .play()
        .then(() => {
          if (wrapper.requestFullscreen) {
            wrapper.requestFullscreen();
          } else if (wrapper.webkitRequestFullscreen) {
            wrapper.webkitRequestFullscreen();
          } else if (wrapper.msRequestFullscreen) {
            wrapper.msRequestFullscreen();
          } else if (video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
          }
        })
        .catch((err) => console.log("Video play interrupted:", err));
    }
  };

  const handleBackClick = (e) => {
    e.stopPropagation();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFull = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );

      setIsFullscreen(isFull);

      const video = videoRef.current;
      if (video && !isFull) {
        // If we are not in fullscreen anymore, reset back to the looping splash animation
        video.pause();
        video.src = hackathon.splashVideoUrl;
        video.muted = true;
        video.controls = false;
        video.loop = true;
        video
          .play()
          .catch((err) => console.log("Splash restart play interrupted:", err));
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, [hackathon.splashVideoUrl]);

  return (
    <div className="hackathon-card-container">
      <Fade bottom duration={2000} distance="40px">
        <div
          className="hackathon-card"
          style={{
            backgroundColor: theme.body,
            borderColor: theme.imageHighlight,
            boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.1)`,
            color: theme.text,
          }}
        >
          <div className="hackathon-details">
            <div className="hackathon-header-badges">
              <div
                className="hackathon-award-badge"
                style={{ backgroundColor: theme.highlight, color: theme.text }}
              >
                {hackathon.award}
              </div>
              {hackathon.organizer && (
                <div
                  className="hackathon-organizer-badge"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {hackathon.organizer.logoPath ? (
                    <img
                      loading="lazy"
                      src={hackathon.organizer.logoPath}
                      alt={hackathon.organizer.name}
                      style={{
                        marginRight: "10px",
                        height: "24px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <span
                      className="iconify"
                      data-icon={hackathon.organizer.iconifyClassname}
                      style={{
                        ...hackathon.organizer.style,
                        marginRight: "8px",
                        fontSize: "20px",
                        verticalAlign: "middle",
                      }}
                      data-inline="false"
                    ></span>
                  )}
                  <span
                    className="organizer-name"
                    style={{ color: theme.text, fontWeight: 600 }}
                  >
                    {hackathon.organizer.name}
                  </span>
                </div>
              )}
            </div>

            <h2 className="hackathon-title" style={{ color: theme.text }}>
              {hackathon.title}
            </h2>

            <div className="hackathon-project-meta">
              <span
                className="hackathon-project-name"
                style={{ color: theme.imageHighlight }}
              >
                {hackathon.projectName}
              </span>
              <span className="hackathon-project-separator">|</span>
              <span
                className="hackathon-project-subtitle"
                style={{ color: theme.secondaryText }}
              >
                {hackathon.subtitle}
              </span>
            </div>

            <p
              className="hackathon-description"
              style={{ color: theme.secondaryText }}
            >
              {hackathon.description}
            </p>

            <div className="hackathon-tech-stack-container">
              <span
                className="tech-stack-label"
                style={{ color: theme.secondaryText }}
              >
                Built with:
              </span>
              <div className="hackathon-tech-icons">
                {hackathon.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="hackathon-tech-icon-wrapper"
                    title={tech.name}
                  >
                    <span
                      className="iconify"
                      data-icon={tech.iconifyClassname}
                      style={{ ...tech.style, fontSize: "36px" }}
                      data-inline="false"
                    ></span>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="hackathon-btn"
              style={{
                backgroundColor: theme.imageHighlight,
                color: "#FFFFFF",
              }}
              onClick={() => openUrlInNewTab(hackathon.githubUrl)}
            >
              <i className="fab fa-github" style={{ marginRight: "8px" }}></i>
              View Repository
            </button>
          </div>

          <div className="hackathon-media">
            <div
              ref={wrapperRef}
              className={`video-player-wrapper ${
                isFullscreen ? "fullscreen-active" : ""
              }`}
              style={!isFullscreen ? { borderColor: theme.imageHighlight } : {}}
              onClick={!isFullscreen ? handlePlayClick : undefined}
            >
              {isFullscreen && (
                <button
                  className="fullscreen-back-btn"
                  onClick={handleBackClick}
                  title="Go Back"
                >
                  <i className="fas fa-arrow-left"></i> Back
                </button>
              )}
              <video
                ref={videoRef}
                className="hackathon-video"
                autoPlay
                loop
                muted
                playsInline
                src={hackathon.splashVideoUrl}
                poster={hackathon.coverUrl}
              >
                Your browser does not support the video tag.
              </video>

              {!isFullscreen && (
                <div className="video-play-overlay">
                  <div className="video-play-button-container">
                    <div className="video-play-button">
                      <i className="fas fa-play"></i>
                    </div>
                    <span className="video-play-text">Click for Demo</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
