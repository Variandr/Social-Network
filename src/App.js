import React from 'react';
import './App.css';
import Header from "./Header/header";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Content/Profile/profile";
import Home from "./Content/Home/home";
import DialogsContainer from "./Content/Dialogs/dialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header className='head'/>
                <div>
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/messages' render={() => <DialogsContainer store={props.store}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
