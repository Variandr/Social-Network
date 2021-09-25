import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
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
        </header>
    )
}
export default Header;