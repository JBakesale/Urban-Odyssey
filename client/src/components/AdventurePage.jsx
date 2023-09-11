import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/AdventurePage.scss";
import RunAdventure from "./RunAdventure";
import MapsApi from "./MapsApi";
import { useAdventureId } from "../providers/AdventureProvider"; 

function AdventurePage() {
  const { id } = useParams();
  const [adventure, setAdventure] = useState(null);
  const [startAdventure, setStartAdventure] = useState(false);
  const { adventureId, setAdventureId } = useAdventureId(); 

  useEffect(() => {
    console.log(`Fetching Axios request to /adventures/${id}`);
    axios
      .get(`/adventures/${id}`)
      .then((response) => {
        console.log("Adv Data:", response.data);
        setAdventure(response.data);
        setAdventureId(response.data.id); // Set the adventure ID in the context
      })
      .catch((error) => {
        console.log(error);
      });
    }, [id, setAdventureId]);
    console.log("adventure Id is!!!!!!!!!", adventureId);
    
  if (!adventure) {
    return <div>No Adventure Found...</div>;
  }

  return (
    <div>
      <div className="adventure-page-container">
        <h1>{adventure.adventure_name}</h1>
        <p>Tag: {adventure.adventure_tag}</p>
        <p>Difficulty: {adventure.difficulty}</p>
        {!startAdventure && (
          <button onClick={() => setStartAdventure(true)}>Start Adventure!</button>
        )}
      </div>
      {startAdventure && (
        <>
          <MapsApi />
          <RunAdventure adventureId={adventure.id} />
        </>
      )}
    </div>
  );
}

export default AdventurePage;
