import React from "react";
import s from './users.module.css';

const FollowingButton = (followed, userId, followingProgress, follow, unfollow) => {
    return <div>
        {followed
            ? <button className={s.button} disabled={followingProgress.some(id => id === userId)}
                      onClick={() => {
                          unfollow(userId)
                      }}>Unfollow</button>
            : <button className={s.button} disabled={followingProgress.some(id => id === userId)}
                      onClick={() => {
                          follow(userId)
                      }}>Follow</button>}
    </div>
}
export default FollowingButton;