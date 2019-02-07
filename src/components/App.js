import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import UsersPage from "./UsersPage";
import CartPage from "./CartPage";
import { Provider } from "react-redux";
import { user } from "../helpers/helpers";
import "../styles/App.css";

import store from "../store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Main {...props} user={user} />}
            />
            <Route
              path="/user"
              render={props => <UsersPage {...props} user={user} />}
            />
            <Route
              path="/cart"
              render={props => <CartPage {...props} user={user} />}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
