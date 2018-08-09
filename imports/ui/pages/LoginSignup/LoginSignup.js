

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";
import { withTracker } from "meteor/react-meteor-data";

class LoginSignup extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login button
    this.renderForm();
  }
  renderForm() {
  
    this.login = Blaze.render(
      Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.login)
    );
  }
  cleanForm() {
  
    Blaze.remove(this.login);
  }
  componentWillUnmount() {
    this.cleanForm();
  }
  render() {
    return (
      <div>
        <span ref="login" />
      </div>
    ); // Render a placeholder
  }
}

export default (LoginSignupContainer = withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(LoginSignup));

