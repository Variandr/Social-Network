import React from 'react';
import ProfileInfo from "./ProfileInfo/profileInfo";

const Profile = ({profile, status, updateStatus}) => {
    return (
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
    )
}
export default Profile;