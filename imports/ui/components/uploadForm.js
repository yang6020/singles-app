import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";
import { Audio } from "../../api/files";
import { withTracker } from "meteor/react-meteor-data";

class UploadForm extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login button
    this.renderForm();
  }
  renderForm() {
    this.sounds = Blaze.render(
      Template.sounds,
      ReactDOM.findDOMNode(this.refs.sounds)
    );
  }
  cleanForm() {
    Blaze.remove(this.sounds); // Clean up Blaze view
  }
  componentWillUnmount() {
    this.cleanForm();
  }
  render() {
    return (
      <div>
        <span ref="sounds" />
      </div>
    ); // Render a placeholder
  }
}

export default (UploadFormContainer = withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(UploadForm));

Template.files.onCreated(() => {
  Meteor.subscribe("files.audio.all");
});
Template.sounds.helpers({
  user() {
    return Meteor.userId();
  }
});

Template.files.helpers({
  audioFile() {
    console.log("Andreisadfasdfasd", Audio.collection._collection._docs);
    return Audio.findOne({ userId: Meteor.userId() });
  },
  allAudioFiles() {
    return Audio.find();
  },

  user() {
    return Meteor.userId();
  }
});

Template.uploadForm.events({
  "change #fileInput"(e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      !Audio.findOne({ userId: Meteor.userId() })
        ? (upload = Audio.insert(
            {
              file: e.currentTarget.files[0],
              streams: "dynamic",
              chunkSize: "dynamic"
            },
            false
          ))
        : Audio.remove(
            { _id: Audio.findOne({ userId: Meteor.userId() }, { _id: 1 })._id },
            () => {
              return (
                console.log("file removed"),
                (upload = Audio.insert({
                  file: e.currentTarget.files[0],
                  streams: "dynamic",
                  chunkSize: "dynamic"
                }))
              );
            }
          );

      upload.on("end", function(fileObj) {
        console.log("File Object", fileObj);

        alert('File "' + fileObj.name + '" successfully uploaded');
      });

      upload.start();
    }
  }
});
