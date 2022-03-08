import React from "react";
import { Link } from "react-router-dom";
import UserReservationItem from "./user_reservation_item";

class ReservationIndex extends React.Component {
  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId);
    this.props.requestRestaurants();
  }

  getRestaurantUrl(restaurantId) {
    for (const r of this.props.restaurants) {
      if (r.id === restaurantId) {
        // console.log(r.restaurantPhotoURL);
        return r.restaurantPhotoURL;
      }
    }
  }

  getRestaurantName(restaurantId) {
    for (const r of this.props.restaurants) {
      if (r.id === restaurantId) {
        return r.name;
      }
    }
  }

  render() {
    const { user, restaurants } = this.props;
    // const reservations = user.userReservations;
    // console.log(this.props);
    return (
      <>
        {user && restaurants && (
          <div className="reservation-index-container">
            <div>
              <h2>Upcoming Reservations</h2>
            </div>
            <div className="reservation-profile-list">
              {user.userReservations.map((reservation) => {
                return (
                  <UserReservationItem
                    reservation={reservation}
                    resaurantUrl={this.getRestaurantUrl(
                      reservation.restaurant_id
                    )}
                    restaurantName={this.getRestaurantName(
                      reservation.restaurant_id
                    )}
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
