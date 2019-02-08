import React from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Footer from "./Footer";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class PrimaryLayout extends React.Component {
  state = {
    loginModal: false,
    signupModal: false,
    isLoggedIn: localStorage.getItem("token") || false,
    cartItems: localStorage.getItem("orders")
      ? JSON.parse(localStorage.getItem("orders")).length
      : 0,
    orders: []
  };
  changeLoginModal = () => {
    this.setState({ loginModal: !this.state.loginModal });
  };
  changeSignupModal = () => {
    this.setState({ signupModal: !this.state.signupModal });
  };
  checkisLoggedInState = () => {
    this.setState({ isLoggedIn: localStorage.getItem("token") || false });
  };
  addToOrder = index => {
    const orders = [...this.state.orders];
    const newOrder = orders.find(order => order.menuid === index);
    if (!newOrder) {
      const notify = () => toast.success("added!....");
      notify();
      orders.push({ menuid: index, quantity: 1 });
      this.setState({ orders });
      localStorage.setItem("orders", JSON.stringify(orders));
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("orders")).length
      });
    }
  };

  async componentDidMount() {
    await this.props.fetchMenu();
    localStorage.setItem("menus", JSON.stringify(this.props.response.menus));
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isLoading ? (
          <div className="loader">
            <Loader type="Plane" color="#FFA500" height="100" width="100" />
          </div>
        ) : (
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
            <main>
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
              <div className="moto">
                <div className="mantra">
                  <div className="emoji">🍲</div>
                  <h2>QUALITY FOODS</h2>
                  <p>
                    Sit amet, consectetur adipiscing elit quisque eget maximus
                    velit, non eleifend libero curabitur dapibus mauris sed leo
                    cursus aliquetcras suscipit.
                  </p>
                </div>
                <div className="mantra">
                  <div className="emoji">🚚</div>
                  <h2>FASTEST DELIVERY</h2>
                  <p>
                    Sit amet, consectetur adipiscing elit quisque eget maximus
                    velit, non eleifend libero curabitur dapibus mauris sed leo
                    cursus aliquetcras suscipit.
                  </p>
                </div>
                <div className="mantra">
                  <div className="emoji">🍜</div>
                  <h2>QUALITY RECIPES</h2>
                  <p>
                    Sit amet, consectetur adipiscing elit quisque eget maximus
                    velit, non eleifend libero curabitur dapibus mauris sed leo
                    cursus aliquetcras suscipit.
                  </p>
                </div>
              </div>
              <div className="food-items">
                <h2>DISCOVER OUR MENU</h2>
                <div className="all-foods">
                  {(this.props.response.menus || []).map((menu, i) => (
                    <Menu key={i} addToOrder={this.addToOrder} {...menu} />
                  ))}
                </div>
              </div>
            </main>
            <Footer />
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default PrimaryLayout;
