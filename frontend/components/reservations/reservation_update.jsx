import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import * as ReservationAPIUtil from "../../utils/reservation_api_util";
import {
  requestReservation,
  updateReservation,
} from "../../actions/reservation_actions";
import UpdatedReservationForm from "./UpdatedReservationForm";

import { FcApproval } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { withRouter } from "react-router-dom";

class ReservationUpdate extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  componentDidMount() {
    this.props.requestReservation(this.props.match.params.reservationId);
  }

  render() {
    const {
      reservation,
      currentUser,
      requestReservation,
      updateReservation,
      history,
    } = this.props;

    if (reservation && reservation.date) {
      reservation.date = new Date(Date.parse(reservation.date)).toLocaleString(
        "en-US",
        {
          timeZone: "UTC",
        }
      );
      reservation.date = reservation.date.split(", ")[0];
    }
    if (reservation && reservation.time) {
      reservation.time = reservation.time.split(".")[0].substring(11); //22:00:00
    }

    return (
      <>
        {reservation && currentUser && (
          <div>
            <div>Your current reservation</div>

            <div className="confirmation-container">
              <div className="top-session">
                <div>
                  <img
                    className="small-photo"
                    src={reservation.restaurantPhotoURL}
                  />
                </div>
                <div className="info-list">
                  <div className="confirmation-title">
                    {reservation.restaurantName}
                  </div>
                  <div className="confirm-info-div">
                    <span className="confirmation-info">
                      <AiOutlineCalendar className="calender-icon" />
                      {reservation.date}
                    </span>
                    <span className="confirmation-info">
                      <BsClockHistory className="calender-icon" />
                      {reservation.time}
                    </span>
                    <span className="confirmation-info">
                      <CgProfile className="calender-icon" />
                      {reservation.party_size}person
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <UpdatedReservationForm
                reservation={reservation}
                requestReservation={requestReservation}
                updateReservation={updateReservation}
                currentUser={currentUser}
                history={history}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}

const mSTP = (state, ownProps) => {
  let reservation =
    state.entities.reservations[ownProps.match.params.reservationId];
  return {
    reservation,
    currentUser: state.session.currentUser,
  };
};

const mDTP = (dispatch) => {
  return {
    requestReservation: (reservationId) =>
      dispatch(requestReservation(reservationId)),
    updateReservation: (reservation) =>
      dispatch(updateReservation(reservation)),
  };
};

export default connect(mSTP, mDTP)(ReservationUpdate);