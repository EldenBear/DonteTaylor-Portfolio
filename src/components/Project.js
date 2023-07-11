import React from "react";

export default function Project(props) {
  return (
    /*Component used for Portfolio page*/
    <>
      <div className="project">
        <div>{props.name}</div>
        <a href={props.link}>
          <img src={props.src} href={props.link} alt="Project Screenshot"></img>
        </a>
      </div>
      <a href={props.githubLink} alt="Deployed Github" className="githubDeploy">
        <img
          src="../../../github (2).png"
          alt="Projects Github Deployment"
          className="githubLinkIcon"
        ></img>
      </a>
      <p className="projectDescription">{props.description}</p>
    </>
  );
}
