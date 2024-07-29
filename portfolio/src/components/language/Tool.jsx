import React, { useRef, useEffect } from "react";
import classes from "./Tool.module.css";
import datas from "../dataToBeRender/ToolData";

const Tool = () => {
  const toolingRef = useRef(null);

  const applyAnimations = () => {
    const toolingBox = toolingRef.current;
    const rows =
      getComputedStyle(toolingBox).gridTemplateRows.split(" ").length;
    const cols =
      getComputedStyle(toolingBox).gridTemplateColumns.split(" ").length;
    const box = toolingBox.children;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (box[i * cols + j]) {
          box[i * cols + j].classList.remove(classes["even-animation"]);
          box[i * cols + j].classList.remove(classes["odd-animation"]);
          if (i % 2 === 0) {
            box[i * cols + j].classList.add(classes["even-animation"]);
          } else {
            box[i * cols + j].classList.add(classes["odd-animation"]);
          }
        }
      }
    }
  };

  useEffect(() => {
    applyAnimations();
    window.addEventListener("resize", applyAnimations);
    return () => {
      window.removeEventListener("resize", applyAnimations);
    };
  }, []);

  return (
    <div className={classes.col}>
      <div className={classes.row}>
        <div className={classes.tooling}>
          <div className={classes.tooling_box} ref={toolingRef}>
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
