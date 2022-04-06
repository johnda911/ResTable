import * as React from "react";
import Popover from "@mui/material/Popover";
import { CgProfile } from "react-icons/cg";
import { withRouter, Link } from "react-router-dom";

const Dropdown = withRouter(({ history, ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDiningHistory = () => {
    handleClose();
    history.push(`/user/${props.currentUser.id}/reservations`);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button id="icon-button" onClick={handleClick}>
        <CgProfile className="ico" />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="profile-dropdown">
          <div className="title">
            Hello, {props.currentUser ? props.currentUser.username : ""}!
          </div>

          <div onClick={handleDiningHistory} className="action-button">
            My Dining History
          </div>
          <Link to="/">
            <div
              className="action-button"
              id="signout-btn"
              onClick={props.logout}
            >
              Sign out
            </div>
          </Link>
          {/* <div
            className="action-button"
            id="signout-btn"
            onClick={props.logout}
          >
            <Link to="/">Sign out</Link>
          </div> */}
          {/* <div
            className="action-button"
            id="signout-btn"
            onClick={props.logout}
          >
            Sign out
          </div> */}
        </div>
      </Popover>
    </div>
  );
});

export default Dropdown;
