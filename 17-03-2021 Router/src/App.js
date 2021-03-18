import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Topics from "./components/Topics/Topics";
import PageError from "./components/ErrorPage/errorPage";

export default function App() {
  return (
    <Router>
      <div>
        <div className="btn-group">
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/" className="btn btn-dark">
            Home
          </NavLink>

          <NavLink className="btn btn-dark" to="/about">
            About
          </NavLink>

          <NavLink className="btn btn-dark" to="/topics">
            Topics
          </NavLink>
        </div>

        <Redirect from="/" to="/home" />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/" render={() => <Home />} />
          <Route component={PageError} />
        </Switch>
      </div>
    </Router>
  );
}
