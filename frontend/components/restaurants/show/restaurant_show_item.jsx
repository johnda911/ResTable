import React from "react";
import { Link } from "react-router-dom";

class RestaurantShowItem extends React.Component {
  render() {
    const { restaurant } = this.props;
    return (
      <Link to="/" className="restaurant-profile-item">
        <span className="res-profile-img">{restaurant.photo}</span>
        <span className="res-profile-name">{restaurant.name}</span>
        <span className="res-profile-info">
          {restaurant.cuisine} · {restaurant.expense} ·{" "}
          {restaurant.neighborhood}
        </span>
        <button className="res-profile-btn">Reserve</button>
      </Link>
    );
  }
}
export default RestaurantShowItem;
