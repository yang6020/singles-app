import React from "react";

import { Meteor } from "meteor/meteor";

import { render } from "react-dom";
import "./main.html";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";

export default class HelloWorld extends React.Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

Meteor.startup(() => {
  render(<HelloWorld />, document.getElementById("app"));
});
