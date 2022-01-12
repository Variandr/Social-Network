import React from 'react';
import s from './profileInfo.module.css';
import avatar from '../../../assets/avatar.jpg';
import Preloader from '../../../helpers/preloader';
import yes from '../../../assets/checkmark-yes.png';
import no from '../../../assets/checkmark-no.png';
import facebook from '../../../assets/fb.png';
import vk from '../../../assets/vk.png';
import twitter from '../../../assets/twit.png';
import instagram from '../../../assets/inst.png';
import git from '../../../assets/git.png';
import youtube from '../../../assets/yt.png';
import ProfileStatus from "./profileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    let contacts = profile.data.contacts;
    return (
        <div className={s.profile}>
            <div>{profile.fullName}</div>
            <p className={s.description}><ProfileStatus updateStatus={updateStatus} status={status}/></p>
            <img alt="ava" className={s.ava}
                 src={profile.data.photos.large != null ? profile.data.photos.large : avatar}/>
            <div>
                Looking for a job: <img alt="checkmark" className={s.mark}
                                        src={profile.data.lookingForAJob ? yes : no}/>
            </div>
            <div className={s.contacts}>
                <ul className={s.socialicons1}>
                    {contacts.facebook ? <li><a href={"https://" + contacts.facebook} rel="noreferrer" target="_blank"><img alt="social-media" src={facebook}/></a></li> : ""}
                    {contacts.vk ? <li><a href={"https://" + contacts.vk} rel="noreferrer" target="_blank"><img alt="social-media" src={vk}/></a></li> : ""}
                    {contacts.twitter ? <li><a href={"https://" + contacts.twitter} rel="noreferrer" target="_blank"><img alt="social-media" src={twitter}/></a></li> : ""}
                    {contacts.instagram ? <li><a href={"https://" + contacts.instagram} rel="noreferrer" target="_blank"><img alt="social-media" src={instagram}/></a></li> : ""}
                    {contacts.github ? <li><a href={"https://" + contacts.github} rel="noreferrer" target="_blank"><img alt="social-media" src={git}/></a></li> : ""}
                    {contacts.youtube ? <li><a href={"https://" + contacts.youtube} rel="noreferrer" target="_blank"><img alt="social-media" src={youtube}/></a></li> : ""}
                </ul>
            </div>
        </div>
    )
}
export default ProfileInfo;