import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";

import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import { AuthContext } from "./components/context";
import Scores from "./components/Scores";

function App() {
  const [userState, setUserState] = React.useState({
    token: "",
    user: {},
  });

  
  return (
    <AuthContext.Provider
      value={{
        setUserState: setUserState,
        userState: userState,
      }}
    >
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/scores" exact>
              <Protected>
                  <Scores />
              </Protected>
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
