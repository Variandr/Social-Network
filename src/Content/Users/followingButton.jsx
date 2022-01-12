import React from "react";

const FollowingButton = (followed, userId, followingProgress, follow, unfollow) => {
    return <div>
        {followed
            ? <button disabled={followingProgress.some(id => id === userId)}
                      onClick={() => {
                          unfollow(userId)
                      }}>Unfollow</button>
            : <button disabled={followingProgress.some(id => id === userId)}
                      onClick={() => {
                          follow(userId)
                      }}>Follow</button>}
    </div>
}
export default FollowingButton;