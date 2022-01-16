import React from 'react';
import {connect} from "react-redux";
import Profile from "./profile";
import {getProfile, getStatus, updatePhoto, updateProfile, updateStatus} from "../../state/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getIdSelector, getProfileSelector, getStatusSelector} from "../../selectors/profileSelectors";


class ProfileContainer extends React.Component {
    loadProfile() {
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

    componentDidMount() {
        this.loadProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.loadProfile()
        }
    }

    render() {
        return <>
            <Profile profile={this.props.profile}
                     isOwner={!this.props.match.params.userId}
                     updateStatus={this.props.updateStatus}
                     updatePhoto={this.props.updatePhoto}
                     updateProfile={this.props.updateProfile}
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
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, updatePhoto, updateProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
