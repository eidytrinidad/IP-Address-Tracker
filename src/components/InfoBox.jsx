import React from "react";
import { useContext } from "react";
import { MapContext } from "../context/MapProvider";

export const InfoBox = () => {
  const { ipInfo } = useContext(MapContext);

  const { ip, isp, location } = ipInfo;
  console.log(ipInfo);

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
            <p>
              {location && (
                <span>
                  {location.city}, {location.country} {location.postalCode}
                </span>
              )}
            </p>
          </div>
          <div className="infoBox">
            <h4>TIMEZONE</h4>
            <p>{location && <span>{location.timezone}</span>}</p>
          </div>
          <div className="infoBox">
            <h4>ISP</h4>
            <p>{isp}</p>
          </div>
        </article>
      )}
    </>
  );
};
