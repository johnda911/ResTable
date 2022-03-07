import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

export default ({ currentUser, logout, login, openModal }) => {
  const handleDemoUser = () => login();
  const display = currentUser ? (
    <>
      {/* <div className="profile-dropdown">
        <h3>Hello, {currentUser.username}!</h3>
        <button onClick={logout}>Sign out</button>
      </div> */}
      <div className="icon-group">
        <button id="icon-button">
          <CgProfile className="ico" />
        </button>
        <button id="icon-button">
          <AiOutlineCalendar className="ico" />
        </button>
        <button id="search-button">
          <BiSearch className="ico" />
        </button>
      </div>
    </>
  ) : (
    <div className="button-group">
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
      <button className="button signin-button" onClick={handleDemoUser}>
        Demo
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
