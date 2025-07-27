import React from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const LocationMap = () => {
  const mapContainerStyle = { width: "100%", height: "400px" };
  const center = { lat: 22.5295419, lng: 88.4023385 };
  return (
    <>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_G_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default LocationMap;
