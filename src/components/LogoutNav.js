import React from "react";

class LogoutNav extends React.Component {
  render() {
    return (
      <ul className="lists">
        <li>
          <a
            onClick={() => this.props.changeLoginModal()}
            style={{ width: "auto" }}
          >
            Sign In
          </a>
        </li>
        <li>
          <a
            onClick={() => this.props.changeSignupModal()}
            style={{ width: "auto" }}
          >
            Sign Up
          </a>
        </li>
      </ul>
    );
  }
}
export default LogoutNav;
