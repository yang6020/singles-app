import AudioPlayer from "react-h5-audio-player";
import React from "react"

const SinglesQueueCard = () => (
  <AudioPlayer
    autoPlay
    src="../../../../Test.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

export default SinglesQueueCard;