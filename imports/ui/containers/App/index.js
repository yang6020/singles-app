import React, { Component } from "react";
import "./styles.css";
import { Singles } from "../../../api/singles";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types";
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
        {/* <Header /> */}
        <div className="acc-wrapper">
          <AccountsUIWrapper />
        </div>
        <div className="singles-list" />
      </div>
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
