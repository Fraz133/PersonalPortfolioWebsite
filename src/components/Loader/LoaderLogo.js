import React from "react";
import "../../styles/components/Loader/LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="loader">
          <svg
            style={{ width: "100%", height: "100%" }}
            viewBox="0 -100 900 1100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="gridPattern"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="#222"
                  strokeWidth="0.5"
                />
              </pattern>

              <linearGradient
                id="traceGradient1"
                x1="250"
                y1="120"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#2ba8fb" stopOpacity="1"></stop>
                <stop
                  offset="100%"
                  stopColor="#2ba8fb"
                  stopOpacity="0.5"
                ></stop>
              </linearGradient>

              <linearGradient
                id="traceGradient2"
                x1="650"
                y1="120"
                x2="800"
                y2="300"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#2ba8fb" stopOpacity="1"></stop>
                <stop
                  offset="100%"
                  stopColor="#2ba8fb"
                  stopOpacity="0.5"
                ></stop>
              </linearGradient>

              <linearGradient
                id="traceGradient3"
                x1="250"
                y1="380"
                x2="400"
                y2="400"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#2ba8fb" stopOpacity="1"></stop>
                <stop
                  offset="100%"
                  stopColor="#2ba8fb"
                  stopOpacity="0.5"
                ></stop>
              </linearGradient>

              <linearGradient
                id="traceGradient4"
                x1="650"
                y1="120"
                x2="500"
                y2="100"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#2ba8fb" stopOpacity="1"></stop>
                <stop
                  offset="100%"
                  stopColor="#2ba8fb"
                  stopOpacity="0.5"
                ></stop>
              </linearGradient>
            </defs>

            <rect
              x="-2000"
              y="-2000"
              width="5000"
              height="5000"
              fill="url(#gridPattern)"
            />

            <g id="browser" transform="translate(0, 200)">
              <rect
                x="250"
                y="120"
                width="400"
                height="260"
                rx="8"
                ry="8"
                className="browser-frame"
              ></rect>
              <rect
                x="250"
                y="120"
                width="400"
                height="30"
                rx="8"
                ry="8"
                className="browser-top"
              ></rect>
              <text
                x="294"
                y="140"
                textAnchor="middle"
                className="loading-text"
              >
                Loading...
              </text>
              <rect
                x="270"
                y="160"
                width="360"
                height="20"
                className="skeleton"
              ></rect>
              <rect
                x="270"
                y="190"
                width="200"
                height="15"
                className="skeleton"
              ></rect>
              <rect
                x="270"
                y="215"
                width="300"
                height="15"
                className="skeleton"
              ></rect>
              <rect
                x="270"
                y="240"
                width="360"
                height="90"
                className="skeleton"
              ></rect>
              <rect
                x="270"
                y="340"
                width="180"
                height="20"
                className="skeleton"
              ></rect>
            </g>

            <g id="traces" transform="translate(0, 200)">
              <path d="M100 300 H250 V120" className="trace-flow"></path>
              <path d="M800 200 H650 V380" className="trace-flow"></path>
              <path d="M400 520 V380 H250" className="trace-flow"></path>
              <path d="M500 50 V120 H650" className="trace-flow"></path>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default LogoLoader;
