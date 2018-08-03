import React, { Component } from "react";
import "./styles.css";
import { Singles } from "../../../api/singles";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import AccountsUIWrapper from "../../components/AccountsWrapper";
import Header from "../../components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../../../client/routes/index";
import '../../../../client/main.html'
class App extends Component {
  
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }

  
}

App.propTypes = {
  singles: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
  currentUserId: PropTypes.string
};

App.defaultProps = {
  singles: [],
  currentUser: undefined,
  currentUserId: undefined
};

export default withTracker(() => {
  Meteor.subscribe("singles");
  return {
    currentUser: Meteor.user(), // NEW!
    currentUserId: Meteor.userId(), // NEW!
    singles: Singles.find({}).fetch()
  };
})(App);
