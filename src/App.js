import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";

import Navbar from "./components/Navbar";
import Protected from "./components/Protected";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/scores" exact>
            <Protected>
              <div>
                <h1> Test</h1>
              </div>
            </Protected>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
