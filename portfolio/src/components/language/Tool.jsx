import React from "react";
import classes from "./Tool.module.css";
import datas from "../dataToBeRender/ToolData";

const Tool = () => {
  return (
    <div className={classes.col}>
      <div className={classes.row}>
        <div className={classes.tooling}>
          <div className={classes.tooling_box}>
            {datas.map((data, index) => (
              <div key={index} className={classes.box_content}>
                <div className={classes.box_icon}>
                  <img src={data.src} alt={data.src} className={classes.icon} />
                </div>
                <div className={classes.box_text}>{data.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
