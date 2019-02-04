import React from "react";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class SignupForm extends React.Component {
  email = React.createRef();
  userName = React.createRef();
  phone = React.createRef();
  address = React.createRef();
  passWord = React.createRef();
  confirmPassWord = React.createRef();

  handleSubmit = async e => {
    e.preventDefault();
    if (this.passWord.current.value !== this.confirmPassWord.current.value) {
      const notify = () => toast.error(`The passwords provided do not match`);
      notify();
    } else {
      const user = {
        username: this.userName.current.value,
        password: this.passWord.current.value,
        email: this.email.current.value,
        phone: this.phone.current.value,
        address: this.address.current.value
      };
      await this.props.signUp(user);
      const notify = () => toast.success(`Account succesfully created`);
      notify();
      localStorage.setItem("token", this.props.signUpRes.token);
      this.props.checkisLoggedInState();
      this.props.changeSignupModal();
    }
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
              ref={this.email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
              required
            />
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              name="username"
              ref={this.userName}
              required
            />
            <label htmlFor="phone">
              <b>Phone</b>
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              name="phone"
              pattern="^[0]\d{10}$"
              ref={this.phone}
              required
            />
            <label htmlFor="address">
              <b>Address</b>
            </label>
            <input
              type="text"
              placeholder="Enter Home Address"
              name="address"
              ref={this.address}
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              ref={this.passWord}
              required
            />
            <label htmlFor="confirm Passowrd">
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="password"
              ref={this.confirmPassWord}
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
                Sign In
              </button>
            </div>
          </div>
        </form>
        {this.props.isSignUpLoading && (
          <div className="auth--spinner">
            <Loader type="Puff" color="#00BFFF" height="100" width="100" />
          </div>
        )}
      </div>
    );
  }
}

export default SignupForm;
