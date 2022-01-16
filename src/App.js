import React from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
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
    catchError = (promise) => {
        console.log("Error message:", promise.reason.message)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchError)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchError)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='wrapper'>
                <AuthContainer className='head'/>
                <div className='content'>
                    <Switch>
                        <Route exact path="/">{this.props.initialized ? <Redirect to="/profile" /> : <Login/>}</Route>
                        <Route path='/home' render={withSuspense(Home)}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                        <Route path='/auth' render={() => <Login/>}/>
                        <Route path='*' render={() => <div className='error'><h1>404 Page not found</h1></div>}/>
                    </Switch>
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
