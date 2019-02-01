import React from "react";
import LogoutNav from "./LogoutNav";
import LoginNav from "./LoginNav";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h1>
          <a href="#">Fast Food Fast</a>
        </h1>
        <menu>
          <LogoutNav {...this.props} />
          {/* <LoginNav /> */}
          <div id="mySidenav" className="sidenav">
            <a href="" className="closebtn">
              &times;
            </a>
            <a href="">Log In</a>
            <a href="">Sign Up</a>
            <a href="">Admin</a>
          </div>
          <div>
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              className="drawer"
            >
              &#9776;
            </span>
          </div>
        </menu>
      </nav>
    );
  }
}
export default Navbar;
