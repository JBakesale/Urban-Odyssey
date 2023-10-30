import React, { createContext, useContext, useState } from "react";

const AdventureContext = createContext();

export const AdventureProvider = ({ children }) => {
  const [adventureId, setAdventureId] = useState(null);

  return (
    <AdventureContext.Provider value={{ adventureId, setAdventureId }}>
      {children}
    </AdventureContext.Provider>
  );
};

export const useAdventureId = () => {
  const context = useContext(AdventureContext);
  if (!context) {
    throw new Error("useAdventureId must be used within an AdventureProvider");
  }
  return context;
};
