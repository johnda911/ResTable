import { connect } from "react-redux";
import RestaurantShow from "./restaurant_show";
import { requestRestaurant } from "../../../actions/restaurant_actions";

// const mSTP = (state) => {
//   return {
//     restaurants: Object.values(state.entities.restaurants),
//   };
// };

const mDTP = (dispatch) => {
  return {
    requestRestaurant: () => dispatch(requestRestaurant()),
  };
};

export default connect(mSTP, mDTP)(RestaurantShow);
