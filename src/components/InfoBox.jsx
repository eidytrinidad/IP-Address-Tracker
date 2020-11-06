import React from "react";

export const InfoBox = () => {
  return (
    <article className="container">
      <div className="infoBox">
        <h4>IP ADDRESS</h4>
        <p>192.212.174.101</p>
      </div>
      <div className="infoBox">
        <h4>LOCATION</h4>
        <p>Brooklyn, NY
            10001</p>
      </div>
      <div className="infoBox">
        <h4>TIMEZONE</h4>
        <p>UTC-05:00</p>
      </div>
      <div className="infoBox">
        <h4>ISP</h4>
        <p>SpaceX Starlink</p>
      </div>
    </article>
  );
};
