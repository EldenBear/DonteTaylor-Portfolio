import React from "react";
import Project from "../Project";
import "../../styles/Portfolio.css";
/*Portfolio page*/
export default function Portfolio() {
  return (
    <div className="body">
      <h1 id="portfolioText">Portfolio</h1>
      <Project
        name={"JabberWocky"}
        src={require("../../images/JWwelcome.png")}
        link={"https://boiling-mountain-88128.herokuapp.com/"}
        githubLink={"https://github.com/mmoghal/jabberwocky"}
        description={
          "JabberWocky is a web application where book lovers can virtually come together to discuss their favorite books and find their next read. We allow users to connect by sharing their opinions through book reviews and reading lists."
        }
      />

      <Project
        name={"Watch Party"}
        src={require("../../images/WPScreenshot.png")}
        link={"https://santos-al.github.io/Watch-Party/"}
        githubLink={"https://github.com/santos-al/Watch-Party"}
        description={
          "Watch Party is an app that provides individuals with the information regarding the movie from when it was made, awards won, and ratings from various rating agencies."
        }
      />

      <Project
        name={"Weather App"}
        src={require("../../images/Weather-App-SS.png")}
        link={"https://eldenbear.github.io/Weather-Application/"}
        githubLink={"https://github.com/EldenBear/Weather-Application"}
        description={
          "This project is a simple weather application that takes input from the user and displays the weather for the current day as well as a 5-day forecast. It uses the openweathermap API to get the information to the user."
        }
      />

      <Project
        name={"Tech-Blog"}
        src={require("../../images/tech-blogSC2.png")}
        link={"https://tech-blog-rbc.herokuapp.com/"}
        githubLink={"https://github.com/EldenBear/Tech-Blog"}
        description={
          "This Tech Blog application is a CMS-style blog site that allows the user to create blog post, publish articles, and share their thoughts & opinions on posts through the comment section."
        }
      />

      <Project
        name={"Password Generator"}
        src={require("../../images/PWgen-SS.png")}
        link={"https://eldenbear.github.io/Password-Generator-RBC/"}
        githubLink={"https://github.com/EldenBear/Password-Generator-RBC"}
        description={
          "This app is a Password Generator that will take in values from the user and spit out a random password for the user to use. This will help the user to obtain stronger passwords than they may have come up with themselves."
        }
      />

      <Project
        name={"JavaScript Quiz"}
        src={require("../../images/NewQuizScreenshot.png")}
        link={"https://eldenbear.github.io/JavaScript-Quiz-RBC/"}
        githubLink={"https://github.com/EldenBear/JavaScript-Quiz-RBC"}
        description={
          "This website is a basic JavaScript fundamentals quiz. It has a timer that also acts as the score for the user at the end of the quiz."
        }
      />
    </div>
  );
}
