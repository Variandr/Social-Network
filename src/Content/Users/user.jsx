import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import avatar from '../../assets/avatar.jpg'
import React from "react";

const User = ({u}) => {
    return <div className={s.text}>
        <NavLink to={'/profile/' + u.id}>
            <img alt="ava" className={s.ava} src={u.photos.small != null ? u.photos.small : avatar}/>
        </NavLink>
        <div>{u.name}</div>
        <div>{u.status}</div>
    </div>
}
export default User;