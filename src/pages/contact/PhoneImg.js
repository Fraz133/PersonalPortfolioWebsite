import React, { Component } from "react";

export default class PhoneImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="phone-whatsapp-illustration"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Subtle drop shadows */}
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodOpacity="0.15" />
          </filter>
          <filter id="glow-wa" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="phone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.text} />
            <stop offset="100%" stopColor={theme.imageHighlight} />
          </linearGradient>
        </defs>

        <style>
          {`
            @keyframes phoneFloat {
              0% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-15px) rotate(1deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
            @keyframes waBubbleFloat {
              0% { transform: translate(0px, 0px) scale(1); }
              50% { transform: translate(5px, -10px) scale(1.05); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            @keyframes callBubbleFloat {
              0% { transform: translate(0px, 0px) scale(1); }
              50% { transform: translate(-8px, -6px) scale(1.03); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            @keyframes pulseCircle {
              0% { r: 160; opacity: 0.15; }
              50% { r: 190; opacity: 0.25; }
              100% { r: 160; opacity: 0.15; }
            }
            .anim-phone {
              animation: phoneFloat 6s ease-in-out infinite;
              transform-origin: center;
            }
            .anim-wa-bubble {
              animation: waBubbleFloat 5s ease-in-out infinite;
              transform-origin: 320px 220px;
            }
            .anim-call-bubble {
              animation: callBubbleFloat 5.5s ease-in-out infinite 0.5s;
              transform-origin: 480px 380px;
            }
            .anim-bg-circle {
              animation: pulseCircle 4s ease-in-out infinite alternate;
              transform-origin: center;
            }
          `}
        </style>

        {/* Dynamic Glowing Blob Background */}
        <circle
          cx="400"
          cy="300"
          r="170"
          fill={theme.imageHighlight}
          className="anim-bg-circle"
        />

        {/* Decorative Grid Dots */}
        <g fill={theme.secondaryText} opacity="0.2">
          <circle cx="200" cy="120" r="3" />
          <circle cx="220" cy="120" r="3" />
          <circle cx="240" cy="120" r="3" />
          <circle cx="200" cy="140" r="3" />
          <circle cx="220" cy="140" r="3" />
          <circle cx="240" cy="140" r="3" />
          <circle cx="200" cy="160" r="3" />
          <circle cx="220" cy="160" r="3" />
          <circle cx="240" cy="160" r="3" />
          <circle cx="560" cy="420" r="3" />
          <circle cx="580" cy="420" r="3" />
          <circle cx="600" cy="420" r="3" />
          <circle cx="560" cy="440" r="3" />
          <circle cx="580" cy="440" r="3" />
          <circle cx="600" cy="440" r="3" />
          <circle cx="560" cy="460" r="3" />
          <circle cx="580" cy="460" r="3" />
          <circle cx="600" cy="460" r="3" />
        </g>

        {/* Main Phone Object */}
        <g className="anim-phone" filter="url(#shadow)">
          {/* Phone Body / Outer Chassis */}
          <rect
            x="310"
            y="130"
            width="180"
            height="340"
            rx="28"
            fill="url(#phone-grad)"
          />
          {/* Inner Screen */}
          <rect
            x="320"
            y="150"
            width="160"
            height="300"
            rx="18"
            fill={theme.body}
          />
          {/* Top Speaker / Camera Notch */}
          <rect
            x="375"
            y="137"
            width="50"
            height="6"
            rx="3"
            fill="#1e1e2f"
            opacity="0.8"
          />
          <circle cx="435" cy="140" r="3" fill="#1e1e2f" opacity="0.8" />

          {/* Screen UI Elements (Mock Dashboard) */}
          <rect
            x="340"
            y="180"
            width="120"
            height="25"
            rx="6"
            fill={theme.highlight}
            opacity="0.7"
          />
          <rect
            x="350"
            y="188"
            width="50"
            height="8"
            rx="4"
            fill={theme.text}
            opacity="0.3"
          />

          <rect
            x="340"
            y="220"
            width="120"
            height="60"
            rx="10"
            fill={theme.compImgHighlight}
            opacity="0.5"
          />
          <circle
            cx="365"
            cy="250"
            r="15"
            fill={theme.imageHighlight}
            opacity="0.6"
          />
          <rect
            x="390"
            y="242"
            width="55"
            height="6"
            rx="3"
            fill={theme.text}
            opacity="0.4"
          />
          <rect
            x="390"
            y="254"
            width="35"
            height="6"
            rx="3"
            fill={theme.text}
            opacity="0.4"
          />

          <rect
            x="340"
            y="295"
            width="120"
            height="60"
            rx="10"
            fill={theme.compImgHighlight}
            opacity="0.5"
          />
          <circle
            cx="435"
            cy="325"
            r="15"
            fill={theme.jacketColor}
            opacity="0.6"
          />
          <rect
            x="355"
            y="317"
            width="50"
            height="6"
            rx="3"
            fill={theme.text}
            opacity="0.4"
          />
          <rect
            x="355"
            y="329"
            width="30"
            height="6"
            rx="3"
            fill={theme.text}
            opacity="0.4"
          />

          <rect
            x="340"
            y="370"
            width="120"
            height="50"
            rx="10"
            fill={theme.highlight}
            opacity="0.7"
          />
          <circle cx="400" cy="395" r="12" fill={theme.text} opacity="0.15" />
        </g>

        {/* WhatsApp Floating Chat Bubble */}
        <g className="anim-wa-bubble" filter="url(#shadow)">
          <circle cx="280" cy="220" r="45" fill="#25D366" />
          {/* Speech bubble arrow */}
          <polygon points="280,265 295,275 295,260" fill="#25D366" />

          {/* WhatsApp FontAwesome Icon Representation */}
          <path
            d="M280,195c-13.8,0-25,11.2-25,25c0,4.4,1.1,8.6,3.3,12.3l-3.5,12.8l13.1,-3.4c3.6,2,7.6,3,12.1,3c13.8,0,25,-11.2,25,-25C305,206.2,293.8,195,280,195zM292.5,231.1c-0.6,1.7 -3.5,3.3 -5,3.5c-1.4,0.2 -3.2,0.3 -5.2,-0.3c-7.7,-2.5 -12.7,-10 -13.1,-10.5c-0.4,-0.5 -3,-4 -3,-7.7c0,-3.7 1.9,-5.5 2.6,-6.3c0.7,-0.8 1.5,-1 2,-1c0.5,0 1,0 1.5,0c0.4,0 1,-0.2 1.5,1c0.5,1.3 1.8,4.4 2,4.8c0.2,0.4 0.3,0.8 0,1.4c-0.3,0.6 -0.4,1 -0.9,1.5c-0.5,0.5 -1,1.2 -1.4,1.6c-0.4,0.4 -0.9,0.9 -0.4,1.8c0.5,0.9 2.2,3.6 4.7,5.8c3.2,2.8 5.9,3.7 6.8,4.1c0.9,0.4 1.4,0.3 1.9,-0.3c0.5,-0.6 2.2,-2.6 2.8,-3.5c0.6,-0.9 1.2,-0.7 2,-0.4c0.8,0.3 5.1,2.4 6,2.8c0.9,0.4 1.5,0.6 1.7,1C294.6,226.7,293.1,229.4,292.5,231.1z"
            fill="#FFF"
          />
        </g>

        {/* Call/Phone Floating Bubble */}
        <g className="anim-call-bubble" filter="url(#shadow)">
          <circle cx="520" cy="380" r="45" fill={theme.imageHighlight} />
          {/* Speech bubble arrow */}
          <polygon
            points="520,425 505,435 505,420"
            fill={theme.imageHighlight}
          />

          {/* Phone Receiver Icon Representation */}
          <path
            d="M520,358c-12,0 -22,10 -22,22c0,12 10,22 22,22c12,0 22,-10 22,-22C542,368 532,358 520,358zM527.7,390.9c-2.4,2.4 -5.5,2.1 -7.7,-0.1c-1.3,-1.3 -2.6,-2.6 -3.8,-3.8c-1.1,-1.1 -1.1,-2.9 0,-4l2,-2c0.6,-0.6 1.5,-0.6 2.1,0l1.7,1.7c0.6,0.6 0.6,1.5 0,2.1l-0.7,0.7c-0.4,0.4 -0.4,1 0,1.4c1.1,1.1 2.3,2.3 3.4,3.4c0.4,0.4 1,0.4 1.4,0l0.7,-0.7c0.6,-0.6 1.5,-0.6 2.1,0l1.7,1.7c0.6,0.6 0.6,1.5 0,2.1L527.7,390.9z"
            fill="#FFF"
            transform="scale(1.1) translate(-47px, -35px)"
          />
        </g>
      </svg>
    );
  }
}
