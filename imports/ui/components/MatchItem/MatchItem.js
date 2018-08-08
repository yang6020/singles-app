import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Gravatar from 'react-gravatar';

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  matchItem:{
    borderBottom: '1px solid #9E9E9E',
  },
});

const MatchItem = ({ matches, classes }) => {
  return matches.map(match => (
    <ListItem button className={classes.matchItem} >
      <ListItemIcon >
        <Gravatar email="mathews.kyle@gmail.com" />
      </ListItemIcon>
      <ListItemText inset primary={` ${match.userId1}!`} />
    </ListItem>
  ));
};

MatchItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MatchItem);
