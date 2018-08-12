import React, { Children } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import MatchItem from "../../components/MatchItem/MatchItem";
import { Matches } from "../../../api/matches";
import { Form, Field } from "react-final-form";
import { TextField, Button } from "@material-ui/core";
import { Singles } from "../../../api/singles";

import styles from "./style";

function MatchPage(props) {
  const { classes } = props;
  const matchesTotal = Matches.find().fetch();
  const owner = Meteor.userId();
  const singlesTotal = Singles.find().fetch();

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
    return matchResult;
  }
  function MatchedUser(matchResult, singles) {
    const result = [];
    singles.map(single => {
      matchResult.map(match => {
        if (match.userId1 === single._id) {
          result.push(single);
        }
      });
    });
    return result;
  }

  return (
    <div>
      <div className={classes.root}>
        <List component="nav">
          <MatchItem
            singles={MatchedUser(Match(matchesTotal, owner), singlesTotal)}
          />
        </List>
      </div>
    </div>
  );
}

export default withStyles(styles)(MatchPage);
