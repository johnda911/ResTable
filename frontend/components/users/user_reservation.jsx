import React from "react";
import { Link } from "react-router-dom";
import UserReservationItem from "./user_reservation_item";
import { withRouter } from "react-router-dom";

class ReservationIndex extends React.Component {
  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId);
    this.props.requestRestaurants();
    // console.log(this.props);
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
    const { currentUser, user, restaurants, history } = this.props;
    // const reservations = user.userReservations;
    // console.log(user);
    return (
      <>
        {currentUser && user && restaurants && (
          <div className="profile-container">
            <div className="top-greeting-session">
              <div className="username">{user.username}</div>
            </div>
            <div className="main-profile-session">
              <div className="left-nav-session">
                <div className="reservations"> Reservations</div>
                <div className="saved-restaurants">Saved Restaurants</div>
                <div className="account-details">Account Details</div>
              </div>
              <div className="right-content-session">
                <div className="upcoming-reservations">
                  {/* {console.log(user.userReservations)} */}
                  {user.userReservations.length !== 0 ? (
                    <h2>Upcoming Reservations</h2>
                  ) : (
                    <h2>No upcoming reservations</h2>
                  )}
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
                        currentUser={currentUser}
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
