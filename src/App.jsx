import React from "react";
import { Header } from "./components/Header";
import { Mapa } from "./components/Mapa";
import { MapProvider } from "./context/MapProvider";


import "./css/style.scss";
function App() {
  return (
    <>
      <MapProvider>
        <Header />
        <Mapa />
      </MapProvider>
    </>
  );
}

export default App;
