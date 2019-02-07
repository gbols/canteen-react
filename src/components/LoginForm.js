import React from "react";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class LoginForm extends React.Component {
  passWord = React.createRef();
  userName = React.createRef();
  handleSubmit = async e => {
    e.preventDefault();
    const user = {
      password: this.passWord.current.value,
      username: this.userName.current.value
    };
    if (!this.props.isLoginError) {
      await this.props.login(user);
      const notify = () => toast.success(`${this.props.loginRes.message}`);
      notify();
      localStorage.setItem("token", this.props.loginRes.token);
      // this.props.checkisLoggedInState();
      this.props.changeLoginModal();
      location.reload();
    } else {
      const notify = () =>
        toast.error(`${this.props.loginRes.response.data.message}`);
      notify();
    }
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
              <b>User Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              ref={this.userName}
              name="username"
              required="required"
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              ref={this.passWord}
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
        {this.props.isLogLoading && (
          <div className="auth--spinner">
            <Loader type="Puff" color="#00BFFF" height="100" width="100" />
          </div>
        )}
      </div>
    );
  }
}

export default LoginForm;
