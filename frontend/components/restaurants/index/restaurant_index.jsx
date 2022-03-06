import React from "react";
import { Link } from "react-router-dom";
import RestaurantIndexItem from "./restaurant_index_item";

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.requestRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    // console.log(this.props);
    return (
      <div className="restaurant-index-container">
        <div>
          <h2>Experiences trending in New York / Tri-State Area</h2>
        </div>
        <div className="restaurant-profile-list">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantIndexItem
                restaurant={restaurant}
                key={restaurant.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default RestaurantIndex;
