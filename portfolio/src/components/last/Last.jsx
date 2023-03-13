import React from "react";
import classes from "./Last.module.css";

const Last = () => {
  return (
    <div className={classes.last}>
      <div className={classes.container_fluid}>
        <div className={classes.row}>
          <div className={classes.col}>
            <ul className={classes.nav}>
              <li className={classes.nav_item}>
                <div className={classes.nav_link}>Name</div>
              </li>
              <li className={classes.nav_item}>
                <div className={classes.nav_link}>About me</div>
              </li>
              <li className={classes.nav_item}>
                <div className={classes.nav_link}>Language and Platform</div>
              </li>
              <li className={classes.nav_item}>
                <div className={classes.nav_link}>Work</div>
              </li>
              <li className={classes.nav_item}>
                <div className={classes.nav_link}>Contact</div>
              </li>
            </ul>
          </div>
          <p className={classes.copyright}>
            &copy; Copyright 2023. Made by Shivam Kumar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Last;
