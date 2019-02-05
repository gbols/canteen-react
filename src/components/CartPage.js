import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";
import Order from "./Order";
import Footer from "./Footer";
import postOrderCreators from "../actions/postOrderCreators";
import * as helpers from "../helpers/helpers";
import "react-toastify/dist/ReactToastify.css";

class cartPage extends React.Component {
  state = {
    total: 0,
    orders: []
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

const mapStateToProps = state => ({
  ...state.postOrder
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(postOrderCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cartPage);
