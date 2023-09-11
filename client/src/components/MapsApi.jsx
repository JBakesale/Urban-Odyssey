import React, { useContext, useEffect, useState } from 'react';
import { useUserLocation } from '../providers/UserLocationContext';
import { LocationsContext } from "../providers/LocationsProvider";
import { useAdventureId } from '../providers/AdventureProvider';

const GoogleMap = () => {
  const { adventureId } = useAdventureId();
  const { userLocation } = useUserLocation();
  const [map, setMap] = useState(null);
  const { locations } = useContext(LocationsContext);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);

  function getLocationCoordinatesById(id) {
    const location = locations.find((location) => location.id === id);
    if (location) {
      return { lat: location.latitude, lng: location.longitude };
    } else {
      return null;
    }
  }

  useEffect(() => {
    // function to initialize the map
    async function initMap() {
      return new Promise((resolve) => {
        if (typeof window.google !== 'undefined') {
          // Define Map ID
          const mapId = 'ad71aaff0d4bbd6b';

          // Create a new map centered on the first location if available
          const initialLocation = locations.length > 0 ? locations[0] : null;

          // Create a new map instance
          const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: initialLocation
              ? { lat: initialLocation.latitude, lng: initialLocation.longitude }
              : { lat: 0, lng: 0 }, // Default coordinates if no locations are available
            mapId: mapId,
          });

          setMap(mapInstance);

          // Display the user's location on the map if available
          if (userLocation) {
            const userMarker = new window.google.maps.Marker({
              position: userLocation,
              map: mapInstance,
              title: 'Your Location',
              icon: {
                url: 'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Cartoon-Menino-Safari-PNG.png',
                scaledSize: new window.google.maps.Size(40, 40),
              },
            });
          }

          // Create markers for each location using .map if locations are available
          if (locations.length > 0) {
            const markers = locations.map((location) => {
              return new window.google.maps.Marker({
                position: { lat: location.latitude, lng: location.longitude },
                map: mapInstance,
                title: location.location_name,
              });
            });
          }

          // Create DirectionsRenderer for showing the route
          const directionsRenderer = new window.google.maps.DirectionsRenderer({
            map: mapInstance,
          });
          setDirectionsRenderer(directionsRenderer);

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
  }, [userLocation, locations]);

  // Function to calculate and display the route
  function displayRoute(userLocation, destinationLocation) {
    if (!userLocation || !destinationLocation) {
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: userLocation,
        destination: destinationLocation,
        travelMode: 'WALKING',
      },
      (response, status) => {
        if (status === 'OK') {
          if (directionsRenderer) {
            directionsRenderer.setDirections(response);
          }
        } else {
          console.error(`Directions request failed: ${status}`);
        }
      }
    );
  }

  useEffect(() => {
    // Check if adventureId is not null and userLocation is available
    if (adventureId !== null && userLocation) {
      const destinationLocation = getLocationCoordinatesById(adventureId);
      if (destinationLocation) {
        displayRoute(userLocation, destinationLocation);
      }
    } else {
      // Clear directions if adventureId is null or userLocation is not available
      if (directionsRenderer) {
        directionsRenderer.setDirections({ routes: [] });
      }
    }
  }, [adventureId, userLocation, directionsRenderer]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default GoogleMap;
