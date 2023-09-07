import React, { useEffect, useState } from 'react';
import adventures from '../mocks/adventures';
import { useUserLocation } from '../providers/UserLocationContext';

const GoogleMap = () => {
  const { userLocation } = useUserLocation();
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Create a function to initialize the map
    async function initMap() {
      return new Promise((resolve) => {
        if (typeof window.google !== 'undefined') {
          // Define your Map ID
          const mapId = 'ad71aaff0d4bbd6b';

          // Create a new map centered on the first location
          const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: { lat: adventures[0].latitude, lng: adventures[0].longitude }, // Center on the first location

            // Add the Map ID to the map's options
            mapId: mapId,
          });

          setMap(mapInstance);

          // Create markers for each adventure location using .map
          const markers = adventures.map((adventure) => {
            return new window.google.maps.Marker({
              position: { lat: adventure.latitude, lng: adventure.longitude },
              map: mapInstance,
              title: adventure.description, // Use the adventure description as the title
              // No custom icon property, so it will use the default marker icon
            });
          });

          // Display the user's location on the map if available
          if (userLocation) {
            const userMarker = new window.google.maps.Marker({
              position: userLocation, // Use the user's location as the marker position
              map: mapInstance,
              title: 'Your Location',
              icon: {
                url: 'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Cartoon-Menino-Safari-PNG.png',
                scaledSize: new window.google.maps.Size(40, 40), // Adjust the size as needed
              },
            });
          }

          // Map initialization is complete, resolve the Promise
          resolve();
        } else {
          // Handle the case where the Google Maps API hasn't loaded yet
          console.error('Google Maps API is not loaded.');
          resolve(); // Resolve the Promise to continue rendering the component
        }
      });
    }

    // Call the initMap function to initialize the map
    initMap();
  }, [userLocation]); // Include userLocation in the dependency array to update the map when it changes

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default GoogleMap;
