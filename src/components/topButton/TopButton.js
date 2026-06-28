import React from "react";
import "../../styles/components/topButton/TopButton.css";

export default function TopButton({ theme }) {
  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    const topButton = document.getElementById("topButton");
    if (topButton) {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        "--btn-color": theme.body,
        "--btn-bg": theme.text,
      }}
      title="Go up"
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}
