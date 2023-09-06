import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function MapsApi() {
  const myKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: myKey,
  });

  
  const locations = [
    { lat: 49.2827, lng: -123.1207 }, // Vancouver, BC
    { lat: 49.3163, lng: -123.0693 }, // Burnaby, BC
    { lat: 49.2611, lng: -123.2492 }, // Richmond, BC
  ];

  const mapOptions = {
    center: { lat: 49.2827, lng: -123.1207 }, // Center the map on Vancouver, BC
    zoom: 10,
  };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px" }}
          center={mapOptions.center}
          zoom={mapOptions.zoom}
          mapId="ad71aaff0d4bbd6b" // Replace with your custom map style ID
        >
          {/* Display markers for the specified locations */}
          {locations.map((location, index) => (
            <Marker key={index} position={location} />
          ))}
        </GoogleMap>
      ) : (
        // Show a loading state or error message if the map is not loaded
        <div>Loading...</div>
      )}
    </div>
  );
}
