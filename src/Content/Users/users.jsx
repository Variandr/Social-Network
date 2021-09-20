import React from "react";
import s from "./users.module.css"

const Users = (p) => {
    if (p.users.length === 0) {
        p.getUsers([
            {
                id: 1,
                follow: true,
                fullName: 'Mavchenko Saxim',
                post: 'Looking for a job',
                country: 'Ukraine',
                photoUrl: 'https://www.zdnet.com/a/hub/i/r/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/thumbnail/1200x900/fd91ab018a59e4a7b57ea05727a31880/istock-1147195672-11.jpg'
            },
            {
                id: 2,
                follow: false,
                fullName: 'Daremko Yaniil',
                post: 'Learning ReactJS',
                country: 'USA',
                photoUrl: 'https://www.zdnet.com/a/hub/i/r/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/thumbnail/1200x900/fd91ab018a59e4a7b57ea05727a31880/istock-1147195672-11.jpg'
            },
            {
                id: 3,
                follow: true,
                fullName: 'Chirill Kymachenko',
                post: 'Wana have some friends',
                country: 'UK',
                photoUrl: 'https://www.zdnet.com/a/hub/i/r/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/thumbnail/1200x900/fd91ab018a59e4a7b57ea05727a31880/istock-1147195672-11.jpg'
            },
            {
                id: 4,
                follow: false,
                fullName: 'Dandryi Vashuka',
                post: 'I`m sexy, i know :)',
                country: 'Ukraine',
                photoUrl: 'https://www.zdnet.com/a/hub/i/r/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/thumbnail/1200x900/fd91ab018a59e4a7b57ea05727a31880/istock-1147195672-11.jpg'
            }
        ]);
    }
    return <div>
        {
            p.users.map(props => <div key={props.id}>
                <span>
                    <div className={s.text}>
                <img alt="ava" className={s.ava} src={props.photoUrl}/>
                        <div>{props.fullName}  </div>
                        <div>{props.post}  </div>
                       <div> {props.country}  </div>
                </div>
                <div>
                    {props.follow
                        ? <button onClick={() => {
                            p.onUnfollow(props.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            p.onFollow(props.id)
                        }}>Follow</button>}
                </div>
            </span>
            </div>)
        }
    </div>
}
export default Users;