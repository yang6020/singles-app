import "../imports/startup/server";

import { Meteor } from "meteor/meteor";
import Audio from "../imports/files";

Meteor.startup(() => {
  Meteor.publish("files.audio.all", function() {
    return Audio.find().cursor;
  });
  // code to run on server at startup
});
