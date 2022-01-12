import {
    AddUsers, SetPage, SetTotalUsers,
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
        this.props.getUsers(this.props.page, this.props.usersOnPage);
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
                page={this.props.page}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
    connect(mapStateToProps, {AddUsers, SetTotalUsers, SetPage, getUsers, follow, unfollow}))(UsersContainer);