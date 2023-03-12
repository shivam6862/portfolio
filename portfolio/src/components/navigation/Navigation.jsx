import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.header_NavBars}>
      <div>Home</div>
      <div>Expertise</div>
      <div>Work</div>
      <div>Experience</div>
      <div>contact</div>
    </nav>
  );
};

export default Navigation;
