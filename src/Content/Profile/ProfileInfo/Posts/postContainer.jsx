import {AddPost, UpdatePostMsg} from "../../../../state/profile-reducer";
import Posts from "./posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        postMsg: state.profilePage.postMsg,
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {UpdatePostMsg, AddPost})(Posts);