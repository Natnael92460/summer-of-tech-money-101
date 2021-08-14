import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { Goals } from "./pages/Goals";
import { Progress } from "./pages/Progress";
import { Page4 } from "./pages/page4";


function App() {
  
  //fetching the sample data
  fetch('/Sample-Api.json')
  .then(response => response.json())
  .then(data => console.log(data));

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
                <Link to="/goals">Goals</Link>
              </li>
              <li>
                <Link to="/progress">Progress</Link>
              </li>
              <li>
                <Link to="/page4">Page4</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/goals">
              <Goals />
            </Route>
            <Route path="/progress">
              <Progress />
            </Route>
            <Route path="/page4">
              <Page4 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
