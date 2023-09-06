import React from "react";
import BackgroundContainer from "../components/BackgroundContainer";
import AdventuresList from "../components/AdventuresList";
import '../styles/HomePage.scss'
import MapsApi from "../components/MapsApi";



const HomePage = (props) => {

 
  
  return (
    <>
  
      <BackgroundContainer/>
      <AdventuresList/>
      <MapsApi/>
     
    
 
      
    </>
  );
};

export default HomePage;