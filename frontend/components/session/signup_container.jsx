import { connect } from "react-redux";
import React from "react";
import { createNewUser } from "../../actions/session";
import Signup from "./signup";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    errors: Object.values(state.errors),
    formType: "signup",
    navLink: <Link to="/login">log in</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (formUser) => dispatch(createNewUser(formUser)),
  };
};
// to be updated once pass errors to props
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
