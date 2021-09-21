import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div>
                <NavLink to='/home' className={s.button} activeClassName={s.active}>Home</NavLink>
            </div>
            <div>
                <NavLink to='/profile' className={s.button} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/messages' className={s.button} activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={s.button} activeClassName={s.active}>Add Friends</NavLink>
            </div>
        </header>
    )
}
export default Header;