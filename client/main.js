import React from "react";

import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./main.html";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
import App from "../imports/ui/containers/App/index"

// export default class HelloWorld extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Routes />
//       </Router>
//     );
//   }
// }

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
