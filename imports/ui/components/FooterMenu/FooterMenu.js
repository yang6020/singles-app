import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import Queue_musicIcon from "@material-ui/icons/Queuemusic";
import SmsIcon from "@material-ui/icons/Sms";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import styles from "./styles";
import Power_settings_new from "@material-ui/icons/Powersettingsnew";
import PersonIcon from "@material-ui/icons/Person";

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <Link to="/login">
          <Power_settings_new
            className={classes.icon}
            style={{ fontSize: 100 }}
            color={"primary"}
          />
        </Link>
        <Link to="/singles">
          <Queue_musicIcon
            className={classes.icon}
            style={{ fontSize: 100 }}
            color={"primary"}
          />
        </Link>
        <Link to="matches">
          <SmsIcon
            className={classes.icon}
            style={{ fontSize: 100 }}
            color={"secondary"}
          />
        </Link>
        <Link to="/profile">
          <PersonIcon
            className={classes.icon}
            style={{ fontSize: 100 }}
            color={"primary"}
          />
        </Link>
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
