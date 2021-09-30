import React from "react";
import {connect} from "react-redux";
import {AuthMe} from "../../state/auth-reducer";
import Header from "../header";

class AuthContainer extends React.Component {
    componentDidMount() {
        this.props.AuthMe();
    }

    render() {
        return <>
            <Header {...this.props}/>
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {AuthMe})(AuthContainer);