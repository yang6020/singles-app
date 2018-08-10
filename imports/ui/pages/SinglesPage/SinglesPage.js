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
    backgroundColor: "green"
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
    <div style={{ height: 500 }}>
      {SinglesData.map(single => {
        stackedCards.push(single);
      })}
      ,
      {stackedCards.map(
        card => (
          console.log("card value is ", card),
          (
            <div style={{ position: "absolute" }}>
              <ProfileCard
                name={card.name}
                bio={card.bio}
                audio={<SinglesQueueCard userId={card._id} />}
                email={card.email}
                isProfile={false}
              />
              <Button
                variant="fab"
                color="primary"
                className={classes.button}
                onClick={() => clickedLeft(stackedCards, card)}
              >
                <ClearIcon />
              </Button>
              <Button
                variant="fab"
                color="secondary"
                className={classes.button}
                onClick={() => clickedRight(stackedCards, card)}
              >
                <FavoriteIcon />
              </Button>
            </div>
          )
        )
      )}
    </div>
  );
}

export default withStyles(styles)(SinglesPage);
