import React from "react";
import "../../styles/About.css";
/*About Me page*/
export default function About() {
  return (
    <div className="body">
      <h1 id="aboutText">About Me</h1>
      <img src= {require("../../images/prof-pic1_thumbnail.png")} alt="selfie" id="selfie"></img>
      <p id="aboutInfo">
        My name is LaDonte Taylor and I'm a full stack web developer currently
        studying at Rutgers Bootcamp. I plan on earning my certificate in August
        2023 and applying my newly learned skills into the field. I am known as
        an innovative problem solver with high attention to detail. My area of
        focus is front-end web development using React. In my Portfolio section
        you'll see projects I've worked on solo as well as my group projects
        from Rutgers.
      </p>
    </div>
  );
}
