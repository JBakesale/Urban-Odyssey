import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/AdventurePage.scss";
import RunAdventure from "./RunAdventure";
import { useAdventureId } from "../providers/AdventureProvider"; 

function AdventurePage() {
  const { id } = useParams();
  const [adventure, setAdventure] = useState(null);
  const [startAdventure, setStartAdventure] = useState(false);
  const { adventureId, setAdventureId } = useAdventureId(); 


  const onClickStart = () => {
    setStartAdventure((prev) => !prev);
  };

  useEffect(() => {
    console.log(`Fetching Axios request to /adventures/${id}`);
    axios
      .get(`/adventures/${id}`)
      .then((response) => {
        console.log("Adv Data:", response.data);
        setAdventure(response.data);
        setAdventureId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!adventure) {
    return <div>No Adventure Found...</div>;
  }

  return (
    <div className="adventure-page">
      {!startAdventure ? (
        <div className="adventure-page-container">
          <div className="title-container">
          <h1>{adventure.adventure_name}</h1>
          </div>
          <p>
           {adventure.adventure_description}
          </p>
          <p>Difficulty: {adventure.difficulty}</p>
          <div className="button-container">
          <button onClick={onClickStart}>Start Adventure!</button>
          </div>
        </div>
      ) : (
        <RunAdventure adventure={adventure} />
      )}
    </div>
  );
}

export default AdventurePage;
