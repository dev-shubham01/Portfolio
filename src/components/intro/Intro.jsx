import React from "react";
import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There , I am</h2>
          <h1>Shubham Pandey</h1>
          <h3>Freelance <span>Developer</span></h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div> 
      </div>
    </div>
  );
}
