import {AddUsersAC, FollowAC, UnfollowAC} from "../../state/users-reducer";
import Users from "./users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userID) => {
            dispatch(FollowAC(userID));
        },
        onUnfollow: (userID) => {
            dispatch(UnfollowAC(userID));
        },
        getUsers: (users) => {
            dispatch(AddUsersAC(users));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;