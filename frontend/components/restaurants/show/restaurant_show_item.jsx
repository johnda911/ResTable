import React from "react";
import { Link, withRouter } from "react-router-dom";

class RestaurantShowItem extends React.Component {
  render() {
    const { restaurant } = this.props;
    return (
      // to be updated once I have the restaurant show page link
      <Link to="/" className="restaurant-profile-item">
        {/* <img src={restaurant.restaurantPhotoURL} /> */}
        <span className="res-profile-img">{restaurant.photo}</span>
        <span className="res-profile-name">{restaurant.name}</span>
        <span className="res-profile-info">
          {restaurant.cuisine} · {restaurant.expense} ·{" "}
          {restaurant.neighborhood}
        </span>

        {/* on click function to be updated once create the frontend route for restaurant profile page */}
        <button className="res-profile-btn">Reserve</button>
      </Link>
    );
  }
}
export default RestaurantShowItem;
