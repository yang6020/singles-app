import React, { Component } from "react";
import { Singles } from "../../../api/singles";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../../../imports/ui/routes/index";
import '../../../../client/main.html'
import { Matches } from "../../../api/matches";
import {Audio} from "../../../api/files"
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
  Meteor.subscribe("matches");
  Meteor.subscribe("files.audio.all");
  
  return {
    currentUser: Meteor.user(), // NEW!
    currentUserId: Meteor.userId(), // NEW!
    singles: Singles.find().fetch(),
    matches: Matches.find().fetch(),
    audio: Audio.find().fetch()
    
  };
})(App);
