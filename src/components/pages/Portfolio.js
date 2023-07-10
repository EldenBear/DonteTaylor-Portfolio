import React from 'react';
import Project from '../Project';
import '../../styles/Portfolio.css';

export default function Portfolio() {
  return (
    <div className='body'>
      <h1 id='portfolioText'>Portfolio</h1>
      <Project name={'JabberWocky'} src={'../../../JWwelcome.png'} link={'https://boiling-mountain-88128.herokuapp.com/'} />
      <p className='projectDescription'>JabberWocky is a web application where book lovers can virtually come together to discuss their favorite books and find their next read. We allow users to connect by sharing their opinions through book reviews and reading lists. </p>

      <Project name={'Watch Party'} src={'../../../WPScreenshot.png'} link={'https://santos-al.github.io/Watch-Party/'} />
      <p className='projectDescription'>Watch Party is an app that provides individuals with the information regarding the movie from when it was made, awards won, and ratings from various rating agencies. </p>

      <Project name={'Weather App'} src={'../../../Weather-App-SS.png'} link={'https://eldenbear.github.io/Weather-Application/'} />
      <p className='projectDescription'>This project is a simple weather application that takes input from the user and displays the weather for the current day as well as a 5-day forecast. It uses the openweathermap API to get the information to the user.</p>

      <Project name={'Tech-Blog'} src={'../../../tech-blogSC2.png'} link={'https://tech-blog-rbc.herokuapp.com/'} />
      <p className='projectDescription'>This Tech Blog application is a CMS-style blog site that allows the user to create blog post, publish articles, and share their thoughts & opinions on posts through the comment section.</p>

      <Project name={'Password Generator'} src={'../../../PWgen-SS.png'} link={'https://eldenbear.github.io/Password-Generator-RBC/'} />
      <p className='projectDescription'>This app is a Password Generator that will take in values from the user and spit out a random password for the user to use. This will help the user to obtain stronger passwords than they may have come up with themselves. </p>

      <Project name={'JavaScript Quiz'} src={'../../../NewQuizScreenshot.png'} link={'https://eldenbear.github.io/JavaScript-Quiz-RBC/'} />
      <p className='projectDescription'>This website is a basic JavaScript fundamentals quiz. It has a timer that also acts as the score for the user at the end of the quiz.</p>
    </div>
  );
}
