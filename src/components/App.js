import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import UsersPage from "./UsersPage";
import CartPage from "./CartPage";
import { Provider } from "react-redux";
import "../styles/App.css";

import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/user" component={UsersPage} />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
