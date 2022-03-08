import * as React from "react";
import Popover from "@mui/material/Popover";
import { CgProfile } from "react-icons/cg";

export default function Dropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

          <div className="action-button">My Dining History</div>
          <div
            className="action-button"
            id="signout-btn"
            onClick={props.logout}
          >
            Sign out
          </div>
        </div>
      </Popover>
    </div>
  );
}
