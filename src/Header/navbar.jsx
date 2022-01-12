import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";
import {AiFillHome, FaUserAlt, FaUserFriends} from "react-icons/all";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <span>
                <NavLink to='/home' className={s.button}><AiFillHome/></NavLink>
            </span>
            <span>
                <NavLink to='/profile' className={s.button}><FaUserAlt/></NavLink>
            </span>
            <span>
                <NavLink to='/users' className={s.button}><FaUserFriends/></NavLink>
            </span>
        </div>
    )
}
export default Navbar;