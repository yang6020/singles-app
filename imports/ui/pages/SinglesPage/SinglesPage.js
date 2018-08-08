import React from "react";
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";
import { Singles } from "../../../api/singles";
import { Form, Field } from "react-final-form";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TestCard from "./../../components/TestCard/TestCard";
import Steppers from "./../../components/Steppers/Steppers";
import SwipeableViews from "react-swipeable-views";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Grid from "@material-ui/core/Grid";

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

function SinglesPage(props) {
  const { classes } = props;
  const owner = Meteor.userId();
  // const SinglesData = Singles.find().fetch();
  // const AudioOfUser = Audio.find({userId:owner})
  const SinglesData = Singles.find({ _id: { $ne: owner } }).fetch();
  function showMeSingles() {
    let SinglesData = Singles.find({ _id: { $ne: owner } }).fetch();
    return SinglesData;
  }

  // function showMeSingles() {
  //   const singlesQueue = [];
  //   SinglesData.filter(single => {
  //     single._id !== owner;
  //   }).map(single => {
  //     singlesQueue.push(single);
  //   });
  //   return singlesQueue;
  // }

  return (
    <Grid>
      {SinglesData.map(single => (
        <ProfileCard name={single.name} bio={single.bio} />
      ))}
    </Grid>
  );
}

export default withStyles(styles)(SinglesPage);
