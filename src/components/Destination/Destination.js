import React from "react";
import "./Destination.css";
import Map from "../../images/Map.png";

const Destination = () => {
  //--locationSearching--//
  const locationSearching = (e) => {
    e.preventDefault();
  };
  return (
    <div className="destination">
      {/* --Form-- */}
      <div className="search-location">
        <form onSubmit={locationSearching}>
          <label htmlFor="pickFrom">Pick From</label>
          <br />
          <input type="text" name="pickFrom" />
          <br />
          <label htmlFor="pickTo">Pick To</label>
          <br />
          <input type="text" name="pickTo" />
          <br />
          <input type="submit" value="Search" className="submit-btn" />
        </form>
      </div>
      {/* --Map-- */}
      <div className="location-map">
        <img src={Map} alt="" />
      </div>
    </div>
  );
};

export default Destination;
