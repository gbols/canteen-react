import React from "react";
import { Link } from "react-router-dom";

const LoginNav = props => (
  <ul className="lists">
    <li>
      <Link
        to="/user"
        data-badge="0"
        className="cart"
        onClick={() => props.changeLoginModal()}
        style={{ display: "inline" }}
      >
        🛒
      </Link>
    </li>
    <li>
      <a onClick={() => props.changeSignupModal()} style={{ width: "auto" }}>
        <span>
          <span>👤</span> User
        </span>
      </a>
    </li>
    <li>
      <a
        onClick={() => props.changeSignupModal()}
        style={{ display: "inline" }}
      >
        Sign Out
      </a>
    </li>
  </ul>
);

export default LoginNav;
