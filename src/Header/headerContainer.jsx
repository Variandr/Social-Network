import React from "react";
import {connect} from "react-redux";
import {AuthMe, LogOut} from "../state/auth-reducer";
import Header from "./header";
import {getAuthInfo, getLogin} from "../selectors/headerSelectors";

const HeaderContainer = (props) => {
    return <>
        <Header {...props}/>
    </>
}

let mapStateToProps = (state) => {
    return {
        login: getLogin(state),
        isAuth: getAuthInfo(state)
    }
}
export default connect(mapStateToProps, {AuthMe, LogOut})(HeaderContainer);