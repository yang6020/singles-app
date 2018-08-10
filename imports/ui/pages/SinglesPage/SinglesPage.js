import React from "react";
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";
import { Singles } from "../../../api/singles";
import { withStyles } from "@material-ui/core/styles";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearIcon from "@material-ui/icons/Clear";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "green",
    margin: "0 auto"
  }
});

function SinglesPage(props) {
  const { classes } = props;
  const owner = Meteor.userId();
  const SinglesData = Singles.find({ _id: { $ne: owner } }).fetch();
  let stackedCards = [];
  function clickedLeft(stackedCards, card) {
    stackedCards.pop();
    console.log(card);
  }
  function clickedRight(stackedCards, cardItem) {
    console.log(stackedCards);
    stackedCards = stackedCards.filter(card => card !== cardItem);
    console.log(stackedCards);
  }

  return (
    <div className={classes.root}>
      <Grid>
        {SinglesData.map(single => (
          <ProfileCard
            name={single.name}
            bio={single.bio}
            audio={<SinglesQueueCard userId={single._id} />}
            email={single.email}
            isProfile={false}
          />
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SinglesPage);
