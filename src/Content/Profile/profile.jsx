import React from 'react';
import s from './profile.module.css';
import ProfileContainer from "./Posts/profileContainer";

const Profile = (props) => {
    let ava = 'https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80';
    let bg = 'https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg';
    return (
        <div className={s.profile}>
            <img alt="bg" className={s.wp} src={bg}/>
            <p className={s.description}>Hi, i am newbei here :)</p>
            <img alt="ava" className={s.ava} src={ava}/>
            <ProfileContainer />
        </div>
    )
}
export default Profile;