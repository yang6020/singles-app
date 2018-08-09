import React from "react";
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";
import { Singles } from "../../../api/singles";
import { Form, Field } from "react-final-form";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Steppers from "./../../components/Steppers/Steppers";
import SwipeableViews from "react-swipeable-views";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "green",
    margin: '0 auto',
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

  return (
    <div className={classes.root}>
      <Grid>
        {SinglesData.map(single => (
          <ProfileCard
            name={single.name}
            bio={single.bio}
            audio={<SinglesQueueCard userId={single._id} />}
            email={single.email}
            isProfile={false}
          />
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SinglesPage);
