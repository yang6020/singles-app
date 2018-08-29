import { FilesCollection } from "meteor/ostrio:files";
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
export const Audio = new FilesCollection({
  // debug: true,
  disableUpload: false,
  collectionName: "audio",
  allowClientCode: true, // Disallow remove files from Client
  onBeforeUpload(file) {
    // Allow upload files under 10MB
    if (file.size <= 250000 && /mp4|wav|mp3/i.test(file.extension)) {
      return true;
    }

    return alert(
      "Please upload audio file , with size equal or less than .25MB"
    );
  }
});

audioSchema = new SimpleSchema({
  size: {
    type: Number,
    max: 250000
  },
  type: "audio/mp3"
});

if (Meteor.isServer) {
  Meteor.publish("files.audio.all", function() {
    return Audio.find().cursor;
  });
}
