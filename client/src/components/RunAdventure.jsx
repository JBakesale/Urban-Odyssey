import React, { useState, useEffect } from "react";

function RunAdventure(props) {
  const [progress, setProgress] = useState(0);

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
    const completedStepIndex = steps.findIndex(
      (step) => step.stepNumber === stepNumber
    );

    const newProgress = ((completedStepIndex + 1) / steps.length) * 100;

    setProgress(newProgress);
  };

  return (
    <div className="run-adventure-page">
      <h1>{props.adventure_name}</h1>
      <h3>Adventure Steps</h3>

      {/* Display Google Maps */}
      <div id="map" className="map"></div>

      <p>Progress: {progress.toFixed(2)}%</p>
      {steps.map((step) => (
        <div key={step.stepNumber} className="step">
          <h2>{step.title}</h2>
          <p></p>
          <button onClick={() => handleStepComplete(step.stepNumber)}>
            Complete
          </button>
        </div>
      ))}
    </div>
  );
}

export default RunAdventure;
