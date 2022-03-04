import { connect } from "react-redux";
import RestaurantShow from "./restaurant_show";
import { requestRestaurant } from "../../../actions/restaurant_actions";

const mSTP = (state, ownProps) => {
  return {
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
  };
};

const mDTP = (dispatch) => {
  return {
    requestRestaurant: (restaurantId) =>
      dispatch(requestRestaurant(restaurantId)),
  };
};

export default connect(mSTP, mDTP)(RestaurantShow);
