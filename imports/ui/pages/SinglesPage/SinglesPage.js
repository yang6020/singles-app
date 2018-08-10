import Cards, { Card } from "react-swipe-deck";
import React from "react";
import { Singles } from "../../../api/singles";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearIcon from "@material-ui/icons/Clear";
import { withStyles } from "@material-ui/core";

const SinglesPage = props => {
  const { classes } = props;
  const owner = Meteor.userId();
  const SinglesData = Singles.find({ _id: { $ne: owner } }).fetch();
  function swipeRight(single, owner) {
    Meteor.call("matches.addMatch", {
      userId1: owner,
      userId2: single._id
    }),
      SinglesData.pop();
  }
  function swipeLeft(single, owner) {
    SinglesData.pop();
  }
  // className={classes.masterRoot}
  // className={classes.singlesContainer}
  return (
    <Cards onEnd={console.log("end")} style={{ width: "20000000" }}>
      {SinglesData.map((single, index) => (
        <Card
          key={index}
          onSwipeLeft={() => swipeLeft(single, owner)}
          onSwipeRight={() => swipeRight(single, owner)}
        >
          {/* className={classes.singlesCardContainer} */}
          <ProfileCard
            name={single.name}
            bio={single.bio}
            audio={<SinglesQueueCard userId={single._id} />}
            email={single.email}
            isProfile={false}
          />
          {/* className={classes.profileCardSingles} */}
          {/* <Button
            variant="fab"
            color="primary"
            onClick={this.state.onSwipeLeft}
          >
            <ClearIcon />
          </Button>
          <Button
            variant="fab"
            color="secondary"
            onClick={this.state.onSwipeRight}
          >
            <FavoriteIcon />
          </Button> */}
        </Card>
      ))}
    </Cards>
  );
};

export default SinglesPage;
// withStyles(styles)
