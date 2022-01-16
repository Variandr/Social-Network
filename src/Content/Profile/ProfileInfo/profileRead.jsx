import React from "react";

const ProfileRead = ({profile}) => {
    return <div>
        <b>aboutMe</b>: {profile.aboutMe}
        {profile.lookingForAJob ? <div><b>Information about job</b>: {profile.lookingForAJobDescription}</div> : ''}
        {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        {contactValue ? <div><b>{contactTitle}</b>: {contactValue}</div> : ''}
    </div>
}

export default ProfileRead;