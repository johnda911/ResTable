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
      <div>
        <h2>Experiences trending in New York / Tri-State Area</h2>
        <ul>
          {restaurants.map((restaurant) => {
            return (
              <RestaurantIndexItem
                restaurant={restaurant}
                key={restaurant.id}
              />
            );
          })}
        </ul>
        {/* to be update once have the frontend route for restaurant show */}
        {/* <Link to="/">Restaurant Profile Page</Link> */}
      </div>
    );
  }
}

export default RestaurantIndex;
