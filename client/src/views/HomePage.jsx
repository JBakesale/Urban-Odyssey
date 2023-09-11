import React, { useContext, useEffect } from "react";
import BackgroundContainer from "../components/BackgroundContainer";
import AdventuresList from "../components/AdventuresList";
import '../styles/HomePage.scss'
import MapsApi from "../components/MapsApi";
import { useAdventureId } from "../providers/AdventureProvider";
import axios from "axios";
import { LocationsContext} from "../providers/LocationsProvider";

const HomePage = () => {
  const { adventureId, setAdventureId } = useAdventureId(); 
  const { locations, setLocations } = useContext(LocationsContext); // Use useContext with LocationsContext

  useEffect(() => {
    setAdventureId(null);
    axios.get('/locations')
      .then(response => {
        console.log('locations Data from axios:', response.data)
        setLocations(response.data);
        console.log("adventureId in home page!!!!!", adventureId);
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
