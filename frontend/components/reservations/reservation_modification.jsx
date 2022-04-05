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

import { FcApproval } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { withRouter } from "react-router-dom";

class ReservationModification extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    this.props.requestReservation(this.props.match.params.reservationId);
  }

  render() {
    const { reservation } = this.props;
    if (reservation && reservation.date) {
      reservation.date = new Date(Date.parse(reservation.date)).toLocaleString(
        "en-US",
        {
          timeZone: "America/New_York",
        }
      );
    }

    return (
      <>
        {reservation && (
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
                      <CgProfile className="calender-icon" />
                      {reservation.party_size}person
                    </span>
                    <span className="confirmation-info">
                      <AiOutlineCalendar className="calender-icon" />
                      {reservation.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="confirmation-container">
              <div className="top-session">
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
                    <CgProfile className="calender-icon" />
                    {reservation.party_size}person
                  </span>
                </div>
              </div>
            </div> */}

            <div>Modify your reservation</div>
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

export default connect(mSTP, mDTP)(ReservationModification);
