import { connect } from "react-redux";
import UserReservations from "./user_reservation";
import { requestUser } from "../../actions/user_actions";
import { requestRestaurants } from "../../actions/restaurant_actions";

const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    restaurants: Object.values(state.entities.restaurants),
    currentUser: state.session.currentUser,
  };
};

const mDTP = (dispatch) => {
  return {
    requestUser: (userId) => dispatch(requestUser(userId)),
    requestRestaurants: () => dispatch(requestRestaurants()),
  };
};

export default connect(mSTP, mDTP)(UserReservations);
