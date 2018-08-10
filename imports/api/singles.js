import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Singles = new Mongo.Collection("singles");

if (Meteor.isServer) {
  Meteor.publish("singles", function singlePublication() {
    return Singles.find();
  });
}

Meteor.methods({
  "singles.addUpdateSingle"(single, owner) {
    Singles.update(
      owner,
      {
        $set: {
          _id: single._id,
          name: single.name,
          bio: single.bio,
          email: single.email
        }
      },
      { upsert: true }
    );
  }
});
