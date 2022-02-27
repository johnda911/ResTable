import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Hello, {currentUser.username}!</h3>
      <button onClick={logout}>Sign out</button>
    </div>
  ) : (
    <div>
      <Link className="signup-button" to="/signup">
        Sign up
      </Link>
      <Link className="signin-button" to="/login">
        Sign in
      </Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <h1 className="logo">ResTable</h1>
      <div>{display}</div>
    </header>
  );
};
