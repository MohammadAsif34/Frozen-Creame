import React from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const LocationMap = () => {
  const mapContainerStyle = { width: "100%", height: "320px" };
  const center = { lat: 22.5295419, lng: 88.4023385 };
  return (
    <>
      <div className="w-full h-80 bg-gray-100 bg-[url('/banner/no-image.png')] bg-center bg-cover opacity-50">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_G_MAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default LocationMap;
