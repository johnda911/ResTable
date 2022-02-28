import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session";
import Login from "./login";
import { openModal, closeModal } from "../../actions/modal_actions";
// import { Link } from "react-router-dom";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.login,
    formType: "login",
    // navLink: (
    //   <Link to="/signup" className="link">
    //     sign up
    //   </Link>
    // ),
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   login: (formUser) => dispatch(login(formUser)),
// });
const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (formUser) => dispatch(login(formUser)),
    otherForm: (
      <button onClick={() => dispatch(openModal("signup"))}>Sign up</button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);