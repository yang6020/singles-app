import React, { Children } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import MatchItem from "../../components/MatchItem/MatchItem";
import { Matches } from "../../../api/matches";

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
    return Matches.find({});
  }
  return (
    <div className={classes.root}>
      <List component="nav">
        <MatchItem matches={matches()} />
      </List>
    </div>
  );
}

MatchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MatchPage);
