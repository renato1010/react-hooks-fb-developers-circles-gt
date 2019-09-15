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
  }

  setCurrentUser = user => this.setState({ user });
  isAValidPin = pin => /\d{4}/.test(pin);

  render() {
    return (
      <Switch>
        <Route
          path="/main"
          render={rp => <MainDash {...rp} {...this.state} />}
        />
        <Route exact path="/" render={rp => <Home {...this.state} {...rp} />} />
      </Switch>
    );
  }
}

export default App;
