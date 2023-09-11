import React, { useContext, useEffect } from "react";
import BackgroundContainer from "../components/BackgroundContainer";
import AdventuresList from "../components/AdventuresList";
import '../styles/HomePage.scss'
import axios from "axios";

const HomePage = () => {

 
  return (
    <>
      <BackgroundContainer/>
      <AdventuresList/>
    </>
  );
};

export default HomePage;
