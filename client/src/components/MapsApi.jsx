import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function MapsApi() {
  const myKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: myKey,
  });

  const markerIcon = {
    url: 'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Cartoon-Menino-Safari-PNG.png', // Replace with your custom icon URL
    scaledSize: new window.google.maps.Size(70, 100), // Adjust the size as needed
  };

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Function to get the user's current location
    const getUserLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Set the user's location in state
          setUserLocation({ lat: latitude, lng: longitude });
        });
      } else {
        // Geolocation is not available in the user's browser
        console.error('Geolocation is not supported by this browser.');
      }
    };

    // Call the function to get the user's location
    getUserLocation();
  }, []);

  // Define the coordinates for 3 additional markers around Edmonton
  const edmontonMarkers = [
    { lat: 53.5444, lng: -113.4909 }, // Edmonton, AB
    { lat: 53.6316, lng: -113.3239 }, // St. Albert, AB
    { lat: 53.5229, lng: -113.5183 }, // Sherwood Park, AB
  ];

  const mapOptions = {
    center: userLocation || { lat: 49.2827, lng: -123.1207 }, // Center the map on Vancouver, BC if user location is not available
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
          {/* Display the user's location marker if available */}
          {userLocation && <Marker position={userLocation} icon={markerIcon} />}
          
          {/* Display 3 additional markers around Edmonton */}
          {edmontonMarkers.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}
        </GoogleMap>
      ) : (
        // Show a loading state or error message if the map is not loaded
        <div>Loading...</div>
      )}
    </div>
  );
}
