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

      {/* <ProtectedRoute path="/restaurants" component={RestaurantIndexContainer} /> */}
      {/* <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} /> */}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

{
  /* <Route exact path="/" component={ReportIndexContainer} />
<Route path="/reports/new" component={CreateReportFormContainer} />
<Route exact path="/reports/:reportId" component={ReportShowContainer} />
<Route path="/reports/:reportId/edit" component={EditReportFormContainer} /> */
}
