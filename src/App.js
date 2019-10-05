import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./componentes/Home/Home";
import MainDash from "./componentes/Main_Dash/MainDash";
import { UserProvider } from "./contexts/user.context";

function App() {
  // const [user, setUser] = useState(null);
  const isAValidPin = pin => /\d{4}/.test(pin);

  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route
            path="/main"
            render={routerProps => (
              <MainDash {...routerProps} {...{ isAValidPin }} />
            )}
          />
          <Route
            exact
            path="/"
            render={routerProps => (
              <Home {...routerProps} {...{ isAValidPin }} />
            )}
          />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
