import React from 'react';
import ProfileInfo from "./ProfileInfo/profileInfo";

const Profile = ({isOwner, profile, status, updateStatus, updatePhoto, updateProfile}) => {
    return (
        <ProfileInfo updatePhoto={updatePhoto}
                     profile={profile}
                     status={status}
                     isOwner={isOwner}
                     updateProfile={updateProfile}
                     updateStatus={updateStatus}/>
    )
}
export default Profile;