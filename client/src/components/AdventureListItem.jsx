import React from 'react';
import '../styles/AdventureListItem.scss'
import { Link } from "react-router-dom";

function AdventureListItem(props) {
  const { adventure } = props;

  return (
    <div className="adventure-container" key={adventure.id}>
    <Link to={`/adventure/${adventure.id}`}>
      <div className="image-container">
        <img src={adventure.adventure_image} alt={`Adventure ${adventure.adventure_name}`} />
      </div>
      <div className="text-container">
        <h2 className="description">{adventure.adventure_name}</h2>
        <p className="difficulty">Difficulty: {adventure.difficulty}</p>
      </div>
    </Link>
    </div>
  );
}

export default AdventureListItem;
