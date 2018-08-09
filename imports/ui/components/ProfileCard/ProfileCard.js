import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Form, Field } from "react-final-form";
import { TextField, Button } from "@material-ui/core";
import { Singles } from "../../../api/singles";
import { withRouter } from "react-router";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

class ProfileCard extends React.Component {
  // ({ classes, name, bio, audio })
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      bio: this.props.bio,
      email: this.props.email,
      audio: this.props.audio,
      isProfile: this.props.isProfile
    };
  }
  render() {
    const { classes } = this.props;
    const owner = Meteor.userId();
    let singleData = [];
    {
      if (!Singles.find({ _id: owner }).fetch()) {
        singleData = [];
      }
      singleData = Singles.find({ _id: owner }).fetch();
      console.log(Singles.find({ _id: owner }).fetch());
    }

    return (
      <Card className={classes.card}>
        {this.state.isProfile && singleData.length === 0 ? (
          <div>
            <Form
              onSubmit={(values, form) => {
                Meteor.call("singles.addSingle", {
                  name: values.name,
                  bio: values.bio,
                  email: values.email,
                  _id: owner
                });
                form.reset();
              }}
              initialValues={{}}
              render={({
                handleSubmit,
                submitting,
                pristine,
                values,
                form
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field
                      component="input"
                      name="name"
                      type="text"
                      label="Name"
                    >
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
                    <Field
                      component="input"
                      name="email"
                      type="text"
                      label="Email"
                    >
                      {({ input, meta }) => (
                        <TextField
                          style={{
                            paddingTop: 20,
                            width: "100%",
                            paddingBottom: 20
                          }}
                          placeholder="Email"
                          {...input}
                        />
                      )}
                    </Field>
                    <div>
                      <Button
                        variant="contained"
                        disabled={submitting || pristine}
                        color="primary"
                        type="submit"
                      >
                        Match
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            />
          </div>
        ) : (
          <CardContent>
            {this.state.audio}
            <Typography gutterBottom variant="headline" component="h2">
              {this.state.name}
            </Typography>
            <Typography
              gutterBottom
              // variant="sub-heading"
              style={{ color: "black" }}
            >
              {this.state.bio}
            </Typography>
          </CardContent>
        )}
      </Card>
    );
  }
}

export default withStyles(styles)(ProfileCard);
