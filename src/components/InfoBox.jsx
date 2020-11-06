import React from "react";
import { useContext } from "react";
import { MapContext } from "../context/MapProvider";

export const InfoBox = () => {
  const { ipInfo } = useContext(MapContext);

  const { query: ip, org, zip,timezone,city,countryCode} = ipInfo;
  
  const zone=JSON.stringify(timezone)
  
  
  return (
    <>
      {ipInfo && (
        <article key={ip} className="container">
          <div className="infoBox">
            <h4>IP ADDRESS</h4>
            <p>{ip}</p>
          </div>
          <div className="infoBox">
            <h4>LOCATION</h4>
            <p>{city}, {countryCode} {zip}</p>
          </div>
          <div className="infoBox">
            <h4>TIMEZONE</h4>
              {
              timezone
              &&
            <div className="">
              <p>{zone.substr(0,9)}</p>
            <p>{zone.substr(9,20)}</p>
            </div>
            }
          </div>
          <div className="infoBox">
            <h4>ISP</h4>
            <p>{org}</p>
          </div>
        </article>
      )}
    </>
  );
};
