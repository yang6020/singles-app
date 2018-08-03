import { FilesCollection } from "meteor/ostrio:files";
import { Meteor } from 'meteor/meteor'

export const Audio = new FilesCollection({
  collectionName: "audio",
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload(file) {
    // Allow upload files under 10MB
    if (file.size <= 10485760 && /mp4|wav|mp3/i.test(file.extension)) {
      return true;
    }
    return "Please upload audio file , with size equal or less than 10MB";
  }
});

if (Meteor.isServer) {
  Meteor.publish("files.audio.all", function() {
    return Audio.find().cursor
  })
}

