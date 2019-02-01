import React from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Footer from "./Footer";
import Loader from 'react-loader-spinner';

export class PrimaryLayout extends React.Component {
  state = {
    loginModal: false,
    signupModal: false
  };
  changeLoginModal = () => {
    this.setState({ loginModal: !this.state.loginModal });
  };
  changeSignupModal = () => {
    this.setState({ signupModal: !this.state.signupModal });
  };

   componentDidMount(){
     this.props.fetchMenu();
  }

  render() {
    return (
      <React.Fragment>
      {this.props.isLoading ? <div className="loader"> <Loader
         type="Plane"
         color="#FFA500"
         height="100"	
         width="100"
      /> </div> : <section className="contain">
        <header>
          <Navbar
            changeLoginModal={this.changeLoginModal}
            changeSignupModal={this.changeSignupModal}
          />
        </header>
        <main>
          {this.state.signupModal ? (
            <SignupForm changeSignupModal={this.changeSignupModal} />
          ) : null}
          {this.state.loginModal ? (
            <LoginForm changeLoginModal={this.changeLoginModal} />
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
            {(this.props.response.menus || []).map((menu,i) => <Menu key={i} {...menu} />)}
            </div>
          </div>
        </main>
        <Footer />
      </section>}
      </React.Fragment>
    );
  }
}

export default PrimaryLayout;
