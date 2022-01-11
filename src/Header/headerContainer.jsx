import React from "react";
import {connect} from "react-redux";
import {AuthMe, LogOut} from "../state/auth-reducer";
import Header from "./header";

class HeaderContainer extends React.Component {
    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.loginPage.login,
        isAuth: state.loginPage.isAuth
    }
}
export default connect(mapStateToProps, {AuthMe, LogOut})(HeaderContainer);