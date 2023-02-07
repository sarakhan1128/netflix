import React from 'react';
import "./HomeScreen.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function HomeScreen() {
  return (
    <div className="homescreen">
        <Router>
            <Switch>
                <Route path="/home">
                    <h1>hey</h1>
                </Route>
                <Route exact path="/">
                  <App />
                </Route>
            </Switch>
        </Router>
       

   
    </div>
  );
}

export default HomeScreen;
