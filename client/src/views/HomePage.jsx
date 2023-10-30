import React, { useEffect } from "react";
import BackgroundContainer from "../components/BackgroundContainer";
import AdventuresList from "../components/AdventuresList";
import '../styles/HomePage.scss'
import MapsApi from "../components/MapsApi";
import axios from "axios";
import { useAdventureId } from "../providers/AdventureProvider";
import { LocationsContext } from "../providers/LocationsProvider";

const HomePage = () => {
  const { adventureId, setAdventureId } = useAdventureId();
  const { locations, setLocations } = useContext(LocationsContext);

  useEffect(() => {
    setAdventureId(null);
    axios.get('/locations').then(response => {
      console.log('fetching locations data', response.data)
      setLocations(response.data);
    })
  }, [setAdventureId]);
 
  return (
    <>
      <BackgroundContainer/>
      <AdventuresList/>
      <MapsApi/>
    </>
  );
};

export default HomePage;
