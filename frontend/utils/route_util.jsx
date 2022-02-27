import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
});

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

// code below is just to make sure when we logout, the user cannot see the restaurant index page, probably won't need it.
// const Protected = ({ component: Component, path, loggedIn }) => (
//   <Route
//     path={path}
//     render={(props) =>
//       loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
//     }
//   />
// );

// to be used after setup restaurants index page
// export const ProtectedRoute = withRouter(
//   connect(mapStateToProps, undefined)(Protected)
// );
