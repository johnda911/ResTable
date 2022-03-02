import React from "react";
import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { login, logout, CLEAR_SESSION_ERRORS } from "../../actions/session";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: () =>
    dispatch(
      login({
        email: "demouser@gmail.com",
        password: "123456",
      })
    ),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => {
    dispatch({
      type: CLEAR_SESSION_ERRORS,
    });
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
