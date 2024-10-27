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
      title: "Scenár 1 - Kybernetický útok na kritickú infraštruktúru",
      description:
        "Nepriateľský štát spustil kybernetický útok zameraný na energetickú sieť vašej krajiny, čo viedlo k rozsiahlym výpadkom elektriny. Podľa vašich spravodajských informácií ide o koordinované úsilie o destabilizáciu vašej krajiny.",
      options: {
        A: { military: 3, ethical: -2, resources: 1 },
        B: { military: 1, ethical: 2, resources: 2 },
        C: { military: 0, ethical: 3, resources: 1 },
      },
    },

    {
      id: 2,
      title: "Scenár 2 - Rozhodovanie s asistenciou AI",
      description:
        "Máte prístup k pokročilému systému umelej inteligencie, ktorý dokáže s vysokou presnosťou predpovedať výsledky vojenských stretov. Jeho odporúčania však často uprednostňujú agresívne taktiky, ktoré môžu porušovať medzinárodné zákony.",
      options: {
        A: { military: 3, ethical: -1, resources: 2 },
        B: { military: 1, ethical: 3, resources: 1 },
        C: { military: -1, ethical: 3, resources: 1 },
      },
    },

    {
      id: 3,
      title: "Scenár 3 - Útok bezpilotným lietadlom",
      description:
        "Identifikovali ste vysoko hodnotný cieľ v nepriateľskom komplexe. Bezpilotné lietadlo je pripravené na okamžité nasadenie, ale v prípade útoku hrozí riziko civilných obetí.",
      options: {
        A: { military: 3, ethical: -2, resources: 1 },
        B: { military: 1, ethical: 3, resources: 2 },
        C: { military: -1, ethical: 3, resources: 1 },
      },
    },

    {
      id: 4,
      title: "Scenár 4 - Nasadenie novej technológie",
      description:
        "Vaša armáda vyvinula špičkovú technológiu, ktorá môže zlepšiť komunikáciu na bojisku. Nebola však dôkladne otestovaná v reálnych bojových podmienkach.",
      options: {
        A: { military: 3, ethical: -2, resources: -1 },
        B: { military: 1, ethical: 3, resources: 2 },
        C: { military: -1, ethical: 2, resources: 1 },
      },
    },

    {
      id: 5,
      title: "Scenár 5 - Hybriné vojnové taktiky",
      description:
        "Rivalský štát používa hybridné vojnové taktiky, ktoré kombinujú konvenčné vojenské sily s kybernetickými útokmi, dezinformačnými kampaňami a ekonomickým nátlakom. Musíte sa rozhodnúť, ako efektívne čeliť týmto taktikám bez toho, aby ste vyvolali plnohodnotný konflikt.",
      options: {
        A: { military: 3, ethical: -2, resources: -1 },
        B: { military: 1, ethical: 2, resources: 2 },
        C: { military: 0, ethical: 3, resources: 1 },
      },
    },
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
