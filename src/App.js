import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./componentes/Home/Home";
import MainDash from "./componentes/Main_Dash/MainDash";

function App() {
  const [user, setUser] = useState(null);
  const isAValidPin = pin => /\d{4}/.test(pin);

  return (
    <Router>
      <Switch>
        <Route
          path="/main"
          render={routerProps => (
            <MainDash {...routerProps} {...{ user, setUser, isAValidPin }} />
          )}
        />
        <Route
          exact
          path="/"
          render={routerProps => (
            <Home {...routerProps} {...{ user, setUser, isAValidPin }} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
