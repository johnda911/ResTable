import React from "react";
import { withRouter } from "react-router-dom";

const SafetyPrecautions = (props) => {
  return (
    <>
      <div>Safety precautions</div>
      <div>Cleaning & Sanitizing</div>
      <ul>
        <li>Surfaces sanitized between seatings</li>
        <li>Common areas deep cleaned daily</li>
        <li>Digital, disposable or sanitized menu provided</li>
        <li>Sanitizer or wipes provided for customers</li>
      </ul>
      <div>Screening</div>
      <ul>
        <li>Sick staff prohibited in the workplace</li>
      </ul>
      <div>Protective Equipment</div>
      <ul>
        <li>Waitstaff wear masks</li>
        <li>Diners must wear masks unless eating or drinking</li>
      </ul>
    </>
  );
};

export default SafetyPrecautions;
