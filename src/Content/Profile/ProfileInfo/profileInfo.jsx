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

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <div>{props.profile.fullName}</div>
            <p className={s.description}><ProfileStatus updateStatus={props.updateStatus} status={props.status}/></p>
            <img alt="ava" className={s.ava}
                 src={props.profile.data.photos.large != null ? props.profile.data.photos.large : avatar}/>
            <div>
                Looking for a job: <img alt="checkmark" className={s.mark}
                                        src={props.profile.data.lookingForAJob ? yes : no}/>
            </div>
            <div className={s.contacts}>
                <ul className={s.socialicons1}>
                    <li><a href={"https://" + props.profile.data.contacts.facebook} rel="noreferrer" target="_blank"><img
                        alt="social-media" src={facebook}/></a></li>
                    <li><a href={"https://" + props.profile.data.contacts.vk} rel="noreferrer" target="_blank"><img
                        alt="social-media" src={vk}/></a></li>
                    <li><a href={"https://" + props.profile.data.contacts.twitter} rel="noreferrer" target="_blank"><img
                        alt="social-media" src={twitter}/></a></li>
                    <li><a href={"https://" + props.profile.data.contacts.instagram} rel="noreferrer" target="_blank"><img
                        alt="social-media" src={instagram}/></a></li>
                    <li><a href={"https://" + props.profile.data.contacts.github} rel="noreferrer" target="_blank"><img
                        alt="social-media" src={git}/></a></li>
                    <li><a href={"https://" + props.profile.data.contacts.youtube} rel="noreferrer" target="_blank"><img
                        alt="social-media" src={youtube}/></a></li>
                </ul>
            </div>
        </div>
    )
}
export default ProfileInfo;