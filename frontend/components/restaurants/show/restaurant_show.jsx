import React from "react";
import { Link } from "react-router-dom";
import SafetyPrecautions from "./safety_precautions";
import Menu from "./menu";

class RestaurantShow extends React.Component {
  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  render() {
    const { restaurant } = this.props;
    return (
      <>
        {restaurant && (
          <div className="profile-pg-container">
            <div className="top-img">
              <img
                className="profile-photo"
                // src={restaurant.restaurantPhotoURL}
              />
            </div>
            <div className="main-info">
              <div className="left-bar">
                <div className="navigation">
                  <div>Overview</div>
                  <div>Experiences</div>
                  <div>Offers</div>
                  <div>Popular dishes</div>
                  <div>Menus</div>
                  <div>Reviews</div>
                </div>
                <h2 className="rest-name">{restaurant.name}</h2>
                <p>
                  {restaurant.expense} {restaurant.cuisine}
                </p>
                <p>Top Tags</p>
                <p>{restaurant.description}</p>
                <SafetyPrecautions />
                <Menu />
              </div>
              <div className="right-bar">
                <p>{restaurant.address}</p>
                <p>{restaurant.phone}</p>
                <p>{restaurant.neighborhood}</p>
                <p>{restaurant.noperation_hours}</p>
                <p>{restaurant.dining_style}</p>
                <p>{restaurant.dress_code}</p>
                <p>{restaurant.parking_details}</p>
                <p>{restaurant.payment_options}</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default RestaurantShow;
