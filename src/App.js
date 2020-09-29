import React from "react";
import "./App.css";
import Search from "./Search";
import SearchResult from "./SearchResult";
import logo from "./logo.png"
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SearchResultDetails from "./SearchResultDetails";
import Footer from "./footer";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <div className="row">
          <Switch>
            <Route path="/search/:id">
              <SearchResult></SearchResult>
            </Route>
            <Route path="/details/:id">
              <SearchResultDetails></SearchResultDetails>
            </Route>
            <Route path={"/"}>
              <Search isCenter={true}></Search>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
