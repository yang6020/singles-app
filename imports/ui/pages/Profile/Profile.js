import React from "react";
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";
import { Singles } from "../../../api/singles";
import { Form, Field } from "react-final-form";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Steppers from "./../../components/Steppers/Steppers";
import SwipeableViews from "react-swipeable-views";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import UploadForm from "../../components/uploadForm";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "green"
  }
});

// singlesQueue.map(single=>{
//   <ProfileCard name={single.name} bio={single.bio} audio={AudioOfUser} isProfile={false}/>
// })

// <ProfileCard name={single.name} bio={single.bio} audio={AudioOfUser} />

function Profile(props) {
  const { classes } = props;
  const owner = Meteor.userId();
  const SinglesData = Singles.find().fetch();
  let single = Singles.find({ _id: owner }).fetch();
  // const AudioOfUser = Audio.find({userId:owner})

  function showMeSingles() {
    const singlesQueue = [];
    SinglesData.filter(single => {
      single._id !== owner;
    }).map(single => {
      singlesQueue.push(single);
    });
    return singlesQueue;
  }

  return (
    <div className={classes.root}>
      <ProfileCard
        name={single[0] && single[0].name}
        bio={single[0] && single[0].bio}
        audio={<UploadForm />}
        email={single[0] && single[0].email}
        isProfile={true}
      />
    </div>
  );
}

export default withStyles(styles)(Profile);
