import React, { useState } from "react";
import classes from "./Working.module.css";
import cards from "../dataToBeRender/WorkData";
import WorkingCard from "./WorkingCard";

const Working = () => {
  const [card, setCard] = useState(-1);

  const handleSetCard = () => {
    setCard(-1);
  };
  return (
    <div className={classes.col} id="Projects">
      {card !== -1 && (
        <WorkingCard data={cards[card]} setCard={handleSetCard} />
      )}
      <div className={classes.row}>
        <div className={classes.working}>
          <div className={classes.heading}>Projects</div>
          <div className={classes.works}>
            {cards.map((card, index) => (
              <div className={classes.zoomOutAnimation} key={index}>
                <div
                  key={index}
                  className={classes.work}
                  onClick={() => {
                    setCard(index);
                  }}
                  id={`projects-${index + 1}`}
                >
                  <div className={classes.link_svg}>
                    <img src="link.svg" alt="link" />
                  </div>
                  <div className={classes.work_info}>{card.website}</div>
                  <img
                    src={card.src}
                    className={classes.img_fluid}
                    alt="Projects_image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
