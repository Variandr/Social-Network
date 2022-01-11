import React from "react";
import {connect} from "react-redux";
import {AuthMe, LogOut} from "../state/auth-reducer";
import Header from "./header";
import {getAuthInfo, getLogin} from "../selectors/headerSelectors";

class HeaderContainer extends React.Component {
    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        login: getLogin(state),
        isAuth: getAuthInfo(state)
    }
}
export default connect(mapStateToProps, {AuthMe, LogOut})(HeaderContainer);