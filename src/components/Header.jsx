import React, { useContext } from "react";
import { useState } from "react";
import { MapContext } from "../context/MapProvider";
import { LocationInfo } from "./LocationInfo";

export const Header = () => {
  const {setIpAddress} = useContext(MapContext);

  const [formValues, setFormValues] = useState({
    ipInput: "",
  });

  const { ipInput } = formValues;

  const handleInput = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    setIpAddress(ipInput)
    
  };

  return (
    <header>
      <div className="container">
        <h1>IP Address Tracker</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            value={ipInput}
            name="ipInput"
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button className="btn">
            <img src="/images/icon-arrow.svg" alt="arrow" />
          </button>
        </form>
      </div>

      <LocationInfo />
    </header>
  );
};
