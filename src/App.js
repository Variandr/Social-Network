import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import ProfileContainer from "./Content/Profile/profileContainer";
import AuthContainer from "./Header/headerContainer";
import Login from "./Content/Login/login";
import {connect} from "react-redux";
import {initializeApp} from "./state/app-reducer";
import Preloader from "./helpers/preloader";
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";

const Home = React.lazy(() => import( './Content/Home/home'));
const UsersContainer = React.lazy(() => import('./Content/Users/usersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div>
                <AuthContainer/>
                <div className='content'>
                    <Route path='/home' render={withSuspense(Home)}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={withSuspense(UsersContainer)}/>
                    <Route path='/auth' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter, connect(mapStateToProps, {initializeApp}))(App);
