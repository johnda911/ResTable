import { connect } from "react-redux";
import React from "react";
import { createNewUser, CLEAR_SESSION_ERRORS } from "../../actions/session";
import Signup from "./signup";
import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";
// import {CLEAR_SESSION_ERRORS} from '../../actions/session';

const mapStateToProps = (state) => {
  return {
    errors: Object.values(state.errors),
    formType: "signup",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (formUser) => dispatch(createNewUser(formUser)),
    otherForm: (
      <button onClick={() => dispatch(openModal("login"))}>Log in</button>
    ),
    closeModal: () => {
      dispatch({
        type: CLEAR_SESSION_ERRORS,
      });
      dispatch(closeModal());
    },
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
