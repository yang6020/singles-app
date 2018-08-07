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
    maxWidth: 700,
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto',
    marginTop: '30px'
  },
  matchItem: {
    border: '2px solid yellow',
  }
  
});

function MatchPage(props) {
  const { classes } = props;
  const matchesTotal = Matches.find().fetch();
  const owner = Meteor.userId();

  function filteredMatches(matchesTotal, owner) {
    return matchesTotal.filter(match => {
      return match.userId1 === owner || match.userId2 === owner;
    });
  }

  function Match(matchesTotal, owner) {
    const yourMatches = filteredMatches(matchesTotal, owner);
    const matchResult = [];
    const userSwipes = [];
    yourMatches.map(match => {
      if (match.userId1 == owner) {
        userSwipes.push(match.userId2);
      }
    });
    yourMatches.map(match => {
      if (match.userId2 == owner && userSwipes.includes(match.userId1))
        matchResult.push(match);
    });

    // for (let i = 0; i <= yourMatches.length; i++) {
    //   if (yourMatches[i].userId1 === owner) {
    //     if (yourMatches[i].find(swipedBack(yourMatches[i].userId2)) !== -1) {
    //       matchResult.push(yourMatches[i]);
    //     }
    //   }
    // }

    return matchResult;
  }

  return (
    <div className={classes.root}>
      <List component="nav" className={classes.list}>
        <MatchItem matches={Match(matchesTotal, owner)} className={classes.matchItem}/>
      </List>
      <Form
        className={classes.form}
        onSubmit={(values, form) => {
          Meteor.call("matches.addMatch", {
            userId1: values.userId1,
            userId2: values.userId2
          });
          // console.log(matchesTotal);
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
                    placeholder="User"
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
                    placeholder="Swiped on"
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
