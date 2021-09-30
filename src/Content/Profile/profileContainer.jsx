import React from 'react';
import {connect} from "react-redux";
import Profile from "./profile";
import {getProfile} from "../../state/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.getProfile(userId);
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}
let WithRouterProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getProfile})(WithRouterProfileContainer);
