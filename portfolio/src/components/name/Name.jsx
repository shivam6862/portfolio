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
      if (count % 4 == 2) {
        setFullText("Mechanical Engineering");
        setCount(++count);
      } else if (count % 4 == 0) {
        setFullText("Full Stack Developer");
        setCount(++count);
      } else if (count % 4 == 1) {
        setFullText("Competitive Programmer");
        setCount(++count);
      } else {
        setFullText("Machine learning enthusiast");
        setCount(++count);
      }
    }
  }, [index]);

  return (
    <div className={classes.col} id="Intro">
      <div className={classes.row}>
        <div className={classes.box}>
          <div className={classes.circle}></div>
          <div className={classes.name}>Hi ! I'm Shivam Kumar</div>
          <div className={classes.nameeffect}>{text}</div>
          <p>
            LeetCode, Kaggle Expert, and GitHub Maestro, I am an enthusiastic
            problem solver with a passion for collaborative innovation in tech.
            With over 50+ repos, I demonstrate proficiency in data science and
            am recognized as a Kaggle Expert, actively contributing to the
            Kaggle Notebook. Beyond data science, I am also a skilled web
            developer with expertise in frontend technologies such as Next.js
            and React, as well as backend technologies including Node.js and
            Django. My commitment to continuous learning and tackling challenges
            drives me to excel in both data-driven solutions and web development
            projects. I thrive in dynamic environments where creativity and
            teamwork are valued, eager to contribute to transformative projects
            in the ever-evolving tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Name;
