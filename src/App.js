import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { EarnMoney } from "./pages/EarnMoney";
import { Goals } from "./pages/Goals";
import { Progress } from "./pages/Progress";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/EarnMoney">Earn Money</Link>
              </li>
              <li>
                <Link to="/goals">Goals</Link>
              </li>
              <li>
                <Link to="/progress">Progress</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/EarnMoney">
              <EarnMoney />
            </Route>
            <Route path="/goals">
              <Goals />
            </Route>
            <Route path="/progress">
              <Progress />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
