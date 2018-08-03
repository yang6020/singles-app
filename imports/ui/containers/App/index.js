import React, { Component } from "react";
import "./styles.css";
import { Singles } from "../../../api/singles";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import AccountsUIWrapper from "../../components/AccountsWrapper";
import Header from "../../components/Header";

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   todos: [{ id: 0, title: "Learn React", complete: false }],
    //   lastId: 0
    // };
  }

  render() {
    const { singles } = this.props;
    let number = singles.length;
    const currentUserId = this.props.currentUserId;
    return (
      <div className="app-wrapper">
        <Header />
        <div className="login-wrapper">
          <AccountsUIWrapper />
        </div>
        <div className="todo-list">
          <h1>So Much To Do</h1>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
  currentUserId: PropTypes.string
};

App.defaultProps = {
  todos: [],
  currentUser: undefined,
  currentUserId: undefined
};

export default withTracker(() => {
  Meteor.subscribe("todos");
  return {
    currentUser: Meteor.user(), // NEW!
    currentUserId: Meteor.userId(), // NEW!
    todos: ToDos.find({}).fetch()
  };
})(App);
