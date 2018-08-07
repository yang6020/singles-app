import { Mongo } from "meteor/mongo";
import { Meteor } from 'meteor/meteor'

export const Singles = new Mongo.Collection("singles");

if (Meteor.isServer) {
  Meteor.publish("singles", function singlePublication() {
    return Singles.find();
  });
}

Meteor.methods({
  'singles.submitProfile'(singles)  {
      if (singles.owner !== this.userId) {
          throw new Meteor.Error (
              'todos.handleToDoSubmit.not-authorized',
              'You are not allowed to add to-dos for other users'
          )
      }
      singles.insert(singles)
  }
});
