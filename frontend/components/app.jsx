import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import Modal from "./modal/modal";
import Home from "./home/home";
import NavBarContainer from "./nav_bar/nav_bar_container";
import RestaurantShowContainer from "./restaurants/show/restaurant_show_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import ReservationConfirmation from "./reservations/reservation_confirmation";

const App = () => (
  <div className="app">
    <Modal />
    <div className="body-container">
      <header>
        <NavBarContainer />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/restaurant/:restaurantId"
          component={RestaurantShowContainer}
        />
        <Route
          exact
          path="/reservation/:reservationId/confirmation"
          component={ReservationConfirmation}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
);

export default App;
