import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Content/Home/home";
import UsersContainer from "./Content/Users/usersContainer";
import ProfileContainer from "./Content/Profile/profileContainer";
import AuthContainer from "./Header/Authorization/authContainer";
import Navbar from "./Navbar/navbar";
import Login from "./Content/Login/login";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app'>
                <AuthContainer className='head'/>
                <Navbar className='nav'/>
                <div className='content'>
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/auth' render={() => <Login />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
