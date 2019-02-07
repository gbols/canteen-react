import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import historyCreators from "../actions/historyCreators";
import Navbar from "./Navbar";
import History from "./History";
import Loader from "react-loader-spinner";
import { mix } from "../helpers/helpers";

export class UsersPage extends React.Component {
  state = {
    display: []
  };
  componentDidMount() {
    this.props.fetchHistory(this.props.user.user.userid);
  }

  componentDidUpdate(prevProps) {
    if (this.props.response.orders !== prevProps.response.orders) {
      mix(
        this.props.response.orders,
        JSON.parse(localStorage.getItem("menus"))
      );
      const sortedOrder = this.props.response.orders.sort(
        (a, b) => b.orderid - a.orderid
      );
      this.setState({ display: sortedOrder });
    }
  }
  render() {
    const { display } = this.state;
    return (
      <React.Fragment>
        {this.props.isLoading ? (
          <div className="loader">
            <Loader type="Plane" color="#FFA500" height="100" width="100" />
          </div>
        ) : (
          <section className="contain">
            <header>
              <Navbar {...this.props} />
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
                  {display.map((order, i) => (
                    <History key={i} index={i} order={order} />
                  ))}
                </ul>
              </div>
            </main>
          </section>
        )}
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.fetchHistory
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(historyCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
