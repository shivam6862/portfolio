import React from "react";
import classes from "./Working.module.css";

const Working = () => {
  return (
    <div className={classes.col}>
      <div className={classes.row}>
        <div className={classes.working}>
          <div className={classes.heading}>Working</div>
          <div className={classes.works}></div>
        </div>
      </div>
    </div>
  );
};

export default Working;
