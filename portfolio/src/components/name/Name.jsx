import React from "react";
import { useState, useEffect } from "react";
import classes from "./Name.module.css";

const Name = () => {
  const [text, setText] = useState("");
  var [count, setCount] = useState(0);
  const [fullText, setFullText] = useState("Mechanical Engineering");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index <= fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 75);
    } else {
      setIndex(0);
      setText("");
      if (count % 3 == 2) {
        setFullText("Mechanical Engineering");
        setCount(++count);
      } else if (count % 3 == 0) {
        setCount(++count);
        setFullText("Full Stack Developer");
      } else {
        setCount(++count);
        setFullText("Competitive Programmer");
      }
    }
  }, [index]);

  return (
    <div className={classes.col} id="name">
      <div className={classes.row}>
        <div className={classes.box}>
          <div className={classes.circle}></div>
          <div className={classes.name}>Hi ! I'm Shivam Kumar</div>
          <div className={classes.nameeffect}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Name;
