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
import styles from "./styles";

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
          title={<div className={classes.matchName}>{single.name}</div>}
          subheader={
            <div
              className={classes.matchDate}
            >{`You matched on ${new Date().toDateString()}`}</div>
          }
        />
      </ListItemIcon>
      <Typography component="h3">
        {<span className={classes.matchEmail}>{single.email}</span>}
      </Typography>
    </ListItem>
  ));
};

export default withStyles(styles)(MatchItem);
