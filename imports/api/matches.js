import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Matches = new Mongo.Collection("matches");

if (Meteor.isServer) {
  Meteor.publish("matches", function singlePublication() {
    return Matches.find();
  });
}
