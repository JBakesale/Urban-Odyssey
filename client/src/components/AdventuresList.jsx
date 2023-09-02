import React from 'react';
import adventures from '../mocks/adventures'; 
import '../styles/AdventuresList.scss'
import AdventureListItem from './AdventureListItem';

function AdventuresList() {
  return (
    <div className="adventures-list">
      {adventures.map((adventure) => (
        <AdventureListItem key={adventure.id} adventure={adventure} />
      ))}
    </div>
  );
}

export default AdventuresList;
