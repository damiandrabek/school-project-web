import './App.css';
import React, { useState } from 'react';

import Intro from './components/Intro';
import Scenario from './components/Scenario';
import Results from './components/Results';

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const [currentScenario, setCurrentScenario] = useState(0);

  const [userChoices, setUserChoices] = useState([]);

  const [points, setPoints] = useState({
    military: 0,
    ethical: 0,
    resources: 0,
  });

  const scenarios = [
    {
      id: 1,
      title: "Scenario 1",
      description: "A critical decision in a tense battle...",
      options: {
        A: { military: 2, ethical: -1, resources: 1 },
        B: { military: -1, ethical: 2, resources: 0 },
        C: { military: 0, ethical: 0, resources: 2 },
      },
    },
    // Add more scenarios here
  ];

  const handleStart = () => {
    setIsGameStarted(true);
  }

  const handleRestart = () => {
    setCurrentScenario(0);
    setUserChoices([]);
    setPoints({ military: 0, ethical: 0, resources: 0 });
    setIsGameStarted(false);
  };

  const handleChoice = (choice) => {
    // Update points based on choice
    const selectedPoints = scenarios[currentScenario].options[choice];

    setPoints((prevPoints) => ({
      military: prevPoints.military + selectedPoints.military,
      ethical: prevPoints.ethical + selectedPoints.ethical,
      resources: prevPoints.resources + selectedPoints.resources,
    }));

    // Save the user's choice
    setUserChoices((prevChoices) => [...prevChoices, choice]);
    console.log(userChoices)

    // Move to the next scenario
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
    } else {
      setCurrentScenario(null); // Indicate completion
    }
  };


  return (
    <div>
      {isGameStarted !== true ? <Intro onStart={handleStart}/> : (
        currentScenario !== null ? (
          <Scenario
            scenario={scenarios[currentScenario]}
            onChoice = {handleChoice}
          />
        ) : (
          <Results 
            points={points}
            onRestart={handleRestart}/>
      ))}
    </div>
  );
}

export default App;
