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
        <div>
          <span ref="sounds" />
        </div>
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
    console.log("Andreisadfasdfasd", Audio.collection._collection._docs)
    return Audio.findOne({ userId: Meteor.userId() });
    
  },
  allAudioFiles(){
    return Audio.find();
  },


  user() {
    return Meteor.userId();
  }
});


Template.uploadForm.events({
  "change #fileInput"(e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      console.log("Uploading....");
      console.log("PAAAM",e.currentTarget.files[0]);
      const upload = Audio.insert(
        {
          file: e.currentTarget.files[0],
          streams: "dynamic",
          chunkSize: "dynamic"
        },
        false
      );
      
      // const signedinUserId = Meteor.userId();
      // let audiosObject = Audio.collection._collection._docs;
      // let arrayOfObj = Object.values(audiosObject._map);
      // let userAudioObj = arrayOfObj.filter(
      //   audio => audio.userId === signedinUserId
      // );
      // let userAudioId = userAudioObj.map(
      //   audio => audio._id
        
      // );

      // const upload = Audio.update(
      //   {
      //     _id: userAudioUrl,
          
      //   },
       
      //   {$set:{  file: e.currentTarget.files[0],
      //         streams: "dynamic",
      //         chunkSize: "dynamic"}
      //       },
      //         {upsert:true}
      // )
      // console.log("AUDIO", userAudioId)
      // console.log("Inserts",e.currentTarget.files[0]);
      


      // upload.on('start', function () {
      //   template.currentUpload.set(this);
      // });

      upload.on("end", function(error, fileObj) {
        console.log("File Object",fileObj)
        if (error) {
          alert("Error during upload: " + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        //   template.currentUpload.set(false);
      });

      upload.start();
      
    }
  }
});
