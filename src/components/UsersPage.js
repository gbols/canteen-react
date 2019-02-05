import React from "react";
import Navbar from "./Navbar";
import History from "./History";

class usersPage extends React.Component {
  render() {
    return (
      <section className="contain">
        <header>
          <Navbar
            {...this.props}
            changeLoginModal={this.changeLoginModal}
            changeSignupModal={this.changeSignupModal}
            checkisLoggedInState={this.checkisLoggedInState}
          />
        </header>
        <main>
          <div className="food-items">
            <h2 id="history">HISTORY OF YOUR ORDERS</h2>
          </div>
          <div className="encompaser">
            <ul className="responsive-table">
              <li className="table-header">
                <div className="col col-1">S/N</div>
                <div className="col col-1">Order Id</div>
                <div className="col col-1">Date</div>
                <div className="col col-2">Total</div>
                <div className="col col-2">Status</div>
              </li>
              <History />
            </ul>
          </div>
        </main>
      </section>
    );
  }
}

export default usersPage;
