import React from "react";
import RestaurantIndexContainer from "../restaurants/index/restaurant_index_container";

export default () => (
  <div className="home">
    <div className="search-box">
      <h1>Find your table for any occasion</h1>
    </div>
    <div className="main-content">
      <RestaurantIndexContainer />
    </div>
  </div>
);
