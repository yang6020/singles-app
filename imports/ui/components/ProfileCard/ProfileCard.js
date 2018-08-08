import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";
import { Singles } from '../../../api/singles';
import { Tracker } from 'meteor/tracker'
import CardHeader from '@material-ui/core/CardHeader'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const ProfileCard= ({classes,name,bio}) => {
    return(
        <Card className={classes.card}>
        <CardContent>
        <Typography
            gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="sub-heading" style={{color:'black'}}>
            {bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="secondary">
            Right!
          </Button>
        </CardActions>
      </Card>
    )
}

export default withStyles(styles)(ProfileCard);