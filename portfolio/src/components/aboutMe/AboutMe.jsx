import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  const texts = [
    {
      text: "Hello! My name is Shivam Kumar and I enjoy creating things that live on the internet. My interest in web development started back in 2022 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
    },
    {
      text: "When it comes to business, first impressions matter, and good website design is the key to capitalizing on them. An excellent site is not judged solely on its looks, but on its functionality and usability as well. My experience as a programmer allows me to come up with intelligent solutions to technical challenges, while at the same time designing sleek and visually appealing websites. Aside from having extensive knowledge of recognized technical standards, I am conversant with modern building practices.",
    },
  ];

  return (
    <div className={classes.col} id="#about">
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
