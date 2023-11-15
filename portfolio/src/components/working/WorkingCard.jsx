import React from "react";
import classes from "./WorkingCard.module.css";

const WorkingCard = ({ data, setCard }) => {
  return (
    <>
      <div className={classes.background} onClick={setCard}></div>
      <div className={classes.container}>
        <img
          src="cross.svg"
          alt="image"
          className={classes.cross}
          onClick={setCard}
        />
        <div className={classes.box}>
          <h1>{data.website}</h1>
          <div className={classes.websiteimage}>
            <img src={data.src} alt={data.website} />
          </div>
          <p>{data.userId}</p>
          <p>{data.webSiteName}</p>
          <button>
            <a href={data.websiteLink} target="_blank">
              Visit Github
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkingCard;
