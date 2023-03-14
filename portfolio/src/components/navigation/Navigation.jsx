import React from "react";
import { useState, useEffect } from "react";
import Backdrop from "../ui/Backdrop";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  if (screenSize.dynamicWidth >= 1000 && isNavExpanded === true) {
    setIsNavExpanded(false);
  }

  return (
    <div className={classes.positionfixed}>
      <nav className={classes.navigation}>
        <div id="/" className={classes.active1}>
          <div className={classes.logo}>
            <img src="/logo.jpg" alt="logo"></img>
          </div>
        </div>
        <button
          className={
            isNavExpanded ? classes.hamburgerchange : classes.hamburger
          }
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </button>

        {isNavExpanded && (
          <Backdrop
            Id="backdrop"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          />
        )}

        <div
          className={
            isNavExpanded
              ? classes.navigationmenuexpanded
              : classes.navigationmenu
          }
        >
          <ul>
            <li className={classes.first}>
              <div
                id="/"
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <div className={classes.logo1}>
                  <img src="/logo.jpg" alt="logo"></img>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#name"
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Name
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#language"
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Language Know
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
