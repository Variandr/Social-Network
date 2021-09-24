import {
    AddUsersAC,
    FollowAC,
    SetCurrentPageAC,
    SetTotalUsersAC,
    ToggleFetchingAC,
    UnfollowAC
} from "../../state/users-reducer";
import Users from "./users";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Preloader from "../../components/preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false);
                this.props.getUsers(response.data.items);
                this.props.setUsers(response.data.totalCount);
            });
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false);
                this.props.getUsers(response.data.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                onFollow={this.props.onFollow}
                onUnfollow={this.props.onUnfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setUsers: (usersCount) => {
            dispatch(SetTotalUsersAC(usersCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setToggleFetching: (isFetching) => {
            dispatch(ToggleFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);