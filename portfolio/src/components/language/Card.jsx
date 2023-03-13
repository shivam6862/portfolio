import React from "react";
import classes from "./Card.module.css";
import Button from "../ui/Button";

const Card = () => {
  const cards = [
    {
      website: "Codeforces coding",
      src: "/codeforces.png",
      src2: "/codeforces1.png",
      language: "Competitive coding",
      webSiteName: "Codeforces",
      userId: "1_Shivam",
      websiteLink: "https://codeforces.com/profile/1_shivam",
    },
    {
      website: "Leetcode coding",
      src: "/leetcode.png",
      language: "Data structures and algorithms",
      webSiteName: "Leetcode",
      userId: "1_Shivam",
      websiteLink: "https://leetcode.com/1_shivam/",
    },
    {
      website: "Github",
      src: "/github.png",
      language: "Source code",
      webSiteName: "Github",
      userId: "shivam6862",
      websiteLink: "https://github.com/shivam6862",
    },
  ];

  return (
    <div className={classes.completecard}>
      <div className={classes.popular_books}>
        {cards.map((card, index) => (
          <div key={index} className={classes.rotate}>
            <div className={classes.book_card}>
              <div className={classes.card_header}>{card.website}</div>
              <div className={classes.card_body}>
                <img src={card.src} className={classes.img_fluid} />
              </div>
              <div className={classes.card_footer}>{card.language}</div>
              <div className={classes.back}>
                <div className={classes.back_content}>
                  <div className={classes.texting}>{card.webSiteName} </div>
                  <div className={classes.about}>{card.userId}</div>
                  <img src={card.src2} className={classes.img_fluid} />
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
  );
};

export default Card;
