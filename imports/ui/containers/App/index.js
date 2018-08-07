import React, { Component } from "react";
import { Singles } from "../../../api/singles";
import { Profile } from "../../../api/profile";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import { Audio } from "../../../api/files";
import Header from "../../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../../../imports/ui/routes/index";
import "../../../../client/main.html";
import { Matches } from "../../../api/matches";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }

constructor(props) {
  super(props)
  this.profileInput = React.createRef();
}

// handleClearCompleted = () => {
//   Meteor.call('todos.handleClearCompleted')
// };

// handleDeleteTodo = todo => {
//   Meteor.call('todos.handleDeleteTodo', todo)
// }


// handleCheckbox = todo => {
//   Meteor.call('todos.handleCheckbox', todo);
// };

submitProfile = event => {
  event.preventDefault();
  let profileInput = this.profileInput.current;

  if (profileInput.value) {

    Meteor.call('users.submitProfile', {
      bios: profileInput.value,
      owner: this.props.currentUserId
    })
    profileInput.value = '';
  }
}
}

// Users.propTypes = {
//   users: propTypes.arrayOf(
//       propTypes.shape({
//       email: propTypes.string.isRequired,
//       bios: propTypes.string.isRequired,
//     })),
// };

App.propTypes = {
  users: PropTypes.array.isRequired,
  singles: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
  currentUserId: PropTypes.string
};

App.defaultProps = {
  users: [],
  singles: [],
  currentUser: undefined,
  currentUserId: undefined
};

export default withTracker(() => {
  Meteor.subscribe("users");
  Meteor.subscribe("singles");
  Meteor.subscribe("matches");
  Meteor.subscribe("files.audio.all");
  return {
    currentUser: Meteor.user(), // NEW!
    currentUserId: Meteor.userId(), // NEW!
    // users: Users.find({ owner: Meteor.userId() }).fetch(),
    singles: Singles.find().fetch(),
    matches: Matches.find().fetch(),
    audio: Audio.find().fetch()
  };
})(App);
