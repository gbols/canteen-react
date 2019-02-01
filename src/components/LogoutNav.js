import React from "react";

const LogoutNav = props => (
  <ul className="lists">
    <li>
      <a onClick={() => props.changeLoginModal()} style={{ width: "auto" }}>
        Sign In
      </a>
    </li>
    <li>
      <a onClick={() => props.changeSignupModal()} style={{ width: "auto" }}>
        Sign Up
      </a>
    </li>
  </ul>
);

export default LogoutNav;
