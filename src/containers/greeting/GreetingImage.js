import React from "react";
import "../../styles/containers/greeting/GreetingImage.css";
import heroImg from "../../assets/images/Fraz_portfolio_hero_high_quality.png";

export default function GreetingImage({ theme }) {
  return (
    <div className="greeting-image-container">
      {/* Concentric circles (ripple effect) */}
      <div className="ripple-container">
        <div
          className="ripple ripple-1"
          style={{ borderColor: theme.imageHighlight }}
        />
        <div
          className="ripple ripple-2"
          style={{ borderColor: theme.imageHighlight }}
        />
        <div
          className="ripple ripple-3"
          style={{ borderColor: theme.imageHighlight }}
        />
        <div
          className="ripple ripple-4"
          style={{ borderColor: theme.imageHighlight }}
        />
        <div
          className="ripple ripple-5"
          style={{ borderColor: theme.imageHighlight }}
        />
      </div>

      <div className="greeting-image-wrapper">
        <img
          loading="lazy"
          alt="Fraz Liaqat Hero Portrait"
          src={heroImg}
          className="greeting-fraz-image"
        />

        {/* Premium Floating Badges */}
        <div
          className="floating-badge badge-react"
          style={{ color: "#61dafb" }}
        >
          <svg
            viewBox="-11.5 -10.23174 23 20.46348"
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
          React.js
        </div>

        <div className="floating-badge badge-js" style={{ color: "#F24E1E" }}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019 0-1.665-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.587v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019 0 1.665 1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.587v8.98zm-4.587-7.509c-1.665 0-3.019 1.355-3.019 3.019 0 1.665 1.354 3.019 3.019 3.019h3.117V8.981H8.148zm4.587 15.019c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98h-4.588zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019 0 1.665 1.354 3.019 3.019 3.019h3.117v-6.038h-3.117zm4.588 7.509c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49h-3.117v8.98h3.117z"
              fill="#F24E1E"
            />
          </svg>
          Figma
        </div>

        <div className="floating-badge badge-code" style={{ color: "#3776AB" }}>
          <svg
            viewBox="0 0 24 24"
            fill="#3776AB"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.372 0 5.727 2.978 5.727 2.978l.007 3.085h6.39V7h-8.93S0 6.523 0 12.12c0 5.596 3.247 5.397 3.247 5.397h1.94v-2.598s-.105-3.26 3.204-3.26h5.517s3.092.05 3.092-2.993V3.13S17.487 0 12 0zm-3.064 1.814a.994.994 0 011 1 .994.994 0 01-1 1 .994.994 0 01-1-1 .994.994 0 011-1z" />
            <path d="M12 24c6.628 0 6.273-2.978 6.273-2.978l-.007-3.085h-6.39V17h8.93S24 17.477 24 11.88c0-5.596-3.247-5.397-3.247-5.397h-1.94v2.598s.105 3.26-3.204 3.26H10.09s-3.092-.05-3.092 2.993v5.536S6.513 24 12 24zm3.064-1.814a.994.994 0 01-1-1 .994.994 0 011-1 .994.994 0 011 1 .994.994 0 01-1 1z" />
          </svg>
          Python
        </div>

        <div className="floating-badge badge-ai" style={{ color: "#02569B" }}>
          <svg
            viewBox="0 0 24 24"
            fill="#02569B"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
          </svg>
          Flutter
        </div>
      </div>
    </div>
  );
}
