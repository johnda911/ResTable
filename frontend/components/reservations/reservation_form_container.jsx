import { connect } from "react-redux";
import ReservationForm from "./reservation_form";
import {
  requestReservation,
  createReservation,
  deleteReservation,
} from "../../actions/reservation_actions";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/session";

const mSTP = (state, ownProps) => {
  // console.log(state.errors.submitForm);
  return {
    reservation: {
      date: "",
      time: "",
      partySize: "",
      phone: "",
      restaurant_id: ownProps.restaurant_id,
    },
    currentUser: state.session.currentUser,
    // errors: Object.values(state.errors),
  };
};

const mDTP = (dispatch) => {
  return {
    requestReservation: (reservationId) =>
      dispatch(requestReservation(reservationId)),
    createReservation: (reservation) => {
      dispatch(createReservation(reservation));
    },
    deleteReservation: (reservationId) =>
      dispatch(deleteReservation(reservationId)),
    login: () =>
      dispatch(
        login({
          email: "demouser@gmail.com",
          password: "123456",
        })
      ),
  };
};

export default withRouter(connect(mSTP, mDTP)(ReservationForm));
