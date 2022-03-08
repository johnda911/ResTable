import React from "react";
import { Link } from "react-router-dom";
import UserReservationItem from "./user_reservation_item";

class ReservationIndex extends React.Component {
  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId);
  }

  render() {
    const { user } = this.props;
    // const reservations = user.userReservations;
    // console.log(this.props);
    return (
      <>
        {user && (
          <div className="reservation-index-container">
            <div>
              <h2>Upcoming Reservations</h2>
            </div>
            <div className="reservation-profile-list">
              {user.userReservations.map((reservation) => {
                return (
                  <UserReservationItem
                    reservation={reservation}
                    key={reservation.id}
                  />
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ReservationIndex;
