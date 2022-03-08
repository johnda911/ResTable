import React from "react";
import { Link } from "react-router-dom";
import UserReservationItem from "./user_reservation_item";
import { withRouter } from "react-router-dom";

class ReservationIndex extends React.Component {
  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId);
    this.props.requestRestaurants();
    console.log(this.props);
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
    const { user, restaurants, history } = this.props;
    // const reservations = user.userReservations;
    // console.log(this.props);
    return (
      <>
        {user && restaurants && (
          <div className="profile-container">
            <div className="top-greeting-session">{user.username}</div>
            <div className="main-profile-session">
              <div className="left-nav-session">Reservations</div>
              <div className="right-content-session">
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
                        history={history}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ReservationIndex;
