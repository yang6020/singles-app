import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Gravatar from 'react-gravatar';


const styles = {
  card: {
    maxWidth: 345,
    marginTop: 50,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    borderRadius: '50px'
  },
  button: {
      margin: '0 auto'
  }
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <SinglesQueueCard />
        <CardHeader
            avatar={
                <Gravatar className={classes.avatar} email="mathews.kyle@gmail.com" />
            }
            title="Name"
            subheader="member since August 1, 2018"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            About
          </Typography>
          <Typography component="p">
            Here we will put the Bio
          </Typography>
        </CardContent>
        <CardActions>
          <Button  variant="contained" color="secondary" className={classes.button}>
            Match
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);