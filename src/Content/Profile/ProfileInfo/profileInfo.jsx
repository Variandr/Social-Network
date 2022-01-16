import React, {useState} from 'react';
import s from './profileInfo.module.css';
import avatar from '../../../assets/avatar.jpg';
import Preloader from '../../../helpers/preloader';
import ProfileStatus from "./profileStatus";
import ProfileRead from "./profileRead";
import ReduxProfileForm from "./profileForm";

const ProfileInfo = ({isOwner, profile, status, updateStatus, updatePhoto, updateProfile}) => {
    let [editMode, setEditMode] = useState(false);
    const doEdit = () => setEditMode(true)
    const onSubmit = (formData) => {
        updateProfile(formData).then(() => setEditMode(false))
    }
    if (!profile) {
        return <Preloader/>
    }
    const onImageSet = (e) => {
        if (e.target.files.length) {
            updatePhoto(e.target.files[0])
        }
    }
    return (
        <div className={editMode ? s.editProfile : s.profile}>
            <div>{profile.fullName}</div>
            <span className={s.description}><ProfileStatus updateStatus={updateStatus} status={status}/></span>
            <img alt="ava" className={s.ava} src={profile.photos.large || avatar}/>
            {isOwner && <input type='file' onChange={onImageSet}/>}
            {isOwner && !editMode && <button className={s.button} onClick={doEdit}>Edit</button>}
            <div className={s.profileData}>
                {editMode ? <ReduxProfileForm onSubmit={onSubmit} initialValues={profile} profile={profile}
                                              updateProfile={updateProfile}/> : <ProfileRead profile={profile}/>}
            </div>
        </div>
    )
}
export default ProfileInfo;