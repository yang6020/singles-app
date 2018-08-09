import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";
import { withTracker } from "meteor/react-meteor-data";

class ChatForm extends Component {
  renderForm() {
    this.chatwindow = Blaze.render(
      Template.chatwindow,
      ReactDOM.findDOMNode(this.refs.chatwindow)
    );
  }
  renderForm() {
    this.message = Blaze.render(
      Template.message,
      ReactDOM.findDOMNode(this.refs.message)
    );
  }
  render() {
    return (
      <div>
        <div className="MessagesContainer">
          <div>
            <div ref="message" />
          </div>
        </div>
        <div className="container">
          <header>
            <h1>Meteor Chat</h1>
          </header>
          <div>
            <div ref="chatwindow" />
          </div>
          <footer>
            <form className="new-message">
              <input
                type="text"
                name="text"
                placeholder="Add a message"
                //   autocomplete="off"
              />
            </form>
          </footer>
        </div>
      </div>
    );
  }
}

export default (ChatFormContainer = withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(ChatForm));
