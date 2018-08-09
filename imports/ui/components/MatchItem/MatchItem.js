import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Gravatar from "react-gravatar";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";
import { Typography } from "../../../../node_modules/@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  matchItem: {
    borderBottom: "1px solid #9E9E9E"
  },
  avatar: {
    borderRadius: "50px"
  }
});

const MatchItem = ({ singles, classes }) => {
  return singles.map(single => (
    <ListItem button className={classes.matchItem}>
      <ListItemIcon>
        <CardHeader
          avatar={
            <Gravatar
              className={classes.avatar}
              email="mathews.kyle@gmail.com"
            />
          }
          title={` ${single.name}`}
          subheader={`You matched on ${new Date().toDateString()}`}
        />
      </ListItemIcon>
      <Typography component="h3">{` ${single.email}`}</Typography>
    </ListItem>
  ));
};

export default withStyles(styles)(MatchItem);
