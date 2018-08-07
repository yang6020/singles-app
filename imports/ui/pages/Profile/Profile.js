import React from "react";
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import UploadForm from "../../components/uploadForm";
import { SSL_OP_SINGLE_DH_USE } from "constants";

// import { Blaze } from "meteor/blaze";
// import { Audio } from "../../api/files";

const Profile = () => {
  return (<div>
    <p>BAMBABMABMAMMBA</p>
    <ProfileCard audio={<UploadForm/>}/>

    
  </div>);
};



export default Profile;
