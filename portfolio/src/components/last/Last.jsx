import React from "react";
import classes from "./Last.module.css";

const Last = () => {
  return (
    <div className={classes.last} id="last">
      <div className={classes.container_fluid}>
        <div className={classes.row}>
          <div className={classes.col}>
            <ul className={classes.nav}>
              <li className={classes.nav_item}>
                <a className={classes.nav_link} href="#name">
                  Name
                </a>
              </li>
              <li className={classes.nav_item}>
                <a className={classes.nav_link} href="#about">
                  About me
                </a>
              </li>
              <li className={classes.nav_item}>
                <a className={classes.nav_link} href="#language">
                  Language
                </a>
              </li>
              <li className={classes.nav_item}>
                <a className={classes.nav_link} href="#Platform">
                  Platform
                </a>
              </li>
              <li className={classes.nav_item}>
                <a className={classes.nav_link} href="#work">
                  Work
                </a>
              </li>
              <li className={classes.nav_item}>
                <a className={classes.nav_link} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <p className={classes.copyright}>&copy; 2024.. Made by shivam6862</p>
        </div>
      </div>
    </div>
  );
};

export default Last;
