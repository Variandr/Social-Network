import {
    AddUsers,
    Follow,
    SetCurrentPage,
    SetTotalUsers,
    ToggleFetching,
    Unfollow
} from "../../state/users-reducer";
import Users from "./users";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Preloader from "../../components/preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.ToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.ToggleFetching(false);
                this.props.AddUsers(response.data.items);
                this.props.SetTotalUsers(response.data.totalCount);
            });
    }

    onPageChanged = (pageNum) => {
        this.props.SetCurrentPage(pageNum);
        this.props.ToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.ToggleFetching(false);
                this.props.AddUsers(response.data.items);
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
                Follow={this.props.Follow}
                Unfollow={this.props.Unfollow}
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

export default connect(mapStateToProps, {
    Follow, Unfollow, AddUsers, SetTotalUsers, SetCurrentPage, ToggleFetching
})(UsersContainer);