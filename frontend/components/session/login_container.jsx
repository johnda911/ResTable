import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session";
import Login from "./login";
import { Link } from "react-router-dom";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.login,
    formType: "login",
    navLink: (
      <Link to="/signup" className="link">
        sign up
      </Link>
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
