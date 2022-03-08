import { connect } from "react-redux";
import UserReservations from "./user_reservation";
import { requestUser } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
  };
};

const mDTP = (dispatch) => {
  return {
    requestUser: (userId) => dispatch(requestUser(userId)),
  };
};

export default connect(mSTP, mDTP)(UserReservations);
