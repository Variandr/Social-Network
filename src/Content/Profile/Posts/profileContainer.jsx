import React from 'react';
import {AddPostAC, UpdatePostMsgAC} from "../../../state/profile-reducer";
import Posts from "./posts";

const ProfileContainer = (p) => {
    let state = p.store.getState().profilePage;
    let AddPost = () => {
        p.store.dispatch(AddPostAC());
    }
    let UpdatePost = (action) => {
        p.store.dispatch(UpdatePostMsgAC(action));
    }
    return <Posts pushPost={AddPost} onPostUpdate={UpdatePost} profilePage={state} img={p.img}/>
}

export default ProfileContainer;