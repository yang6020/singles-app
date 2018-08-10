import Cards, { Card } from "react-swipe-deck";
import React from "react";
import { Singles } from "../../../api/singles";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearIcon from "@material-ui/icons/Clear";

const Wrapper = props => {
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
  function swipeLeft() {}
  return (
    <Cards onEnd={console.log("end")} className="master-root">
      {SinglesData.map((single, index) => (
        <Card
          key={index}
          onSwipeLeft={console.log("swipe left")}
          onSwipeRight={() => swipeRight(single, owner)}
        >
          <ProfileCard
            name={single.name}
            bio={single.bio}
            audio={<SinglesQueueCard userId={single._id} />}
            email={single.email}
            isProfile={false}
          />
          <Button variant="fab" color="primary" onClick={() => {}}>
            <ClearIcon />
          </Button>
          <Button
            variant="fab"
            color="secondary"
            onClick={() => swipeRight(single, owner)}
          >
            <FavoriteIcon />
          </Button>
        </Card>
      ))}
    </Cards>
  );
};

export default Wrapper;
