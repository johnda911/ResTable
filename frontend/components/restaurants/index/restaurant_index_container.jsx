import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { requestRestaurants } from "../../../actions/restaurant_actions";

const mSTP = (state) => {
  return {
    restaurants: Object.values(state.entities.restaurants),
  };
};

const mDTP = (dispatch) => {
  return {
    requestRestaurants: () => dispatch(requestRestaurants()),
  };
};

export default connect(mSTP, mDTP)(RestaurantIndex);
