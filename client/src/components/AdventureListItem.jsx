import React from 'react';
import '../styles/AdventureListItem.scss'

function AdventureListItem(props) {
  const { adventure } = props;

  return (
    <div className="adventure-container" key={adventure.id}>
      <div className="image-container">
        <img src={adventure.imageUrl} alt={`Adventure ${adventure.adventure_name}`} />
      </div>
      <div className="text-container">
        <h2 className="description">{adventure.description}</h2>
        <p className="difficulty">Difficulty: {adventure.difficulty}</p>
      </div>
    </div>
  );
}

export default AdventureListItem;
