import Singles from "../pages/Singles/Singles";
import Profile from "../pages/Profile/Profile";
import { Redirect, Route, Switch } from "react-router";
import LoginSignup from "../pages/LoginSignup/LoginSignup";
import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import MatchPage from "../pages/MatchPage/MatchPage";
export default () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/singles" component={Singles} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={LoginSignup} />
      <Route exact path="/matches" component={MatchPage} />
      <Redirect to="/login" />
    </Switch>
  </div>
);
  