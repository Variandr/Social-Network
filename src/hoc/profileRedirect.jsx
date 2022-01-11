import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuth: state.loginPage.isAuth
});
export const ProfileRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) return <Redirect to='/profile'/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}