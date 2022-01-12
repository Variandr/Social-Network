import React from 'react';
import s from './header.module.css';
import {NavLink} from 'react-router-dom';
import Navbar from "./navbar";

const Header = React.memo((props) => {
    return (
        <div className={s.head}>
            <Navbar/>
            <span className={s.log}>
                {props.isAuth
                    ? <div>
                        <button className={s.logout} onClick={props.LogOut}>Log Out</button>
                        {props.login}
                    </div>
                    : <NavLink className={s.login} to='/auth'>SignIn</NavLink>}
            </span>
        </div>
    )
})
export default Header;