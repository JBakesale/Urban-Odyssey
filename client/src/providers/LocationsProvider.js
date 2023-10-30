import React, { createContext, useContext, useState } from "react";

// Create a new context
export const LocationsContext = createContext();

// Create a LocationsProvider component to wrap your application
export const LocationsProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);

  return (
    <LocationsContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationsContext.Provider>
  );
};
