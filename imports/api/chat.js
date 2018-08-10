import { Meteor } from "meteor/meteor";

export const Messages = new Mongo.Collection("messages");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("messages", function() {
    return Messages.find({}, { sort: { createdAt: -1 }, limit: 10 });
  });
}

// Meteor.methods({
//   "message.addMessage"(messages) {
//     Messages.insert(messages);
//   }
// });

Meteor.methods({
  sendMessage: function(messageText) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Messages.insert({
      messageText: messageText,
      createdAt: new Date(),
      username: "hi"
    });
  }
});

/* scrolling code */

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("messages");

  Template.body.helpers({
    recentMessages: function() {
      return Messages.find({}, { sort: { createdAt: 1 } }).fetch();
    }
    /* unread message helper */
  });

  /*chat window scrolling*/

  Template.body.events({
    "submit .new-message": function(event) {
      var text = event.target.text.value;

      Meteor.call("sendMessage", text);

      event.target.text.value = "";
      event.preventDefault();
    }

    /* scroll event */
  });

  /*account config*/
}
