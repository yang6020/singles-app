import React, { Component } from "react";
import { Singles } from "../../../api/singles";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import { Audio } from "../../../api/files";
import Header from "../../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../../../imports/ui/routes/index";
import "../../../../client/main.html";
import { Matches } from "../../../api/matches";

import FooterMenu from "../../components/FooterMenu/FooterMenu";
class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
  //DELETE IF NOT NEEDED
  // constructor(props) {
  //   super(props)
  //   this.profileInput = React.createRef();
  // }

  // submitProfile = event => {
  //   event.preventDefault();
  //   let profileInput = this.profileInput.current;

  //   if (profileInput.value) {

  //     Meteor.call('singles.submitProfile', {
  //       bios: profileInput.value,
  //       owner: this.props.currentUserId
  //     })
  //     profileInput.value = '';
  //   }
  // }
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
    singles: Singles.find({ owner: Meteor.userId() }).fetch(),
    matches: Matches.find().fetch(),
    audio: Audio.find().fetch()
  };
})(App);
