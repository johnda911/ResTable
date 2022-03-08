import React from "react";
import { Link, withRouter } from "react-router-dom";

class UserReservationItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleView = this.handleView.bind(this);
    this.handleCancelReservation = this.handleCancelReservation.bind(this);
  }

  handleView(reservationId) {
    this.props.history.push(`/reservation/${reservationId}/confirmation`);
  }
  handleCancelReservation(reservationId) {
    this.props.history.push(`/reservation/${reservationId}/confirmation`);
  }

  render() {
    const { reservation, resaurantUrl, restaurantName } = this.props;
    if (reservation && reservation.date) {
      reservation.date = new Date(Date.parse(reservation.date)).toLocaleString(
        "en-US",
        {
          timeZone: "America/New_York",
        }
      );
    }
    return (
      <div className="reservation-item">
        <div>
          <img className="small-pic" src={resaurantUrl} />
        </div>
        <div className="res-info">
          <div id="myreservation-title">{restaurantName}</div>
          <div>{reservation.date}</div>
          <div id="reservation-size">
            Table for {reservation.party_size} people
          </div>
          <div className="reservation-func-bar">
            <div
              className="view-btn"
              onClick={() => this.handleView(reservation.id)}
            >
              View
            </div>
            <div
              className="view-btn"
              onClick={() => this.handleCancelReservation(reservation.id)}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserReservationItem;
