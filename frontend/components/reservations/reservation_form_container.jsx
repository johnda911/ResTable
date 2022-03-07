import { connect } from "react-redux";
import ReservationForm from "./reservation_form";
import {
  requestReservation,
  createReservation,
  deleteReservation,
} from "../../actions/reservation_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
  return {
    reservation: {
      date: null,
      time: null,
      partySize: null,
      phone: null,
      restaurant_id: ownProps.restaurant_id,
    },
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
  };
};

export default withRouter(connect(mSTP, mDTP)(ReservationForm));
