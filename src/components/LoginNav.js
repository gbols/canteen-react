import React from "react";
import { Link } from "react-router-dom";

class LoginNav extends React.Component {
  handleSignOut = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.checkisLoggedInState();
  };
  render() {
    return (
      <ul className="lists">
        <li>
          <Link
            to="/cart"
            data-badge="0"
            className="cart"
            style={{ display: "inline" }}
          >
            🛒
          </Link>
        </li>
        <li>
          <Link to="/user" style={{ width: "auto" }}>
            <span>
              <span>👤</span> User
            </span>
          </Link>
        </li>
        <li>
          <a onClick={this.handleSignOut} style={{ display: "inline" }}>
            Sign Out
          </a>
        </li>
      </ul>
    );
  }
}
export default LoginNav;
