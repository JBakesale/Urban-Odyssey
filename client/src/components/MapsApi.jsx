import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function MapsApi() {
  const myKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: myKey,
  });

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
          mapId="ad71aaff0d4bbd6b" 
        >
          {/* Display a marker for Vancouver */}
          <Marker position={mapOptions.center} />
        </GoogleMap>
      ) : (
        // Show a loading state or error message if the map is not loaded
        <div>Loading...</div>
      )}
    </div>
  );
}
