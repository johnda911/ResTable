import React from "react";
import { Link } from "react-router-dom";
// import RestaurantShowItem from "./restaurant_show_item";

class RestaurantShow extends React.Component {
  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  render() {
    const { restaurant } = this.props;
    return (
      <>
        {restaurant && (
          <div>
            res show pg
            <p>{restaurant.name}</p>
            <p>{restaurant.address}</p>
            <p>{restaurant.description}</p>
            <p>{restaurant.phone}</p>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.expense}</p>
            <p>{restaurant.neighborhood}</p>
            <p>{restaurant.noperation_hours}</p>
            <p>{restaurant.dining_style}</p>
            <p>{restaurant.dress_code}</p>
            <p>{restaurant.parking_details}</p>
            <p>{restaurant.payment_options}</p>
          </div>
        )}
      </>
    );
  }
}
export default RestaurantShow;
