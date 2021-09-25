import React from 'react';
import ProfileInfo from "./ProfileInfo/profileInfo";

const Profile = (props) => {
    return (
        <ProfileInfo profile={props.profile}/>
    )
}
export default Profile;