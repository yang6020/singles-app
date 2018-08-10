import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";
import { withTracker } from "meteor/react-meteor-data";
import styes from "./styles";

import Queue_musicIcon from "@material-ui/icons/Queuemusic";
class LoginSignup extends Component {
  // constructor(props){
  //   super(props)
  // }
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
    // const { classes } = this.props;
    return (

      <div style={{height: "100vh", background: "green", display:"flex", justifyContent:"center", alignItems: "center", flexDirection:"column"}}>
        <Queue_musicIcon
              style={{ fontSize: 350 }}
              color={"primary"}
            />
        <div style={{}}>

        <span ref="login" />
        </div>
      </div>
    ); // Render a placeholder
  }
}

export default (LoginSignupContainer = withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
<<<<<<< HEAD
}),(LoginSignup));

=======
})(LoginSignup));
>>>>>>> 20e4d89f8452b1bac9e0a959b181ac7cfadfd044
