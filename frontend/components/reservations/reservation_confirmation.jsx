import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import * as ReservationAPIUtil from "../../utils/reservation_api_util";
import {
  requestReservation,
  deleteReservation,
} from "../../actions/reservation_actions";
import { FcApproval } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";

class ReservationConfirmation extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    let reservation = {
      cancelled: false,
      ...this.props.reservation,
    };
    this.state = { ...reservation };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }
  componentDidMount() {
    this.props.requestReservation(this.props.match.params.reservationId);
  }

  handleCancel() {
    this.setState({ cancelled: true });
    this.props.deleteReservation(this.props.reservation.id);
  }
  handleProfile() {
    this.props.history.push(
      `/user/${this.props.reservation.user_id}/reservations`
    );
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
      <div className="confirmation-box">
        {reservation && (
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
                <div>
                  {this.state.cancelled ? (
                    <div className="res-confirmed">
                      <AiFillCloseCircle className="uncheck-icon" /> Reservation
                      cancelled
                    </div>
                  ) : (
                    <div className="res-confirmed">
                      <FcApproval className="check-icon" /> Reservation
                      confirmed
                    </div>
                  )}
                </div>
                <div className="confirm-info-div">
                  <span className="confirmation-info">
                    <CgProfile className="calender-icon" />
                    {reservation.party_size}(Standard seating )
                  </span>
                  <span className="confirmation-info">
                    <AiOutlineCalendar className="calender-icon" />
                    {reservation.date}
                  </span>
                </div>
                {this.state.cancelled ? (
                  <Link className="homepg-btn" to="/">
                    Go back to homepage
                  </Link>
                ) : (
                  <span>
                    <button className="cancel-btn" onClick={this.handleCancel}>
                      Cancel
                    </button>
                    <button
                      className="cancel-btn view-botton"
                      onClick={this.handleProfile}
                    >
                      My Reservations
                    </button>
                  </span>
                )}
              </div>
            </div>
            {!this.state.cancelled && (
              <div className="mid-session">
                <div className="halo-box">
                  <div className="confirmation-icon">
                    <FaMapMarkedAlt className="iconnn" />
                  </div>
                  <Link
                    className="confirmation-back-to-res"
                    to={`/restaurant/${reservation.restaurant_id}`}
                  >
                    <div className="black-char">Browse menu</div>
                    <div className="grey-res">Restaurant's Profile</div>
                  </Link>
                </div>
                <div className="halo-box">
                  <div className="confirmation-icon">
                    <MdOutlineMenuBook className="iconnn" />
                  </div>
                  <Link
                    className="confirmation-back-to-res"
                    to={`/restaurant/${reservation.restaurant_id}`}
                  >
                    <div className="black-char">Get directions</div>
                    <div className="grey-res">Restaurant's Address</div>
                  </Link>
                </div>
              </div>
            )}
            {/* <div className="lower-session">
              <div>Who's going?</div>
              <div>{reservation.userName}</div>
            </div> */}
          </div>
        )}
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  let reservation =
    state.entities.reservations[ownProps.match.params.reservationId];
  return {
    reservation,
  };
};

const mDTP = (dispatch) => {
  return {
    requestReservation: (reservationId) =>
      dispatch(requestReservation(reservationId)),
    deleteReservation: (reservationId) =>
      dispatch(deleteReservation(reservationId)),
  };
};

export default connect(mSTP, mDTP)(ReservationConfirmation);
