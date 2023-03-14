import React from "react";
import classes from "./Language.module.css";
import Card from "./Card";
import Tool from "./Tool";

const Language = () => {
  return (
    <div className={classes.col} id="language">
      <div className={classes.row}>
        <div className={classes.language}>
          <div className={classes.heading}>Language and Platform Used</div>
          <div className={classes.tool_card}>
            <div className={classes.tool}>
              <Tool />
            </div>
            <div className={classes.card}>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
