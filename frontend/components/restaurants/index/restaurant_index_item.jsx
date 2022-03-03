import React from "react";
import { Link, withRouter } from "react-router-dom";

// 1. A link to the Restaurant's show page with text of the Restaurant's date created
// 2. A link to the Restaurant's edit page with text 'Edit'.
// 3. A button to delete the Restaurant.

class RestaurantIndexItem extends React.Component {
  render() {
    const { restaurant } = this.props;
    return (
      <div>
        {/* <img src={restaurant.restaurantPhotoURL} /> */}
        <span>{restaurant.photo}</span>
        <span>{restaurant.name}</span>
        <br />
        <span>
          {restaurant.cuisine} · {restaurant.expense} ·{" "}
          {restaurant.neighborhood}
        </span>

        {/* on click function to be updated once create the frontend route for restaurant profile page */}
        <button>Reserve</button>
      </div>
    );
  }
}
export default RestaurantIndexItem;
