import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import Modal from "./modal/modal";
import Home from "./home/home";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const App = () => (
  <div className="app">
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <AuthRoute path="/signup" component={SignupContainer} /> */}
      {/* <AuthRoute path="/login" component={LoginContainer} /> */}
      {/* <ProtectedRoute path="/restaurants" component={RestaurantIndexContainer} /> */}
      {/* <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} /> */}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
