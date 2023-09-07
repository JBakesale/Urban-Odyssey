import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/AdventurePage.scss";
import RunAdventure from "./RunAdventure";

function AdventurePage() {
  const { id } = useParams();
  const [adventure, setAdventure] = useState(null);
  const [startAdventure, setStartAdventure] = useState(false);

  const handleStartAdventureClick = () => {
    setStartAdventure((prev) => !prev);
  };

  useEffect(() => {
    console.log(`Fetching Axios request to /adventures/${id}`);
    axios
      .get(`/adventures/${id}`)
      .then((response) => {
        console.log("Adv Data:", response.data);
        setAdventure(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!adventure) {
    return <div>No Adventure Found...</div>;
  }

  return (
    <div>
      {!startAdventure ? (
        <div className="adventure-page-container">
          <h1>{adventure.adventure_name}</h1>
          <p>Tag: {adventure.adventure_tag}</p>
          <p>Difficulty: {adventure.difficulty}</p>
          <button onClick={handleStartAdventureClick}>Start Adventure!</button>
        </div>
      ) : (
        <RunAdventure />
      )}
    </div>
  );
}

export default AdventurePage;
