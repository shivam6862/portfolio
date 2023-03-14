import React from "react";
import classes from "./Working.module.css";
import Button from "../ui/Button";
import cards from "../dataToBeRender/WorkData";

const Working = () => {
  return (
    <div className={classes.col} id="work">
      <div className={classes.row}>
        <div className={classes.working}>
          <div className={classes.heading}>Working</div>
          <div className={classes.works}>
            {cards.map((card, index) => (
              <div key={index} className={classes.work}>
                <div className={classes.book_card}>
                  <div className={classes.work_info}>{card.website}</div>
                  <div className={classes.work_body}>
                    <img src={card.src} className={classes.img_fluid} />
                  </div>
                  <div className={classes.overview}>
                    <div className={classes.back_content}>
                      <div className={classes.about}>{card.userId}</div>
                      <div className={classes.texting}>{card.webSiteName} </div>
                      <div className={classes.button}>
                        <Button onClick={() => window.open(card.websiteLink)}>
                          Click
                        </Button>
                      </div>
                    </div>
                  </div>
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
