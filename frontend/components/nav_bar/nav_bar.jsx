import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <>
      <div className="profile-dropdown">
        <h3>Hello, {currentUser.username}!</h3>
        <button onClick={logout}>Sign out</button>
      </div>
      <div className="icon-group">
        <button className="icon-button">
          <i className="fa-regular fa-user fa-xl"></i>
        </button>
        <button className="icon-button">
          <i className="fa-regular fa-calendar fa-xl"></i>
        </button>
        <button id="search-button">
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </button>
      </div>
    </>
  ) : (
    <div className="button-group">
      {/* <Link className="button signup-button" to="/signup">
        Sign up
      </Link> */}
      {/* <Link className="button signin-button" to="/login">
        Sign in
      </Link> */}
      <button
        className="button signup-button"
        onClick={() => openModal("signup")}
      >
        Sign up
      </button>
      <button
        className="button signin-button"
        onClick={() => openModal("login")}
      >
        Sign in
      </button>
      <button id="search-button">
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
      </button>
    </div>
  );

  return (
    <header className="navbar">
      <div className="grey-bar">
        <a
          href="https://www.linkedin.com/in/yuchen-katie-hang-443b27a4/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin fa-lg"></i>
        </a>
        <a href="https://github.com/johnda911" target="_blank">
          <i className="fa-brands fa-github fa-lg"></i>
        </a>
      </div>
      <nav className="header-nav">
        <div className="header-nav-left">
          <Link className="button" to="/">
            <img id="restable-logo" src="images/restable_logo.png" />
          </Link>
          <h2>ResTable</h2>
        </div>
        <div className="header-nav-right">{display}</div>
      </nav>
    </header>
  );
};
