import { connect } from "react-redux";
import React from "react";
import { createNewUser } from "../../actions/session";
import Signup from "./signup";
// import { Link } from "react-router-dom";

// to be updated once done with errors action/reducer, component etc
// const mapStateToProps = ({ errors }) => {
//   return {
//     errors: errors.session,
//     formType: "signup",
//     navLink: <Link to="/login">Please log in.</Link>,
//   };
// };

const mDTP = (dispatch) => {
  return {
    createNewUser: (formUser) => dispatch(createNewUser(formUser)),
  };
};
// to be updated once pass errors to props
export default connect(null, mDTP)(Signup);
