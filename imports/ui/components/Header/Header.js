import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import MicIcon from '@material-ui/icons/Mic';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import SvgIcon from '@material-ui/core/SvgIcon';
import SmsIcon from '@material-ui/icons/Sms';


const styles = {
  barContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor:'#4caf50'
  },
  // icon:{
  //   color:'yellow'
  // }

};

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
    <div >
      <AppBar className={classes.root} position="static">
        <Toolbar className={classes.barContainer}>

          <Link to="/profile">
            <PersonIcon className={classes.icon} style={{ fontSize: 50 }} color={'action'} />
          </Link>

          <Link to="/singles">
            <MicIcon className={classes.icon}  style={{ fontSize: 50 }}
             color={'primary'}
            />
          </Link>

          <Link to="/matches">
            <SmsIcon className={classes.icon} style={{ fontSize: 50}} color={'secondary'} />
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);