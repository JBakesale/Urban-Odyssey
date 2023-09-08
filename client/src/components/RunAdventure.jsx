import React, { useState, useEffect } from "react";

function RunAdventure(props) {
  /*
  // Manage state for Google Maps
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Fetch adventure details based on the ID or any other necessary data

    // Initialize Google Maps
    const initMap = () => {
      // create and configure the map
      const mapOptions = {
        center: { lat: 0, lng: 0 }, // Set the initial map center coordinates
        zoom: 12, // Set the initial zoom level
      };

      const mapElement = document.getElementById("map"); // Replace with the actual map element ID

      const googleMap = new window.google.maps.Map(mapElement, mapOptions);

      // Store the map in state
      setMap(googleMap);
    };

    // Load the Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.defer = true;
    script.async = true;

    script.addEventListener("load", initMap);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", initMap);
      document.head.removeChild(script);
    };
  }, [id]);
 */

  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [adventureComplete, setAdventureComplete] = useState(false);

  // mock steps to be replaced by db
  const steps = [
    {
      stepNumber: 1,
      title: "Step 1",
      description: "Description for Step 1",
    },
    {
      stepNumber: 2,
      title: "Step 2",
      description: "Description for Step 2",
    },
    {
      stepNumber: 3,
      title: "Step 3",
      description: "Description for Step 3",
    },
  ];

  const handleStepComplete = (stepNumber) => {
    if (!completedSteps.includes(stepNumber)) {
      setCompletedSteps([...completedSteps, stepNumber]);
    }
    if (completedSteps.length + 1 === steps.length) {
      setAdventureComplete(true);
    }
    setCurrentStep(currentStep + 1);
  };

  const updateProgress = () => {
    const newProgress = ((completedSteps.length + 1) / steps.length) * 100;
    setProgress(newProgress);
  };

  const handleAdventureReset = () => {
    setProgress(0);
    setCurrentStep(0);
    setCompletedSteps([]);
    setAdventureComplete(false);
  };

  const showAlert = () => {
    alert(`Please confirm step ${currentStep + 1} complete`);
  };

  return (
    <div className="run-adventure-page">
      <h1 className="adventure-header">{props.adventure_name}</h1>

      {/* Display Google Maps */}
      <div id="map" className="map"></div>

      {adventureComplete ? (
        <div className="adventure-complete">
          <p className="adventure-subheader">
            Congratulations! Adventure Complete!
          </p>
          <button className="restart-button" onClick={handleAdventureReset}>
            {" "}
            Restart Adventure?
          </button>
        </div>
      ) : (
        <>
          <h3 className="section-header">Let the Adventure Begin!</h3>
          <div className="progress-container">
            <h3 className="progress-subheader">Adventure Progress</h3>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              >
                <p className="progress-text">{progress}%</p>
              </div>
            </div>
          </div>

          <div className="step-container">
            <div className="step">
              <h2 className="step-title">{steps[currentStep].title}</h2>
              <p className="step-description">
                {steps[currentStep].description}
              </p>
              <button
                className="complete-button"
                onClick={() => {
                  showAlert();
                  handleStepComplete(steps[currentStep].stepNumber);
                }}
              >
                Step Complete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default RunAdventure;
