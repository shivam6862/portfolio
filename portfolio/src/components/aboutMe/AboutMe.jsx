import React from "react";
import classes from "./AboutMe.module.css";
import texts from "../dataToBeRender/AboutData";

const AboutMe = () => {
  return (
    <div className={classes.col} id="about">
      <div className={classes.row}>
        <div className={classes.about}>
          <div className={classes.heading}>About Me</div>
          <div className={classes.details_photo}>
            <div className={classes.details}>
              {texts.map((text, index) => (
                <p key={index}>{text.text}</p>
              ))}
            </div>
            <div className={classes.photobox}>
              <div className={classes.photo}>
                <img src="/avatar.png" alt="avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
