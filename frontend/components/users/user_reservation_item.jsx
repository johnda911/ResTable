import React from "react";
import { Link, withRouter } from "react-router-dom";

class UserReservationItem extends React.Component {
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
      <div className="top-session">
        <div>
          <img className="small-photo" src={resaurantUrl} />
        </div>
        <div className="info-list">
          <div className="myreservation-title">{restaurantName}</div>
          <div>{reservation.date}</div>
          <div>Table for {reservation.party_size} people</div>
          <div>View</div>
          <div>Cancel</div>
        </div>
      </div>
    );
  }
}

export default UserReservationItem;
