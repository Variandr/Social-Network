import {
    AddUsers, SetCurrentPage, SetTotalUsers,
    getUsers, follow, unfollow
} from "../../state/users-reducer";
import Users from "./users";
import {connect} from "react-redux";
import React from "react";
import Preloader from "../../helpers/preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getFetchingSelector, getFollowingProgressSelector,
    getPageSelector,
    getTotalUsersSizeSelector,
    getUsersSelector,
    getUsersSizeOnPageSelector
} from "../../selectors/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
    }

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.usersOnPage);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                totalUsers={this.props.totalUsers}
                usersOnPage={this.props.usersOnPage}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
                followingProgress={this.props.followingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        totalUsers: getTotalUsersSizeSelector(state),
        usersOnPage: getUsersSizeOnPageSelector(state),
        currentPage: getPageSelector(state),
        isFetching: getFetchingSelector(state),
        followingProgress: getFollowingProgressSelector(state)
    }
}
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {AddUsers, SetTotalUsers, SetCurrentPage, getUsers, followThunk: follow, unfollowThunk: unfollow})
    )(UsersContainer);