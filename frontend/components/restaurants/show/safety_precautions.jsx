import React from "react";
import { FcApproval } from "react-icons/fc";
import { withRouter } from "react-router-dom";

const SafetyPrecautions = (props) => {
  return (
    <div className="module-container">
      <div className="module-title">Safety precautions</div>
      <div className="module-info">
        <div className="sub-list">
          <div className="sub-title">Cleaning & Sanitizing</div>
          <ul>
            <li>
              <FcApproval className="check-icon" />
              Surfaces sanitized between seatings
            </li>
            <li>
              <FcApproval className="check-icon" />
              Common areas deep cleaned daily
            </li>
            <li>
              <FcApproval className="check-icon" />
              Digital, disposable or sanitized menu provided
            </li>
            <li>
              <FcApproval className="check-icon" />
              Sanitizer or wipes provided for customers
            </li>
          </ul>
        </div>
        <div className="sub-list">
          <div className="sub-title">Screening</div>
          <ul>
            <li>
              <FcApproval className="check-icon" />
              Sick staff prohibited in the workplace
            </li>
          </ul>
        </div>
        <div className="sub-list">
          <div className="sub-title">Protective Equipment</div>
          <ul>
            <li>
              <FcApproval className="check-icon" />
              Waitstaff wear masks
            </li>
            <li>
              <FcApproval className="check-icon" />
              Diners must wear masks unless eating or drinking
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SafetyPrecautions;
