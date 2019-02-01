import React from "react";

class SignupForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("the signup form was clicked");
  };
  render() {
    return (
      <div className="modal">
        <span
          onClick={() => this.props.changeSignupModal()}
          className="close"
          title="Close Modal"
        >
          &times;
        </span>
        <form onSubmit={this.handleSubmit} className="modal-content">
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to Log in to your account.</p>
            <hr />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              name="username"
              required
            />
            <label htmlFor="phone">
              <b>Phone</b>
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              name="phone"
              required
            />
            <label htmlFor="address">
              <b>Address</b>
            </label>
            <input
              type="text"
              placeholder="Enter Home Address"
              name="address"
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <div className="clearfix">
              <button
                onClick={() => this.props.changeSignupModal()}
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

export default SignupForm;
