import React from "react";
import s from "./users.module.css"
import userAva from '../../assets/userAvatar.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {
    // let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }
    return <div>
        <div className={s.counter}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selected}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}> {p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.text}>
                    <NavLink to={'/profile/' + u.id}>
                        <img alt="ava" className={s.ava}
                             src={u.photos.small != null ? u.photos.small : userAva}/>
                    </NavLink>
                    <div>{u.name}  </div>
                    <div>{u.status}  </div>
                </div>
                <div>
                    {u.follow
                        ? <button disabled={props.followingProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unfollowThunk(u.id)
                                  }}>Unfollow</button>
                        : <button disabled={props.followingProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.followThunk(u.id)
                                  }}>Follow</button>}
                </div>
            </div>)
        }
    </div>
}

export default Users;