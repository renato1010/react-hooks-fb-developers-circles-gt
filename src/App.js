import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./componentes/Home/Home";
import MainDash from "./componentes/Main_Dash/MainDash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      setUser: this.setCurrentUser,
      isAValidPin: this.isAValidPin
    };
    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  isAValidPin = pin => /\d{4}/.test(pin);
  setCurrentUser = user => this.setState({ user });

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routerProps => <Home {...routerProps} {...this.state} />}
        />
        <Route
          exact
          path="/main"
          render={routerProps => <MainDash {...this.state} {...routerProps} />}
        />
      </Switch>
    );
  }
}

export default App;
