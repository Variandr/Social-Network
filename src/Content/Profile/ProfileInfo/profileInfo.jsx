import React from 'react';
import s from './profileInfo.module.css';
import PostContainer from './Posts/postContainer';
import avatar from '../../../assets/avatar.jpg';
import Preloader from '../../../components/preloader';
import yes from '../../../assets/checkmark-yes.png';
import no from '../../../assets/checkmark-no.png';
import facebook from '../../../assets/fb.png';
import vk from '../../../assets/vk.png';
import twitter from '../../../assets/twit.png';
import instagram from '../../../assets/inst.png';
import git from '../../../assets/git.png';
import youtube from '../../../assets/yt.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <p className={s.description}>{props.profile.aboutMe}</p>
            <img alt="ava" className={s.ava}
                 src={props.profile.photos.large != null ? props.profile.photos.large : avatar}/>
            <div>
                Looking for a job: <img alt="checkmark" className={s.mark}
                                        src={props.profile.lookingForAJob ? yes : no}/>
            </div>
            <div className={s.contacts}>
                <ul className={s.socialicons1}>
                    <li><a href={"https://" + props.profile.contacts.facebook} target="_blank"><img src={facebook}/></a></li>
                    <li><a href={"https://" + props.profile.contacts.vk} target="_blank"><img src={vk}/></a></li>
                    <li><a href={"https://" + props.profile.contacts.twitter} target="_blank"><img src={twitter}/></a></li>
                    <li><a href={"https://" + props.profile.contacts.instagram} target="_blank"><img src={instagram}/></a></li>
                    <li><a href={"https://" + props.profile.contacts.github} target="_blank"><img src={git}/></a></li>
                    <li><a href={"https://" + props.profile.contacts.youtube} target="_blank"><img src={youtube}/></a></li>
                </ul>
            </div>
            <PostContainer/>
        </div>
    )
}
export default ProfileInfo;