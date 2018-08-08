import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Gravatar from 'react-gravatar';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  matchItem:{
    borderBottom: '1px solid #9E9E9E',
  },
  avatar: {
    borderRadius: '50px'
  },
});

const MatchItem = ({ matches, classes }) => {
  return matches.map(match => (
    <ListItem button className={classes.matchItem} >
      <ListItemIcon >
        <CardHeader
          avatar={
            <Gravatar className={classes.avatar} email="mathews.kyle@gmail.com" />
          }
          title="Name"
          subheader="match since August 8,2018"
        />
      </ListItemIcon>
      <ListItemText inset primary={` ${match.userId1}!`} />
    </ListItem>
  ));
};

MatchItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MatchItem);
