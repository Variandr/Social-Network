import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Home from "./Content/Home/home";
import UsersContainer from "./Content/Users/usersContainer";
import ProfileContainer from "./Content/Profile/profileContainer";
import AuthContainer from "./Header/headerContainer";
import Navbar from "./Navbar/navbar";
import Login from "./Content/Login/login";
import {connect} from "react-redux";
import {initializeApp} from "./state/app-reducer";
import Preloader from "./components/preloader";
import {compose} from "redux";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app'>
                <AuthContainer className='head'/>
                <Navbar className='nav'/>
                <div className='content'>
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
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
