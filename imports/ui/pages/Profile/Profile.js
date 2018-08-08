import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import UploadForm from "../../components/uploadForm"; 
import {Singles} from "../../../api/singles"



const Profile = (props) => {
const { classes } = props;
const owner= Meteor.userId();
let single = Singles.find({_id:owner}).fetch()
console.log(single[0])
// function singleData (single){
//   let nameBio=[]
//   nameBio.push(single[0]["name"])

//   return nameBio
// }
  return (
    <div>
      <p>BAMBABMABMAMMBA</p>
      <ProfileCard name={single[0] && single[0].name} bio={single[0] && single[0].bio}/>
      <UploadForm />
    </div>
  );
};

export default Profile;
