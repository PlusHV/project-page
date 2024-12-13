import React from 'react';
import './styles.css';
import ImageSlider from './ImageSlider';

// Function to dynamically import images based on their names
// const importImage = (imageName) => {
//   return require('./images/' + imageName);
// };

const projectsData = [
  {
    title: 'Magical Uno',
    description: [
      'Uno type card game made in the Unity Game Engine with anime style characters.',
      'Includes original music and game animations.',
      'Allows gameplay against computer controlled opponents.',
    ],
    githubUrl: 'https://github.com/PlusHV/magical-uno',
    demoUrl: 'https://plushv.github.io/magical-uno-page/',
  },
  /*{
    title: 'Breakout in Bevy',
    description: 'Recreation of the breakout game using the Bevy game engine from the example guide. Includes extra features from the example including menus, pausing and text boxes.',
    listItems: [
      'Recreation of the breakout game using the Bevy game engine from the example guide.',
      'Includes extra features from the example including menus, pausing and text boxes.'
    ],
    imageUrl: 'Face_FC.png',
    githubUrl: 'https://github.com/project2',
    demoUrl: 'https://demo.project2.com',
  },*/
  {
    title: 'Positive Emblem',
    description: [
      'Web based recreation of the battle system of the strategy mobile game Fire Emblem Heroes.',
      'Allows user to freely customize characters and teams.',
      'Game systems including battles, stat calculations and movement are implemented accurately to the original game allowing users to simulate scenarios freely.',
      'Implements over 700 unique characters and over 4000 equipable passive effects from the original game.',
      'Note - No longer being kept up to date so does not include all newly added characters or passive effects.'
    ],
    githubUrl: 'https://github.com/PlusHV/positiveEmblem',
    demoUrl: 'https://plushv.github.io/positiveEmblem/',
  },
  {
    title: 'Touhou Hidden Shot',
    description: ['Battleship style board game that could be played with another player or against a computer controlled player.',
      'Game sprites are based of the Touhou Project series with uniquely created art sprites.'],
    githubUrl: 'https://github.com/PlusHV/Touhou-Hidden-Shot',
    demoUrl: 'https://plushv.github.io/Hidden-Shot-Page/',
  },
  {
    title: 'Gap Escape',
    description: ['Escape room puzzle game inspired by the game Portal.',
      'Originally created for play in VR',
      'Web version currently only supports keyboard and mouse gameplay.',
      'Includes 4 levels of increasing difficulty to get players used to the controls and game mechanics.'],
    githubUrl: "",
    demoUrl: 'https://plushv.github.io/gap-escape-page/',
  }
  // Add more projects as needed
];
//<img src={imagePath} alt={title} />
const Project = ({ title, description, githubUrl, demoUrl }) => {

  let githubText = "";
  if (githubUrl !== ""){
    githubText = "Github";
  }

  return(
    <div className="project-panel">
      <div className="project">
         
         <div style = {containerStyles}>
          <ImageSlider slides = {projectSlides[title].slides}/>
          </div>
        <h3>{title}</h3>
        <div style = {{ whiteSpace: 'pre-line'}}>
          <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>

        </div>
        <div className="links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">{githubText}</a>
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




const projectSlides = {

  
  "Magical Uno": {
    "slides": [{url: "MU1.png", title: "Magical Uno Image 1"},
            {url: "MU2.png", title: "Magical Uno Image 2"},
            {url: "MU3.png", title: "Magical Uno Image 3"},
            {url: "MU4.png", title: "Magical Uno Image 4"},
            {url: "MU5.png", title: "Magical Uno Image 5"},
            ],
    },
  "Touhou Hidden Shot": {
    "slides": [{url: "THS1.png", title: "Touhou Hidden Shot Image 1"},
            {url: "THS2.png", title: "Touhou Hidden Shot Image 2"},
            {url: "THS3.png", title: "Touhou Hidden Shot Image 3"},
            {url: "THS4.png", title: "Touhou Hidden Shot Image 4"},
            {url: "THS5.png", title: "Touhou Hidden Shot Image 5"},
            {url: "THS6.png", title: "Touhou Hidden Shot Image 6"},
            {url: "THS7.png", title: "Touhou Hidden Shot Image 7"},
            {url: "THS8.png", title: "Touhou Hidden Shot Image 8"},
            {url: "THS9.png", title: "Touhou Hidden Shot Image 9"},
            {url: "THS10.png", title: "Touhou Hidden Shot Image 10"},
            ],
    },
  "Positive Emblem": {
    "slides": [{url: "PE1.png", title: "Positive Emblem Image 1"},
            {url: "PE2.png", title: "Positive Emblem Image 2"},
            {url: "PE3.png", title: "Positive Emblem Image 3"},
            {url: "PE4.png", title: "Positive Emblem Image 4"},
            {url: "PE5.png", title: "Positive Emblem Image 5"},

            ],
  },
  "Gap Escape": {
    "slides": [{url: "GE1.png", title: "Gap Escape Image 1"},
            {url: "GE2.png", title: "Gap Escape Image 2"},
            {url: "GE3.png", title: "Gap Escape Image 3"},
            {url: "GE4.png", title: "Gap Escape Image 4"},
            {url: "GE5.png", title: "Gap Escape Image 5"},
            {url: "GE6.png", title: "Gap Escape Image 6"}],
  }


};

const containerStyles = {
  width: "100%",
  height: "100%",
  margin: "0 auto"

};

const App = () => (
  <div className="app">
    <h1>My Projects</h1>
    
    <ProjectList />
  </div>
);

export default App;