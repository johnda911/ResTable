import React from "react";
// import { connect } from "react-redux";
// import { Redirect, Route, withRouter } from "react-router-dom";
export const fetchRestaurants = () =>
  $.ajax({
    url: "/api/restaurants",
  });
export const fetchRestaurant = (restaurantId) =>
  $.ajax({
    url: `/api/restaurants/${restaurantId}`,
  });
