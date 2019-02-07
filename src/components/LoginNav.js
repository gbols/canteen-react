import React from "react";
import { Link } from "react-router-dom";

class LoginNav extends React.Component {
  handleSignOut = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    location.reload();
  };

  render() {
    return (
      <ul className="lists">
        <li>
          <Link
            to="/cart"
            data-badge={this.props.cartItems}
            className="cart"
            style={{ display: "inline" }}
          >
            🛒
          </Link>
        </li>
        <li>
          <Link to="/user" style={{ width: "auto" }}>
            <span>
              <span>👤</span>
              {this.props.user.user.username}
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
