import React from 'react';
import ProfileInfo from "./ProfileInfo/profileInfo";

const Profile = ({isOwner, profile, status, updateStatus, updatePhoto}) => {
    return (
        <ProfileInfo updatePhoto={updatePhoto}
                     profile={profile}
                     status={status}
                     isOwner={isOwner}
                     updateStatus={updateStatus}/>
    )
}
export default Profile;