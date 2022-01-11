import React from 'react';
import {connect} from "react-redux";
import Profile from "./profile";
import {getProfile, getStatus, updateStatus} from "../../state/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getIdSelector, getProfileSelector, getStatusSelector} from "../../selectors/profileSelectors";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedId;
            if (!userId) {
                this.props.history.push('/auth')
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus}
                     status={this.props.status}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        status: getStatusSelector(state),
        authorizedId: getIdSelector(state)
    }
}
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
