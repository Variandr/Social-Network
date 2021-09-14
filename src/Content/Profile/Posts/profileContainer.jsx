import React from 'react';
import {AddPostAC, UpdatePostMsgAC} from "../../../state/profile-reducer";
import Posts from "./posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        postMsg: state.profilePage.postMsg
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onPostUpdate: (action) => {
            dispatch(UpdatePostMsgAC(action));
        },
        pushPost: () => {
            dispatch(AddPostAC());
        }
    }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default ProfileContainer;