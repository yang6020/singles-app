import React from "react";
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";
import { Singles } from "../../../api/singles";
import { Form, Field } from "react-final-form";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

// singlesQueue.map(single=>{
//   <ProfileCard name={single.name} bio={single.bio} audio={AudioOfUser} isProfile={false}/>
// })

// <ProfileCard name={single.name} bio={single.bio} audio={AudioOfUser} />

function SinglesPage(props) {
  const { classes } = props;
  const owner = Meteor.userId();
  const SinglesData = Singles.find().fetch();
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
      <p>{showMeSingles()}</p>
      <SinglesQueueCard />

      <Form
        onSubmit={(values, form) => {
          Meteor.call("singles.addSingle", {
            name: values.name,
            bio: values.bio,
            _id: owner
          });
          // console.log(matchesTotal);
          form.reset();
        }}
        initialValues={{}}
        render={({ handleSubmit, submitting, pristine, values, form }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field component="input" name="name" type="text" label="Name">
                {({ input, meta }) => (
                  <TextField
                    style={{
                      paddingTop: 20,
                      width: "100%",
                      paddingBottom: 20
                    }}
                    placeholder="Name"
                    {...input}
                  />
                )}
              </Field>
            </div>
            <div>
              <Field component="input" name="bio" type="text" label="Bio">
                {({ input, meta }) => (
                  <TextField
                    style={{ width: "100%" }}
                    placeholder="Bio"
                    multiline
                    {...input}
                  />
                )}
              </Field>
            </div>
            <div style={{ paddingTop: 20 }}>
              <Button
                variant="contained"
                disabled={submitting || pristine}
                color="primary"
                type="submit"
              >
                Match
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default withStyles(styles)(SinglesPage);
