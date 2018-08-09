import Sound from "react-sound";
import React from "react";
import { Audio } from "../../../../imports/api/files";
import ReactAudioPlayer from "react-audio-player";
import uploadForm from "../uploadForm";
class SinglesQueueCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props
    };
  }
  render() {
    const targetUser = this.state.userId.userId;
    let audiosObject = Audio.collection._collection._docs;
    let arrayOfObj = Object.values(audiosObject._map);
    let userAudioObj = arrayOfObj.filter(audio => audio.userId === targetUser);
    console.log("target user is", targetUser);
    console.log("user song is", userAudioObj);
    console.log("array of obj", arrayOfObj);
    let userAudioUrl = userAudioObj.map(
      audio =>
        `http://localhost:3000/cdn/storage/audio/${audio._id}/original/${
          audio._id
        }.mp3`
    );

    console.log("OBJ", userAudioUrl);

    // -------------------?

    // let audiosObject = Audio.collection._collection._docs
    // let arrayOfObj = Object.values(audiosObject._map)
    // let audioUrls = arrayOfObj.map(audio => `http://localhost:3000/cdn/storage/audio/${audio._id}/original/${audio._id}.mp3`)
    // console.log("dasdva", Audio)
    // console.log("MyURLS", (audioUrls))
    // console.log("MyURLS1", audioUrls[2])
    // {console.log('Baam',ReactAudioPlayer)}
    return (
      <div className>
        <ReactAudioPlayer
          src={userAudioUrl[0]} //we put zero in case there are more than one records
          controls
          onPlay={e => console.log(e, "onPlay")}
          loop={true}
          volume={1.0}
        />
      </div>
    );
  }
}

export default SinglesQueueCard;
