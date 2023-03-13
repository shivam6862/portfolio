import React from "react";
import classes from "./Tool.module.css";

const Tool = () => {
  const datas = [
    {
      text: "React",
      src: "/Tool/1.png",
    },
    {
      text: "Node Js",
      src: "/Tool/2.png",
    },
    {
      text: "MongoDb",
      src: "/Tool/3.jpg",
    },
    {
      text: "Javascript",
      src: "/Tool/4.png",
    },
    {
      text: "Css",
      src: "/Tool/5.png",
    },
    {
      text: "DSA",
      src: "/Tool/6.jpg",
    },
    {
      text: "DBMS",
      src: "/Tool/7.jpg",
    },
    {
      text: "C++",
      src: "/Tool/8.jpg",
    },
  ];

  return (
    <div className={classes.col}>
      <div className={classes.row}>
        <div className={classes.tooling}>
          <div className={classes.tooling_box}>
            {datas.map((data, index) => (
              <div key={index} className={classes.box_content}>
                <div className={classes.box_icon}>
                  <img src={data.src} alt="" className={classes.icon} />
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
