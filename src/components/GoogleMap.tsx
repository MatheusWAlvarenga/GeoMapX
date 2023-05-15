// vendors
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// utility
import { key } from "../app/utility";

interface Props {
  latitude: number;
  longitude: number;
}

const mapStyles = {
  height: "400px",
  width: "50%",
};

const GoogleMapComponent: React.FC<Props> = ({ latitude, longitude }) => {
  const defaultCenter = { lat: latitude, lng: longitude };

  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
