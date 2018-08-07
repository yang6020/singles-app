import React from "react";

import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import "./main.html";

import App from "../imports/ui/containers/App/index";

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
