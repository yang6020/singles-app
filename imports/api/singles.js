import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

export const Singles = new Mongo.Collection("singles");

if (Meteor.isServer) {
  Meteor.publish("singles", function singlePublication() {
    return Singles.find();
  });
}

singlesSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  name: {
    type: String,
    optional: true
  },
  email: {
    type: String,
    optional: true
  },
  bio: {
    type: String,
    optional: true,
    max: 350
  }
});

Meteor.methods({
  "singles.addUpdateSingle"(single, owner) {
    singlesSchema.validate(single);
    try {
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
    } catch (e) {
      throw e;
    }
  }
});
