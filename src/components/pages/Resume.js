import React from 'react';
import '../../styles/Resume.css';
 
export default function Resume() {
  return (
    <div className='body'>
      <h1 id='resumeText'>Resume</h1>
      <p>Click on icon to download my resume </p>
      <a href='../../LaDonteTaylorResume.docx (1).pdf' download>
        <img src='../../cv.png' alt='resumePicture' className='resumeIcon'>
        </img>
      </a>
      <div>
      <h5>Front-End Proficiencies</h5>
      <ul className='resumeList'>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
      <h5>Back-End Proficiencies</h5>
      <ul className='resumeList'>
        <li>APIs</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>Model View Controller (MVC)</li>
        <li>REST</li>
        <li>Progressive Web Applications (PWA)</li>
      </ul>
      <h5>Database Proficiencies</h5>
      <ul className='resumeList'>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
      </div>
    </div>
  );
}
