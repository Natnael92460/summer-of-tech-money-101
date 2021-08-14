import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { EarnMoney } from "./pages/EarnMoney";
import { Goals } from "./pages/Goals";
import { Progress } from "./pages/Progress";

function siplifySampleData(allSearchResult){
  return allSearchResult.List.map(function (allData) {
    return {listId    : allData.ListingId, 
            listTitle : allData.Title, 
            listPrice : allData.BuyNowPrice,
            listPic   : allData.PictureHref};
  })
}

function App() {

  const [searchResults, setSearchResults] = useState([]);

    useEffect(async () => {
      const response = await fetch('/Sample-Api.json').then(response => response.json());
      setSearchResults (siplifySampleData(response));
    }, [])
  
  return (
    <div className="App">
      <Router>
        <div>
          <span>{JSON.stringify(searchResults)}</span>
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
