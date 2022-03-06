import React from "react";
import { Link, withRouter } from "react-router-dom";

class RestaurantIndexItem extends React.Component {
  // handleClick() => {

  // }
  render() {
    const { restaurant } = this.props;
    return (
      <Link
        to={`/restaurant/${restaurant.id}`}
        // target="_blank"
        className="restaurant-profile-item"
      >
        <img src={restaurant.restaurantPhotoURL} />
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
export default RestaurantIndexItem;
