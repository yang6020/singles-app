import React from "react";
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";
import { Singles } from "../../../api/singles";
import { Form, Field } from "react-final-form";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import UploadForm from "../../components/uploadForm";
import styles from "./styles";

function Profile(props) {
  const { classes } = props;
  const owner = Meteor.userId();
  const SinglesData = Singles.find().fetch();
  let single = Singles.find({ _id: owner }).fetch();

  return (
    <div className={classes.root}>
      <div className={classes.profileAudio}>{/* <UploadForm /> */}</div>
      <ProfileCard
        className={classes.profile}
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
