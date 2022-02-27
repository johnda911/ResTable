import React from "react";
import {
  Route,
  Redirect,
  BrowserRouter,
  Switch,
  Link,
  HashRouter,
} from "react-router-dom";

import Home from "./home/home";
// import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from "./nav_bar/nav_bar_container";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const App = () => (
  <div className="app">
    <header>
      {/* <Link to="/" className="header-link">
        <h1>ResTable</h1>
      </Link> */}
    </header>
    <h1>App React - ResTable Homepage</h1>

    <Switch>
      {/* to be updated for "/" once complete Home component */}
      <Route exact path="/" component={NavBarContainer} />
      <Route exact path="/" component={Home} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      {/* <ProtectedRoute path="/restaurants" component={RestaurantIndexContainer} /> */}
      {/* <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} /> */}
    </Switch>
  </div>
);

export default App;
