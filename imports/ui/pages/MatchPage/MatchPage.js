import React, { Children } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import MatchItem from "../../components/MatchItem/MatchItem";
import { Matches } from "../../../api/matches";
import { Form, Field } from "react-final-form";
import { TextField, Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function MatchPage(props) {
  const { classes } = props;
  function matches() {
    return Matches.find({}).fetch();
  }
  return (
    <div className={classes.root}>
      <List component="nav">
        <MatchItem matches={matches()} />
      </List>
      <Form
        onSubmit={(values, form) => {
          Meteor.call("matches.addMatch", {
            userId1: values.userId1,
            userId2: values.userId2
          });
          form.reset();
        }}
        initialValues={{}}
        render={({ handleSubmit, submitting, pristine, values, form }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field component="input" name="userId1" type="text" label="User">
                {({ input, meta }) => (
                  <TextField
                    style={{
                      paddingTop: 20,
                      width: "100%",
                      paddingBottom: 20
                    }}
                    placeholder="Name your Item"
                    {...input}
                  />
                )}
              </Field>
            </div>
            <div>
              <Field
                component="input"
                name="userId2"
                type="text"
                label="Swiped"
              >
                {({ input, meta }) => (
                  <TextField
                    style={{ width: "100%" }}
                    placeholder="Name your description"
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

MatchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MatchPage);
