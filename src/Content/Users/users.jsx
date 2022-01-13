import React from "react";
import PageCounter from "../../helpers/pageCounter";
import User from "./user";
import FollowingButton from "./followingButton";

const Users = React.memo(({page, onPageChanged, users, follow, unfollow, followingProgress, totalUsers, usersOnPage}) => {
    return <div>
        <PageCounter page={page} onPageChanged={onPageChanged} totalUsers={totalUsers} usersOnPage={usersOnPage}/>
        {
            users.map(u => <div key={u.id}>
                <User u={u}/>
                {FollowingButton(u.followed, u.id, followingProgress, follow, unfollow)}
            </div>)
        }
    </div>
})

export default Users;