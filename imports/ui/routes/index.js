import SinglesPage from "../pages/SinglesPage/SinglesPage";
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
      <Route exact path="/singles" component={SinglesPage} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={LoginSignup} />
      <Route exact path="/matches" component={MatchPage} />
      <Redirect to="/login" />
    </Switch>
  </div>
);
