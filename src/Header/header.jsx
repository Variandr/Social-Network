import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    debugger
    return (
        <header>
            <span>
                <NavLink to='/home' className={s.button}>Home</NavLink>
            </span>
            <span>
                <NavLink to='/profile' className={s.button}>Profile</NavLink>
            </span>
            <span>
                <NavLink to='/messages' className={s.button}>Dialogs</NavLink>
            </span>
            <span>
                <NavLink to='/users' className={s.button}>Add Friends</NavLink>
            </span>
            <div className={s.log}>
                {props.isAuth ? props.login : <NavLink to='/auth' className={s.auth}>SignIn</NavLink>}
            </div>
        </header>
    )
}
export default Header;