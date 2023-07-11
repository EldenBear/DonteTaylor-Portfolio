import React from "react";
import "../styles/Footer.css";
/*Footer Component*/
export default function Footer() {
  return (
    <footer className="footer">
      <div id="footer">
        <a
          href="https://github.com/EldenBear"
          className="footer-image-container"
        >
          <img src={require("../images/github (1).png")} alt="github" className="logo"></img>
        </a>

        <a
          href="https://www.linkedin.com/in/ladonte-taylor/"
          className="footer-image-container"
        >
          <img
            src= {require("../images/linkedin (1).png")}
            alt="linkedin"
            className="logo"
          ></img>
        </a>

        <a
          href="https://stackoverflow.com/users/22206512/donte-taylor"
          className="footer-image-container"
        >
          <img
            src={require("../images/9567026_stack_overflow_development_icon.png")}
            alt="Stack Overflow"
            className="logo"
          ></img>
        </a>
      </div>
    </footer>
  );
}
