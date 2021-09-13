import React from 'react';
import './App.css';
import Header from "./Header/header";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Content/Profile/profile";
import Dialogs from "./Content/Dialogs/dialogs";
import Home from "./Content/Home/home";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header className='head'/>
                <div>
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/profile' render={() => <Profile
                        state={props.state.profilePage}
                        store={props.store}
                    />}/>
                    <Route path='/messages' render={() => <Dialogs
                        state={props.state.dialogsPage}
                        store={props.store}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
