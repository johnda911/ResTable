import { connect } from "react-redux";
import React from "react";
import { createNewUser } from "../../actions/session";
import Signup from "./signup";
import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    errors: Object.values(state.errors),
    formType: "signup",
    // navLink: (
    //   <Link to="/login" className="link">
    //     log in
    //   </Link>
    // ),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createNewUser: (formUser) => dispatch(createNewUser(formUser)),
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (formUser) => dispatch(createNewUser(formUser)),
    otherForm: (
      <button onClick={() => dispatch(openModal("login"))}>Log in</button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
