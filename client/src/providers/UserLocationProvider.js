import { createContext, useContext, useState } from "react";

const UserLocationContext = createContext();

export function useUserLocation() {
  return useContext(UserLocationContext);
}

export function UserLocationProvider({ children }) {
  const [userLocation, setUserLocation] = useState(null);

  const setUserLocationData = (location) => {
    setUserLocation(location);
  };

  return (
    <UserLocationContext.Provider
      value={{ userLocation, setUserLocation: setUserLocationData }}
    >
      {children}
    </UserLocationContext.Provider>
  );
}
