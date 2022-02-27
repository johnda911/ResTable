import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session";
import Login from "./login";
// import { Link } from "react-router-dom";

// to be updated once done with errors action/reducer, component etc
// const mapStateToProps = ({ errors }) => {
//   return {
//     errors: errors.session,
//     formType: "login",
//     navLink: <Link to="/signup">Please sign up.</Link>,
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
});
// to be updated once pass errors to props
export default connect(null, mapDispatchToProps)(Login);
