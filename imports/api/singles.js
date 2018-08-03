import { Mongo } from "meteor/mongo";
export const Singles = new Mongo.Collection("singles");

if (Meteor.isServer) {
  Meteor.publish("singles", function singlePublication() {
    return ToDos.find({});
  });
}
