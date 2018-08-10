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
import styles from "./styles";

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
    const singleData = [];
    {
      if (!Singles.find({ _id: owner }).fetch()) {
        return;
      }
      let single = Singles.find({ _id: owner }).fetch();
      singleData.push(single);
    }
    const userData = singleData[0];
    const userName = userData.map(user => user.name);
    const userBio = userData.map(user => user.bio);
    const userEmail = userData.map(user => user.email);
    const userIdConst = userData.map(user => user._id);
    return (
      <Card className={classes.card}>
        {this.state.isProfile ? (
          <CardContent>
            {this.state.audio}
            <Form
              onSubmit={(values, form) => {
                Meteor.call(
                  "singles.addUpdateSingle",
                  {
                    name: values.name,
                    bio: values.bio,
                    email: values.email,
                    _id: owner
                  },
                  owner
                );
                form.reset();
                window.location.reload();
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
                        console.log("BAAAM", userName[0]),
                        (
                          <TextField
                            style={{
                              paddingTop: 20,
                              width: "100%",
                              paddingBottom: 20
                            }}
                            placeholder={
                              userName.length == 0 || userName[0] == undefined
                                ? "Name"
                                : `${userName}`
                            }
                            {...input}
                          />
                        )
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field component="input" name="bio" type="text" label="Bio">
                      {({ input, meta }) => (
                        <TextField
                          style={{ width: "100%" }}
                          placeholder={
                            userBio.length == 0 || userBio[0] == undefined
                              ? "Bio"
                              : `${userBio}`
                          }
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
                          placeholder={
                            userEmail.length == 0 || userEmail[0] == undefined
                              ? "Email"
                              : `${userEmail}`
                          }
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
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            />
          </CardContent>
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
