import React from "react";
import { useContext } from "react";
import {MapContainer,Marker,TileLayer } from "react-leaflet";
import { MapContext } from "../context/MapProvider";

export const Mapa = () => {

  const { ipInfo } = useContext(MapContext);
  const { location } = ipInfo;

  return (
    
    <>
       { 
      location
      &&
      <MapContainer center={[location.lat, location.lng]} zoom={9} scrollWheelZoom={false}>
      <TileLayer
      
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       <Marker position={[location.lat, location.lng]}>
   
        </Marker>
    </MapContainer>
  }
    </>

  );
};
