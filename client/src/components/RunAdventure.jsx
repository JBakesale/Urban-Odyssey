import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RunAdventure.scss";
import WarningModal from "./WarningModal";
// import MapsApi from "./MapsApi"

function RunAdventure({ adventure }) {
  const { adventure_name } = adventure;

  const adventure_steps = [
    {
      stepNumber: 1,
      title: "Start at Totem Poles",
      description: "Begin your adventure at the famous Totem Poles.",
      clues: [],
    },
    {
      stepNumber: 2,
      title: "SQUAT ATTACK!",
      description: "Do 10 squats to scare off the Troll by the Mermaid statue.",
      clues: [],
    },
    {
      stepNumber: 3,
      title: "Cardio Challenge",
      description:
        "Run or walk briskly to 1766 Robson, into the sacred realm known as Safeway",
      clues: [],
    },
    {
      stepNumber: 4,
      title: "Potion Preparation",
      description:
        "Explore the produce section for a spear in the mint. This may prove helpful for future herbology potions",
      clues: [],
    },
  ];

  const [progress, setProgress] = useState({
    current: 0,
    total: adventure_steps.length,
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [adventureComplete, setAdventureComplete] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleStepComplete = (stepNumber) => {
    if (!completedSteps.includes(stepNumber)) {
      setShowWarning(true);
    }
  };

  const handleWarningModalDone = () => {
    setShowWarning(false);
    setCurrentStep(currentStep + 1);
    setCompletedSteps([...completedSteps, currentStep]);
    updateProgress();

    if (completedSteps.length + 1 === progress.total) {
      setAdventureComplete(true);
    }
  };

  const handleWarningModalClose = () => {
    setShowWarning(false);
  };

  // implement check to see if stepNumber is already in completed steps?

  const updateProgress = () => {
    const newProgress = {
      current: completedSteps.length + 1,
      total: progress.total,
    };
    setProgress(newProgress);
  };

  const handleAdventureReset = () => {
    setProgress({ current: 0, total: progress.total });
    setCurrentStep(0);
    setCompletedSteps([]);
    setAdventureComplete(false);
  };

  return (
    <div className="run-adventure-page">
      <h1 className="adventure-header"><b>{adventure_name}</b></h1>
      <img
        src={process.env.PUBLIC_URL + "/images/stanley_park.png"}
        alt="Adventure"
        className="adventure_image"
      />

      {/* Display Google Maps
      <div id="map" className="map"></div> */}
      {/* <MapsApi/> */}

      {adventureComplete ? (
        <div className="adventure-complete">
          <p className="adventure-subheader">
            Adventure Complete! Congratulations! 
          </p>
          <p className="level-up">
            You gained <b>10XP</b> points and are now <b>level 5</b>!
          </p>
          <button className="restart-button" onClick={handleAdventureReset}>
            Restart Adventure?
          </button>
          <br />
          <Link to="/">
            <button className="back-button">
            Go Back for more Adventures
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="progress-container">
            <h3 className="progress-subheader">Adventure Progress</h3>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${(progress.current / progress.total) * 100}%`,
                }}
              >
                <p className="progress-text">
                  {progress.current}/{progress.total}
                </p>
              </div>
            </div>
          </div>

          {showWarning && (
            <WarningModal
              message={`Please confirm step ${currentStep + 1} is complete!`}
              onClose={handleWarningModalClose}
              onDone={handleWarningModalDone}
            />
          )}

          <div className="step-container">
            <div className="step">
              <h2 className="step-title">
                {adventure_steps[currentStep].title}
              </h2>
              <p className="step-description">
                {adventure_steps[currentStep].description}
              </p>
              <div className="button-container">
                <button
                  className="complete-button"
                  onClick={() => {
                    if (showWarning) {
                      setShowWarning(true);
                    } else {
                      handleStepComplete(
                        adventure_steps[currentStep].stepNumber
                      );
                    }
                  }}
                >
                  Step Complete
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default RunAdventure;
