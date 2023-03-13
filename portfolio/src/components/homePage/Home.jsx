import React from "react";
import classes from "./Home.module.css";
import Name from "../name/Name";
import AboutMe from "../aboutMe/AboutMe";
import Language from "../language/Language";
import Working from "../working/Working";
import Contact from "../contact/Contact";
import Last from "../last/Last";

const Home = () => {
  return (
    <div className={classes.home}>
      <Name />
      <AboutMe />
      <Language />
      <Working />
      <Contact />
      <Last />
    </div>
  );
};

export default Home;
