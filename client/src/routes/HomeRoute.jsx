import React from "react";
import Navbar from "../components/Navbar";
import BackgroundContainer from "../components/BackgroundContainer";
import AdventuresList from "../components/AdventuresList";
import '../styles/HomeRoute.scss'




const HomeRoute = (props) => {

 
  
  return (
    <>
  
      <Navbar />
      <BackgroundContainer/>
      <AdventuresList/>
      
 
      
    </>
  );
};

export default HomeRoute;