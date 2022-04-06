import React from "react";
import { connect } from "react-redux";
import {
  requestReservation,
  updateReservation,
} from "../../actions/reservation_actions";
import UpdatedReservationForm from "./UpdatedReservationForm";

import { CgProfile } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";

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
          <div className="update-pg-container">
            <div className="your-current-res">Your current reservation</div>

            <div className="confirmation-container-update">
              <div className="top-session">
                <div>
                  <img
                    className="small-photo-update"
                    src={reservation.restaurantPhotoURL}
                  />
                </div>
                <div className="info-list-update">
                  <div className="confirmation-title-update">
                    {reservation.restaurantName}
                  </div>
                  <div className="confirm-info-div-update">
                    <span className="confirmation-info-update">
                      <AiOutlineCalendar className="calender-icon-update" />
                      {reservation.date}
                    </span>
                    <span className="confirmation-info-update">
                      <BsClockHistory className="calender-icon-update" />
                      {reservation.time}
                    </span>
                    <span className="confirmation-info-update">
                      <CgProfile className="calender-icon-update" />
                      {reservation.party_size}person
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="your-current-res">Modify your reservation</div>

            <div className="updated-form">
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
