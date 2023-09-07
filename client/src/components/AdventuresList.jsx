import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdventuresList.scss'
import AdventureListItem from './AdventureListItem';

function AdventuresList() {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    console.log('Sending Axios request to /adventures');
    axios.get('/adventures')
      .then(response => {
        console.log('Adventure Data:', response.data)
        setAdventures(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="adventures-list">
      {adventures.map((adventure) => (
        <AdventureListItem key={adventure.id} adventure={adventure} />
      ))}
    </div>
  );
}

export default AdventuresList;
