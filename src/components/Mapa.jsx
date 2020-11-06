import React from "react";
import {MapContainer,TileLayer } from "react-leaflet";

export const Mapa = () => {
  const position = [51.505, -0.09];
  return (
   

     <MapContainer center={position} zoom={6} scrollWheelZoom={false}>
      <TileLayer
      
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>


  );
};
