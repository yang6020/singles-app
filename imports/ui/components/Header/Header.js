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
import WhatshotIcon from '@material-ui/icons/Whatshot';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import SvgIcon from '@material-ui/core/SvgIcon';


const styles = {
  barContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.barContainer}>

          <Link to="/profile">
            <PersonIcon className={classes.icon} style={{ fontSize: 50 }} color={'actionmeteor'} />
          </Link>

          <Link to="/singles">
            <WhatshotIcon className={classes.icon}  style={{ fontSize: 50 }} color={'secondary'}
            />
          </Link>

          <Link to="/matches">
            <GroupIcon className={classes.icon} style={{ fontSize: 50 }} />
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