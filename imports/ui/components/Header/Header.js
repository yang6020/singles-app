import React from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import Queue_musicIcon from "@material-ui/icons/Queuemusic";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import SvgIcon from "@material-ui/core/SvgIcon";
import SmsIcon from "@material-ui/icons/Sms";
import HeaderMenue from "./HeaderMenue/HeaderMenue";
import styles from "./styles";
import Account_circleIcon from "@material-ui/icons/Accountcircle";
import LoginSignup from "./../../pages/LoginSignup/LoginSignup.js";
import Power_settings_new from "@material-ui/icons/Powersettingsnew";




function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div>

      <AppBar className={classes.root} position="static">
        <Toolbar className={classes.barContainer}>
            
          <div className={classes.signIn}>
          <Link to="/login">
            <Power_settings_new
              className={classes.icon}
              style={{ fontSize: 50 }}
              color={"primary"}              
            />
           </Link>

          </div>  

          <Link to="/profile">
            <PersonIcon
              className={classes.icon}
              style={{ fontSize: 50 }}
              color={"primary"}
            />
          </Link>

          <Link to="/singles">
            <Queue_musicIcon
              className={classes.icon}
              style={{ fontSize: 50 }}
              color={"primary"}
            />
          </Link>

          <Link to="/matches">
            <SmsIcon
              className={classes.icon}
              style={{ fontSize: 50 }}
              color={"secondary"}
            />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
