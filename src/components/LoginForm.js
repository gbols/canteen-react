import React from "react";

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("the login form was clicked");
  };
  render() {
    return (
      <div className="modal">
        <span
          onClick={() => this.props.changeLoginModal()}
          className="close"
          title="Close Modal"
        >
          &times;
        </span>
        <form onSubmit={this.handleSubmit} className="modal-content">
          <div className="container">
            <h1>Login</h1>
            <p>Please fill in this form to Log in to your account.</p>
            <hr />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required="required"
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required="required"
            />
            <div className="clearfix">
              <button
                onClick={() => this.props.changeLoginModal()}
                type="button"
                className="cancelbtn"
              >
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
