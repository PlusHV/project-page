import React from 'react';
import './styles.css';


// Function to dynamically import images based on their names
const importImage = (imageName) => {
  return require('./images/' + imageName);
};

const projectsData = [
  {
    title: 'Magical Uno',
    description: `Uno type card game made in the Unity Game Engine with anime style characters.
    Includes original music and game animations.
    Allows gameplay against computer controlled opponents.`,
    imageUrl: 'Face_FC.png',
    githubUrl: 'https://github.com/project1',
    demoUrl: 'https://demo.project1.com',
  },
  {
    title: 'Breakout in Bevy',
    description: 'Recreation of the breakout game using the Bevy game engine from the example guide. Includes extra features from the example including menus, pausing and text boxes.',
    imageUrl: 'Face_FC.png',
    githubUrl: 'https://github.com/project2',
    demoUrl: 'https://demo.project2.com',
  },
  {
    title: 'Positive Emblem',
    description: 'Web based recreation of the battle system of the strategy mobile game Fire Emblem Heroes. Allows user to freely customize characters and teams. Game systems such as battles, stat calculations and movement are implemented accurately to the original game allowing users to simulate scenarios freely. Implements over 700 unique characters and over 4000 equipable passive effects from the original game. Note - No longer being kept up to date so does not include all newly added characters or passive effects.',
    imageUrl: 'Face_FC.png',
    githubUrl: 'https://github.com/project2',
    demoUrl: 'https://demo.project2.com',
  },
  {
    title: 'Touhou Hidden Shot',
    description: 'Battleship style board game that could be played with another player or against a computer controlled player. Game sprites are based of the Touhou Project series with uniquely created art sprites.',
    imageUrl: 'Face_FC.png',
    githubUrl: 'https://github.com/project2',
    demoUrl: 'https://demo.project2.com',
  },
  {
    title: 'Gap Escape',
    description: 'Escape room puzzle game based off the game Portal. Created for play in VR but the web version currently only supports keyboard and mouse gameplay. Includes 4 levels of increasing difficulty to get players used to the controls and game mechanics.',
    imageUrl: 'Face_FC.png',
    githubUrl: 'https://github.com/project2',
    demoUrl: 'https://demo.project2.com',
  },
  // Add more projects as needed
];

const Project = ({ title, description, imageUrl, githubUrl, demoUrl }) => {
  const imagePath = importImage(imageUrl);
  return(
    <div className="project-panel">
      <div className="project">
         <img src={imagePath} alt={title} />
        <h3>{title}</h3>
        <div style = {{ whiteSpace: 'pre-line'}}>{description}</div>
        <div className="links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
      </div>
    </div>
  );
};



const ProjectList = () => (
  <div className="project-list">
    {projectsData.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </div>
);

const App = () => (
  <div className="app">
    <h1>My Projects</h1>
    <ProjectList />
  </div>
);

export default App;