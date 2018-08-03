import "../imports/startup/server";

import { Meteor } from "meteor/meteor";
import Audio from "../imports/files";
import Singles from "../imports/api/singles"

Meteor.startup(() => {
  Meteor.publish("files.audio.all", function() {
    return Audio.find().cursor

  })

  Meteor.publish("files.audio.all", function() {
    return Singles.find().cursor
  })
  // code to run on server at startup
});
