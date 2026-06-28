import React, { useState, useEffect } from "react";
import "./Typewriter.css";

const Typewriter = ({
  strings,
  loop = true,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const i = loopNum % strings.length;
    const fullText = strings[i];

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (text === fullText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timer = setTimeout(
          () => {
            setText(fullText.substring(0, text.length + 1));
          },
          text === "" ? 500 : typingSpeed
        );
      }
    }

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    loopNum,
    strings,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className="typewriter">
      <span>{text}</span>
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;
