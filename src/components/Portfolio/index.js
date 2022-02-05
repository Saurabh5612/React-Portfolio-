import React from "react";
import Project from "../Project";

function Portfolio() {
  //save projects as objects in array
  const projects = [
    
    {
      title: "pet adoption.png",
      description: "Future implementations for this page would be to add a map for the locations of the animals, to have the user, if interested in adopting a pet from the dashboard, to click a button to show interest. Another implementation would be to have a survey that will help the user select the perfect pet.",
      img: {
        srcId: "petadoption",
        alt: "image that shows pet adoption",
      },
      deployed: {
        href: "https://guarded-basin-05749.herokuapp.com/",
        text: "Pet Adoption ",
      },
      repo: {
        href: "https://github.com/Saurabh5612/Pet-Adoption",
        text: "Github Repository",
      },
      // techs: [
      //   "Node.js",
      //   "Bootstrap",
      //   "Express",
      //   "MySQL",
      //   "dotenv",
      //   "bcrypt",
      //   "Handlebars",
      //   "express-session",
      //   "connect-session-sequelize",
      //   "nodemon",
      // ],
    },
    {
      title:"amigosmovies",
      description:"To maintain a good health, we are socially isolating and spending more time indoors",
      img: {
        srcId:"amigosmovies",
        alt:"image that shows movies",
      },
      deployed: {
        href:"https://limitless-wildwood-24017.herokuapp.com/",
        text:"amigosmovies",
      },
      repo:{
        href:"https://github.com/carlosbarnola/4amigos-movies",
        text: "Github Repository",

      },
    },
  
    {
      title: "Budget Tracker",
      description: "Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.",
      img: {
        srcId: "pwa",
        alt: "image that shows Budget Tracker",
      },
      deployed: {
        href: "https://github.com/Saurabh5612/PWA-Budget-Tracker",
        text: "visit Budget Tracker",
      },
      repo: {
        href: "https://github.com/Saurabh5612/PWA-Budget-Tracker",
        text: "Github Repository",
      },
      // techs: ["Node.js", "Bulma", "express.js"],
    },
    {
      title: "Food dash app",
      description:
        "Our App was made for people trying to get out and find breweries near them! This will also give them the name, address, and URL of the brewery",
      img: {
        srcId: "fooddashapp",
        alt: "image that shows food",
      },
      deployed: {
        href: "'https://github.com/Saurabh5612/FoodDashAPP",
        text: "visit fooddashapp",
      },
      repo: {
        href: "https://saurabh5612.github.io/FoodDashAPP/",
        text: "Github Repository",
      },
      // techs: ["HTML/CSS', 'JavaScript'],
    },
    
    {
      title: "Weather App",
      description: "A weather forecast app",
      img: {
        srcId: "weather",
        alt: "image that shows forecast",
      },
      deployed: {
        href: "https://github.com/Saurabh5612/Weather-Dashboard",
        text: "visit Weather Dashboard!",
      },
      repo: {
        href: " https://saurabh5612.github.io/Weather-Dashboard/",
        text: "Github Repository",
      },
      // techs: ["Express"],
    },
  ];

  //map over projects array and pass objects to Projects.js component to be rendered
  return (
    <div>
      <ul>
        {projects.map((p, i) => {
          return (
            <li key={i}>
              <Project project={p} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Portfolio;