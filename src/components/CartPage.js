import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";
import Order from "./Order";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import loginCreators from "../actions/loginCreators";
import signupCreators from "../actions/signupCreators";
import postOrderCreators from "../actions/postOrderCreators";
import * as helpers from "../helpers/helpers";
import "react-toastify/dist/ReactToastify.css";

export class CartPage extends React.Component {
  state = {
    loginModal: false,
    signupModal: false,
    total: 0,
    orders: []
  };

  changeLoginModal = () => {
    this.setState({ loginModal: !this.state.loginModal });
  };
  changeSignupModal = () => {
    this.setState({ signupModal: !this.state.signupModal });
  };

  addToOrder = async newOrder => {
    let index;
    const orders = JSON.parse(localStorage.getItem("orders"));
    const theOrder = orders.find(
      (order, index = i) => order.menuid == newOrder
    );
    if (theOrder) {
      theOrder.quantity = theOrder.quantity + 1;
      orders.splice(theOrder, index);
      localStorage.setItem("orders", JSON.stringify(orders));
      await this.setState({
        orders: helpers.combine(
          JSON.parse(localStorage.getItem("menus")),
          JSON.parse(localStorage.getItem("orders"))
        )
      });
      await this.setState({ total: helpers.calTotal(this.state.orders) });
    }
  };

  removeFromOrder = async newOrder => {
    let index;
    const orders = JSON.parse(localStorage.getItem("orders"));
    const theOrder = orders.find(
      (order, index = i) => order.menuid == newOrder
    );
    if (theOrder) {
      theOrder.quantity =
        theOrder.quantity > 1 ? theOrder.quantity - 1 : theOrder.quantity;
      orders.splice(theOrder, index);
      localStorage.setItem("orders", JSON.stringify(orders));
      await this.setState({
        orders: helpers.combine(
          JSON.parse(localStorage.getItem("menus")),
          JSON.parse(localStorage.getItem("orders"))
        )
      });
      await this.setState({ total: helpers.calTotal(this.state.orders) });
    }
  };

  removeCartItem = async newOrder => {
    let index;
    const orders = JSON.parse(localStorage.getItem("orders"));
    const theOrder = orders.find(
      (order, index = i) => order.menuid == newOrder
    );
    if (theOrder) {
      orders.splice(index, 1);
      localStorage.setItem("orders", JSON.stringify(orders));
      await this.setState({
        orders: helpers.combine(
          JSON.parse(localStorage.getItem("menus")),
          JSON.parse(localStorage.getItem("orders"))
        )
      });
      await this.setState({ total: helpers.calTotal(this.state.orders) });
    }
  };

  handlePost = async e => {
    e.preventDefault();
    const order = {
      myOrders: JSON.parse(localStorage.getItem("orders"))
    };
    if (localStorage.getItem("token")) {
      await this.props.postOrder(order);
      if (this.props.success) {
        const notify = () => toast.success(`order was successfully created!`);
        notify();
        localStorage.removeItem("orders");
        await this.setState({
          orders: helpers.combine(
            JSON.parse(localStorage.getItem("menus")),
            localStorage.getItem("orders")
              ? JSON.parse(localStorage.getItem("orders"))
              : []
          )
        });
        await this.setState({ total: helpers.calTotal(this.state.orders) });
      } else {
        const notify = () =>
          toast.error(`something went wrong while placing the order`);
        notify();
      }
    } else {
      const notify = () => toast(`Login to place an order !!...`);
      notify();
    }
  };
  async componentDidMount() {
    await this.setState({
      orders: helpers.combine(
        JSON.parse(localStorage.getItem("menus")),
        localStorage.getItem("orders")
          ? JSON.parse(localStorage.getItem("orders"))
          : []
      )
    });
    await this.setState({ total: helpers.calTotal(this.state.orders) });
  }

  render() {
    return (
      <section className="contain">
        <header>
          <Navbar
            {...this.props}
            cartItems={this.state.cartItems}
            isLoggedIn={this.state.isLoggedIn}
            changeLoginModal={this.changeLoginModal}
            changeSignupModal={this.changeSignupModal}
            checkisLoggedInState={this.checkisLoggedInState}
          />
        </header>
        {this.state.signupModal ? (
          <SignupForm
            {...this.props}
            checkisLoggedInState={this.checkisLoggedInState}
            changeSignupModal={this.changeSignupModal}
          />
        ) : null}
        {this.state.loginModal ? (
          <LoginForm
            {...this.props}
            checkisLoggedInState={this.checkisLoggedInState}
            changeLoginModal={this.changeLoginModal}
          />
        ) : null}
        {this.state.total ? (
          <div>
            <main>
              <div className="food-items">
                <h2>HISTORY OF YOUR ORDERS</h2>
              </div>
              <div className="all-foods">
                {this.state.orders.map((order, i) => (
                  <Order
                    removeFromOrder={this.removeFromOrder}
                    addToOrder={this.addToOrder}
                    removeCartItem={this.removeCartItem}
                    key={i}
                    order={order}
                  />
                ))}
              </div>
            </main>
            <h4>
              Total Sum
              <time className="num">&#8358; {this.state.total}</time>
            </h4>
            <button
              onClick={this.handlePost}
              style={{ backgroundColor: "orangered" }}
            >
              PLACE ORDER
            </button>
          </div>
        ) : (
          <h2 className="num">Your Cart is Empty</h2>
        )}
        {this.props.isLoading && (
          <div className="auth--spinner">
            <Loader type="Puff" color="#00BFFF" height="100" width="100" />
          </div>
        )}
        <Footer />
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.postOrder,
  ...state.login,
  ...state.signUp
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...postOrderCreators, ...loginCreators, ...signupCreators },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
