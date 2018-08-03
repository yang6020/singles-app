import React from "react";

import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./main.html";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../imports/ui/containers/App/index"

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
