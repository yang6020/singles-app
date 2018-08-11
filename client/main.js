import React from "react";

import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import "./main.html";

import App from "../imports/ui/containers/App/index";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Nunito:regular,bold",
      "Lato:regular,bold,italic",
      "Satisfy:regular,bold"
    ]
  }
});

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
