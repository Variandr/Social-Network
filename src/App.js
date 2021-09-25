import React from 'react';
import './App.css';
import Header from "./Header/header";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Content/Home/home";
import DialogsContainer from "./Content/Dialogs/dialogsContainer";
import UsersContainer from "./Content/Users/usersContainer";
import ProfileContainer from "./Content/Profile/profileContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header className='head'/>
                <div>
                    <Route path='/home' render={() => <Home />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/messages' render={() => <DialogsContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
