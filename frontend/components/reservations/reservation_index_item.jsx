import React from "react";
import { Link, withRouter } from "react-router-dom";

class ReservationIndexItem extends React.Component {
  render() {
    const { reservation } = this.props;
    return (
      <div className="top-session">
        <div>
          <img className="small-photo" src={reservation.restaurantPhotoURL} />
        </div>
        <div className="info-list">
          <div className="confirmation-title">{reservation.restaurantName}</div>
        </div>
      </div>
    );
  }
}

export default ReservationIndexItem;
