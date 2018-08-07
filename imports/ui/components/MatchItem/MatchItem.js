import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const MatchItem = ({ matches }) => {
  return matches.map(match => (
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText inset primary={`You matched with ${match.userId1}!`} />
    </ListItem>
  ));
};

MatchItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MatchItem);
