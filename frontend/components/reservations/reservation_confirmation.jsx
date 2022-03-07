import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import * as ReservationAPIUtil from "../../utils/reservation_api_util";
import {
  requestReservation,
  deleteReservation,
} from "../../actions/reservation_actions";
import { FcApproval } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";

class ReservationConfirmation extends React.Component {
  constructor(props) {
    super(props);
    let reservation = {
      cancelled: false,
      ...this.props.reservation,
    };
    this.state = { ...reservation };
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentDidMount() {
    this.props.requestReservation(this.props.match.params.reservationId);
  }

  handleCancel() {
    this.setState({ cancelled: true });
    this.props.deleteReservation(this.props.reservation.id);
  }

  render() {
    const { reservation } = this.props;
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
                    <div>
                      <AiFillCloseCircle className="uncheck-icon" /> Reservation
                      cancelled
                    </div>
                  ) : (
                    <div>
                      <FcApproval className="check-icon" /> Reservation
                      confirmed
                    </div>
                  )}
                </div>
                <div>{reservation.party_size}(Standard seating)</div>
                <div>{reservation.date}</div>
                <button className="cancel-btn" onClick={this.handleCancel}>
                  Cancel the reservation
                </button>
              </div>
            </div>
            <div className="mid-session">
              <div className="halo-box">
                <div className="black-char">Browse menu</div>
                <div className="grey-res">Restaurant's Profile</div>
              </div>
              <div className="halo-box">
                <div className="black-char">Get directions</div>
              </div>
            </div>
            {/* <div className="lower-session">
              <div>Who's going?</div>
              <div>{currentUser.username}</div>
              <div>Invite your friends</div>
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
