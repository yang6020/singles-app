import { Mongo } from "meteor/mongo";
import { Meteor } from 'meteor/meteor'

export const Singles = new Mongo.Collection("singles");

if (Meteor.isServer) {
  Meteor.publish("singles", function singlePublication() {
    return Singles.find();
  });
}
