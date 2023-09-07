import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function RunAdventure() {
  const { id } = useParams();

  // Task 1: Manage state for displaying alerts
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  // Task 2: Manage state for Google Maps
  const [map, setMap] = useState(null);

  // Task 3: Manage state for tracking progress
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fetch adventure details based on the ID or any other necessary data

    // Initialize Google Maps
    const initMap = () => {
      // Use the Google Maps API to create and configure the map
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
      // Clean up the Google Maps API script
      script.removeEventListener("load", initMap);
      document.head.removeChild(script);
    };
  }, [id]);

  return (
    <div className="specific-adventure-page">
      <h1>Adventure Title</h1>
      <p>Adventure Description</p>

      {/* Task 1: Display alerts */}
      {showAlert1 && <div className="alert">Alert 1</div>}
      {showAlert2 && <div className="alert">Alert 2</div>}

      {/* Task 2: Display Google Maps */}
      <div id="map" className="map"></div>

      {/* Task 3: Track progress */}
      <div className="progress">
        <p>Progress: {progress}%</p>
        <button onClick={() => setProgress(progress + 10)}>
          Increment Progress
        </button>
      </div>
    </div>
  );
}

export default RunAdventure;
